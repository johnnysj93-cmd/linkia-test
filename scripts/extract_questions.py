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


def docx_paragraphs(path):
    with zipfile.ZipFile(path) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))
    paragraphs = []
    for para in root.findall(".//w:p", WORD_NS):
        text = clean_text("".join(t.text or "" for t in para.findall(".//w:t", WORD_NS)))
        if text:
            paragraphs.append(text)
    return paragraphs


def split_question_blocks(paragraphs):
    blocks = []
    current = []
    for line in paragraphs:
        is_question = (
            ("?" in line or line.startswith("❓"))
            and "Respuesta correcta" not in line
            and not parse_option_line(line)
        )
        if is_question and current:
            blocks.append(current)
            current = []
        current.append(line)
    if current:
        blocks.append(current)
    return blocks


def parse_option_line(line):
    match = re.match(r"^([a-dA-D])\s*[\.)]\s*(.+)$", line)
    if not match:
        return None
    return match.group(1).lower(), clean_text(match.group(2))


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


def parse_docx_question(block, subject, unit_id, source_name):
    question = clean_question(block[0])
    options = {}
    explanations = {}
    correct_label = None
    correct_text = ""
    correct_explanation = []
    in_correct_explanation = False
    in_wrong_explanations = False
    pending_correct_line = False

    for line in block[1:]:
        if "Respuesta correcta" in line:
            match = re.search(
                r"Respuesta correcta\s*:\s*(?:([a-dA-D])\s*[\.)]\s*)?(.+)$", line
            )
            if match:
                correct_label = match.group(1).lower() if match.group(1) else None
                correct_text = clean_text(match.group(2))
                if correct_label:
                    options[correct_label] = correct_text
            else:
                pending_correct_line = True
            in_correct_explanation = False
            in_wrong_explanations = False
            continue

        if pending_correct_line:
            parsed = parse_option_line(line)
            if parsed:
                correct_label, correct_text = parsed
                options[correct_label] = correct_text
                pending_correct_line = False
                continue

        if (
            "Por qué es correcta" in line
            or "Por que es correcta" in line
            or "Explicación técnica" in line
        ):
            in_correct_explanation = True
            in_wrong_explanations = False
            continue

        if "Por qué las otras" in line or "Por que las otras" in line:
            in_correct_explanation = False
            in_wrong_explanations = True
            continue

        wrong = split_wrong_line(line)
        if wrong and in_wrong_explanations:
            label, answer, explanation = wrong
            options[label] = answer
            explanations[label] = explanation
            continue

        parsed = parse_option_line(line)
        if parsed and not in_correct_explanation:
            label, answer = parsed
            options.setdefault(label, answer)
            continue

        if in_correct_explanation:
            correct_explanation.append(line)

    if not correct_label and correct_text:
        for label, answer in options.items():
            if clean_text(answer).lower() == clean_text(correct_text).lower():
                correct_label = label
                break

    if correct_label:
        explanations[correct_label] = clean_text(" ".join(correct_explanation))

    ordered_labels = [label for label in "abcd" if label in options]
    if len(ordered_labels) != 4 or not correct_label:
        return None

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
    for block in split_question_blocks(docx_paragraphs(path)):
        parsed = parse_docx_question(block, subject, unit_id, path.name)
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


def make_excel_question(subject, unit_id, question, answer, answer_pool, source_name):
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
                    "Es la respuesta indicada como correcta en el Excel de autoevaluación."
                    if label == correct_label
                    else "No coincide con la respuesta correcta indicada en el Excel de autoevaluación."
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
    for subject_dir in sorted(path for path in ROOT.iterdir() if path.is_dir() and path.name not in {"data", "scripts"}):
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
