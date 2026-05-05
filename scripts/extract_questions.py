#!/usr/bin/env python3
import json
import re
import unicodedata
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "questions.js"

WORD_NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
XLSX_NS = {
    "x": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "rel": "http://schemas.openxmlformats.org/package/2006/relationships",
}
OPTION_LABELS = ["a", "b", "c", "d"]
QUESTION_START_RE = re.compile(r"^(?:\d+\s*[\.)-]\s*)?¿[^?]+\?$")
QUESTION_HIGHLIGHT_FILLS = {"db2680"}


def clean_text(text):
    text = unicodedata.normalize("NFKC", text or "")
    text = text.replace("\u00a0", " ")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def clean_question(text):
    text = clean_text(text)
    text = re.sub(r"^[❓\s]+", "", text)
    text = re.sub(r"^\d+\s*[\.)-]\s*", "", text)
    return text


def question_key(text):
    text = clean_question(text).lower()
    text = "".join(
        c for c in unicodedata.normalize("NFD", text) if unicodedata.category(c) != "Mn"
    )
    text = re.sub(r"[^\w\s]", " ", text, flags=re.UNICODE)
    return re.sub(r"\s+", " ", text).strip()


def unit_id_from_path(path):
    match = re.search(r"\bUT\s*(\d+)", path.name, re.IGNORECASE)
    if not match:
        return "extra"
    return f"ut{int(match.group(1))}"


def unit_title(unit_id):
    if unit_id == "extra":
        return "Preguntas extra"
    return f"Unidad {int(unit_id[2:])}"


def line_text(item):
    if isinstance(item, dict):
        return item.get("text", "")
    return item


def docx_paragraph_records(path):
    with zipfile.ZipFile(path) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))
    paragraphs = []
    for para in root.findall(".//w:p", WORD_NS):
        text_parts = []
        has_question_fill = False
        for run in para.findall("w:r", WORD_NS):
            text_parts.append("".join(t.text or "" for t in run.findall(".//w:t", WORD_NS)))
            run_props = run.find("w:rPr", WORD_NS)
            if run_props is not None:
                shading = run_props.find("w:shd", WORD_NS)
                if shading is not None:
                    fill = shading.attrib.get(f"{{{WORD_NS['w']}}}fill", "").lower()
                    if fill in QUESTION_HIGHLIGHT_FILLS:
                        has_question_fill = True
        text = clean_text("".join(text_parts))
        if text:
            paragraphs.append({"text": text, "pink": has_question_fill})
    return paragraphs


def docx_paragraphs(path):
    return [paragraph["text"] for paragraph in docx_paragraph_records(path)]


def split_question_blocks(paragraphs):
    prefer_highlight = any(
        isinstance(paragraph, dict) and paragraph.get("pink") for paragraph in paragraphs
    )
    starts = [
        index
        for index in range(len(paragraphs))
        if is_real_question_start(paragraphs, index, prefer_highlight)
    ]
    blocks = []
    for position, start in enumerate(starts):
        end = starts[position + 1] if position + 1 < len(starts) else len(paragraphs)
        blocks.append(paragraphs[start:end])
    return blocks


def parse_option_line(line):
    match = re.match(r"^([a-dA-D])\s*[\.)]\s*(.+)$", line)
    if not match:
        return None
    return match.group(1).lower(), clean_text(match.group(2))


def strip_option_markers(text):
    text = clean_text(text)
    text = re.sub(r"\s*[✅❌]\s*$", "", text)
    text = re.sub(r"\s*[✅❌]\s*.*$", "", text)
    return clean_text(text)


def is_bare_option_line(line):
    line = clean_text(line)
    if not line:
        return False
    if parse_option_line(line):
        return False
    if line.endswith(":"):
        return False
    if "Respuesta correcta" in line:
        return False
    if line.startswith(("🧠", "🔎", "🎯", "💡", "⚠️", "📌", "📊", "👉", "✅", "❌", "🔁", "🔵", "🔹")):
        return False
    if line.lower().startswith(
        (
            "analizamos",
            "vamos",
            "regla",
            "recordamos",
            "cuando ",
            "en la ut",
            "esto ",
            "si la pregunta",
            "normalmente",
            "se llama",
            "correcto.",
            "correcta.",
        )
    ):
        return False
    if "?" in line:
        return False
    return len(line) <= 90


def extract_initial_options(lines):
    options = []
    for item in lines:
        line = line_text(item)
        parsed = parse_option_line(line)
        if parsed:
            label, text = parsed
            options.append((label, strip_option_markers(text)))
        elif is_bare_option_line(line):
            options.append((OPTION_LABELS[len(options)], strip_option_markers(line)))
        else:
            break
        if len(options) == 4:
            return options
    return []


def is_real_question_start(paragraphs, index, prefer_highlight=False):
    current = paragraphs[index]
    raw_line = clean_text(line_text(current))
    if not raw_line:
        return False
    raw_without_icons = re.sub(r"^[❓\s]+", "", raw_line)
    line = clean_question(raw_line)
    next_lines = [line_text(item) for item in paragraphs[index + 1 : index + 8]]
    has_four_options = len(extract_initial_options(next_lines)) == 4
    has_answer_marker = bool(next_lines) and "Respuesta correcta" in next_lines[0]
    is_highlighted = isinstance(current, dict) and current.get("pink", False)
    if "Respuesta correcta" in line:
        return False
    if raw_line.startswith(("🧠", "🔎", "🎯", "💡", "⚠️", "👉", "✅", "❌", "🔁", "🔵", "🔹", "📌", "📊")):
        return False
    if line.lower().startswith(("¿qué está", "¿que esta")):
        return False
    if prefer_highlight and not is_highlighted:
        return False
    if QUESTION_START_RE.match(line):
        if re.match(r"^\d+\s*[\.)-]\s*", raw_without_icons):
            return True
        return has_four_options or has_answer_marker
    if re.match(r"^\d+\s*[\.)-]\s*.+$", raw_without_icons) and (
        "?" in raw_without_icons or raw_without_icons.rstrip().endswith(":")
    ):
        return has_four_options
    if raw_line.startswith("❓") and has_four_options:
        return True
    return False


def split_wrong_line(line):
    parsed = parse_option_line(line)
    if not parsed:
        return None
    label, rest = parsed
    for marker in ("→", " - ", " – ", ": "):
        if marker in rest:
            answer, explanation = rest.split(marker, 1)
            return label, clean_text(answer), clean_text(explanation)
    return label, rest, ""


def parse_answer_marker(line):
    match = re.search(
        r"Respuesta correcta\s*:\s*(?:([a-dA-D])\s*[\.)]\s*)?(.+)?$", line
    )
    if not match:
        return None
    label = match.group(1).lower() if match.group(1) else None
    text = clean_text(match.group(2) or "")
    return label, strip_option_markers(text)


def parse_explanation_option_header(line):
    match = re.match(r"^([a-dA-D])\s*[\.)]\s*(.+)$", line)
    if not match:
        return None
    label = match.group(1).lower()
    rest = clean_text(match.group(2))
    answer_part = rest
    explanation_part = ""
    if "→" in rest:
        answer_part, explanation_part = rest.split("→", 1)
    elif "✅" in rest or "❌" in rest:
        parts = re.split(r"[✅❌]", rest, maxsplit=1)
        answer_part = parts[0]
        explanation_part = parts[1] if len(parts) > 1 else ""
    return label, strip_option_markers(answer_part), clean_text(explanation_part)


def parse_label_only_explanation(line):
    match = re.match(r"^([a-dA-D])\s*→\s*(.+)$", clean_text(line))
    if not match:
        return None
    return match.group(1).lower(), clean_text(match.group(2))


def parse_unlabeled_explanation(line):
    cleaned = clean_text(line)
    for marker in ("→", " - ", " – ", ": "):
        if marker in cleaned:
            answer, explanation = cleaned.split(marker, 1)
            answer = strip_option_markers(answer)
            explanation = clean_text(explanation)
            if answer and explanation:
                return answer, explanation
    return None


def join_lines(lines):
    parts = []
    for line in lines:
        cleaned = clean_text(line)
        if cleaned:
            parts.append(cleaned)
    return clean_text(" ".join(parts))


def parse_docx_question(block, subject, unit_id, source_name):
    question = clean_question(block[0])
    initial_options = extract_initial_options(block[1:])

    options = {label: text for label, text in initial_options}
    explanations = {label: "" for label, _ in initial_options}
    correct_label = None
    correct_text = ""
    intro_lines = []
    correct_explanation_lines = []
    current_label = None
    implicit_wrong_labels = []
    mode = "intro"
    pending_correct_line = False
    start_index = 1 + len(initial_options)

    for line in block[start_index:]:
        if "Respuesta correcta" in line:
            parsed_marker = parse_answer_marker(line)
            if parsed_marker:
                maybe_label, maybe_text = parsed_marker
                if maybe_label:
                    correct_label = maybe_label
                if maybe_text:
                    correct_text = maybe_text
                    if correct_label:
                        options[correct_label] = maybe_text
                if not maybe_text:
                    pending_correct_line = True
            mode = "neutral"
            current_label = None
            continue

        if pending_correct_line:
            parsed = parse_option_line(line)
            if parsed:
                correct_label, correct_text = parsed
                options[correct_label] = strip_option_markers(correct_text)
                pending_correct_line = False
                continue

        lower_line = line.lower()
        if (
            "por qué es correcta" in lower_line
            or "por que es correcta" in lower_line
            or "explicación técnica" in lower_line
        ):
            mode = "correct"
            current_label = None
            continue

        if (
            "por qué las otras" in lower_line
            or "por que las otras" in lower_line
            or "analizamos cada opción" in lower_line
            or "analizamos opciones" in lower_line
            or "ahora analizamos" in lower_line
            or "vamos opción por opción" in lower_line
            or "vamos opcion por opcion" in lower_line
        ):
            if not correct_explanation_lines:
                correct_explanation_lines = intro_lines[:]
            mode = "wrong"
            current_label = None
            continue

        parsed_header = parse_explanation_option_header(line)
        if parsed_header:
            label, answer, explanation = parsed_header
            if label in options and answer:
                options[label] = answer
            elif answer:
                options[label] = answer
            if explanation:
                explanations[label] = clean_text(
                    (explanations.get(label, "") + " " + explanation).strip()
                )
            current_label = label
            mode = "wrong"
            continue

        label_only = parse_label_only_explanation(line)
        if label_only:
            label, explanation = label_only
            current_label = label
            explanations[label] = clean_text(
                (explanations.get(label, "") + " " + explanation).strip()
            )
            mode = "wrong"
            continue

        if mode == "wrong" and not current_label and initial_options:
            if not implicit_wrong_labels:
                implicit_wrong_labels = [
                    label for label in OPTION_LABELS if label in options and label != correct_label
                ]
            unlabeled = parse_unlabeled_explanation(line)
            if unlabeled and implicit_wrong_labels:
                answer_text, explanation = unlabeled
                label = implicit_wrong_labels.pop(0)
                if not options.get(label):
                    options[label] = answer_text
                explanations[label] = clean_text(
                    (explanations.get(label, "") + " " + explanation).strip()
                )
                current_label = label
                continue

        if mode == "correct":
            correct_explanation_lines.append(line)
            continue

        if mode == "wrong" and current_label:
            explanations[current_label] = clean_text(
                (explanations.get(current_label, "") + " " + line).strip()
            )
            continue

        if mode == "intro":
            intro_lines.append(line)

    if not correct_label and correct_text:
        for label, answer in options.items():
            if clean_text(answer).lower() == clean_text(correct_text).lower():
                correct_label = label
                break

    if not correct_label:
        answer_map = {text.lower(): label for label, text in options.items()}
        correct_label = answer_map.get(correct_text.lower())

    if correct_label and correct_text and not options.get(correct_label):
        options[correct_label] = correct_text

    if not correct_explanation_lines:
        correct_explanation_lines = intro_lines[:]

    if correct_label:
        if not explanations.get(correct_label):
            explanations[correct_label] = join_lines(correct_explanation_lines)
        elif correct_explanation_lines:
            explanations[correct_label] = join_lines(
                [explanations[correct_label], join_lines(correct_explanation_lines)]
            )

    ordered_labels = [label for label in OPTION_LABELS if options.get(label)]
    if len(ordered_labels) != 4 or not correct_label:
        return None

    for label in ordered_labels:
        if explanations.get(label):
            continue
        answer_text = options[label]
        if label == correct_label:
            explanations[label] = (
                join_lines(correct_explanation_lines)
                or f"{answer_text} es la respuesta correcta según el contenido técnico de la unidad."
            )
        elif answer_text.lower() == "python":
            explanations[label] = "Python es un lenguaje válido en otros contextos, pero aquí no responde al concepto concreto que se pregunta en esta unidad."
        elif answer_text.lower() == "javascript":
            explanations[label] = "JavaScript solo encajaría si la pregunta tratara sobre ejecución en el navegador o scripting web; aquí no justifica la respuesta correcta."
        else:
            explanations[label] = f"{answer_text} no encaja con la definición o el concepto técnico que pide la pregunta."

    return {
        "id": f"{subject}-{unit_id}-{question_key(question)[:60]}",
        "question": question,
        "options": [
            {
                "id": label,
                "text": options[label],
                "explanation": explanations.get(label, ""),
            }
            for label in ordered_labels
        ],
        "correctOptionId": correct_label,
        "source": source_name,
    }


def parse_docx(path, subject):
    unit_id = unit_id_from_path(path)
    questions = []
    for block in split_question_blocks(docx_paragraph_records(path)):
        parsed = parse_docx_question([line_text(item) for item in block], subject, unit_id, path.name)
        if parsed:
            questions.append((unit_id, parsed))
    return questions


def read_shared_strings(archive):
    try:
        root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
    except KeyError:
        return []
    values = []
    for item in root.findall("x:si", XLSX_NS):
        values.append(clean_text("".join(t.text or "" for t in item.findall(".//x:t", XLSX_NS))))
    return values


def workbook_sheets(archive):
    workbook = ET.fromstring(archive.read("xl/workbook.xml"))
    rels = ET.fromstring(archive.read("xl/_rels/workbook.xml.rels"))
    targets = {
        rel.attrib["Id"]: rel.attrib["Target"].lstrip("/")
        for rel in rels.findall("rel:Relationship", XLSX_NS)
    }
    sheets = []
    for sheet in workbook.findall(".//x:sheet", XLSX_NS):
        rid = sheet.attrib[f"{{{XLSX_NS['r']}}}id"]
        target = targets[rid]
        if not target.startswith("xl/"):
            target = "xl/" + target
        sheets.append((sheet.attrib["name"], target))
    return sheets


def cell_value(cell, shared_strings):
    value = cell.find("x:v", XLSX_NS)
    if value is None:
        return ""
    raw = value.text or ""
    if cell.attrib.get("t") == "s":
        return shared_strings[int(raw)]
    return clean_text(raw)


def parse_xlsx(path):
    rows_by_sheet = []
    with zipfile.ZipFile(path) as archive:
        shared_strings = read_shared_strings(archive)
        for index, (sheet_name, target) in enumerate(workbook_sheets(archive), start=1):
            root = ET.fromstring(archive.read(target))
            pairs = []
            for row in root.findall(".//x:row", XLSX_NS):
                values = {}
                for cell in row.findall("x:c", XLSX_NS):
                    col = re.match(r"([A-Z]+)", cell.attrib["r"]).group(1)
                    values[col] = cell_value(cell, shared_strings)
                question = clean_question(values.get("A", ""))
                answer = clean_text(values.get("G", ""))
                if question and answer and "?" in question:
                    pairs.append((question, answer))
            rows_by_sheet.append((f"ut{index}", pairs))
    return rows_by_sheet


EXCEL_OVERRIDES = {
    "iaw": {
        "¿Cuál es el objetivo principal de un entorno de desarrollo web?": {
            "correct": "Probar, desarrollar y mantener aplicaciones antes de su despliegue final",
            "wrong": [
                "Ejecutar código directamente en producción",
                "Mostrar interfaces gráficas al usuario final",
                "Publicar sitios web automáticamente sin revisión",
            ],
            "explanations": {
                "correct": "Un entorno de desarrollo sirve para programar, probar, depurar y ajustar una aplicación antes de publicarla en producción.",
                "wrong": [
                    "Producción es el entorno final para usuarios reales; no es donde se debe desarrollar ni probar directamente.",
                    "La interfaz la ve el usuario en el navegador, pero ese no es el objetivo de un entorno de desarrollo.",
                    "El despliegue puede apoyarse en herramientas, pero no define por sí mismo la finalidad del entorno de desarrollo.",
                ],
            },
        },
        "¿Qué herramienta NO forma parte de un paquete XAMPP?": {
            "correct": "Python",
            "wrong": ["Apache", "PHP", "MariaDB"],
            "explanations": {
                "correct": "XAMPP incluye Apache, MariaDB, PHP y Perl; Python no forma parte del paquete estándar.",
                "wrong": [
                    "Apache es el servidor web incluido en XAMPP.",
                    "PHP forma parte de XAMPP para ejecutar aplicaciones web del lado servidor.",
                    "MariaDB es el gestor de bases de datos que incorpora XAMPP.",
                ],
            },
        },
        "¿Qué elemento forma parte del lado cliente en una aplicación web?": {
            "correct": "JavaScript",
            "wrong": ["Apache", "MySQL", "PHP"],
            "explanations": {
                "correct": "JavaScript se ejecuta en el navegador del usuario y forma parte del lado cliente o front-end.",
                "wrong": [
                    "Apache es un servidor web y se ejecuta del lado servidor.",
                    "MySQL es un sistema gestor de bases de datos del lado servidor.",
                    "PHP se procesa en el servidor antes de enviar la respuesta al navegador.",
                ],
            },
        },
        "¿Qué archivo se utiliza para configurar parámetros de PHP?": {
            "correct": "php.ini",
            "wrong": ["apache2.conf", "config.php", ".htaccess"],
            "explanations": {
                "correct": "El archivo principal de configuración global de PHP es php.ini.",
                "wrong": [
                    "apache2.conf configura Apache, no los parámetros internos de PHP.",
                    "config.php puede existir en una aplicación concreta, pero no es el archivo global de configuración de PHP.",
                    ".htaccess puede ajustar algunas directivas si Apache lo permite, pero no sustituye al archivo principal de configuración de PHP.",
                ],
            },
        },
        "¿Qué tecnología actúa del lado del servidor?": {
            "correct": "PHP",
            "wrong": ["CSS", "JavaScript", "HTML"],
            "explanations": {
                "correct": "PHP se ejecuta en el servidor y genera la respuesta que luego recibe el navegador.",
                "wrong": [
                    "CSS se interpreta en el navegador para aplicar estilo visual.",
                    "En el contexto básico de la unidad, JavaScript se asocia al lado cliente porque se ejecuta en el navegador.",
                    "HTML estructura el contenido que recibe y muestra el navegador; no es una tecnología de ejecución del lado servidor.",
                ],
            },
        },
        "¿Qué significa localhost en un entorno de desarrollo?": {
            "correct": "El equipo del usuario que ejecuta el servidor local",
            "wrong": [
                "Un servidor remoto con acceso seguro",
                "Un proxy que enruta conexiones externas",
                "Un nombre de dominio reservado para producción",
            ],
            "explanations": {
                "correct": "localhost apunta al propio equipo, normalmente a 127.0.0.1, y se usa para acceder a servicios locales.",
                "wrong": [
                    "localhost no es un equipo remoto; representa tu propia máquina.",
                    "Un proxy es un intermediario de red, no el significado de localhost.",
                    "localhost se usa para pruebas locales, no como dominio de producción.",
                ],
            },
        },
        "¿Qué protocolo se utiliza en las peticiones web entre cliente y servidor?": {
            "correct": "HTTP",
            "wrong": ["FTP", "SMTP", "DNS"],
            "explanations": {
                "correct": "HTTP es el protocolo de aplicación usado por el navegador para pedir páginas y recursos al servidor web.",
                "wrong": [
                    "FTP se usa para transferir archivos, no para servir páginas web al navegador.",
                    "SMTP se usa para el envío de correo electrónico.",
                    "DNS resuelve nombres de dominio en direcciones IP, pero no transporta la página web.",
                ],
            },
        },
        "¿Qué indica el código de estado HTTP 404?": {
            "correct": "Recurso no encontrado",
            "wrong": ["Solicitud correcta", "Error interno del servidor", "Redirección permanente"],
            "explanations": {
                "correct": "El estado 404 Not Found indica que el servidor responde, pero el recurso solicitado no existe en esa ruta.",
                "wrong": [
                    "Una solicitud correcta suele corresponder a un 200 OK.",
                    "El error interno del servidor corresponde a la familia 5xx, por ejemplo 500.",
                    "Una redirección permanente se asocia a códigos como 301.",
                ],
            },
        },
        "¿Cuál de las siguientes opciones mejora la seguridad de una base de datos?": {
            "correct": "Limitar los permisos según las necesidades",
            "wrong": [
                "Permitir conexiones remotas anónimas",
                "Dar permisos globales a todos los usuarios",
                "Usar el usuario root sin contraseña",
            ],
            "explanations": {
                "correct": "Aplicar el principio de mínimo privilegio reduce el impacto de errores y accesos no autorizados.",
                "wrong": [
                    "Las conexiones anónimas remotas debilitan gravemente la seguridad del servicio.",
                    "Conceder permisos globales a todos los usuarios aumenta la superficie de daño ante un incidente.",
                    "Usar root sin contraseña es una práctica insegura y facilita accesos indebidos.",
                ],
            },
        },
        "¿Qué componente permite procesar código PHP en un servidor Apache?": {
            "correct": "libapache2-mod-php",
            "wrong": ["phpMyAdmin", "MySQL-server", "Node.js"],
            "explanations": {
                "correct": "libapache2-mod-php integra el intérprete PHP con Apache para ejecutar archivos .php.",
                "wrong": [
                    "phpMyAdmin es una aplicación web para administrar MySQL o MariaDB, no un módulo de Apache para PHP.",
                    "MySQL-server es el gestor de base de datos y no ejecuta código PHP.",
                    "Node.js ejecuta JavaScript en el servidor, pero no procesa PHP en Apache.",
                ],
            },
        },
        "¿Cuál es la principal diferencia entre Apache y Nginx?": {
            "correct": "Nginx usa un modelo asíncrono de procesamiento",
            "wrong": [
                "Apache es gratuito y Nginx es de pago",
                "Apache no permite configuración modular",
                "Nginx solo funciona en Linux",
            ],
            "explanations": {
                "correct": "Nginx se caracteriza por un modelo asíncrono y no bloqueante orientado a alta concurrencia.",
                "wrong": [
                    "Ambos tienen versiones gratuitas de uso muy extendido.",
                    "Apache sí permite una arquitectura modular con numerosos módulos.",
                    "Nginx es multiplataforma; no está limitado exclusivamente a Linux.",
                ],
            },
        },
        "¿Cuál de las siguientes herramientas se considera un editor de código?": {
            "correct": "NetBeans",
            "wrong": ["phpMyAdmin", "MySQL Workbench", "Apache Server"],
            "explanations": {
                "correct": "NetBeans es un IDE o editor de desarrollo con herramientas de programación y depuración.",
                "wrong": [
                    "phpMyAdmin se usa para administrar bases de datos desde el navegador.",
                    "MySQL Workbench es una herramienta gráfica para modelado y administración de bases de datos.",
                    "Apache Server es un servidor web, no un editor de código.",
                ],
            },
        },
        "¿Por qué es importante documentar un entorno de desarrollo?": {
            "correct": "Para garantizar la trazabilidad y facilitar mantenimiento",
            "wrong": [
                "Porque lo exige la normativa fiscal",
                "Para poder compartirlo en redes sociales",
                "Para instalar software automáticamente",
            ],
            "explanations": {
                "correct": "Documentar un entorno permite saber qué se instaló, cómo se configuró y qué cambios se hicieron, lo que facilita mantenimiento, soporte y auditoría.",
                "wrong": [
                    "La documentación técnica puede ayudar en cumplimiento normativo, pero esa no es la razón principal en esta unidad.",
                    "Compartir contenido en redes sociales no tiene relación con la finalidad técnica de documentar un entorno.",
                    "La documentación describe y registra el entorno; no instala software por sí misma.",
                ],
            },
        },
    },
    "sri": {
        "¿Qué protocolo antecede a DHCP?": {
            "correct": "BOOTP",
            "wrong": ["ARP", "DNS", "SNMP"],
            "explanations": {
                "correct": "DHCP evolucionó a partir de BOOTP, ampliando sus capacidades de configuración dinámica.",
                "wrong": [
                    "ARP resuelve direcciones IP en direcciones MAC dentro de una red local.",
                    "DNS resuelve nombres de dominio a direcciones IP.",
                    "SNMP se utiliza para monitorización y gestión de dispositivos de red.",
                ],
            },
        },
    },
}


def build_excel_override_question(subject, unit_id, question, source_name):
    override = EXCEL_OVERRIDES.get(subject, {}).get(question)
    if not override:
        return None

    option_texts = [override["correct"], *override["wrong"]]
    labels = OPTION_LABELS[:]
    correct_index = len(question_key(question)) % 4
    shuffled_texts = override["wrong"][:]
    shuffled_texts.insert(correct_index, override["correct"])
    explanation_texts = override["explanations"]["wrong"][:]
    explanation_texts.insert(correct_index, override["explanations"]["correct"])
    correct_label = labels[correct_index]
    return {
        "id": f"{subject}-{unit_id}-excel-{question_key(question)[:60]}",
        "question": question,
        "options": [
            {
                "id": label,
                "text": text,
                "explanation": explanation,
            }
            for label, text, explanation in zip(labels, shuffled_texts, explanation_texts)
        ],
        "correctOptionId": correct_label,
        "source": source_name,
    }


def make_excel_question(subject, unit_id, question, answer, answer_pool, source_name):
    override_question = build_excel_override_question(subject, unit_id, question, source_name)
    if override_question:
        return override_question

    distractors = []
    seen = {answer.lower()}
    for candidate in answer_pool:
        key = candidate.lower()
        if key not in seen:
            distractors.append(candidate)
            seen.add(key)
        if len(distractors) == 3:
            break
    if len(distractors) < 3:
        return None

    labels = ["a", "b", "c", "d"]
    correct_index = len(question_key(question)) % 4
    option_texts = distractors[:]
    option_texts.insert(correct_index, answer)
    correct_label = labels[correct_index]
    return {
        "id": f"{subject}-{unit_id}-excel-{question_key(question)[:60]}",
        "question": question,
        "options": [
            {
                "id": label,
                "text": text,
                "explanation": (
                    f"{text} es la opción correcta porque responde directamente a la pregunta planteada en la autoevaluación y coincide con el contenido técnico esperado para ese concepto."
                    if label == correct_label
                    else f"{text} no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                ),
            }
            for label, text in zip(labels, option_texts)
        ],
        "correctOptionId": correct_label,
        "source": source_name,
    }


def build_data():
    subjects = []
    stats = []
    for subject_dir in sorted(
        path
        for path in ROOT.iterdir()
        if path.is_dir() and path.name not in {"data", "scripts"} and not path.name.startswith(".")
    ):
        subject_id = re.sub(r"[^a-z0-9]+", "-", subject_dir.name.lower()).strip("-")
        units = {}
        seen_questions = set()
        docx_count = 0
        excel_added = 0
        excel_duplicates = 0

        for docx_path in sorted(subject_dir.glob("*.docx")):
            for unit_id, question in parse_docx(docx_path, subject_id):
                key = question_key(question["question"])
                if key in seen_questions:
                    continue
                seen_questions.add(key)
                units.setdefault(unit_id, []).append(question)
                docx_count += 1

        for xlsx_path in sorted(path for path in subject_dir.iterdir() if path.suffix.lower() == ".xlsx"):
            for unit_id, pairs in parse_xlsx(xlsx_path):
                answer_pool = [answer for _, answer in pairs]
                for question, answer in pairs:
                    key = question_key(question)
                    if key in seen_questions:
                        excel_duplicates += 1
                        continue
                    generated = make_excel_question(
                        subject_id, unit_id, question, answer, answer_pool, xlsx_path.name
                    )
                    if generated:
                        seen_questions.add(key)
                        units.setdefault(unit_id, []).append(generated)
                        excel_added += 1

        ordered_units = [
            {
                "id": unit_id,
                "title": unit_title(unit_id),
                "questions": questions,
            }
            for unit_id, questions in sorted(
                units.items(), key=lambda item: (item[0] == "extra", int(item[0][2:]) if item[0].startswith("ut") else 999)
            )
        ]
        subjects.append(
            {
                "id": subject_id,
                "name": subject_dir.name,
                "finalExamSize": 30,
                "units": ordered_units,
            }
        )
        stats.append(
            {
                "subject": subject_dir.name,
                "docx": docx_count,
                "excel_added": excel_added,
                "excel_duplicates": excel_duplicates,
                "total": sum(len(unit["questions"]) for unit in ordered_units),
            }
        )
    return {"subjects": subjects, "stats": stats}


def main():
    data = build_data()
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(
        "window.LINKIA_QUIZ_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(json.dumps(data["stats"], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
