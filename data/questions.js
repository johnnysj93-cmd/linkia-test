window.LINKIA_QUIZ_DATA = {
  "subjects": [
    {
      "id": "aso",
      "name": "ASO",
      "finalExamSize": 30,
      "units": [
        {
          "id": "ut1",
          "title": "Unidad 1",
          "questions": [
            {
              "id": "aso-ut1-que mecanismo permite que un dispositivo avise al procesador",
              "question": "¿Qué mecanismo permite que un dispositivo avise al procesador cuando requiere atención?",
              "options": [
                {
                  "id": "a",
                  "text": "Caching",
                  "explanation": "Técnica para acelerar el acceso a datos guardándolos temporalmente. No sirve para avisar al procesador."
                },
                {
                  "id": "b",
                  "text": "Paging",
                  "explanation": "Sistema de gestión de memoria que divide la RAM en páginas."
                },
                {
                  "id": "c",
                  "text": "Interrupción",
                  "explanation": "Una interrupción es una señal que envía un dispositivo al procesador para avisar de que necesita atención o de que ha terminado una operación (por ejemplo, teclado, disco o tarjeta de red)."
                },
                {
                  "id": "d",
                  "text": "Swap",
                  "explanation": "Técnica que mueve procesos entre RAM y disco cuando la memoria se llena."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que sistema de archivos usa journaling para reducir la corru",
              "question": "¿Qué sistema de archivos usa journaling para reducir la corrupción tras apagones?",
              "options": [
                {
                  "id": "a",
                  "text": "NTFS",
                  "explanation": "NTFS utiliza journaling, un registro de cambios que permite recuperar el sistema de archivos después de apagones o fallos, reduciendo la posibilidad de corrupción de datos."
                },
                {
                  "id": "b",
                  "text": "ext2",
                  "explanation": "No tiene journaling, por eso es más vulnerable a corrupción tras apagones."
                },
                {
                  "id": "c",
                  "text": "UFS",
                  "explanation": "Sistema de archivos de Unix/BSD; en su versión clásica no usa journaling."
                },
                {
                  "id": "d",
                  "text": "FAT32",
                  "explanation": "Sistema antiguo usado en USB y tarjetas SD que no tiene journaling."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-cual de los siguientes es un ejemplo de sistema operativo mo",
              "question": "¿Cuál de los siguientes es un ejemplo de sistema operativo monolítico?",
              "options": [
                {
                  "id": "a",
                  "text": "Windows NT",
                  "explanation": "Usa un kernel híbrido, mezcla características de monolítico y microkernel."
                },
                {
                  "id": "b",
                  "text": "MINIX",
                  "explanation": "Es un microkernel, diseñado para que muchos servicios funcionen fuera del núcleo."
                },
                {
                  "id": "c",
                  "text": "QNX",
                  "explanation": "También utiliza microkernel, muy usado en sistemas embebidos."
                },
                {
                  "id": "d",
                  "text": "Linux",
                  "explanation": "Linux utiliza un kernel monolítico, donde la mayoría de servicios del sistema (drivers, gestión de memoria, sistema de archivos, etc.) se ejecutan dentro del mismo núcleo."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que ventaja principal ofrece un microkernel en sistemas crit",
              "question": "¿Qué ventaja principal ofrece un microkernel en sistemas críticos?",
              "options": [
                {
                  "id": "a",
                  "text": "Drivers más rápidos",
                  "explanation": "En microkernel suelen ser más lentos porque se ejecutan fuera del núcleo."
                },
                {
                  "id": "b",
                  "text": "Aislamiento y robustez ante fallos",
                  "explanation": "En un microkernel, muchos servicios del sistema (drivers, sistema de archivos, etc.) se ejecutan fuera del núcleo. Esto permite aislar fallos, de modo que si un componente falla no se cae todo el sistema."
                },
                {
                  "id": "c",
                  "text": "Menor complejidad del sistema",
                  "explanation": "El sistema puede ser incluso más complejo por la comunicación entre procesos."
                },
                {
                  "id": "d",
                  "text": "Mayor rendimiento que un monolítico",
                  "explanation": "Normalmente los monolíticos son más rápidos."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que tecnica permite que los procesos utilicen mas memoria de",
              "question": "¿Qué técnica permite que los procesos utilicen más memoria de la disponible físicamente?",
              "options": [
                {
                  "id": "a",
                  "text": "Multiplexación",
                  "explanation": "Técnica para compartir recursos (como CPU o red), no para ampliar memoria."
                },
                {
                  "id": "b",
                  "text": "Fragmentación dinámica",
                  "explanation": "Problema de la gestión de memoria, no una técnica para aumentarla."
                },
                {
                  "id": "c",
                  "text": "Conmutación de tareas",
                  "explanation": "Cambio entre procesos en la CPU, no afecta a la cantidad de memoria disponible."
                },
                {
                  "id": "d",
                  "text": "Memoria virtual",
                  "explanation": "La memoria virtual permite que los procesos utilicen más memoria de la que existe en la RAM, usando parte del disco duro como extensión de la memoria."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que herramienta de linux permite observar el uso de memoria ",
              "question": "¿Qué herramienta de Linux permite observar el uso de memoria y caché en tiempo real?",
              "options": [
                {
                  "id": "a",
                  "text": "chmod",
                  "explanation": "Sirve para cambiar permisos de archivos, no muestra información de memoria."
                },
                {
                  "id": "b",
                  "text": "lsblk",
                  "explanation": "Muestra dispositivos de almacenamiento y particiones, no la RAM."
                },
                {
                  "id": "c",
                  "text": "uname",
                  "explanation": "Muestra información del sistema y del kernel, no el uso de memoria."
                },
                {
                  "id": "d",
                  "text": "free -h",
                  "explanation": "El comando free -h muestra el uso de la memoria RAM, memoria usada, libre, buffers y caché en un formato legible para humanos (human-readable)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que accion realiza el oom killer en linux",
              "question": "¿Qué acción realiza el OOM killer en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "Reinicia el sistema para evitar corrupción",
                  "explanation": "El OOM killer no reinicia el sistema, solo termina procesos."
                },
                {
                  "id": "b",
                  "text": "Fragmenta la memoria para reutilizarla",
                  "explanation": "No gestiona la fragmentación de memoria."
                },
                {
                  "id": "c",
                  "text": "Limpia la caché de archivos",
                  "explanation": "La gestión de caché la hace el kernel automáticamente, no el OOM killer."
                },
                {
                  "id": "d",
                  "text": "Cierra procesos cuando falta memoria física",
                  "explanation": "El OOM Killer (Out Of Memory Killer) se activa cuando el sistema se queda sin memoria RAM y finaliza algunos procesos para liberar memoria y evitar que el sistema se bloquee."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que componente del sistema operativo organiza y controla el ",
              "question": "¿Qué componente del sistema operativo organiza y controla el acceso a los archivos?",
              "options": [
                {
                  "id": "a",
                  "text": "Planificador",
                  "explanation": "Se encarga de gestionar el uso de la CPU entre los procesos."
                },
                {
                  "id": "b",
                  "text": "Gestor de memoria",
                  "explanation": "Administra la memoria RAM del sistema."
                },
                {
                  "id": "c",
                  "text": "Sistema de archivos",
                  "explanation": "El sistema de archivos se encarga de organizar, almacenar y controlar el acceso a los archivos y directorios dentro del sistema operativo."
                },
                {
                  "id": "d",
                  "text": "Caché de páginas",
                  "explanation": "Es una memoria temporal para acelerar el acceso a datos, pero no organiza archivos."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-cual es un ejemplo de licencia de software permisiva",
              "question": "¿Cuál es un ejemplo de licencia de software permisiva?",
              "options": [
                {
                  "id": "a",
                  "text": "GPLv2",
                  "explanation": "Es una licencia copyleft, obliga a mantener la misma licencia en las modificaciones."
                },
                {
                  "id": "b",
                  "text": "GPLv3",
                  "explanation": "También es copyleft, exige que el código derivado siga siendo libre."
                },
                {
                  "id": "c",
                  "text": "MIT",
                  "explanation": "La licencia MIT es una licencia permisiva, permite usar, modificar y redistribuir el software con muy pocas restricciones."
                },
                {
                  "id": "d",
                  "text": "AGPL",
                  "explanation": "Variante más estricta de GPL que obliga a compartir el código incluso en servicios web."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que elemento realiza la traduccion de direcciones virtuales ",
              "question": "¿Qué elemento realiza la traducción de direcciones virtuales a físicas?",
              "options": [
                {
                  "id": "a",
                  "text": "DMA",
                  "explanation": "Permite que los dispositivos accedan directamente a la memoria, pero no traduce direcciones."
                },
                {
                  "id": "b",
                  "text": "Driver",
                  "explanation": "Es software que permite que el sistema operativo se comunique con dispositivos hardware."
                },
                {
                  "id": "c",
                  "text": "Scheduler",
                  "explanation": "Es el planificador de procesos, decide qué proceso usa la CPU."
                },
                {
                  "id": "d",
                  "text": "MMU",
                  "explanation": "La MMU (Memory Management Unit) es el componente del hardware que traduce las direcciones de memoria virtual que usan los procesos en direcciones físicas de la RAM."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que componente del sistema operativo decide que proceso usa ",
              "question": "¿Qué componente del sistema operativo decide qué proceso usa la CPU y cuándo?",
              "options": [
                {
                  "id": "a",
                  "text": "Sistema de archivos",
                  "explanation": "Se encarga de gestionar y organizar archivos, no de la CPU."
                },
                {
                  "id": "b",
                  "text": "Driver de E/S",
                  "explanation": "Permite la comunicación con dispositivos de entrada y salida."
                },
                {
                  "id": "c",
                  "text": "Planificador",
                  "explanation": "El planificador (scheduler) es el componente del sistema operativo que decide qué proceso se ejecuta en la CPU y durante cuánto tiempo."
                },
                {
                  "id": "d",
                  "text": "Shell",
                  "explanation": "Es la interfaz de comandos que usa el usuario para interactuar con el sistema."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-cual es la funcion principal de un sistema operativo",
              "question": "¿Cuál es la función principal de un sistema operativo?",
              "options": [
                {
                  "id": "a",
                  "text": "Evitar el uso de memoria virtual",
                  "explanation": "La memoria virtual es una función habitual del sistema operativo."
                },
                {
                  "id": "b",
                  "text": "Gestionar recursos y ofrecer un entorno estable a las aplicaciones",
                  "explanation": "El sistema operativo se encarga de gestionar los recursos del hardware (CPU, memoria, disco, dispositivos) y proporcionar un entorno estable para ejecutar aplicaciones."
                },
                {
                  "id": "c",
                  "text": "Ejecutar únicamente procesos del sistema",
                  "explanation": "También ejecuta aplicaciones de usuario."
                },
                {
                  "id": "d",
                  "text": "Permitir el acceso directo del usuario al hardware",
                  "explanation": "El sistema operativo intermedia entre el usuario y el hardware para proteger el sistema."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que tipo de arquitectura de kernel combina caracteristicas m",
              "question": "¿Qué tipo de arquitectura de kernel combina características monolíticas y de microkernel?",
              "options": [
                {
                  "id": "a",
                  "text": "Compacta",
                  "explanation": "No es una arquitectura estándar de kernel en sistemas operativos."
                },
                {
                  "id": "b",
                  "text": "Segmentada",
                  "explanation": "Se refiere a gestión de memoria, no a arquitectura de kernel."
                },
                {
                  "id": "c",
                  "text": "Distribuida",
                  "explanation": "Hace referencia a sistemas distribuidos, no al diseño del kernel."
                },
                {
                  "id": "d",
                  "text": "Híbrida",
                  "explanation": "Un kernel híbrido combina características de kernels monolíticos y microkernel, buscando un equilibrio entre rendimiento y modularidad. Un ejemplo es Windows NT."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que politica de planificacion en linux busca repartir el tie",
              "question": "¿Qué política de planificación en Linux busca repartir el tiempo de CPU de forma “justa”?",
              "options": [
                {
                  "id": "a",
                  "text": "Round Robin",
                  "explanation": "Es un algoritmo básico de reparto por turnos, pero no es el planificador principal actual de Linux."
                },
                {
                  "id": "b",
                  "text": "SCHED_RR",
                  "explanation": "Es una política Round Robin para procesos en tiempo real, no busca equidad general entre todos los procesos."
                },
                {
                  "id": "c",
                  "text": "CFS",
                  "explanation": "CFS (Completely Fair Scheduler) es el planificador moderno de Linux; reparte el tiempo de CPU de forma equitativa simulando que todos los procesos avanzan al mismo tiempo."
                },
                {
                  "id": "d",
                  "text": "SCHED_FIFO",
                  "explanation": "Política de tiempo real que ejecuta procesos por prioridad estricta sin reparto justo."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que tipo de licencia obliga a publicar modificaciones si se ",
              "question": "¿Qué tipo de licencia obliga a publicar modificaciones si se redistribuyen binarios modificados?",
              "options": [
                {
                  "id": "a",
                  "text": "BSD",
                  "explanation": "Licencia permisiva, permite modificar y redistribuir sin obligación de publicar el código."
                },
                {
                  "id": "b",
                  "text": "MIT",
                  "explanation": "También es permisiva, solo exige mantener el aviso de copyright."
                },
                {
                  "id": "c",
                  "text": "Apache 2.0",
                  "explanation": "Permisiva; permite modificar y redistribuir sin obligación de liberar el código."
                },
                {
                  "id": "d",
                  "text": "GPL",
                  "explanation": "La GPL (General Public License) es una licencia copyleft que obliga a publicar el código fuente de las modificaciones cuando se redistribuyen binarios modificados."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que caracteristica es propia de los sistemas operativos de s",
              "question": "¿Qué característica es propia de los sistemas operativos de servidor?",
              "options": [
                {
                  "id": "a",
                  "text": "Eliminan la multitarea",
                  "explanation": "Los sistemas de servidor sí usan multitarea para manejar muchos procesos."
                },
                {
                  "id": "b",
                  "text": "Priorizan la experiencia multimedia",
                  "explanation": "Esto es más propio de sistemas de escritorio."
                },
                {
                  "id": "c",
                  "text": "Optimizan estabilidad y seguridad",
                  "explanation": "Los sistemas operativos de servidor están diseñados para funcionar de forma estable durante largos periodos, priorizando seguridad, fiabilidad y gestión de recursos."
                },
                {
                  "id": "d",
                  "text": "Reducen el soporte de redes",
                  "explanation": "Al contrario, los servidores necesitan un soporte de red muy fuerte."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que modo de operacion tiene acceso total al hardware",
              "question": "¿Qué modo de operación tiene acceso total al hardware?",
              "options": [
                {
                  "id": "a",
                  "text": "Modo gráfico",
                  "explanation": "Solo se refiere a la interfaz visual, no a niveles de acceso al hardware."
                },
                {
                  "id": "b",
                  "text": "Modo usuario",
                  "explanation": "Tiene acceso limitado al hardware para proteger el sistema."
                },
                {
                  "id": "c",
                  "text": "Modo supervisor deshabilitado",
                  "explanation": "No es un modo real de operación del sistema."
                },
                {
                  "id": "d",
                  "text": "Modo kernel",
                  "explanation": "El modo kernel es el nivel de ejecución con acceso completo al hardware y a todos los recursos del sistema, utilizado por el núcleo del sistema operativo."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que caracteriza a los sistemas operativos de microkernel",
              "question": "¿Qué caracteriza a los sistemas operativos de microkernel?",
              "options": [
                {
                  "id": "a",
                  "text": "La mayoría de servicios se ejecutan en modo kernel",
                  "explanation": "Esto es propio de los kernels monolíticos."
                },
                {
                  "id": "b",
                  "text": "No soportan multitarea",
                  "explanation": "Los microkernel sí soportan multitarea."
                },
                {
                  "id": "c",
                  "text": "Mantienen drivers y servicios como procesos separados",
                  "explanation": "En los microkernel, muchos servicios del sistema (drivers, sistema de archivos, etc.) se ejecutan como procesos separados fuera del núcleo, lo que mejora el aislamiento y la seguridad."
                },
                {
                  "id": "d",
                  "text": "Ofrecen menor aislamiento ante fallos",
                  "explanation": "En realidad ofrecen mayor aislamiento y robustez."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-que indica la presencia de buff cache alta en linux",
              "question": "¿Qué indica la presencia de “buff/cache” alta en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "Falta grave de RAM",
                  "explanation": "No necesariamente; Linux libera la caché si un programa necesita memoria."
                },
                {
                  "id": "b",
                  "text": "Error de paginación",
                  "explanation": "No tiene relación con errores de paginación."
                },
                {
                  "id": "c",
                  "text": "Swapping intensivo",
                  "explanation": "El swapping depende del uso de memoria, no del valor de buff/cache."
                },
                {
                  "id": "d",
                  "text": "Uso normal de caché para acelerar accesos",
                  "explanation": "En Linux, una buff/cache alta significa que el sistema está usando la memoria libre como caché para acelerar el acceso a archivos y discos. Es comportamiento normal y deseado."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut1-excel-que herramienta de windows permite gestionar servicios",
              "question": "¿Qué herramienta de Windows permite gestionar servicios?",
              "options": [
                {
                  "id": "a",
                  "text": "Gestionar recursos y ofrecer un entorno estable a las aplicaciones",
                  "explanation": "Gestionar recursos y ofrecer un entorno estable a las aplicaciones no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "b",
                  "text": "Planificador",
                  "explanation": "Planificador no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "c",
                  "text": "services.msc",
                  "explanation": "services.msc es la opción correcta porque responde directamente a la pregunta planteada en la autoevaluación y coincide con el contenido técnico esperado para ese concepto."
                },
                {
                  "id": "d",
                  "text": "Linux",
                  "explanation": "Linux no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                }
              ],
              "correctOptionId": "c",
              "source": "TESTS-AUTOEVALUACIÓN-ASO.XLSX"
            }
          ]
        },
        {
          "id": "ut2",
          "title": "Unidad 2",
          "questions": [
            {
              "id": "aso-ut2-cual es el estado en el que un proceso espera por un evento ",
              "question": "¿Cuál es el estado en el que un proceso espera por un evento externo o E/S?",
              "options": [
                {
                  "id": "a",
                  "text": "Terminado",
                  "explanation": "El proceso ya ha finalizado."
                },
                {
                  "id": "b",
                  "text": "En ejecución",
                  "explanation": "Está usando la CPU."
                },
                {
                  "id": "c",
                  "text": "Listo",
                  "explanation": "Puede ejecutarse, pero no está esperando nada."
                },
                {
                  "id": "d",
                  "text": "Bloqueado",
                  "explanation": "Un proceso está en estado bloqueado cuando no puede continuar porque está esperando una operación externa, como una entrada/salida (E/S)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que estado refleja la marca d en ps",
              "question": "¿Qué estado refleja la marca “D” en ps?",
              "options": [
                {
                  "id": "a",
                  "text": "Proceso en ejecución",
                  "explanation": "Se representa con “R”."
                },
                {
                  "id": "b",
                  "text": "Proceso detenido manualmente",
                  "explanation": "Se representa con “T”."
                },
                {
                  "id": "c",
                  "text": "Proceso zombie",
                  "explanation": "Se representa con “Z”."
                },
                {
                  "id": "d",
                  "text": "Proceso en espera no interrumpible (I/O)",
                  "explanation": "La marca “D” en ps indica que el proceso está en espera no interrumpible, normalmente esperando una operación de entrada/salida (I/O), como acceso a disco."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que comando permite enviar senales basadas en el nombre del ",
              "question": "¿Qué comando permite enviar señales basadas en el nombre del proceso?",
              "options": [
                {
                  "id": "a",
                  "text": "uname",
                  "explanation": "Muestra información del sistema."
                },
                {
                  "id": "b",
                  "text": "nice",
                  "explanation": "Ajusta la prioridad de un proceso."
                },
                {
                  "id": "c",
                  "text": "pkill",
                  "explanation": "pkill permite enviar señales (como SIGTERM o SIGKILL) a procesos usando su nombre, sin necesidad de conocer el PID."
                },
                {
                  "id": "d",
                  "text": "pgrep",
                  "explanation": "Busca procesos por nombre, pero no envía señales."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que herramienta permite trazar llamadas al sistema para diag",
              "question": "¿Qué herramienta permite trazar llamadas al sistema para diagnosticar problemas?",
              "options": [
                {
                  "id": "a",
                  "text": "iptables",
                  "explanation": "Gestiona reglas de firewall."
                },
                {
                  "id": "b",
                  "text": "rm -rf",
                  "explanation": "Elimina archivos/directorios."
                },
                {
                  "id": "c",
                  "text": "df -h",
                  "explanation": "Muestra el uso del disco."
                },
                {
                  "id": "d",
                  "text": "strace",
                  "explanation": "strace permite ver en tiempo real las llamadas al sistema que hace un proceso, lo que es muy útil para detectar errores o entender qué está pasando internamente."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-cual es la finalidad del archivo proc pid status en linux",
              "question": "¿Cuál es la finalidad del archivo /proc/<pid>/status en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "Guardar métricas de red",
                  "explanation": "Eso se gestiona en otros archivos de /proc o herramientas específicas."
                },
                {
                  "id": "b",
                  "text": "Asignar prioridades automáticamente",
                  "explanation": "No realiza esa función."
                },
                {
                  "id": "c",
                  "text": "Borrar procesos obsoletos",
                  "explanation": "No elimina procesos, solo muestra información."
                },
                {
                  "id": "d",
                  "text": "Mostrar información detallada del proceso",
                  "explanation": "El archivo /proc/<pid>/status contiene información detallada del proceso, como estado, uso de memoria, UID, PID, entre otros datos útiles para diagnóstico."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que opcion en unit files de systemd limita el numero de desc",
              "question": "¿Qué opción en unit files de systemd limita el número de descriptores de archivo?",
              "options": [
                {
                  "id": "a",
                  "text": "CPUQuota",
                  "explanation": "Limita el uso de CPU."
                },
                {
                  "id": "b",
                  "text": "TimeoutStopSec",
                  "explanation": "Define el tiempo de espera al detener un servicio."
                },
                {
                  "id": "c",
                  "text": "LimitNOFILE",
                  "explanation": "LimitNOFILE se utiliza en los unit files de systemd para limitar el número máximo de descriptores de archivo que puede abrir un proceso."
                },
                {
                  "id": "d",
                  "text": "RestartSec",
                  "explanation": "Tiempo de espera antes de reiniciar un servicio."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-cual de las siguientes acciones forma parte de la recoleccio",
              "question": "¿Cuál de las siguientes acciones forma parte de la recolección de evidencia ante un proceso sospechoso?",
              "options": [
                {
                  "id": "a",
                  "text": "Cambiar la prioridad",
                  "explanation": "No recoge evidencia, solo modifica el comportamiento."
                },
                {
                  "id": "b",
                  "text": "Reiniciar el sistema",
                  "explanation": "Se pierde toda la información útil para el análisis."
                },
                {
                  "id": "c",
                  "text": "Obtener un volcado de memoria con gcore",
                  "explanation": "gcore permite generar un volcado de memoria (core dump) del proceso, lo que es clave para analizar qué estaba haciendo sin perder información."
                },
                {
                  "id": "d",
                  "text": "Matar el proceso",
                  "explanation": "Elimina el problema, pero también la evidencia."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-cual es el comando recomendado para reiniciar un servicio ge",
              "question": "¿Cuál es el comando recomendado para reiniciar un servicio gestionado por systemd?",
              "options": [
                {
                  "id": "a",
                  "text": "service --reload",
                  "explanation": "Sintaxis incorrecta y obsoleta en systemd."
                },
                {
                  "id": "b",
                  "text": "systemctl restart <servicio>",
                  "explanation": "systemctl restart es el comando estándar en sistemas con systemd para reiniciar servicios de forma correcta."
                },
                {
                  "id": "c",
                  "text": "sc restart",
                  "explanation": "Comando de Windows, no de Linux."
                },
                {
                  "id": "d",
                  "text": "stop-service",
                  "explanation": "También de PowerShell (Windows)."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que representa un proceso en un sistema operativo",
              "question": "¿Qué representa un proceso en un sistema operativo?",
              "options": [
                {
                  "id": "a",
                  "text": "Un programa en ejecución con memoria y recursos asociados",
                  "explanation": "Un proceso es un programa que se está ejecutando, junto con los recursos que necesita: memoria, CPU, archivos abiertos, etc."
                },
                {
                  "id": "b",
                  "text": "Un hilo",
                  "explanation": "Es parte de un proceso, no un proceso completo."
                },
                {
                  "id": "c",
                  "text": "Instrucción individual",
                  "explanation": "Es algo mucho más pequeño, no un proceso."
                },
                {
                  "id": "d",
                  "text": "Archivo binario",
                  "explanation": "Es el programa en disco, pero no en ejecución."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que senal en linux solicita una terminacion ordenada del pro",
              "question": "¿Qué señal en Linux solicita una terminación ordenada del proceso?",
              "options": [
                {
                  "id": "a",
                  "text": "SIGKILL",
                  "explanation": "Mata el proceso inmediatamente, sin permitir limpieza."
                },
                {
                  "id": "b",
                  "text": "SIGTERM",
                  "explanation": "SIGTERM pide al proceso que termine de forma controlada, permitiéndole cerrar archivos y liberar recursos correctamente."
                },
                {
                  "id": "c",
                  "text": "SIGUSR1",
                  "explanation": "Señal definida por el usuario, no para terminar procesos."
                },
                {
                  "id": "d",
                  "text": "SIGSTOP",
                  "explanation": "Detiene el proceso, pero no lo finaliza."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que accion realiza sigstop sobre un proceso",
              "question": "¿Qué acción realiza SIGSTOP sobre un proceso?",
              "options": [
                {
                  "id": "a",
                  "text": "Cambia su prioridad",
                  "explanation": "Eso se hace con nice/renice."
                },
                {
                  "id": "b",
                  "text": "Suspende su ejecución",
                  "explanation": "SIGSTOP detiene (pausa) el proceso, dejándolo en espera hasta que reciba una señal como SIGCONT para continuar."
                },
                {
                  "id": "c",
                  "text": "Lo finaliza inmediatamente",
                  "explanation": "Eso sería SIGKILL."
                },
                {
                  "id": "d",
                  "text": "Reinicia el proceso",
                  "explanation": "No existe esa función con señales estándar."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que estado indica un proceso zombie",
              "question": "¿Qué estado indica un proceso zombie?",
              "options": [
                {
                  "id": "a",
                  "text": "Consume mucha CPU",
                  "explanation": "Un zombie no consume CPU."
                },
                {
                  "id": "b",
                  "text": "Detenido por el kernel",
                  "explanation": "Eso sería otro estado (por ejemplo, detenido)."
                },
                {
                  "id": "c",
                  "text": "Esperando E/S",
                  "explanation": "Eso corresponde a estado bloqueado."
                },
                {
                  "id": "d",
                  "text": "Finalizó pero el padre no recogió su estado",
                  "explanation": "Un proceso zombie ya ha terminado, pero su proceso padre no ha recogido su estado de salida, por lo que sigue apareciendo en la tabla de procesos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que herramienta de windows permite listar procesos y su cons",
              "question": "¿Qué herramienta de Windows permite listar procesos y su consumo?",
              "options": [
                {
                  "id": "a",
                  "text": "chmod",
                  "explanation": "Cambia permisos en Linux."
                },
                {
                  "id": "b",
                  "text": "sysctl",
                  "explanation": "Configura parámetros del kernel en Linux."
                },
                {
                  "id": "c",
                  "text": "mount",
                  "explanation": "Monta sistemas de archivos en Linux."
                },
                {
                  "id": "d",
                  "text": "tasklist",
                  "explanation": "tasklist es un comando de Windows que permite ver los procesos en ejecución junto con información como el uso de memoria."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-cual es la diferencia principal entre proceso e hilo",
              "question": "¿Cuál es la diferencia principal entre proceso e hilo?",
              "options": [
                {
                  "id": "a",
                  "text": "Los hilos necesitan más recursos",
                  "explanation": "Es al revés, son más ligeros."
                },
                {
                  "id": "b",
                  "text": "No pueden ejecutarse en paralelo",
                  "explanation": "Sí pueden, depende del sistema."
                },
                {
                  "id": "c",
                  "text": "Los procesos tienen su propio espacio de direcciones; los hilos lo comparten",
                  "explanation": "Cada proceso tiene su propia memoria independiente, mientras que los hilos dentro de un proceso comparten el mismo espacio de memoria, lo que los hace más ligeros."
                },
                {
                  "id": "d",
                  "text": "Procesos comparten memoria",
                  "explanation": "Incorrecto, normalmente no la comparten."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-cual es el proceso pid 1 en sistemas linux modernos",
              "question": "¿Cuál es el proceso PID 1 en sistemas Linux modernos?",
              "options": [
                {
                  "id": "a",
                  "text": "GRUB",
                  "explanation": "Es el gestor de arranque, no un proceso en ejecución."
                },
                {
                  "id": "b",
                  "text": "kernel.exe",
                  "explanation": "No existe en Linux (es de Windows)."
                },
                {
                  "id": "c",
                  "text": "initrd",
                  "explanation": "Es una imagen de arranque, no un proceso activo."
                },
                {
                  "id": "d",
                  "text": "systemd",
                  "explanation": "En sistemas Linux modernos, systemd es el proceso con PID , encargado de iniciar el sistema y gestionar servicios."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que herramienta en linux permite ver estados como r s d t y ",
              "question": "¿Qué herramienta en Linux permite ver estados como R, S, D, T y Z?",
              "options": [
                {
                  "id": "a",
                  "text": "nano",
                  "explanation": "Editor de texto."
                },
                {
                  "id": "b",
                  "text": "chmod",
                  "explanation": "Cambia permisos."
                },
                {
                  "id": "c",
                  "text": "tail",
                  "explanation": "Muestra el final de archivos."
                },
                {
                  "id": "d",
                  "text": "ps",
                  "explanation": "El comando ps muestra información de los procesos, incluyendo su estado (R: running, S: sleeping, D: uninterruptible, T: stopped, Z: zombie)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que tecnica mejora la seguridad limitando recursos para evit",
              "question": "¿Qué técnica mejora la seguridad limitando recursos para evitar degradación del sistema?",
              "options": [
                {
                  "id": "a",
                  "text": "Desactivar systemd",
                  "explanation": "No mejora la seguridad, puede empeorar la gestión del sistema."
                },
                {
                  "id": "b",
                  "text": "Eliminar logs",
                  "explanation": "No limita recursos ni previene degradación."
                },
                {
                  "id": "c",
                  "text": "Aplicar límites mediante cgroups",
                  "explanation": "Los cgroups permiten limitar recursos (CPU, memoria, etc.) a procesos o grupos, evitando que consuman todo el sistema y mejorando la seguridad y estabilidad."
                },
                {
                  "id": "d",
                  "text": "Incrementar permisos",
                  "explanation": "Reduce la seguridad, no la mejora."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que comando permite ver los hilos de un proceso en linux",
              "question": "¿Qué comando permite ver los hilos de un proceso en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "ps -eo pid",
                  "explanation": "Solo muestra PIDs, no hilos."
                },
                {
                  "id": "b",
                  "text": "ps -eLf",
                  "explanation": "ps -eLf muestra todos los procesos y sus hilos (threads), incluyendo información como el ID del hilo (LWP)."
                },
                {
                  "id": "c",
                  "text": "top -d 1",
                  "explanation": "Muestra procesos en tiempo real, pero no específicamente hilos."
                },
                {
                  "id": "d",
                  "text": "kill -STOP",
                  "explanation": "Envía una señal para detener procesos."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que herramienta permite identificar conexiones abiertas por ",
              "question": "¿Qué herramienta permite identificar conexiones abiertas por un proceso?",
              "options": [
                {
                  "id": "a",
                  "text": "top -H",
                  "explanation": "Muestra procesos/hilos en tiempo real."
                },
                {
                  "id": "b",
                  "text": "free -h",
                  "explanation": "Muestra uso de memoria."
                },
                {
                  "id": "c",
                  "text": "lsof -i",
                  "explanation": "lsof -i muestra los archivos abiertos relacionados con red, es decir, conexiones abiertas (puertos, sockets) por procesos."
                },
                {
                  "id": "d",
                  "text": "lsblk",
                  "explanation": "Lista dispositivos de bloque (discos)."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut2-que utilidad muestra el tiempo que tarda cada unidad en arra",
              "question": "¿Qué utilidad muestra el tiempo que tarda cada unidad en arrancar en systemd?",
              "options": [
                {
                  "id": "a",
                  "text": "systemd-analyze blame",
                  "explanation": "systemd-analyze blame muestra cuánto tiempo tarda cada servicio (unidad) en arrancar, ayudando a detectar cuellos de botella en el inicio."
                },
                {
                  "id": "b",
                  "text": "lsmod",
                  "explanation": "Muestra módulos del kernel cargados."
                },
                {
                  "id": "c",
                  "text": "ps aux",
                  "explanation": "Lista procesos en ejecución."
                },
                {
                  "id": "d",
                  "text": "journalctl -f",
                  "explanation": "Muestra logs en tiempo real."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut3",
          "title": "Unidad 3",
          "questions": [
            {
              "id": "aso-ut3-que propiedad asegura que un script pueda ejecutarse varias ",
              "question": "¿Qué propiedad asegura que un script pueda ejecutarse varias veces sin producir efectos indeseados?",
              "options": [
                {
                  "id": "a",
                  "text": "Idempotencia",
                  "explanation": "La idempotencia garantiza que ejecutar un script varias veces produce el mismo resultado, sin duplicar acciones ni generar errores."
                },
                {
                  "id": "b",
                  "text": "Persistencia",
                  "explanation": "Relacionado con almacenamiento de datos."
                },
                {
                  "id": "c",
                  "text": "Concurrencia",
                  "explanation": "Ejecución simultánea de procesos."
                },
                {
                  "id": "d",
                  "text": "Liveness",
                  "explanation": "Propiedad teórica de sistemas, no relacionada con scripts."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que ventaja ofrece documentar y versionar tareas programadas",
              "question": "¿Qué ventaja ofrece documentar y versionar tareas programadas?",
              "options": [
                {
                  "id": "a",
                  "text": "Impide modificar horarios",
                  "explanation": "No es su función."
                },
                {
                  "id": "b",
                  "text": "Evita la ejecución",
                  "explanation": "No tiene sentido."
                },
                {
                  "id": "c",
                  "text": "Reemplaza los logs",
                  "explanation": "No sustituye los registros del sistema."
                },
                {
                  "id": "d",
                  "text": "Permite reproducir configuraciones y auditar cambios",
                  "explanation": "Documentar y versionar permite saber qué se cambió, cuándo y por qué, además de reproducir configuraciones en otros sistemas o restaurarlas."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que caracteristica destaca en rundeck como plataforma de aut",
              "question": "¿Qué característica destaca en Rundeck como plataforma de automatización?",
              "options": [
                {
                  "id": "a",
                  "text": "No gestiona logs",
                  "explanation": "Sí los gestiona."
                },
                {
                  "id": "b",
                  "text": "Funciona solo en local",
                  "explanation": "Puede trabajar en entornos distribuidos."
                },
                {
                  "id": "c",
                  "text": "No permite RBAC",
                  "explanation": "Sí permite control de acceso por roles."
                },
                {
                  "id": "d",
                  "text": "Ejecuta tareas en múltiples nodos con control de acceso",
                  "explanation": "Rundeck permite automatizar tareas en varios nodos (servidores) y además incluye control de acceso (RBAC), lo que lo hace muy potente para entornos profesionales."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que herramienta se usa en linux para programar tareas period",
              "question": "¿Qué herramienta se usa en Linux para programar tareas periódicas?",
              "options": [
                {
                  "id": "a",
                  "text": "cron",
                  "explanation": "cron es la herramienta clásica en Linux para programar tareas periódicas (por ejemplo, cada minuto, hora, día, etc.)."
                },
                {
                  "id": "b",
                  "text": "ldapsync",
                  "explanation": "Relacionado con directorios LDAP."
                },
                {
                  "id": "c",
                  "text": "systemd-analyze",
                  "explanation": "Analiza tiempos de arranque."
                },
                {
                  "id": "d",
                  "text": "dsconfig",
                  "explanation": "Herramienta de configuración de servicios, no de tareas programadas."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que debe evitarse al gestionar claves y contrasenas en scrip",
              "question": "¿Qué debe evitarse al gestionar claves y contraseñas en scripts?",
              "options": [
                {
                  "id": "a",
                  "text": "Variables de entorno cifradas",
                  "explanation": "Es una buena práctica."
                },
                {
                  "id": "b",
                  "text": "Integrar con vaults",
                  "explanation": "Muy recomendable (gestión segura de secretos)."
                },
                {
                  "id": "c",
                  "text": "Hardcodear credenciales en texto plano",
                  "explanation": "Guardar credenciales directamente en el código (texto plano) es un riesgo de seguridad muy alto, ya que pueden ser fácilmente expuestas."
                },
                {
                  "id": "d",
                  "text": "Rotación periódica",
                  "explanation": "También es buena práctica de seguridad."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que ventaja principal ofrece powershell respecto a bash",
              "question": "¿Qué ventaja principal ofrece PowerShell respecto a Bash?",
              "options": [
                {
                  "id": "a",
                  "text": "No permite validación",
                  "explanation": "Sí permite."
                },
                {
                  "id": "b",
                  "text": "No soporta modular",
                  "explanation": "Sí soporta módulos."
                },
                {
                  "id": "c",
                  "text": "Menos cmdlets",
                  "explanation": "Tiene muchos cmdlets, no es una desventaja."
                },
                {
                  "id": "d",
                  "text": "Usa un modelo basado en objetos",
                  "explanation": "PowerShell trabaja con objetos (no solo texto como Bash), lo que permite manipular datos de forma más estructurada y potente."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que tipo de politica evita reinicios infinitos en servicios ",
              "question": "¿Qué tipo de política evita reinicios infinitos en servicios automatizados?",
              "options": [
                {
                  "id": "a",
                  "text": "restart never",
                  "explanation": "No reinicia nunca, no es flexible."
                },
                {
                  "id": "b",
                  "text": "restart on-failure con umbrales definidos",
                  "explanation": "Usar restart on-failure junto con límites/umbrales evita bucles infinitos de reinicio, controlando cuántas veces puede reiniciarse un servicio."
                },
                {
                  "id": "c",
                  "text": "restart always",
                  "explanation": "Puede provocar bucles infinitos."
                },
                {
                  "id": "d",
                  "text": "restart immediate sin delay",
                  "explanation": "Reinicios constantes sin control."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que herramienta grafica permite gestionar tareas con trigger",
              "question": "¿Qué herramienta gráfica permite gestionar tareas con triggers complejos en Windows?",
              "options": [
                {
                  "id": "a",
                  "text": "gpupdate",
                  "explanation": "Actualiza políticas de grupo."
                },
                {
                  "id": "b",
                  "text": "Resource Monitor",
                  "explanation": "Monitoriza recursos del sistema."
                },
                {
                  "id": "c",
                  "text": "Task Scheduler",
                  "explanation": "Task Scheduler permite crear tareas programadas con disparadores (triggers) complejos, como horarios, eventos del sistema, inicio de sesión, etc."
                },
                {
                  "id": "d",
                  "text": "Event Viewer",
                  "explanation": "Visualiza logs, no gestiona tareas."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que opcion de bash ayuda a detectar errores tempranos en scr",
              "question": "¿Qué opción de Bash ayuda a detectar errores tempranos en scripts?",
              "options": [
                {
                  "id": "a",
                  "text": "nohup",
                  "explanation": "Ejecuta procesos ignorando cierre de terminal."
                },
                {
                  "id": "b",
                  "text": "unset ALL",
                  "explanation": "No es una opción válida para este objetivo."
                },
                {
                  "id": "c",
                  "text": "set -euo pipefail",
                  "explanation": "set -euo pipefail hace que el script falle ante errores, variables no definidas o fallos en pipelines, ayudando a detectar problemas cuanto antes."
                },
                {
                  "id": "d",
                  "text": "set -vx",
                  "explanation": "Muestra ejecución paso a paso, pero no detecta errores por sí mismo."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que mecanismo permite validar configuraciones antes de un de",
              "question": "¿Qué mecanismo permite validar configuraciones antes de un despliegue automatizado?",
              "options": [
                {
                  "id": "a",
                  "text": "Ejecución sin logs",
                  "explanation": "Empeora el control, no valida nada."
                },
                {
                  "id": "b",
                  "text": "Reinicio forzado",
                  "explanation": "No verifica configuraciones previamente."
                },
                {
                  "id": "c",
                  "text": "Eliminación del estado",
                  "explanation": "Puede ser peligroso y no valida nada."
                },
                {
                  "id": "d",
                  "text": "Dry-run o pre-flight checks",
                  "explanation": "Un dry-run o pre-flight check permite simular la ejecución o validar la configuración sin aplicar cambios reales, detectando errores antes del despliegue."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que comando se usa para programar una tarea puntual en linux",
              "question": "¿Qué comando se usa para programar una tarea puntual en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "timerctl",
                  "explanation": "No es un comando estándar para esto."
                },
                {
                  "id": "b",
                  "text": "at",
                  "explanation": "at permite programar una tarea puntual para ejecutarse una sola vez en un momento determinado."
                },
                {
                  "id": "c",
                  "text": "flock",
                  "explanation": "Se usa para evitar ejecuciones simultáneas (bloqueos)."
                },
                {
                  "id": "d",
                  "text": "cron",
                  "explanation": "Sirve para tareas periódicas, no puntuales."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que tecnica permite detectar procesos anomalos en ejercicios",
              "question": "¿Qué técnica permite detectar procesos anómalos en ejercicios avanzados de automatización?",
              "options": [
                {
                  "id": "a",
                  "text": "Revisión manual",
                  "explanation": "Lenta y poco escalable."
                },
                {
                  "id": "b",
                  "text": "Scripts de análisis de CPU y conexiones",
                  "explanation": "Automatizar con scripts que analicen uso de CPU, memoria y conexiones permite detectar comportamientos anómalos de forma continua y eficiente."
                },
                {
                  "id": "c",
                  "text": "Desactivar logs",
                  "explanation": "Empeora la detección."
                },
                {
                  "id": "d",
                  "text": "Reiniciar el sistema",
                  "explanation": "No detecta problemas, solo los oculta temporalmente."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que riesgo comun se mitiga usando flock en tareas programada",
              "question": "¿Qué riesgo común se mitiga usando flock en tareas programadas?",
              "options": [
                {
                  "id": "a",
                  "text": "Variables de entorno",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "b",
                  "text": "Ejecuciones superpuestas",
                  "explanation": "flock permite aplicar bloqueos, evitando que un script se ejecute varias veces a la vez (ejecuciones simultáneas)."
                },
                {
                  "id": "c",
                  "text": "Fallos en logs",
                  "explanation": "No los gestiona."
                },
                {
                  "id": "d",
                  "text": "Permisos",
                  "explanation": "No cambia permisos."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que archivo define en systemd como debe ejecutarse un servic",
              "question": "¿Qué archivo define en systemd cómo debe ejecutarse un servicio?",
              "options": [
                {
                  "id": "a",
                  "text": "/etc/services.conf",
                  "explanation": "No es un archivo estándar de systemd."
                },
                {
                  "id": "b",
                  "text": "/etc/systemd/table.map",
                  "explanation": "No existe para este propósito."
                },
                {
                  "id": "c",
                  "text": "/usr/local/service.map",
                  "explanation": "No es válido en systemd."
                },
                {
                  "id": "d",
                  "text": "Unit file .service",
                  "explanation": "Los archivos .service (unit files) en systemd definen cómo se inicia, detiene y gestiona un servicio, incluyendo comandos, dependencias y configuración."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-cual es uno de los beneficios principales de la automatizaci",
              "question": "¿Cuál es uno de los beneficios principales de la automatización en administración del sistema?",
              "options": [
                {
                  "id": "a",
                  "text": "Reducir errores y mejorar la consistencia operativa",
                  "explanation": "La automatización permite ejecutar tareas de forma repetible y fiable, reduciendo errores humanos y manteniendo la consistencia en los sistemas."
                },
                {
                  "id": "b",
                  "text": "Eliminar logs",
                  "explanation": "Los logs siguen siendo necesarios."
                },
                {
                  "id": "c",
                  "text": "Aumentar intervención manual",
                  "explanation": "Es justo lo contrario."
                },
                {
                  "id": "d",
                  "text": "Evitar CI/CD",
                  "explanation": "La automatización es base de CI/CD."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que protocolo se menciona como esencial para sincronizar tie",
              "question": "¿Qué protocolo se menciona como esencial para sincronizar tiempos en sistemas distribuidos?",
              "options": [
                {
                  "id": "a",
                  "text": "SMB",
                  "explanation": "Compartición de archivos."
                },
                {
                  "id": "b",
                  "text": "NTP",
                  "explanation": "NTP (Network Time Protocol) se utiliza para sincronizar la hora entre sistemas, algo clave en entornos distribuidos."
                },
                {
                  "id": "c",
                  "text": "SNMP",
                  "explanation": "Monitorización de red."
                },
                {
                  "id": "d",
                  "text": "FTP",
                  "explanation": "Transferencia de archivos."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que herramienta permite recuperar un secreto seguro en bash ",
              "question": "¿Qué herramienta permite recuperar un secreto seguro en Bash según el ejemplo de UT3?",
              "options": [
                {
                  "id": "a",
                  "text": "cfgtool",
                  "explanation": "No es una herramienta estándar para secretos."
                },
                {
                  "id": "b",
                  "text": "ldapquery",
                  "explanation": "Se usa para consultas LDAP."
                },
                {
                  "id": "c",
                  "text": "vault",
                  "explanation": "Vault (como HashiCorp Vault) permite gestionar y recuperar secretos de forma segura, evitando exponer credenciales en scripts."
                },
                {
                  "id": "d",
                  "text": "passkeyctl",
                  "explanation": "No es habitual en este contexto."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que elemento mejora la trazabilidad y permite auditorias fia",
              "question": "¿Qué elemento mejora la trazabilidad y permite auditorías fiables en automatización?",
              "options": [
                {
                  "id": "a",
                  "text": "Variables de entorno",
                  "explanation": "No sirven para auditoría."
                },
                {
                  "id": "b",
                  "text": "Rutas relativas",
                  "explanation": "No mejoran trazabilidad."
                },
                {
                  "id": "c",
                  "text": "Logging estructurado",
                  "explanation": "El logging estructurado permite registrar información de forma organizada, facilitando la trazabilidad y auditorías."
                },
                {
                  "id": "d",
                  "text": "Procesos interactivos",
                  "explanation": "Dificultan la automatización."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-cual es una ventaja de los systemd timers frente a cron",
              "question": "¿Cuál es una ventaja de los systemd timers frente a cron?",
              "options": [
                {
                  "id": "a",
                  "text": "No requieren unit files",
                  "explanation": "Sí los requieren (.service y .timer)."
                },
                {
                  "id": "b",
                  "text": "Ofrecen trazabilidad integrada mediante journal",
                  "explanation": "Los systemd timers se integran con el journal, permitiendo ver logs y ejecución de tareas de forma más completa que cron."
                },
                {
                  "id": "c",
                  "text": "No soportan recurrencia",
                  "explanation": "Sí la soportan."
                },
                {
                  "id": "d",
                  "text": "No pueden reiniciarse servicios",
                  "explanation": "Sí pueden gestionarlos."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut3-que parametro en systemd permite limitar el numero de descri",
              "question": "¿Qué parámetro en systemd permite limitar el número de descriptores abiertos?",
              "options": [
                {
                  "id": "a",
                  "text": "TimeoutStartSec",
                  "explanation": "Tiempo de espera al iniciar."
                },
                {
                  "id": "b",
                  "text": "LimitNOFILE",
                  "explanation": "LimitNOFILE define el número máximo de descriptores de archivo que puede usar un servicio en systemd."
                },
                {
                  "id": "c",
                  "text": "CPUQuota",
                  "explanation": "Limita CPU."
                },
                {
                  "id": "d",
                  "text": "RestrictFileDescriptor",
                  "explanation": "No es un parámetro válido en systemd."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut4",
          "title": "Unidad 4",
          "questions": [
            {
              "id": "aso-ut4-que herramienta permite registro detallado de i o en sesione",
              "question": "¿Qué herramienta permite registro detallado de I/O en sesiones?",
              "options": [
                {
                  "id": "a",
                  "text": "dnf",
                  "explanation": "Gestor de paquetes."
                },
                {
                  "id": "b",
                  "text": "tlog",
                  "explanation": "tlog permite registrar de forma detallada las entradas y salidas (I/O) de sesiones, útil para auditoría y seguridad."
                },
                {
                  "id": "c",
                  "text": "curl",
                  "explanation": "Transferencia de datos por red."
                },
                {
                  "id": "d",
                  "text": "scp",
                  "explanation": "Copia de archivos por SSH."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que funcion tiene hsm kms",
              "question": "¿Qué función tiene HSM/KMS?",
              "options": [
                {
                  "id": "a",
                  "text": "Transmitir video",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "b",
                  "text": "Gestionar roles",
                  "explanation": "Eso sería de herramientas como AWX."
                },
                {
                  "id": "c",
                  "text": "Almacenar claves de forma segura",
                  "explanation": "Los sistemas HSM/KMS se utilizan para gestionar y almacenar claves criptográficas de forma segura, protegiéndolas frente a accesos no autorizados."
                },
                {
                  "id": "d",
                  "text": "Reemplazar SIEM",
                  "explanation": "No cumplen esa función."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que funcion cumple ocsp en criptografia operativa",
              "question": "¿Qué función cumple OCSP en criptografía operativa?",
              "options": [
                {
                  "id": "a",
                  "text": "Generar claves",
                  "explanation": "No es su función."
                },
                {
                  "id": "b",
                  "text": "Gestionar estados de revocación",
                  "explanation": "OCSP (Online Certificate Status Protocol) permite comprobar si un certificado digital ha sido revocado o sigue siendo válido en tiempo real."
                },
                {
                  "id": "c",
                  "text": "Firmar playbooks",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "d",
                  "text": "Crear VPNs",
                  "explanation": "No está relacionado con OCSP."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que herramienta proporciona reporting de compliance en puppe",
              "question": "¿Qué herramienta proporciona reporting de compliance en Puppet?",
              "options": [
                {
                  "id": "a",
                  "text": "Nmap",
                  "explanation": "Escaneo de red."
                },
                {
                  "id": "b",
                  "text": "Git",
                  "explanation": "Control de versiones."
                },
                {
                  "id": "c",
                  "text": "PuppetDB",
                  "explanation": "PuppetDB almacena y permite consultar datos de nodos gestionados por Puppet, incluyendo reportes de estado y compliance."
                },
                {
                  "id": "d",
                  "text": "SSH",
                  "explanation": "Acceso remoto seguro."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-cual es una medida de hardening tipica en ssh",
              "question": "¿Cuál es una medida de hardening típica en SSH?",
              "options": [
                {
                  "id": "a",
                  "text": "PasswordAuthentication",
                  "explanation": "Es menos seguro que usar claves."
                },
                {
                  "id": "b",
                  "text": "RSA 1024",
                  "explanation": "Considerado inseguro hoy en día."
                },
                {
                  "id": "c",
                  "text": "Usar algoritmos modernos como chacha20-poly1305",
                  "explanation": "El hardening en SSH incluye usar algoritmos criptográficos modernos y seguros, como chacha0-poly05, para proteger las comunicaciones."
                },
                {
                  "id": "d",
                  "text": "AllowTcpForwarding siempre",
                  "explanation": "Puede aumentar riesgos si no se controla."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-cual es un ejemplo de mala practica en bastion hosts",
              "question": "¿Cuál es un ejemplo de mala práctica en bastion hosts?",
              "options": [
                {
                  "id": "a",
                  "text": "TrustedUserCAKeys",
                  "explanation": "Mejora la gestión de acceso."
                },
                {
                  "id": "b",
                  "text": "Integración con SIEM",
                  "explanation": "Buena práctica de seguridad."
                },
                {
                  "id": "c",
                  "text": "Permitir acceso directo root",
                  "explanation": "Permitir acceso directo como root en un bastion host es una mala práctica porque elimina control y trazabilidad, aumentando el riesgo de seguridad."
                },
                {
                  "id": "d",
                  "text": "Session recording",
                  "explanation": "Mejora auditoría."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que riesgo existe en wireguard si allowedips esta mal config",
              "question": "¿Qué riesgo existe en WireGuard si AllowedIPs está mal configurado?",
              "options": [
                {
                  "id": "a",
                  "text": "Interfaz",
                  "explanation": "No depende directamente de esto."
                },
                {
                  "id": "b",
                  "text": "DNS",
                  "explanation": "No es el problema principal."
                },
                {
                  "id": "c",
                  "text": "Un peer puede reclamar rutas indebidas",
                  "explanation": "En WireGuard, AllowedIPs define qué tráfico puede enrutar cada peer. Si está mal configurado, un peer podría anunciar rutas que no le corresponden, provocando problemas de seguridad o tráfico indebido."
                },
                {
                  "id": "d",
                  "text": "Clave privada",
                  "explanation": "No se pierde por esta configuración."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que se recomienda para vpns seguras",
              "question": "¿Qué se recomienda para VPNs seguras?",
              "options": [
                {
                  "id": "a",
                  "text": "No registrar actividad",
                  "explanation": "Reduce visibilidad y seguridad."
                },
                {
                  "id": "b",
                  "text": "Aceptar cualquier certificado",
                  "explanation": "Muy inseguro (ataques MITM)."
                },
                {
                  "id": "c",
                  "text": "Forzar DNS interno y cifrados robustos",
                  "explanation": "Para una VPN segura se recomienda usar cifrados fuertes y controlar el tráfico (por ejemplo, DNS interno) para evitar fugas de información."
                },
                {
                  "id": "d",
                  "text": "Split-tunnel sin control",
                  "explanation": "Puede provocar fugas de tráfico."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que ventaja ofrece puppet respecto a ansible",
              "question": "¿Qué ventaja ofrece Puppet respecto a Ansible?",
              "options": [
                {
                  "id": "a",
                  "text": "No requiere certificado",
                  "explanation": "Puppet sí usa certificados."
                },
                {
                  "id": "b",
                  "text": "Pull automático y reporting continuo",
                  "explanation": "Puppet funciona con un modelo pull (agente-servidor) y ofrece reporting continuo, lo que facilita el control del estado y compliance de los sistemas."
                },
                {
                  "id": "c",
                  "text": "Orquestación ad-hoc",
                  "explanation": "Eso es más típico de Ansible."
                },
                {
                  "id": "d",
                  "text": "Menor necesidad de agente",
                  "explanation": "Puppet requiere agente."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que metrica ayuda a detectar drift en cm",
              "question": "¿Qué métrica ayuda a detectar drift en CM?",
              "options": [
                {
                  "id": "a",
                  "text": "CPU",
                  "explanation": "No mide configuración."
                },
                {
                  "id": "b",
                  "text": "Tiempo de arranque",
                  "explanation": "No indica drift."
                },
                {
                  "id": "c",
                  "text": "Usuarios conectados",
                  "explanation": "No está relacionado con CM."
                },
                {
                  "id": "d",
                  "text": "Tasa de cambios inesperados por run",
                  "explanation": "El drift es la desviación del estado deseado. Medir la tasa de cambios inesperados en cada ejecución (run) ayuda a detectar cuándo los sistemas se alejan de la configuración prevista."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que caracteristica distingue a los servicios orientados a se",
              "question": "¿Qué característica distingue a los servicios orientados a sesión?",
              "options": [
                {
                  "id": "a",
                  "text": "No permiten registro",
                  "explanation": "Sí pueden registrar actividad."
                },
                {
                  "id": "b",
                  "text": "Permiten interacción directa y continua",
                  "explanation": "Los servicios orientados a sesión permiten interacción continua con el usuario (por ejemplo, SSH), manteniendo una sesión activa."
                },
                {
                  "id": "c",
                  "text": "No requieren autenticación",
                  "explanation": "Normalmente sí la requieren."
                },
                {
                  "id": "d",
                  "text": "Idempotentes",
                  "explanation": "Eso aplica más a automatización, no a sesiones."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que elemento es clave en un despliegue canary",
              "question": "¿Qué elemento es clave en un despliegue canary?",
              "options": [
                {
                  "id": "a",
                  "text": "Monitorización de métricas antes de avanzar",
                  "explanation": "En un despliegue canary, se libera el cambio a una pequeña parte del sistema y se monitorizan métricas antes de expandirlo al resto."
                },
                {
                  "id": "b",
                  "text": "Promover sin verificación",
                  "explanation": "Muy arriesgado."
                },
                {
                  "id": "c",
                  "text": "Deshabilitar health checks",
                  "explanation": "Empeora el control."
                },
                {
                  "id": "d",
                  "text": "Toda la flota",
                  "explanation": "Eso no es canary, es despliegue total."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que practica reduce la exposicion de credenciales privilegia",
              "question": "¿Qué práctica reduce la exposición de credenciales privilegiadas?",
              "options": [
                {
                  "id": "a",
                  "text": "Sin MFA",
                  "explanation": "Muy inseguro."
                },
                {
                  "id": "b",
                  "text": "Permisos permanentes",
                  "explanation": "Aumenta el riesgo."
                },
                {
                  "id": "c",
                  "text": "JIT con certificados de corta duración",
                  "explanation": "El acceso JIT (Just-In-Time) con certificados de corta duración reduce el tiempo en que las credenciales son válidas, disminuyendo el riesgo de exposición."
                },
                {
                  "id": "d",
                  "text": "Claves compartidas",
                  "explanation": "Mala práctica de seguridad."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que componente garantiza la integridad de logs de sesiones",
              "question": "¿Qué componente garantiza la integridad de logs de sesiones?",
              "options": [
                {
                  "id": "a",
                  "text": "Hashing y firma de artefactos",
                  "explanation": "El hashing y la firma permiten verificar que los logs no han sido modificados, garantizando su integridad."
                },
                {
                  "id": "b",
                  "text": "Cron jobs",
                  "explanation": "Programación de tareas."
                },
                {
                  "id": "c",
                  "text": "WinRM",
                  "explanation": "Comunicación remota en Windows."
                },
                {
                  "id": "d",
                  "text": "X11Forwarding",
                  "explanation": "Redirección gráfica."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que elemento es fundamental en una arquitectura de bastion h",
              "question": "¿Qué elemento es fundamental en una arquitectura de bastion host?",
              "options": [
                {
                  "id": "a",
                  "text": "Túneles sin control",
                  "explanation": "Riesgo de seguridad."
                },
                {
                  "id": "b",
                  "text": "Root por contraseña",
                  "explanation": "Muy inseguro."
                },
                {
                  "id": "c",
                  "text": "Session recording obligatorio",
                  "explanation": "El session recording permite auditar todo lo que ocurre en el bastion host, siendo clave para seguridad y trazabilidad."
                },
                {
                  "id": "d",
                  "text": "Deshabilitar MFA",
                  "explanation": "Reduce seguridad."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que debe incluir un runbook",
              "question": "¿Qué debe incluir un runbook?",
              "options": [
                {
                  "id": "a",
                  "text": "Opiniones",
                  "explanation": "No aportan valor técnico."
                },
                {
                  "id": "b",
                  "text": "Contraseñas en texto claro",
                  "explanation": "Mala práctica de seguridad."
                },
                {
                  "id": "c",
                  "text": "Sin registro",
                  "explanation": "Impide trazabilidad."
                },
                {
                  "id": "d",
                  "text": "Pasos reproducibles y criterios de verificación",
                  "explanation": "Un runbook debe contener instrucciones claras, repetibles y con criterios de verificación para asegurar que las tareas se ejecutan correctamente."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que ventaja principal ofrece un modelo agentless como ansibl",
              "question": "¿Qué ventaja principal ofrece un modelo agentless como Ansible?",
              "options": [
                {
                  "id": "a",
                  "text": "No requiere agentes instalados",
                  "explanation": "El modelo agentless de Ansible significa que no necesitas instalar agentes en los nodos; se conecta normalmente por SSH, simplificando la gestión."
                },
                {
                  "id": "b",
                  "text": "Remediación continua",
                  "explanation": "Eso es más típico de herramientas con agente (como Puppet)."
                },
                {
                  "id": "c",
                  "text": "Reporting avanzado",
                  "explanation": "No es su principal ventaja."
                },
                {
                  "id": "d",
                  "text": "Redes inestables",
                  "explanation": "No es una característica clave."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que patron operativo evita almacenar secretos en repositorio",
              "question": "¿Qué patrón operativo evita almacenar secretos en repositorios?",
              "options": [
                {
                  "id": "a",
                  "text": "SSH",
                  "explanation": "No gestiona secretos."
                },
                {
                  "id": "b",
                  "text": "Texto plano",
                  "explanation": "Mala práctica."
                },
                {
                  "id": "c",
                  "text": "Base64",
                  "explanation": "No es seguridad, solo codificación."
                },
                {
                  "id": "d",
                  "text": "Uso de Vault con inyección dinámica",
                  "explanation": "Usar Vault con inyección dinámica permite obtener secretos en tiempo real sin guardarlos en el código o repositorios."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-cual es un riesgo de sesiones orientadas a interaccion",
              "question": "¿Cuál es un riesgo de sesiones orientadas a interacción?",
              "options": [
                {
                  "id": "a",
                  "text": "Cifrado",
                  "explanation": "No es un riesgo, es una característica."
                },
                {
                  "id": "b",
                  "text": "No requieren auditoría",
                  "explanation": "Sí la requieren."
                },
                {
                  "id": "c",
                  "text": "Pueden introducir cambios no reproducibles",
                  "explanation": "Las sesiones interactivas (como SSH manual) pueden generar cambios no documentados ni repetibles, lo que dificulta la automatización y auditoría."
                },
                {
                  "id": "d",
                  "text": "Idempotentes",
                  "explanation": "Justo lo contrario, no lo son."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut4-que define el principio de idempotencia",
              "question": "¿Qué define el principio de idempotencia?",
              "options": [
                {
                  "id": "a",
                  "text": "La ejecución repetida produce el mismo estado",
                  "explanation": "La idempotencia significa que puedes ejecutar una acción varias veces y el resultado final será siempre el mismo, sin efectos secundarios."
                },
                {
                  "id": "b",
                  "text": "Configuración previa",
                  "explanation": "No tiene relación directa."
                },
                {
                  "id": "c",
                  "text": "Git",
                  "explanation": "No depende de repositorios."
                },
                {
                  "id": "d",
                  "text": "Efectos distintos",
                  "explanation": "Es justo lo contrario de idempotencia."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut5",
          "title": "Unidad 5",
          "questions": [
            {
              "id": "aso-ut5-que tipo de grupo en ldap suele incluir memberuid",
              "question": "¿Qué tipo de grupo en LDAP suele incluir memberUid?",
              "options": [
                {
                  "id": "a",
                  "text": "shadowAccount",
                  "explanation": "Relacionado con contraseñas."
                },
                {
                  "id": "b",
                  "text": "inetOrgPerson",
                  "explanation": "Define usuarios, no grupos."
                },
                {
                  "id": "c",
                  "text": "groupOfNames",
                  "explanation": "Usa “member”, no “memberUid”."
                },
                {
                  "id": "d",
                  "text": "posixGroup",
                  "explanation": "El objeto posixGroup utiliza el atributo memberUid para listar los usuarios que pertenecen al grupo."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que identifica de forma unica a cada entrada en un servicio ",
              "question": "¿Qué identifica de forma única a cada entrada en un servicio LDAP?",
              "options": [
                {
                  "id": "a",
                  "text": "CN=config",
                  "explanation": "Es una entrada concreta, no un identificador general."
                },
                {
                  "id": "b",
                  "text": "ObjectClass",
                  "explanation": "Define el tipo de objeto, no lo identifica."
                },
                {
                  "id": "c",
                  "text": "UID Number",
                  "explanation": "Puede repetirse o no ser único globalmente."
                },
                {
                  "id": "d",
                  "text": "Distinguished Name (DN)",
                  "explanation": "El DN (Distinguished Name) identifica de forma única cada entrada en el directorio LDAP, indicando su ubicación jerárquica."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que componente define que atributos y objectclasses pueden e",
              "question": "¿Qué componente define qué atributos y objectClasses pueden existir en el directorio?",
              "options": [
                {
                  "id": "a",
                  "text": "LDIF",
                  "explanation": "Formato para importar/exportar datos."
                },
                {
                  "id": "b",
                  "text": "ACLs",
                  "explanation": "Controlan permisos de acceso."
                },
                {
                  "id": "c",
                  "text": "Bind DN",
                  "explanation": "Usuario con el que se autentica."
                },
                {
                  "id": "d",
                  "text": "Esquema",
                  "explanation": "El esquema LDAP define qué atributos y objectClasses pueden existir, es decir, la estructura y reglas del directorio."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que herramienta usa macos para integrarse con active directo",
              "question": "¿Qué herramienta usa macOS para integrarse con Active Directory?",
              "options": [
                {
                  "id": "a",
                  "text": "nsswitch",
                  "explanation": "Configuración de resolución en Linux."
                },
                {
                  "id": "b",
                  "text": "sssd",
                  "explanation": "Integración con LDAP/AD en Linux."
                },
                {
                  "id": "c",
                  "text": "dsconfigad",
                  "explanation": "En macOS, dsconfigad se utiliza para unir el equipo a un dominio de Active Directory y gestionarlo."
                },
                {
                  "id": "d",
                  "text": "samba-tool",
                  "explanation": "Administración de dominios Samba."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que protocolo permite implementar single sign on sso integra",
              "question": "¿Qué protocolo permite implementar Single Sign-On (SSO) integrado con el directorio?",
              "options": [
                {
                  "id": "a",
                  "text": "FTP",
                  "explanation": "Transferencia de archivos."
                },
                {
                  "id": "b",
                  "text": "Kerberos",
                  "explanation": "Kerberos permite autenticación centralizada y es la base del SSO, evitando introducir credenciales repetidamente."
                },
                {
                  "id": "c",
                  "text": "DNSSEC",
                  "explanation": "Seguridad en DNS."
                },
                {
                  "id": "d",
                  "text": "SSH",
                  "explanation": "Acceso remoto, no SSO."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que mecanismo permite registrar cambios realizados en openld",
              "question": "¿Qué mecanismo permite registrar cambios realizados en OpenLDAP?",
              "options": [
                {
                  "id": "a",
                  "text": "ppolicy",
                  "explanation": "Políticas de contraseñas."
                },
                {
                  "id": "b",
                  "text": "overlay auditlog",
                  "explanation": "El overlay auditlog en OpenLDAP registra todas las modificaciones realizadas en el directorio, permitiendo auditoría."
                },
                {
                  "id": "c",
                  "text": "slappasswd",
                  "explanation": "Genera hashes de contraseñas."
                },
                {
                  "id": "d",
                  "text": "sssd cache",
                  "explanation": "Caché de autenticación, no logging."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que herramienta permite exportar toda la base de datos ldap ",
              "question": "¿Qué herramienta permite exportar toda la base de datos LDAP a un archivo LDIF?",
              "options": [
                {
                  "id": "a",
                  "text": "slapcat",
                  "explanation": "slapcat permite exportar toda la base de datos LDAP a un archivo LDIF."
                },
                {
                  "id": "b",
                  "text": "slappasswd",
                  "explanation": "Genera hashes de contraseñas."
                },
                {
                  "id": "c",
                  "text": "ldapwhoami",
                  "explanation": "Muestra la identidad autenticada."
                },
                {
                  "id": "d",
                  "text": "ldapsearch",
                  "explanation": "Consulta entradas, no exporta toda la BD."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que comando permite restaurar datos desde un archivo ldif",
              "question": "¿Qué comando permite restaurar datos desde un archivo LDIF?",
              "options": [
                {
                  "id": "a",
                  "text": "ldapmodify",
                  "explanation": "Modifica entradas existentes."
                },
                {
                  "id": "b",
                  "text": "slapadd",
                  "explanation": "slapadd permite cargar/restaurar datos en LDAP desde un archivo LDIF directamente en la base de datos."
                },
                {
                  "id": "c",
                  "text": "ldapdelete",
                  "explanation": "Elimina entradas."
                },
                {
                  "id": "d",
                  "text": "sssdctl",
                  "explanation": "Gestiona SSSD, no restaura LDAP."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que practica es esencial para garantizar continuidad operati",
              "question": "¿Qué práctica es esencial para garantizar continuidad operativa?",
              "options": [
                {
                  "id": "a",
                  "text": "No backups",
                  "explanation": "Muy mala práctica."
                },
                {
                  "id": "b",
                  "text": "Manual",
                  "explanation": "Poco escalable y propenso a errores."
                },
                {
                  "id": "c",
                  "text": "Sin control",
                  "explanation": "Riesgo alto de fallos."
                },
                {
                  "id": "d",
                  "text": "Documentar estructura, esquema y procedimientos",
                  "explanation": "Documentar todo (estructura, esquema, procesos) permite recuperar, mantener y escalar sistemas, asegurando continuidad operativa."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que comando powershell permite unir un equipo windows a un d",
              "question": "¿Qué comando PowerShell permite unir un equipo Windows a un dominio AD?",
              "options": [
                {
                  "id": "a",
                  "text": "Register-Domain",
                  "explanation": "No es un cmdlet válido."
                },
                {
                  "id": "b",
                  "text": "Join-ADGroup",
                  "explanation": "No existe como comando estándar."
                },
                {
                  "id": "c",
                  "text": "Connect-AD",
                  "explanation": "No es un cmdlet válido."
                },
                {
                  "id": "d",
                  "text": "Add-Computer",
                  "explanation": "Add-Computer es el cmdlet de PowerShell que permite unir un equipo a un dominio de Active Directory."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que elemento se recomienda documentar siempre en una implant",
              "question": "¿Qué elemento se recomienda documentar siempre en una implantación de directorio?",
              "options": [
                {
                  "id": "a",
                  "text": "Logs de red",
                  "explanation": "No es lo esencial a documentar."
                },
                {
                  "id": "b",
                  "text": "MAC",
                  "explanation": "No es relevante para el diseño del directorio."
                },
                {
                  "id": "c",
                  "text": "Estructura del árbol LDAP",
                  "explanation": "Documentar la estructura del árbol LDAP (DIT) es clave para entender y mantener el directorio."
                },
                {
                  "id": "d",
                  "text": "Swap",
                  "explanation": "No tiene relación."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-cual es una buena practica al configurar cuentas de servicio",
              "question": "¿Cuál es una buena práctica al configurar cuentas de servicio (Bind DN)?",
              "options": [
                {
                  "id": "a",
                  "text": "Evitar TLS",
                  "explanation": "Inseguro."
                },
                {
                  "id": "b",
                  "text": "Admin total",
                  "explanation": "Exceso de privilegios."
                },
                {
                  "id": "c",
                  "text": "Acceso anónimo",
                  "explanation": "Riesgo de seguridad."
                },
                {
                  "id": "d",
                  "text": "Utilizar permisos mínimos necesarios",
                  "explanation": "Aplicar el principio de mínimo privilegio reduce riesgos: la cuenta Bind DN solo debe tener los permisos estrictamente necesarios."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que archivo contiene entradas ldif para crear usuarios en op",
              "question": "¿Qué archivo contiene entradas LDIF para crear usuarios en OpenLDAP?",
              "options": [
                {
                  "id": "a",
                  "text": "sssd.conf",
                  "explanation": "Configuración de autenticación."
                },
                {
                  "id": "b",
                  "text": "audit.log",
                  "explanation": "Registro de eventos."
                },
                {
                  "id": "c",
                  "text": "add-user.ldif",
                  "explanation": "Un archivo como add-user.ldif contiene las entradas necesarias en formato LDIF para crear usuarios en OpenLDAP."
                },
                {
                  "id": "d",
                  "text": "tls.ldif",
                  "explanation": "Configuración de TLS, no usuarios."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que parametro debe configurarse para asegurar comunicacion c",
              "question": "¿Qué parámetro debe configurarse para asegurar comunicación cifrada en OpenLDAP?",
              "options": [
                {
                  "id": "a",
                  "text": "olcOverlay",
                  "explanation": "Configura overlays."
                },
                {
                  "id": "b",
                  "text": "olcDbIndex",
                  "explanation": "Índices de base de datos."
                },
                {
                  "id": "c",
                  "text": "olcAuditlogSuccess",
                  "explanation": "Relacionado con logging, no cifrado."
                },
                {
                  "id": "d",
                  "text": "olcTLSCertificateFile",
                  "explanation": "olcTLSCertificateFile define el certificado TLS usado por OpenLDAP, necesario para cifrar la comunicación."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que comando permite realizar busquedas en openldap",
              "question": "¿Qué comando permite realizar búsquedas en OpenLDAP?",
              "options": [
                {
                  "id": "a",
                  "text": "ldapsearch",
                  "explanation": "ldapsearch se utiliza para consultar y buscar entradas dentro de un directorio LDAP."
                },
                {
                  "id": "b",
                  "text": "ldapmodify",
                  "explanation": "Modifica entradas."
                },
                {
                  "id": "c",
                  "text": "slapindex",
                  "explanation": "Reindexa la base de datos."
                },
                {
                  "id": "d",
                  "text": "ldapdelete",
                  "explanation": "Elimina entradas."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que comando permite generar contrasenas cifradas para ldap",
              "question": "¿Qué comando permite generar contraseñas cifradas para LDAP?",
              "options": [
                {
                  "id": "a",
                  "text": "slapindex",
                  "explanation": "Reindexa la base de datos."
                },
                {
                  "id": "b",
                  "text": "slappasswd",
                  "explanation": "slappasswd se utiliza para generar hashes de contraseñas que luego se pueden usar en OpenLDAP."
                },
                {
                  "id": "c",
                  "text": "ldapsearch",
                  "explanation": "Consulta entradas."
                },
                {
                  "id": "d",
                  "text": "ldapadd",
                  "explanation": "Añade entradas al directorio."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que filtro ldap buscaria todos los usuarios activos con obje",
              "question": "¿Qué filtro LDAP buscaría todos los usuarios activos con objectClass posixAccount?",
              "options": [
                {
                  "id": "a",
                  "text": "groupOfNames",
                  "explanation": "Busca grupos, no usuarios."
                },
                {
                  "id": "b",
                  "text": "uidNumber>=1000",
                  "explanation": "Filtra por UID, no garantiza activos ni objectClass."
                },
                {
                  "id": "c",
                  "text": "(&(objectClass=posixAccount)(accountStatus=active))",
                  "explanation": "Este filtro usa un AND (&) para buscar entradas que cumplan: objectClass=posixAccount (usuarios) accountStatus=active (activos)"
                },
                {
                  "id": "d",
                  "text": "cn=*",
                  "explanation": "Devuelve todo, no filtra."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que comando permite comprobar la identidad con la que se eje",
              "question": "¿Qué comando permite comprobar la identidad con la que se ejecuta un bind LDAP?",
              "options": [
                {
                  "id": "a",
                  "text": "ldapmodify",
                  "explanation": "Modifica entradas."
                },
                {
                  "id": "b",
                  "text": "ldapsearch",
                  "explanation": "Consulta entradas."
                },
                {
                  "id": "c",
                  "text": "slapcat",
                  "explanation": "Exporta la base de datos."
                },
                {
                  "id": "d",
                  "text": "ldapwhoami",
                  "explanation": "ldapwhoami muestra con qué identidad estás autenticado (bind) en el servidor LDAP."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-que opcion en sssd fuerza el uso de certificados tls",
              "question": "¿Qué opción en SSSD fuerza el uso de certificados TLS?",
              "options": [
                {
                  "id": "a",
                  "text": "enumerate",
                  "explanation": "Lista usuarios/grupos."
                },
                {
                  "id": "b",
                  "text": "ldap_tls_reqcert",
                  "explanation": "ldap_tls_reqcert define cómo SSSD valida certificados TLS (por ejemplo, demand obliga a que sean válidos), forzando comunicación segura."
                },
                {
                  "id": "c",
                  "text": "cache_credentials",
                  "explanation": "Cachea credenciales."
                },
                {
                  "id": "d",
                  "text": "id_provider",
                  "explanation": "Define el proveedor de identidad."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut5-cual es la funcion principal de un servicio de directorio",
              "question": "¿Cuál es la función principal de un servicio de directorio?",
              "options": [
                {
                  "id": "a",
                  "text": "DNS",
                  "explanation": "Función distinta."
                },
                {
                  "id": "b",
                  "text": "Logs",
                  "explanation": "No es su función principal."
                },
                {
                  "id": "c",
                  "text": "Actuar como repositorio centralizado de identidades y políticas",
                  "explanation": "Un servicio de directorio (como LDAP o Active Directory) centraliza usuarios, grupos, permisos y políticas, facilitando la gestión."
                },
                {
                  "id": "d",
                  "text": "Solo contraseñas",
                  "explanation": "Es mucho más amplio."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut6",
          "title": "Unidad 6",
          "questions": [
            {
              "id": "aso-ut6-que comando permite unir un servidor linux a un dominio acti",
              "question": "¿Qué comando permite unir un servidor Linux a un dominio Active Directory?",
              "options": [
                {
                  "id": "a",
                  "text": "join-ad",
                  "explanation": "No es un comando estándar."
                },
                {
                  "id": "b",
                  "text": "ldap-add",
                  "explanation": "Incorrecto (y sería ldapadd)."
                },
                {
                  "id": "c",
                  "text": "realmd join",
                  "explanation": "realmd join se utiliza en Linux para integrar el sistema en un dominio Active Directory, gestionando autenticación y configuración automáticamente."
                },
                {
                  "id": "d",
                  "text": "cups-ad-connect",
                  "explanation": "No existe para este propósito."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-donde se configuran los permisos de impresion en cups",
              "question": "¿Dónde se configuran los permisos de impresión en CUPS?",
              "options": [
                {
                  "id": "a",
                  "text": "/etc/cups/cupsd.conf",
                  "explanation": "En /etc/cups/cupsd.conf se configuran las políticas de acceso y permisos del servidor de impresión CUPS."
                },
                {
                  "id": "b",
                  "text": "error.log",
                  "explanation": "Solo registros de errores."
                },
                {
                  "id": "c",
                  "text": "drivers",
                  "explanation": "Controladores de impresoras."
                },
                {
                  "id": "d",
                  "text": "shadow",
                  "explanation": "Contraseñas del sistema."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que sistema operativo utiliza cups como base de impresion",
              "question": "¿Qué sistema operativo utiliza CUPS como base de impresión?",
              "options": [
                {
                  "id": "a",
                  "text": "Android",
                  "explanation": "No usa CUPS como base principal."
                },
                {
                  "id": "b",
                  "text": "Windows",
                  "explanation": "Usa su propio sistema de impresión."
                },
                {
                  "id": "c",
                  "text": "FreeBSD únicamente",
                  "explanation": "No es exclusivo de FreeBSD."
                },
                {
                  "id": "d",
                  "text": "macOS y Linux",
                  "explanation": "CUPS (Common UNIX Printing System) es el sistema de impresión utilizado principalmente en Linux y macOS."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-en que puerto trabaja tradicionalmente lpd",
              "question": "¿En qué puerto trabaja tradicionalmente LPD?",
              "options": [
                {
                  "id": "a",
                  "text": "515",
                  "explanation": "El protocolo LPD (Line Printer Daemon) utiliza tradicionalmente el puerto 515."
                },
                {
                  "id": "b",
                  "text": "631",
                  "explanation": "Puerto de CUPS/IPP."
                },
                {
                  "id": "c",
                  "text": "9100",
                  "explanation": "Puerto de impresión RAW (JetDirect)."
                },
                {
                  "id": "d",
                  "text": "445",
                  "explanation": "SMB (Windows)."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que se recomienda documentar en un servidor de impresion",
              "question": "¿Qué se recomienda documentar en un servidor de impresión?",
              "options": [
                {
                  "id": "a",
                  "text": "Texto claro",
                  "explanation": "Mala práctica de seguridad."
                },
                {
                  "id": "b",
                  "text": "Solo marca",
                  "explanation": "Información insuficiente."
                },
                {
                  "id": "c",
                  "text": "Arquitectura, permisos, colas, políticas y backups",
                  "explanation": "Para una buena gestión, se debe documentar todo el sistema de impresión: estructura, accesos, colas y copias de seguridad."
                },
                {
                  "id": "d",
                  "text": "Solo IP",
                  "explanation": "Muy incompleto."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que comando permite cancelar un trabajo especifico en linux",
              "question": "¿Qué comando permite cancelar un trabajo específico en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "rm -rf",
                  "explanation": "Peligroso, no relacionado con impresión."
                },
                {
                  "id": "b",
                  "text": "cancel <job-id>",
                  "explanation": "El comando cancel permite eliminar un trabajo de impresión específico usando su ID."
                },
                {
                  "id": "c",
                  "text": "stopjob",
                  "explanation": "No es un comando estándar."
                },
                {
                  "id": "d",
                  "text": "print-del",
                  "explanation": "No existe."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-cual es el puerto asociado al protocolo jetdirect raw",
              "question": "¿Cuál es el puerto asociado al protocolo JetDirect (RAW)?",
              "options": [
                {
                  "id": "a",
                  "text": "8443",
                  "explanation": "HTTPS alternativo."
                },
                {
                  "id": "b",
                  "text": "9100",
                  "explanation": "El protocolo JetDirect (RAW) utiliza el puerto 9100 para enviar trabajos de impresión directamente a la impresora."
                },
                {
                  "id": "c",
                  "text": "515",
                  "explanation": "LPD."
                },
                {
                  "id": "d",
                  "text": "631",
                  "explanation": "CUPS/IPP."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-cual es la funcion principal de un servidor de impresion en ",
              "question": "¿Cuál es la función principal de un servidor de impresión en entornos corporativos?",
              "options": [
                {
                  "id": "a",
                  "text": "Velocidad",
                  "explanation": "No es su función principal."
                },
                {
                  "id": "b",
                  "text": "Sin autenticación",
                  "explanation": "Inseguro."
                },
                {
                  "id": "c",
                  "text": "DNS",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "d",
                  "text": "Centralizar la gestión de impresoras y trabajos de impresión",
                  "explanation": "Un servidor de impresión permite gestionar de forma centralizada las impresoras, colas y trabajos, facilitando control y administración."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que comando de powershell instala el rol de servidor de impr",
              "question": "¿Qué comando de PowerShell instala el rol de servidor de impresión en Windows Server?",
              "options": [
                {
                  "id": "a",
                  "text": "Add-Printer",
                  "explanation": "Añade una impresora, no instala el rol."
                },
                {
                  "id": "b",
                  "text": "New-PrinterRole",
                  "explanation": "No es un cmdlet válido."
                },
                {
                  "id": "c",
                  "text": "Install-WindowsFeature Print-Services -IncludeManagementTools",
                  "explanation": "Este cmdlet instala el rol de servicios de impresión junto con las herramientas de gestión en Windows Server."
                },
                {
                  "id": "d",
                  "text": "Enable-PrintServer",
                  "explanation": "No existe como comando estándar."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que protocolo utiliza windows para compartir impresoras en r",
              "question": "¿Qué protocolo utiliza Windows para compartir impresoras en red?",
              "options": [
                {
                  "id": "a",
                  "text": "SSH",
                  "explanation": "Acceso remoto seguro."
                },
                {
                  "id": "b",
                  "text": "SMB/CIFS",
                  "explanation": "Windows utiliza SMB/CIFS para compartir recursos en red, incluyendo impresoras."
                },
                {
                  "id": "c",
                  "text": "FTP",
                  "explanation": "Transferencia de archivos."
                },
                {
                  "id": "d",
                  "text": "ICMP",
                  "explanation": "Diagnóstico de red (ping)."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que comando en linux permite listar impresoras configuradas ",
              "question": "¿Qué comando en Linux permite listar impresoras configuradas en CUPS?",
              "options": [
                {
                  "id": "a",
                  "text": "cancel -a",
                  "explanation": "Cancela trabajos de impresión."
                },
                {
                  "id": "b",
                  "text": "lsusb",
                  "explanation": "Lista dispositivos USB."
                },
                {
                  "id": "c",
                  "text": "lpadmin",
                  "explanation": "Configura impresoras, no lista."
                },
                {
                  "id": "d",
                  "text": "lpstat -p",
                  "explanation": "lpstat -p muestra las impresoras configuradas en CUPS y su estado."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que protocolo moderno de impresion utiliza http https y sopo",
              "question": "¿Qué protocolo moderno de impresión utiliza HTTP/HTTPS y soporta cifrado TLS?",
              "options": [
                {
                  "id": "a",
                  "text": "SMB/CIFS",
                  "explanation": "Compartición de recursos Windows."
                },
                {
                  "id": "b",
                  "text": "IPP",
                  "explanation": "IPP (Internet Printing Protocol) usa HTTP/HTTPS y permite cifrado TLS, siendo el estándar moderno de impresión."
                },
                {
                  "id": "c",
                  "text": "LPD",
                  "explanation": "Protocolo antiguo sin cifrado."
                },
                {
                  "id": "d",
                  "text": "JetDirect",
                  "explanation": "RAW, sin cifrado."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que servicio debe reiniciarse en windows cuando existen erro",
              "question": "¿Qué servicio debe reiniciarse en Windows cuando existen errores en las colas de impresión?",
              "options": [
                {
                  "id": "a",
                  "text": "firewall",
                  "explanation": "Seguridad de red."
                },
                {
                  "id": "b",
                  "text": "spooler",
                  "explanation": "El servicio Print Spooler gestiona las colas de impresión. Reiniciarlo suele resolver errores de trabajos atascados."
                },
                {
                  "id": "c",
                  "text": "dns",
                  "explanation": "Resolución de nombres."
                },
                {
                  "id": "d",
                  "text": "dhcp",
                  "explanation": "Asignación de IPs."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que arquitectura utilizan los sistemas de impresion en red",
              "question": "¿Qué arquitectura utilizan los sistemas de impresión en red?",
              "options": [
                {
                  "id": "a",
                  "text": "Cliente-servidor",
                  "explanation": "Los sistemas de impresión en red suelen seguir un modelo cliente-servidor, donde un servidor gestiona las impresoras y los clientes envían trabajos."
                },
                {
                  "id": "b",
                  "text": "Anillo token",
                  "explanation": "Topología de red, no arquitectura de impresión."
                },
                {
                  "id": "c",
                  "text": "Broadcast",
                  "explanation": "No es eficiente ni usado para esto."
                },
                {
                  "id": "d",
                  "text": "Peer-to-peer",
                  "explanation": "Puede existir, pero no es el modelo típico corporativo."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que archivo configura la conexion ldap para cups",
              "question": "¿Qué archivo configura la conexión LDAP para CUPS?",
              "options": [
                {
                  "id": "a",
                  "text": "/var/lib/ldap/config",
                  "explanation": "Configuración interna de LDAP."
                },
                {
                  "id": "b",
                  "text": "printers.conf",
                  "explanation": "Configuración de impresoras, no LDAP."
                },
                {
                  "id": "c",
                  "text": "/etc/cups/ldap.conf",
                  "explanation": "El archivo /etc/cups/ldap.conf define cómo CUPS se conecta a un servidor LDAP para obtener información de impresoras."
                },
                {
                  "id": "d",
                  "text": "users.conf",
                  "explanation": "Control de acceso en CUPS."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que protocolo permite impresion desde dispositivos moviles a",
              "question": "¿Qué protocolo permite impresión desde dispositivos móviles Apple sin drivers?",
              "options": [
                {
                  "id": "a",
                  "text": "AirPrint",
                  "explanation": "AirPrint permite imprimir desde dispositivos Apple sin necesidad de instalar drivers, usando IPP y descubrimiento automático."
                },
                {
                  "id": "b",
                  "text": "SMBv1",
                  "explanation": "Protocolo de compartición, obsoleto."
                },
                {
                  "id": "c",
                  "text": "JetDirect",
                  "explanation": "Impresión RAW sin integración Apple."
                },
                {
                  "id": "d",
                  "text": "IPsecPrint",
                  "explanation": "No existe como protocolo estándar."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que servicio de linux debe reiniciarse tras cambios en auten",
              "question": "¿Qué servicio de Linux debe reiniciarse tras cambios en autenticación LDAP/AD?",
              "options": [
                {
                  "id": "a",
                  "text": "sssd",
                  "explanation": "El servicio SSSD (System Security Services Daemon) gestiona la autenticación con LDAP/AD, por lo que debe reiniciarse tras cambios en la configuración."
                },
                {
                  "id": "b",
                  "text": "sshd",
                  "explanation": "Servicio SSH."
                },
                {
                  "id": "c",
                  "text": "dhclient",
                  "explanation": "Gestión de DHCP."
                },
                {
                  "id": "d",
                  "text": "ntp",
                  "explanation": "Sincronización de hora."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut6-que permite una impresora logica",
              "question": "¿Qué permite una impresora lógica?",
              "options": [
                {
                  "id": "a",
                  "text": "USB a red",
                  "explanation": "No es su función."
                },
                {
                  "id": "b",
                  "text": "Drivers",
                  "explanation": "No los sustituye."
                },
                {
                  "id": "c",
                  "text": "Agrupar impresoras físicas bajo una misma cola lógica",
                  "explanation": "Una impresora lógica representa una cola de impresión virtual que puede agrupar una o varias impresoras físicas para gestionar trabajos de forma centralizada."
                },
                {
                  "id": "d",
                  "text": "Permisos",
                  "explanation": "No los deshabilita."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut7",
          "title": "Unidad 7",
          "questions": [
            {
              "id": "aso-ut7-que opcion permite depurar un script bash mostrando cada com",
              "question": "¿Qué opción permite depurar un script Bash mostrando cada comando ejecutado?",
              "options": [
                {
                  "id": "a",
                  "text": "shellcheck",
                  "explanation": "analiza errores, no ejecución."
                },
                {
                  "id": "b",
                  "text": "bash -x",
                  "explanation": "bash -x ejecuta el script en modo debug, mostrando cada comando antes de ejecutarse."
                },
                {
                  "id": "c",
                  "text": "set -e",
                  "explanation": "detiene el script en errores."
                },
                {
                  "id": "d",
                  "text": "trap",
                  "explanation": "captura señales, no depuración."
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que elemento permite encapsular tareas reutilizables dentro ",
              "question": "¿Qué elemento permite encapsular tareas reutilizables dentro de un script?",
              "options": [
                {
                  "id": "a",
                  "text": "Comentarios",
                  "explanation": "solo documentación Arrays → almacenamiento de datos Variables → almacenan valores, no lógica"
                },
                {
                  "id": "b",
                  "text": "Arrays",
                  "explanation": "Arrays no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "c",
                  "text": "Variables",
                  "explanation": "Variables no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "d",
                  "text": "Funciones",
                  "explanation": "Funciones es la respuesta correcta según el contenido técnico de la unidad."
                }
              ],
              "correctOptionId": "d",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que herramienta analiza scripts bash y detecta errores y mal",
              "question": "¿Qué herramienta analiza scripts Bash y detecta errores y malas prácticas?",
              "options": [
                {
                  "id": "a",
                  "text": "grep",
                  "explanation": "búsqueda de texto cron → planificación de tareas awk → procesamiento de texto"
                },
                {
                  "id": "b",
                  "text": "cron",
                  "explanation": "cron no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "c",
                  "text": "ShellCheck",
                  "explanation": "ShellCheck es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "d",
                  "text": "awk",
                  "explanation": "awk no encaja con la definición o el concepto técnico que pide la pregunta."
                }
              ],
              "correctOptionId": "c",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-cual es el objetivo principal del uso de lenguajes de script",
              "question": "¿Cuál es el objetivo principal del uso de lenguajes de scripting en la administración de sistemas?",
              "options": [
                {
                  "id": "a",
                  "text": "Mejorar la interfaz gráfica del sistema",
                  "explanation": "no es su objetivo"
                },
                {
                  "id": "b",
                  "text": "Sustituir por completo al sistema operativo",
                  "explanation": "no sustituye el SO"
                },
                {
                  "id": "c",
                  "text": "Automatizar tareas repetitivas y reducir errores humanos",
                  "explanation": "Automatizar tareas repetitivas y reducir errores humanos es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "d",
                  "text": "Incrementar el consumo de recursos",
                  "explanation": "todo lo contrario, busca eficiencia"
                }
              ],
              "correctOptionId": "c",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-el diseno de scripts modulares mejora principalmente",
              "question": "El diseño de scripts modulares mejora principalmente:",
              "options": [
                {
                  "id": "a",
                  "text": "El rendimiento gráfico",
                  "explanation": "no tiene relación"
                },
                {
                  "id": "b",
                  "text": "La mantenibilidad y reutilización del código",
                  "explanation": "La mantenibilidad y reutilización del código es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "c",
                  "text": "La compatibilidad hardware",
                  "explanation": "no depende del diseño modular"
                },
                {
                  "id": "d",
                  "text": "El consumo de memoria",
                  "explanation": "no es el objetivo principal"
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que caracteristica debe cumplir un proyecto integrador de sc",
              "question": "¿Qué característica debe cumplir un proyecto integrador de scripting según la UT?",
              "options": [
                {
                  "id": "a",
                  "text": "No incluir documentación",
                  "explanation": "siempre debe documentarse"
                },
                {
                  "id": "b",
                  "text": "Ser monolítico",
                  "explanation": "lo contrario de buenas prácticas"
                },
                {
                  "id": "c",
                  "text": "Ser modular y escalable",
                  "explanation": "Ser modular y escalable es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "d",
                  "text": "Usar un único sistema operativo",
                  "explanation": "no es un requisito"
                }
              ],
              "correctOptionId": "c",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que estructura permite repetir acciones mientras se cumpla u",
              "question": "¿Qué estructura permite repetir acciones mientras se cumpla una condición en Bash?",
              "options": [
                {
                  "id": "a",
                  "text": "case",
                  "explanation": "selección de opciones if → condicional, no bucle for → iteración sobre listas o rangos, no condición booleana continua"
                },
                {
                  "id": "b",
                  "text": "while",
                  "explanation": "while es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "c",
                  "text": "if",
                  "explanation": "if no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "d",
                  "text": "for",
                  "explanation": "for no encaja con la definición o el concepto técnico que pide la pregunta."
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que lenguaje se destaca en la ut por su uso en automatizacio",
              "question": "¿Qué lenguaje se destaca en la UT por su uso en automatización avanzada y APIs?",
              "options": [
                {
                  "id": "a",
                  "text": "Groovy",
                  "explanation": "usado en Jenkins, pero menos general Perl → más antiguo Ruby → menos usado en automatización actual"
                },
                {
                  "id": "b",
                  "text": "Python",
                  "explanation": "Python es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "c",
                  "text": "Perl",
                  "explanation": "Perl no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "d",
                  "text": "Ruby",
                  "explanation": "Ruby no encaja con la definición o el concepto técnico que pide la pregunta."
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que estructura se utiliza en powershell para el manejo de er",
              "question": "¿Qué estructura se utiliza en PowerShell para el manejo de errores?",
              "options": [
                {
                  "id": "a",
                  "text": "switch",
                  "explanation": "selección de casos if/else → condiciones, no gestión de errores avanzada for → bucles"
                },
                {
                  "id": "b",
                  "text": "try / catch / finally",
                  "explanation": "try / catch / finally es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "c",
                  "text": "if / else",
                  "explanation": "if / else no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "d",
                  "text": "for",
                  "explanation": "for no encaja con la definición o el concepto técnico que pide la pregunta."
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-cual de las siguientes es una estructura condicional valida ",
              "question": "¿Cuál de las siguientes es una estructura condicional válida en Bash?",
              "options": [
                {
                  "id": "a",
                  "text": "select-if",
                  "explanation": "no existe choose → no existe switch → no es sintaxis de Bash (es de otros lenguajes como C/PowerShell)"
                },
                {
                  "id": "b",
                  "text": "choose",
                  "explanation": "choose no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "c",
                  "text": "switch",
                  "explanation": "switch no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "d",
                  "text": "case",
                  "explanation": "case es la respuesta correcta según el contenido técnico de la unidad."
                }
              ],
              "correctOptionId": "d",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que paradigma distingue principalmente a powershell de bash",
              "question": "¿Qué paradigma distingue principalmente a PowerShell de Bash?",
              "options": [
                {
                  "id": "a",
                  "text": "Programación funcional",
                  "explanation": "no es su característica principal"
                },
                {
                  "id": "b",
                  "text": "Ejecución secuencial",
                  "explanation": "ambos ejecutan secuencialmente"
                },
                {
                  "id": "c",
                  "text": "Orientación a objetos",
                  "explanation": "Orientación a objetos es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "d",
                  "text": "Procesamiento de texto",
                  "explanation": "eso es Bash, no PowerShell"
                }
              ],
              "correctOptionId": "c",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que criterio no se menciona en la ut para elegir un lenguaje",
              "question": "¿Qué criterio NO se menciona en la UT para elegir un lenguaje de scripting?",
              "options": [
                {
                  "id": "a",
                  "text": "Infraestructura existente",
                  "explanation": "infraestructura condiciona herramientas"
                },
                {
                  "id": "b",
                  "text": "Preferencias personales del administrador",
                  "explanation": "Preferencias personales del administrador es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "c",
                  "text": "Sistema operativo",
                  "explanation": "el SO influye directamente"
                },
                {
                  "id": "d",
                  "text": "Complejidad de la tarea",
                  "explanation": "la complejidad determina el lenguaje adecuado"
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que herramienta se utiliza en bash para buscar texto en arch",
              "question": "¿Qué herramienta se utiliza en Bash para buscar texto en archivos?",
              "options": [
                {
                  "id": "a",
                  "text": "awk",
                  "explanation": "procesamiento avanzado de texto cut → extraer columnas sed → edición de texto en flujo"
                },
                {
                  "id": "b",
                  "text": "cut",
                  "explanation": "cut no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "c",
                  "text": "grep",
                  "explanation": "grep es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "d",
                  "text": "sed",
                  "explanation": "sed no encaja con la definición o el concepto técnico que pide la pregunta."
                }
              ],
              "correctOptionId": "c",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que cmdlet permite listar los servicios en powershell",
              "question": "¿Qué cmdlet permite listar los servicios en PowerShell?",
              "options": [
                {
                  "id": "a",
                  "text": "Get-Service",
                  "explanation": "Get-Service es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "b",
                  "text": "Get-LocalUser",
                  "explanation": "usuarios locales Register-ScheduledTask → tareas programadas Get-Process → procesos, no servicios"
                },
                {
                  "id": "c",
                  "text": "Register-ScheduledTask",
                  "explanation": "Register-ScheduledTask no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "d",
                  "text": "Get-Process",
                  "explanation": "Get-Process no encaja con la definición o el concepto técnico que pide la pregunta."
                }
              ],
              "correctOptionId": "a",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-en entornos heterogeneos el dominio de varios lenguajes de s",
              "question": "En entornos heterogéneos, el dominio de varios lenguajes de scripting es importante porque:",
              "options": [
                {
                  "id": "a",
                  "text": "Garantiza coherencia y eficiencia entre diferentes sistemas operativos",
                  "explanation": "Garantiza coherencia y eficiencia entre diferentes sistemas operativos es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "b",
                  "text": "Reduce el número de servidores necesarios",
                  "explanation": "no depende del scripting"
                },
                {
                  "id": "c",
                  "text": "Permite usar un único sistema operativo",
                  "explanation": "no cambia el sistema operativo"
                },
                {
                  "id": "d",
                  "text": "Elimina la necesidad de documentación",
                  "explanation": "siempre se necesita documentación"
                }
              ],
              "correctOptionId": "a",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que utilidad permite programar tareas periodicas en sistemas",
              "question": "¿Qué utilidad permite programar tareas periódicas en sistemas Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "systemctl",
                  "explanation": "gestiona servicios systemd ps → muestra procesos df → muestra uso de disco"
                },
                {
                  "id": "b",
                  "text": "ps",
                  "explanation": "ps no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "c",
                  "text": "cron",
                  "explanation": "cron es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "d",
                  "text": "df",
                  "explanation": "df no encaja con la definición o el concepto técnico que pide la pregunta."
                }
              ],
              "correctOptionId": "c",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-en el script bash de ejemplo que valor se compara con el umb",
              "question": "En el script Bash de ejemplo, ¿qué valor se compara con el umbral definido?",
              "options": [
                {
                  "id": "a",
                  "text": "Número de procesos",
                  "explanation": "no es la métrica típica en este tipo de script"
                },
                {
                  "id": "b",
                  "text": "Tamaño total del disco",
                  "explanation": "no se usa como valor de comparación directa"
                },
                {
                  "id": "c",
                  "text": "Porcentaje de uso del disco",
                  "explanation": "Porcentaje de uso del disco es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "d",
                  "text": "Espacio libre",
                  "explanation": "se calcula, pero no suele ser el valor principal comparado"
                }
              ],
              "correctOptionId": "c",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que caracteristica destaca principalmente en bash",
              "question": "¿Qué característica destaca principalmente en Bash?",
              "options": [
                {
                  "id": "a",
                  "text": "Uso exclusivo en Windows",
                  "explanation": "Bash es propio de sistemas Unix/Linux"
                },
                {
                  "id": "b",
                  "text": "Orientación a objetos",
                  "explanation": "no es orientado a objetos"
                },
                {
                  "id": "c",
                  "text": "Integración con utilidades Unix",
                  "explanation": "Integración con utilidades Unix es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "d",
                  "text": "Dependencia de .NET",
                  "explanation": "no depende de .NET"
                }
              ],
              "correctOptionId": "c",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-powershell se basa tecnicamente en",
              "question": "PowerShell se basa técnicamente en:",
              "options": [
                {
                  "id": "a",
                  "text": "GNU",
                  "explanation": "GNU no es base de PowerShell"
                },
                {
                  "id": "b",
                  "text": ".NET",
                  "explanation": ".NET es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "c",
                  "text": "Python",
                  "explanation": "Python no es su base"
                },
                {
                  "id": "d",
                  "text": "Java",
                  "explanation": "Java tampoco"
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "aso-ut7-que lenguaje se utiliza habitualmente en jenkins para automa",
              "question": "¿Qué lenguaje se utiliza habitualmente en Jenkins para automatización CI/CD?",
              "options": [
                {
                  "id": "a",
                  "text": "Groovy",
                  "explanation": "Groovy es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "b",
                  "text": "Ruby",
                  "explanation": "no es el estándar en Jenkins Bash → se usa en scripts, pero no es el lenguaje principal de pipelines Perl → no se usa en Jenkins CI/CD"
                },
                {
                  "id": "c",
                  "text": "Bash",
                  "explanation": "Bash no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "d",
                  "text": "Perl",
                  "explanation": "Perl no encaja con la definición o el concepto técnico que pide la pregunta."
                }
              ],
              "correctOptionId": "a",
              "source": "UT7 AUTOEVALUACION.docx"
            }
          ]
        }
      ]
    },
    {
      "id": "iaw",
      "name": "IAW",
      "finalExamSize": 30,
      "units": [
        {
          "id": "ut1",
          "title": "Unidad 1",
          "questions": [
            {
              "id": "iaw-ut1-que elemento forma parte del lado cliente en una aplicacion ",
              "question": "¿Qué elemento forma parte del lado cliente en una aplicación web?",
              "options": [
                {
                  "id": "a",
                  "text": "Apache",
                  "explanation": "Apache es un servidor web que se ejecuta en el servidor, no en el navegador del usuario."
                },
                {
                  "id": "b",
                  "text": "MySQL",
                  "explanation": "MySQL es el gestor de bases de datos del servidor, no una tecnología del lado cliente."
                },
                {
                  "id": "c",
                  "text": "PHP",
                  "explanation": "PHP se ejecuta en el servidor y genera el HTML que envía al navegador; el usuario nunca ve el código PHP."
                },
                {
                  "id": "d",
                  "text": "JavaScript",
                  "explanation": "JavaScript se ejecuta directamente en el navegador del usuario, por eso es tecnología del lado cliente (front-end)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que componente permite procesar codigo php en un servidor ap",
              "question": "¿Qué componente permite procesar código PHP en un servidor Apache?",
              "options": [
                {
                  "id": "a",
                  "text": "libapache2-mod-php",
                  "explanation": "Es el módulo de Apache que reconoce los archivos .php y los pasa al intérprete PHP; sin él, Apache los serviría como texto plano."
                },
                {
                  "id": "b",
                  "text": "phpMyAdmin",
                  "explanation": "phpMyAdmin es una herramienta web para gestionar bases de datos MySQL, no un componente de procesamiento PHP en Apache."
                },
                {
                  "id": "c",
                  "text": "MySQL-server",
                  "explanation": "MySQL-server almacena datos; PHP puede conectarse a él, pero MySQL no ejecuta código PHP."
                },
                {
                  "id": "d",
                  "text": "Node.js",
                  "explanation": "Node.js ejecuta JavaScript en el servidor; no tiene relación con PHP ni con Apache."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-cual es el objetivo principal de un entorno de desarrollo we",
              "question": "¿Cuál es el objetivo principal de un entorno de desarrollo web?",
              "options": [
                {
                  "id": "a",
                  "text": "Ejecutar código directamente en producción",
                  "explanation": "El entorno de desarrollo es previo a producción; no sirve para ejecutar en el entorno real de usuarios."
                },
                {
                  "id": "b",
                  "text": "Probar, desarrollar y mantener aplicaciones antes de su despliegue final",
                  "explanation": "Un entorno de desarrollo permite crear, probar y corregir una aplicación en local antes de publicarla en producción."
                },
                {
                  "id": "c",
                  "text": "Publicar sitios web automáticamente",
                  "explanation": "La publicación es una fase posterior; el entorno de desarrollo se usa antes de llegar a ese punto."
                },
                {
                  "id": "d",
                  "text": "Mostrar interfaces gráficas al usuario final",
                  "explanation": "El entorno de desarrollo es una herramienta interna para el desarrollador, no para el usuario final."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que extension de archivo se asocia con scripts de php",
              "question": "¿Qué extensión de archivo se asocia con scripts de PHP?",
              "options": [
                {
                  "id": "a",
                  "text": ".php",
                  "explanation": "Los archivos .php contienen código PHP; cuando Apache los detecta, los pasa al intérprete PHP para ejecutarlos y devolver el resultado como HTML."
                },
                {
                  "id": "b",
                  "text": ".html",
                  "explanation": "Los archivos HTML son estáticos y se envían directamente al navegador sin procesamiento de servidor."
                },
                {
                  "id": "c",
                  "text": ".py",
                  "explanation": ".py es la extensión de Python, no de PHP."
                },
                {
                  "id": "d",
                  "text": ".db",
                  "explanation": ".db se usa para archivos de base de datos como SQLite, no para scripts ejecutables."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que tipo de cifrado garantiza la seguridad en https",
              "question": "¿Qué tipo de cifrado garantiza la seguridad en HTTPS?",
              "options": [
                {
                  "id": "a",
                  "text": "Cifrado simétrico sin clave",
                  "explanation": "Todo cifrado necesita clave; además, HTTPS combina cifrado asimétrico y simétrico, siempre con claves."
                },
                {
                  "id": "b",
                  "text": "Cifrado por sustitución",
                  "explanation": "El cifrado por sustitución es histórico (como el cifrado César); no tiene relación con la seguridad web moderna."
                },
                {
                  "id": "c",
                  "text": "Ningún tipo de cifrado",
                  "explanation": "HTTPS significa HTTP Secure; si no hubiera cifrado, simplemente sería HTTP."
                },
                {
                  "id": "d",
                  "text": "Cifrado con certificados SSL/TLS",
                  "explanation": "HTTPS usa certificados SSL/TLS para cifrar el tráfico entre cliente y servidor y verificar la identidad del sitio."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que protocolo se utiliza en las peticiones web entre cliente",
              "question": "¿Qué protocolo se utiliza en las peticiones web entre cliente y servidor?",
              "options": [
                {
                  "id": "a",
                  "text": "FTP",
                  "explanation": "FTP sirve para transferir archivos, no para las peticiones de páginas web."
                },
                {
                  "id": "b",
                  "text": "SMTP",
                  "explanation": "SMTP se usa para enviar correos electrónicos, no para comunicación web."
                },
                {
                  "id": "c",
                  "text": "DNS",
                  "explanation": "DNS traduce nombres de dominio a IPs; es previo a la conexión web, pero no transporta la página."
                },
                {
                  "id": "d",
                  "text": "HTTP",
                  "explanation": "HTTP es el protocolo que regula la comunicación entre el navegador y el servidor web; en versión segura se usa HTTPS."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que indica el codigo de estado http 404",
              "question": "¿Qué indica el código de estado HTTP 404?",
              "options": [
                {
                  "id": "a",
                  "text": "Recurso no encontrado",
                  "explanation": "404 Not Found indica que el servidor está activo pero el recurso solicitado no existe en esa URL."
                },
                {
                  "id": "b",
                  "text": "Solicitud correcta",
                  "explanation": "Una solicitud correcta devuelve el código 200 OK."
                },
                {
                  "id": "c",
                  "text": "Error interno del servidor",
                  "explanation": "El error interno del servidor corresponde al código 500 Internal Server Error."
                },
                {
                  "id": "d",
                  "text": "Redirección permanente",
                  "explanation": "La redirección permanente corresponde al código 301 Moved Permanently."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que comando permite acceder a la consola de mysql en linux",
              "question": "¿Qué comando permite acceder a la consola de MySQL en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "service mysql status",
                  "explanation": "service mysql status solo muestra el estado del servicio; no abre la consola interactiva."
                },
                {
                  "id": "b",
                  "text": "mysql -login",
                  "explanation": "mysql -login no es una opción válida; la sintaxis correcta sería mysql -u root -p."
                },
                {
                  "id": "c",
                  "text": "sudo mysql",
                  "explanation": "En Ubuntu, MySQL moderno usa auth_socket, por lo que sudo mysql abre directamente la consola como root sin introducir contraseña."
                },
                {
                  "id": "d",
                  "text": "connect mysql",
                  "explanation": "connect mysql no es un comando válido en Linux."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que significa localhost en un entorno de desarrollo",
              "question": "¿Qué significa localhost en un entorno de desarrollo?",
              "options": [
                {
                  "id": "a",
                  "text": "Un servidor remoto con acceso seguro",
                  "explanation": "Localhost no es remoto; apunta al propio equipo (127.0.0.1)."
                },
                {
                  "id": "b",
                  "text": "Un proxy que enruta las conexiones externas",
                  "explanation": "Un proxy es otra cosa; localhost no enruta conexiones externas."
                },
                {
                  "id": "c",
                  "text": "Un nombre de dominio reservado para producción",
                  "explanation": "Localhost solo se usa en desarrollo local, nunca con un dominio real en producción."
                },
                {
                  "id": "d",
                  "text": "El equipo del usuario que ejecuta el servidor local",
                  "explanation": "Localhost (127.0.0.1) apunta al propio equipo; http://localhost conecta con el servidor web instalado en tu propia máquina."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-cual es el proposito del archivo phpinfo php",
              "question": "¿Cuál es el propósito del archivo phpinfo.php?",
              "options": [
                {
                  "id": "a",
                  "text": "Servir como página de error 404",
                  "explanation": "Las páginas de error las gestiona el servidor web; phpinfo() no tiene relación con ellas."
                },
                {
                  "id": "b",
                  "text": "Mostrar información sobre el entorno PHP",
                  "explanation": "phpinfo() muestra la versión de PHP, módulos instalados, configuración del php.ini y datos del servidor; sirve para verificar que PHP está correctamente instalado y funcionando."
                },
                {
                  "id": "c",
                  "text": "Generar scripts HTML automáticamente",
                  "explanation": "PHP puede generar HTML dinámico, pero ese no es el propósito de phpinfo()."
                },
                {
                  "id": "d",
                  "text": "Crear una base de datos vacía",
                  "explanation": "Las bases de datos las crea MySQL, no PHP."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que herramienta no forma parte de un paquete xampp",
              "question": "¿Qué herramienta NO forma parte de un paquete XAMPP?",
              "options": [
                {
                  "id": "a",
                  "text": "PHP",
                  "explanation": "PHP sí forma parte de XAMPP; es uno de sus componentes principales junto a Apache y MariaDB."
                },
                {
                  "id": "b",
                  "text": "Apache",
                  "explanation": "Apache sí forma parte de XAMPP; es el servidor web incluido en el paquete."
                },
                {
                  "id": "c",
                  "text": "MariaDB",
                  "explanation": "MariaDB sí forma parte de XAMPP; es el gestor de bases de datos incluido."
                },
                {
                  "id": "d",
                  "text": "Python",
                  "explanation": "Python no forma parte del paquete estándar XAMPP, que solo incluye Apache, MariaDB/MySQL y PHP/Perl."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que elemento permite establecer reglas de acceso en apache",
              "question": "¿Qué elemento permite establecer reglas de acceso en Apache?",
              "options": [
                {
                  "id": "a",
                  "text": ".htaccess",
                  "explanation": ".htaccess es un archivo de configuración de Apache que permite definir reglas de acceso, redirecciones y restricciones por IP para el directorio donde se coloca."
                },
                {
                  "id": "b",
                  "text": "config.json",
                  "explanation": "config.json es un archivo de configuración de aplicaciones JavaScript, no de Apache."
                },
                {
                  "id": "c",
                  "text": ".env",
                  "explanation": ".env guarda variables de entorno de la aplicación, no reglas de acceso en Apache."
                },
                {
                  "id": "d",
                  "text": "server.conf",
                  "explanation": "Apache usa httpd.conf o apache2.conf; server.conf no es el estándar para reglas de acceso en directorios."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que archivo se utiliza para configurar parametros de php",
              "question": "¿Qué archivo se utiliza para configurar parámetros de PHP?",
              "options": [
                {
                  "id": "a",
                  "text": "apache2.conf",
                  "explanation": "apache2.conf es el archivo de configuración del servidor web Apache; controla el servidor, no los parámetros internos de PHP."
                },
                {
                  "id": "b",
                  "text": "config.php",
                  "explanation": "config.php puede existir en proyectos concretos, pero no es el archivo global de configuración del intérprete PHP."
                },
                {
                  "id": "c",
                  "text": "php.ini",
                  "explanation": "php.ini es el archivo principal de configuración de PHP; controla parámetros como memory_limit, upload_max_filesize y display_errors. Tras modificarlo hay que reiniciar Apache."
                },
                {
                  "id": "d",
                  "text": ".htaccess",
                  "explanation": ".htaccess puede modificar algunos parámetros PHP si está permitido, pero no es el archivo base de configuración de PHP."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que herramienta permite gestionar visualmente bases de datos",
              "question": "¿Qué herramienta permite gestionar visualmente bases de datos en XAMPP?",
              "options": [
                {
                  "id": "a",
                  "text": "Apache Control Panel",
                  "explanation": "El panel de XAMPP gestiona el arranque de servicios, pero no permite administrar tablas o bases de datos visualmente."
                },
                {
                  "id": "b",
                  "text": "VS Code",
                  "explanation": "VS Code es un editor de código, no una herramienta de administración de bases de datos."
                },
                {
                  "id": "c",
                  "text": "phpMyAdmin",
                  "explanation": "phpMyAdmin es una aplicación web incluida en XAMPP que permite administrar MySQL/MariaDB desde el navegador: crear bases de datos, tablas, ejecutar SQL y gestionar usuarios."
                },
                {
                  "id": "d",
                  "text": "Composer",
                  "explanation": "Composer es un gestor de dependencias PHP para instalar librerías, no para administrar bases de datos."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-cual de las siguientes herramientas se considera un editor d",
              "question": "¿Cuál de las siguientes herramientas se considera un editor de código?",
              "options": [
                {
                  "id": "a",
                  "text": "NetBeans",
                  "explanation": "NetBeans es un IDE (Entorno de Desarrollo Integrado) que permite programar en Java, PHP y HTML con funciones avanzadas como depuración y autocompletado."
                },
                {
                  "id": "b",
                  "text": "phpMyAdmin",
                  "explanation": "phpMyAdmin es una herramienta web para gestionar bases de datos MySQL/MariaDB, no un editor de código."
                },
                {
                  "id": "c",
                  "text": "MySQL Workbench",
                  "explanation": "MySQL Workbench es una herramienta gráfica para diseñar bases de datos y ejecutar SQL, no un editor de código para aplicaciones web."
                },
                {
                  "id": "d",
                  "text": "Apache Server",
                  "explanation": "Apache Server es un servidor web; no sirve para escribir código."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-que tecnologia actua del lado del servidor",
              "question": "¿Qué tecnología actúa del lado del servidor?",
              "options": [
                {
                  "id": "a",
                  "text": "CSS",
                  "explanation": "CSS controla el diseño visual y se interpreta en el navegador; es tecnología del lado cliente."
                },
                {
                  "id": "b",
                  "text": "PHP",
                  "explanation": "PHP se ejecuta en el servidor: recibe la petición, procesa datos, se conecta a la base de datos y devuelve HTML al navegador."
                },
                {
                  "id": "c",
                  "text": "JavaScript",
                  "explanation": "En el contexto de esta unidad, JavaScript es tecnología del lado cliente: se ejecuta en el navegador para manejar eventos y validar formularios."
                },
                {
                  "id": "d",
                  "text": "HTML",
                  "explanation": "HTML estructura la página y se interpreta en el navegador; es tecnología del lado cliente."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-cual es la principal diferencia entre apache y nginx",
              "question": "¿Cuál es la principal diferencia entre Apache y Nginx?",
              "options": [
                {
                  "id": "a",
                  "text": "Apache es gratuito y Nginx es de pago",
                  "explanation": "Ambos son de código abierto y gratuitos; existe una versión comercial de Nginx (Nginx Plus), pero el básico es libre."
                },
                {
                  "id": "b",
                  "text": "Apache no permite configuración modular",
                  "explanation": "Apache es muy modular: tiene módulos como mod_php, mod_ssl y mod_rewrite."
                },
                {
                  "id": "c",
                  "text": "Nginx usa un modelo asíncrono de procesamiento",
                  "explanation": "Nginx usa un modelo asíncrono y no bloqueante (event-driven), lo que le permite gestionar muchas conexiones simultáneas con menos recursos que Apache."
                },
                {
                  "id": "d",
                  "text": "Nginx solo funciona en Linux",
                  "explanation": "Nginx también funciona en Windows y otros sistemas operativos."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-cual de las siguientes opciones mejora la seguridad de una b",
              "question": "¿Cuál de las siguientes opciones mejora la seguridad de una base de datos?",
              "options": [
                {
                  "id": "a",
                  "text": "Limitar los permisos según las necesidades",
                  "explanation": "Crear usuarios con solo los permisos necesarios (principio de mínimo privilegio) reduce el impacto ante fallos o accesos no autorizados."
                },
                {
                  "id": "b",
                  "text": "Permitir conexiones remotas anónimas",
                  "explanation": "Las conexiones anónimas dejan la base de datos expuesta a cualquier intento de acceso; es una vulnerabilidad grave."
                },
                {
                  "id": "c",
                  "text": "Dar permisos globales a todos los usuarios",
                  "explanation": "Los permisos globales dan acceso a todas las bases de datos, lo que facilita borrados masivos o escalada de privilegios."
                },
                {
                  "id": "d",
                  "text": "Usar el usuario root sin contraseña",
                  "explanation": "Root tiene acceso total al sistema; usarlo sin contraseña es un riesgo crítico de seguridad."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-cual es el comando correcto para instalar apache en ubuntu",
              "question": "¿Cuál es el comando correcto para instalar Apache en Ubuntu?",
              "options": [
                {
                  "id": "a",
                  "text": "apache2 install",
                  "explanation": "Sintaxis incorrecta; en Linux el orden es: gestor de paquetes + acción + paquete."
                },
                {
                  "id": "b",
                  "text": "sudo install apache2",
                  "explanation": "install en Linux sirve para copiar archivos; falta el gestor apt."
                },
                {
                  "id": "c",
                  "text": "sudo apt install apache2",
                  "explanation": "sudo apt install apache2 es el comando estándar en Ubuntu/Debian: sudo ejecuta como administrador, apt es el gestor de paquetes y apache2 es el paquete a instalar."
                },
                {
                  "id": "d",
                  "text": "apt-get apache",
                  "explanation": "Falta la acción install; la forma correcta con apt-get sería: sudo apt-get install apache2."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut1-por que es importante documentar un entorno de desarrollo",
              "question": "¿Por qué es importante documentar un entorno de desarrollo?",
              "options": [
                {
                  "id": "a",
                  "text": "Para garantizar la trazabilidad y facilitar mantenimiento",
                  "explanation": "La documentación permite saber qué se instaló, qué versiones se usaron, qué problemas surgieron y cómo reproducir el entorno, facilitando auditorías y el trabajo de otros técnicos."
                },
                {
                  "id": "b",
                  "text": "Para poder compartirlo en redes sociales",
                  "explanation": "Compartir en redes sociales no tiene ningún objetivo técnico en administración de sistemas."
                },
                {
                  "id": "c",
                  "text": "Porque lo exige la normativa fiscal",
                  "explanation": "La documentación técnica responde a necesidades operativas, no fiscales."
                },
                {
                  "id": "d",
                  "text": "Para instalar software automáticamente",
                  "explanation": "La automatización la hacen scripts; la documentación es informativa y técnica, no ejecutable."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 IAW AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut2",
          "title": "Unidad 2",
          "questions": [
            {
              "id": "iaw-ut2-cual es el directorio de wordpress donde se guardan los tema",
              "question": "¿Cuál es el directorio de WordPress donde se guardan los temas instalados?",
              "options": [
                {
                  "id": "a",
                  "text": "/wp-admin/",
                  "explanation": "Contiene archivos del panel de administración de WordPress."
                },
                {
                  "id": "b",
                  "text": "/wp-includes/",
                  "explanation": "Incluye archivos del núcleo de WordPress y librerías internas."
                },
                {
                  "id": "c",
                  "text": "/plugins/",
                  "explanation": "Carpeta donde se instalan los plugins, no los temas."
                },
                {
                  "id": "d",
                  "text": "/wp-content/themes/",
                  "explanation": "Los temas de WordPress se almacenan en el directorio /wp-content/themes/, donde cada tema tiene su propia carpeta con archivos de diseño y configuración."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-cual es la funcion del archivo htaccess en un cms",
              "question": "¿Cuál es la función del archivo .htaccess en un CMS?",
              "options": [
                {
                  "id": "a",
                  "text": "Cambiar el idioma del sitio",
                  "explanation": "El idioma se gestiona en la configuración del CMS, no en .htaccess."
                },
                {
                  "id": "b",
                  "text": "Controlar reglas de seguridad y redirecciones en Apache.",
                  "explanation": "El archivo .htaccess se utiliza en servidores Apache para definir reglas de seguridad, redirecciones, control de acceso y configuración del servidor."
                },
                {
                  "id": "c",
                  "text": "Gestionar plantillas visuales",
                  "explanation": "Las plantillas se gestionan mediante temas o templates."
                },
                {
                  "id": "d",
                  "text": "Configurar la base de datos",
                  "explanation": "La base de datos se configura en archivos como wp-config.php en WordPress."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que comando se usa para exportar una base de datos mysql des",
              "question": "¿Qué comando se usa para exportar una base de datos MySQL desde terminal Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "mysqldump",
                  "explanation": "El comando mysqldump se utiliza para exportar o hacer copias de seguridad de bases de datos MySQL, generando normalmente un archivo .sql."
                },
                {
                  "id": "b",
                  "text": "chmod",
                  "explanation": "Sirve para cambiar permisos de archivos en Linux."
                },
                {
                  "id": "c",
                  "text": "cp",
                  "explanation": "Se usa para copiar archivos o directorios."
                },
                {
                  "id": "d",
                  "text": "systemctl",
                  "explanation": "Permite gestionar servicios del sistema, como iniciar o reiniciar servicios."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que documento debe elaborar el tecnico tras la publicacion d",
              "question": "¿Qué documento debe elaborar el técnico tras la publicación del CMS?",
              "options": [
                {
                  "id": "a",
                  "text": "Certificado de propiedad del dominio",
                  "explanation": "Es un documento relacionado con el registro del dominio, no con la implantación técnica."
                },
                {
                  "id": "b",
                  "text": "Informe técnico final con configuración, pruebas y medidas de seguridad.",
                  "explanation": "Tras publicar un CMS, el técnico debe elaborar un informe técnico final donde se documente la configuración realizada, las pruebas realizadas y las medidas de seguridad aplicadas."
                },
                {
                  "id": "c",
                  "text": "Contrato de mantenimiento comercial",
                  "explanation": "Pertenece al ámbito empresarial, no al proceso técnico de publicación."
                },
                {
                  "id": "d",
                  "text": "Documento de marketing del sitio",
                  "explanation": "Está relacionado con promoción o publicidad, no con la implantación del CMS."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que carpeta de joomla contiene la interfaz administrativa",
              "question": "¿Qué carpeta de Joomla contiene la interfaz administrativa?",
              "options": [
                {
                  "id": "a",
                  "text": "/modules/",
                  "explanation": "Contiene módulos del sitio, no el panel de administración."
                },
                {
                  "id": "b",
                  "text": "/administrator/",
                  "explanation": "La carpeta /administrator/ contiene los archivos de la interfaz de administración de Joomla, desde donde se gestiona el contenido, usuarios y configuración del sitio."
                },
                {
                  "id": "c",
                  "text": "/plugins/",
                  "explanation": "Carpeta donde se almacenan plugins o extensiones."
                },
                {
                  "id": "d",
                  "text": "/content/",
                  "explanation": "No es la carpeta que contiene la interfaz administrativa en Joomla."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que medida de seguridad evita el acceso no autorizado median",
              "question": "¿Qué medida de seguridad evita el acceso no autorizado mediante una verificación adicional?",
              "options": [
                {
                  "id": "a",
                  "text": "Redirección 301",
                  "explanation": "Se usa para redirigir una URL a otra, no para seguridad de acceso."
                },
                {
                  "id": "b",
                  "text": "Cambio de tema",
                  "explanation": "Solo modifica el aspecto visual del sitio."
                },
                {
                  "id": "c",
                  "text": "Desactivación de menús",
                  "explanation": "Afecta a la navegación del sitio, pero no protege el acceso."
                },
                {
                  "id": "d",
                  "text": "Autenticación en dos pasos (2FA).",
                  "explanation": "La autenticación en dos pasos (FA) añade una segunda verificación además de la contraseña (por ejemplo un código en el móvil), aumentando la seguridad del acceso."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que se debe hacer antes de actualizar un cms",
              "question": "¿Qué se debe hacer antes de actualizar un CMS?",
              "options": [
                {
                  "id": "a",
                  "text": "Realizar una copia de seguridad completa.",
                  "explanation": "Antes de actualizar un CMS es fundamental hacer una copia de seguridad completa (backup) de archivos y base de datos, para poder restaurar el sitio si ocurre algún error durante la actualización."
                },
                {
                  "id": "b",
                  "text": "Desactivar el certificado SSL",
                  "explanation": "El SSL no afecta a la actualización del CMS."
                },
                {
                  "id": "c",
                  "text": "Borrar los usuarios registrados",
                  "explanation": "Los usuarios no deben eliminarse antes de actualizar."
                },
                {
                  "id": "d",
                  "text": "Desinstalar todos los plugins",
                  "explanation": "No es necesario; normalmente solo se verifica su compatibilidad."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que tarea forma parte de las pruebas de funcionamiento antes",
              "question": "¿Qué tarea forma parte de las pruebas de funcionamiento antes de publicar un CMS?",
              "options": [
                {
                  "id": "a",
                  "text": "Eliminar la carpeta de temas",
                  "explanation": "Los temas son necesarios para el diseño del sitio."
                },
                {
                  "id": "b",
                  "text": "Desactivar el usuario administrador",
                  "explanation": "El administrador es necesario para gestionar el CMS."
                },
                {
                  "id": "c",
                  "text": "Cambiar la licencia del software",
                  "explanation": "No forma parte de las pruebas técnicas de funcionamiento."
                },
                {
                  "id": "d",
                  "text": "Verificar enlaces, formularios y tiempos de carga.",
                  "explanation": "Antes de publicar un CMS, es necesario comprobar que los enlaces funcionan, los formularios envían correctamente la información y el sitio carga de forma adecuada."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-cual es el proposito de un cortafuegos de aplicaciones web w",
              "question": "¿Cuál es el propósito de un cortafuegos de aplicaciones web (WAF)?",
              "options": [
                {
                  "id": "a",
                  "text": "Cambiar la apariencia visual del CMS",
                  "explanation": "Esto se hace mediante temas o plantillas."
                },
                {
                  "id": "b",
                  "text": "Bloquear el acceso a los administradores",
                  "explanation": "El WAF protege el sitio, no impide el acceso de administradores legítimos."
                },
                {
                  "id": "c",
                  "text": "Acelerar la carga de páginas",
                  "explanation": "La velocidad depende de servidores, caché o CDN, no del WAF."
                },
                {
                  "id": "d",
                  "text": "Proteger el sitio frente a ataques como inyecciones SQL o XSS.",
                  "explanation": "Un WAF (Web Application Firewall) protege aplicaciones web filtrando tráfico malicioso y bloqueando ataques comunes como inyecciones SQL, XSS o ataques automatizados."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que archivo principal de wordpress contiene los datos de con",
              "question": "¿Qué archivo principal de WordPress contiene los datos de conexión a la base de datos?",
              "options": [
                {
                  "id": "a",
                  "text": "config.ini",
                  "explanation": "No es un archivo estándar de configuración en WordPress."
                },
                {
                  "id": "b",
                  "text": "wp-settings.php",
                  "explanation": "Forma parte del núcleo de WordPress, pero no guarda las credenciales de la base de datos."
                },
                {
                  "id": "c",
                  "text": "wp-config.php",
                  "explanation": "El archivo wp-config.php contiene la configuración principal de WordPress, incluyendo nombre de la base de datos, usuario, contraseña y servidor."
                },
                {
                  "id": "d",
                  "text": "index.php",
                  "explanation": "Es el archivo principal que carga WordPress, pero no contiene la configuración de la base de datos."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que practica mejora el rendimiento del cms en produccion",
              "question": "¿Qué práctica mejora el rendimiento del CMS en producción?",
              "options": [
                {
                  "id": "a",
                  "text": "Desactivar todos los plugins",
                  "explanation": "Algunos plugins son necesarios para el funcionamiento del sitio."
                },
                {
                  "id": "b",
                  "text": "Activar sistemas de caché y compresión GZIP.",
                  "explanation": "Activar caché y compresión GZIP permite reducir el tamaño de los archivos y acelerar la carga de las páginas, mejorando el rendimiento del CMS en producción."
                },
                {
                  "id": "c",
                  "text": "Aumentar los permisos de escritura a 777",
                  "explanation": "Es inseguro y no mejora el rendimiento."
                },
                {
                  "id": "d",
                  "text": "Ejecutar PHP en modo depuración permanente",
                  "explanation": "El modo debug ralentiza el sistema y solo se usa para desarrollo."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que protocolo se utiliza para cifrar las comunicaciones entr",
              "question": "¿Qué protocolo se utiliza para cifrar las comunicaciones entre cliente y servidor?",
              "options": [
                {
                  "id": "a",
                  "text": "HTTPS (SSL/TLS).",
                  "explanation": "HTTPS utiliza SSL/TLS para cifrar la comunicación entre el navegador y el servidor, protegiendo los datos frente a accesos no autorizados."
                },
                {
                  "id": "b",
                  "text": "HTTP sin cifrar",
                  "explanation": "Transmite los datos sin protección."
                },
                {
                  "id": "c",
                  "text": "Telnet",
                  "explanation": "Protocolo antiguo de acceso remoto sin cifrado."
                },
                {
                  "id": "d",
                  "text": "FTP básico",
                  "explanation": "Protocolo de transferencia de archivos que no cifra la información por defecto."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que sistema se encarga de traducir nombres de dominio a dire",
              "question": "¿Qué sistema se encarga de traducir nombres de dominio a direcciones IP?",
              "options": [
                {
                  "id": "a",
                  "text": "FTP",
                  "explanation": "Protocolo para transferencia de archivos."
                },
                {
                  "id": "b",
                  "text": "SSH",
                  "explanation": "Protocolo para acceso remoto seguro a servidores."
                },
                {
                  "id": "c",
                  "text": "HTTP",
                  "explanation": "Protocolo utilizado para transferir páginas web entre cliente y servidor."
                },
                {
                  "id": "d",
                  "text": "DNS (Domain Name System).",
                  "explanation": "El DNS (Domain Name System) se encarga de traducir nombres de dominio como www.ejemplo.com a direcciones IP para que los equipos puedan localizar los servidores en Internet."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que es un cms o gestor de contenidos",
              "question": "¿Qué es un CMS o gestor de contenidos?",
              "options": [
                {
                  "id": "a",
                  "text": "Un lenguaje de programación web",
                  "explanation": "Un CMS no es un lenguaje, es una aplicación."
                },
                {
                  "id": "b",
                  "text": "Un navegador especializado",
                  "explanation": "Los navegadores sirven para visualizar páginas web."
                },
                {
                  "id": "c",
                  "text": "Un sistema operativo para servidores",
                  "explanation": "Los sistemas operativos gestionan hardware y recursos del servidor, no contenidos web."
                },
                {
                  "id": "d",
                  "text": "Una aplicación web para crear y administrar contenidos sin programar.",
                  "explanation": "Un CMS (Content Management System) es una aplicación que permite crear, gestionar y publicar contenido web de forma sencilla sin necesidad de programar, como WordPress o Joomla."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que rol en wordpress tiene control total sobre el sitio web",
              "question": "¿Qué rol en WordPress tiene control total sobre el sitio web?",
              "options": [
                {
                  "id": "a",
                  "text": "Autor",
                  "explanation": "Puede crear y publicar sus propias entradas, pero no administrar el sitio."
                },
                {
                  "id": "b",
                  "text": "Administrador.",
                  "explanation": "El rol Administrador tiene control total sobre el sitio web, pudiendo gestionar usuarios, plugins, temas, configuraciones y contenido."
                },
                {
                  "id": "c",
                  "text": "Suscriptor",
                  "explanation": "Solo puede gestionar su perfil y leer contenido."
                },
                {
                  "id": "d",
                  "text": "Editor",
                  "explanation": "Puede gestionar contenidos de otros usuarios, pero no tiene control total del sitio."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-cual es el objetivo principal de la personalizacion de un cm",
              "question": "¿Cuál es el objetivo principal de la personalización de un CMS?",
              "options": [
                {
                  "id": "a",
                  "text": "Cambiar la base de datos por una más grande",
                  "explanation": "No es el objetivo de la personalización del CMS."
                },
                {
                  "id": "b",
                  "text": "Añadir publicidad automática",
                  "explanation": "Puede ser una función añadida, pero no es el objetivo principal."
                },
                {
                  "id": "c",
                  "text": "Adaptar la apariencia y la estructura a las necesidades del cliente.",
                  "explanation": "La personalización de un CMS permite adaptar el diseño, funcionalidades y estructura del sitio para ajustarlo a las necesidades del cliente o del proyecto."
                },
                {
                  "id": "d",
                  "text": "Convertir el CMS en una aplicación de escritorio",
                  "explanation": "Un CMS está diseñado para funcionar como aplicación web."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que es un backup incremental",
              "question": "¿Qué es un backup incremental?",
              "options": [
                {
                  "id": "a",
                  "text": "Una copia completa de todos los archivos del sistema",
                  "explanation": "Eso corresponde a un backup completo."
                },
                {
                  "id": "b",
                  "text": "Un respaldo automático del navegador",
                  "explanation": "No tiene relación con los tipos de backup."
                },
                {
                  "id": "c",
                  "text": "Un volcado en tiempo real de la base de datos",
                  "explanation": "Describe más bien un backup en caliente o replicación, no incremental."
                },
                {
                  "id": "d",
                  "text": "Una copia que guarda solo los cambios desde la última copia realizada.",
                  "explanation": "Un backup incremental guarda únicamente los archivos que han cambiado desde la última copia, lo que reduce tiempo y espacio de almacenamiento."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que conjunto de tecnologias compone el entorno lamp",
              "question": "¿Qué conjunto de tecnologías compone el entorno LAMP?",
              "options": [
                {
                  "id": "a",
                  "text": "Linux, Apache, MySQL y PHP.",
                  "explanation": "El entorno LAMP es una pila de tecnologías formada por Linux (sistema operativo), Apache (servidor web), MySQL (base de datos) y PHP (lenguaje de programación)."
                },
                {
                  "id": "b",
                  "text": "Linux, Apache, MongoDB y Perl",
                  "explanation": "No corresponde al significado del acrónimo LAMP."
                },
                {
                  "id": "c",
                  "text": "Linux, Android, MongoDB y Perl",
                  "explanation": "Incluye tecnologías que no forman parte del stack LAMP."
                },
                {
                  "id": "d",
                  "text": "Windows, Apache, MariaDB y Python",
                  "explanation": "No es LAMP porque no incluye Linux ni PHP."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut2-que licencia de software garantiza las cuatro libertades bas",
              "question": "¿Qué licencia de software garantiza las cuatro libertades básicas del software libre?",
              "options": [
                {
                  "id": "a",
                  "text": "Licencia MIT",
                  "explanation": "Es una licencia permisiva, pero no está basada en el principio de copyleft de las cuatro libertades."
                },
                {
                  "id": "b",
                  "text": "GNU General Public License (GPL).",
                  "explanation": "La licencia GPL garantiza las cuatro libertades del software libre: usar, estudiar, modificar y redistribuir el software y sus modificaciones."
                },
                {
                  "id": "c",
                  "text": "Licencia Apache",
                  "explanation": "También es permisiva, permite modificar y redistribuir sin obligación de mantener la misma licencia."
                },
                {
                  "id": "d",
                  "text": "Licencia Propietaria (EULA)",
                  "explanation": "Limita el uso y no permite modificar ni redistribuir libremente el software."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 IAW AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut3",
          "title": "Unidad 3",
          "questions": [
            {
              "id": "iaw-ut3-que metodo de copia sigue la estrategia 3 2 1 recomendada po",
              "question": "¿Qué método de copia sigue la estrategia 3-2-1 recomendada por ENISA?",
              "options": [
                {
                  "id": "a",
                  "text": "Tres copias en el mismo servidor",
                  "explanation": "Si falla el servidor, se pierden todas."
                },
                {
                  "id": "b",
                  "text": "Una copia completa diaria",
                  "explanation": "Es un tipo de backup, no la estrategia --."
                },
                {
                  "id": "c",
                  "text": "Dos copias locales y una temporal",
                  "explanation": "No cumple lo de distintos soportes ni copia externa."
                },
                {
                  "id": "d",
                  "text": "Tres copias, dos tipos de soporte, una fuera del sitio",
                  "explanation": "La estrategia -- consiste en tener copias de los datos, almacenadas en soportes diferentes, y copia fuera del sitio para proteger frente a fallos, ataques o desastres."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que extension de archivo se usa para definir la configuracio",
              "question": "¿Qué extensión de archivo se usa para definir la configuración de estilos y tipografías en temas de bloques?",
              "options": [
                {
                  "id": "a",
                  "text": "design.yaml",
                  "explanation": "No se usa en WordPress para temas."
                },
                {
                  "id": "b",
                  "text": "theme.json",
                  "explanation": "En los temas de bloques de WordPress, el archivo theme.json permite definir estilos globales como colores, tipografías y configuraciones del tema."
                },
                {
                  "id": "c",
                  "text": "config.css",
                  "explanation": "No es un archivo de configuración válido en este contexto."
                },
                {
                  "id": "d",
                  "text": "styles.xml",
                  "explanation": "No se utiliza para estilos en temas de bloques."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que caracteristica define a los mu plugins en wordpress",
              "question": "¿Qué característica define a los mu-plugins en WordPress?",
              "options": [
                {
                  "id": "a",
                  "text": "Son temporales",
                  "explanation": "No, son permanentes mientras estén en la carpeta correspondiente."
                },
                {
                  "id": "b",
                  "text": "Requieren licencia",
                  "explanation": "Pueden ser gratuitos o de pago, no es su característica principal."
                },
                {
                  "id": "c",
                  "text": "Solo funcionan en temas hijo",
                  "explanation": "No dependen del tema, funcionan a nivel global."
                },
                {
                  "id": "d",
                  "text": "No pueden desactivarse desde el panel de administración",
                  "explanation": "Los mu-plugins (Must Use plugins) se cargan automáticamente y no se pueden activar/desactivar desde el panel, ya que están pensados para funcionalidades obligatorias del sistema."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que rol en wordpress tiene el maximo nivel de permisos",
              "question": "¿Qué rol en WordPress tiene el máximo nivel de permisos?",
              "options": [
                {
                  "id": "a",
                  "text": "Autor",
                  "explanation": "Solo puede gestionar sus propias entradas."
                },
                {
                  "id": "b",
                  "text": "Editor",
                  "explanation": "Puede gestionar contenido de otros, pero no la configuración del sistema."
                },
                {
                  "id": "c",
                  "text": "Colaborador",
                  "explanation": "Solo puede escribir, pero no publicar."
                },
                {
                  "id": "d",
                  "text": "Administrador",
                  "explanation": "El rol de Administrador tiene control total sobre el sitio: puede instalar plugins, cambiar temas, gestionar usuarios y configurar todo el sistema."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que tipo de contenido personalizado permite definir nuevas e",
              "question": "¿Qué tipo de contenido personalizado permite definir nuevas estructuras de datos en WordPress?",
              "options": [
                {
                  "id": "a",
                  "text": "Template Customizer",
                  "explanation": "Sirve para personalizar apariencia, no estructura de datos."
                },
                {
                  "id": "b",
                  "text": "Widget Type",
                  "explanation": "Son bloques de contenido, no estructuras completas."
                },
                {
                  "id": "c",
                  "text": "Custom Post Type (CPT)",
                  "explanation": "Los Custom Post Types (CPT) permiten crear nuevos tipos de contenido en WordPress (por ejemplo: productos, eventos, reseñas), con su propia estructura y gestión."
                },
                {
                  "id": "d",
                  "text": "Custom Plugin Type",
                  "explanation": "No es un concepto real en WordPress."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que funcion tiene el archivo robots txt",
              "question": "¿Qué función tiene el archivo robots.txt?",
              "options": [
                {
                  "id": "a",
                  "text": "Controlar el tamaño",
                  "explanation": "No tiene relación con archivos ni almacenamiento."
                },
                {
                  "id": "b",
                  "text": "Copias de seguridad",
                  "explanation": "No realiza backups."
                },
                {
                  "id": "c",
                  "text": "Conexión a base de datos",
                  "explanation": "Eso se define en otros archivos (como wp-config.php)."
                },
                {
                  "id": "d",
                  "text": "Indicar a los buscadores qué partes del sitio pueden rastrear",
                  "explanation": "El archivo robots.txt se utiliza para dar instrucciones a los motores de búsqueda (como Google) sobre qué páginas o secciones pueden o no rastrear."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que plugin o utilidad permite realizar copias de seguridad a",
              "question": "¿Qué plugin o utilidad permite realizar copias de seguridad automáticas en WordPress?",
              "options": [
                {
                  "id": "a",
                  "text": "Classic Editor",
                  "explanation": "Solo cambia el editor de contenido."
                },
                {
                  "id": "b",
                  "text": "UpdraftPlus",
                  "explanation": "UpdraftPlus es un plugin muy utilizado para hacer copias de seguridad automáticas y restaurarlas fácilmente en WordPress."
                },
                {
                  "id": "c",
                  "text": "WooCommerce",
                  "explanation": "Es para crear tiendas online."
                },
                {
                  "id": "d",
                  "text": "Elementor",
                  "explanation": "Es un maquetador visual de páginas."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que principio se aplica al asignar el menor nivel de permiso",
              "question": "¿Qué principio se aplica al asignar el menor nivel de permisos necesario a cada usuario?",
              "options": [
                {
                  "id": "a",
                  "text": "Accesibilidad total",
                  "explanation": "Justo lo contrario, daría todos los permisos."
                },
                {
                  "id": "b",
                  "text": "Principio de privilegio mínimo",
                  "explanation": "El principio de privilegio mínimo consiste en dar a cada usuario solo los permisos necesarios para realizar su trabajo, reduciendo riesgos de seguridad."
                },
                {
                  "id": "c",
                  "text": "Tolerancia",
                  "explanation": "No es un principio relacionado con permisos."
                },
                {
                  "id": "d",
                  "text": "Redundancia",
                  "explanation": "Se refiere a copias o duplicación, no a permisos."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que practica garantiza la integridad de un backup",
              "question": "¿Qué práctica garantiza la integridad de un backup?",
              "options": [
                {
                  "id": "a",
                  "text": "Guardarlo en PDF",
                  "explanation": "No garantiza integridad ni es formato típico de backup."
                },
                {
                  "id": "b",
                  "text": "Contraseña débil",
                  "explanation": "Reduce la seguridad, no garantiza integridad."
                },
                {
                  "id": "c",
                  "text": "Mismo servidor",
                  "explanation": "Riesgo alto, no protege ni verifica integridad."
                },
                {
                  "id": "d",
                  "text": "Verificar su hash o firma digital",
                  "explanation": "Verificar el hash o firma digital permite comprobar que el backup no ha sido modificado ni corrupto, asegurando su integridad."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que accion debe realizarse antes de actualizar un plugin o t",
              "question": "¿Qué acción debe realizarse antes de actualizar un plugin o tema?",
              "options": [
                {
                  "id": "a",
                  "text": "Desactivar la base de datos",
                  "explanation": "No tiene sentido operativo."
                },
                {
                  "id": "b",
                  "text": "Hacer una copia de seguridad",
                  "explanation": "Antes de actualizar, es fundamental hacer un backup para poder restaurar la web en caso de errores o incompatibilidades."
                },
                {
                  "id": "c",
                  "text": "Borrar los logs",
                  "explanation": "No influye en la actualización."
                },
                {
                  "id": "d",
                  "text": "Cambiar el usuario administrador",
                  "explanation": "No es necesario para actualizar."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-cual es el formato nativo que usa wordpress para exportar co",
              "question": "¿Cuál es el formato nativo que usa WordPress para exportar contenidos?",
              "options": [
                {
                  "id": "a",
                  "text": "CSV",
                  "explanation": "No es el formato estándar de exportación de WordPress."
                },
                {
                  "id": "b",
                  "text": "WXR (WordPress eXtended RSS)",
                  "explanation": "WordPress utiliza el formato WXR, basado en XML, para exportar contenido como entradas, páginas, comentarios y otros datos."
                },
                {
                  "id": "c",
                  "text": "JSON",
                  "explanation": "Se usa en APIs, no en exportaciones nativas."
                },
                {
                  "id": "d",
                  "text": "SQL",
                  "explanation": "Es para bases de datos, no para exportar contenido desde WordPress."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que archivo controla las reglas de reescritura de urls en se",
              "question": "¿Qué archivo controla las reglas de reescritura de URLs en servidores Apache?",
              "options": [
                {
                  "id": "a",
                  "text": "php.ini",
                  "explanation": "Configura PHP, no URLs."
                },
                {
                  "id": "b",
                  "text": ".htaccess",
                  "explanation": "El archivo .htaccess permite configurar reglas en Apache, como la reescritura de URLs (mod_rewrite), redirecciones y seguridad."
                },
                {
                  "id": "c",
                  "text": "robots.txt",
                  "explanation": "Controla el rastreo de buscadores."
                },
                {
                  "id": "d",
                  "text": "sitemap.xml",
                  "explanation": "Lista URLs para SEO, no las reescribe."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que formato es ideal para importar datos estructurados como ",
              "question": "¿Qué formato es ideal para importar datos estructurados como usuarios o productos?",
              "options": [
                {
                  "id": "a",
                  "text": "SVG",
                  "explanation": "Es un formato de imagen vectorial."
                },
                {
                  "id": "b",
                  "text": "MP3",
                  "explanation": "Es un formato de audio."
                },
                {
                  "id": "c",
                  "text": "PDF",
                  "explanation": "No es adecuado para importar datos estructurados."
                },
                {
                  "id": "d",
                  "text": "CSV",
                  "explanation": "El formato CSV (Comma Separated Values) es ideal para importar datos estructurados porque organiza la información en filas y columnas fácilmente procesables."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-cual es el archivo principal de configuracion de wordpress",
              "question": "¿Cuál es el archivo principal de configuración de WordPress?",
              "options": [
                {
                  "id": "a",
                  "text": ".htacces",
                  "explanation": "Sirve para reglas de Apache, no configuración principal (y además está mal escrito)."
                },
                {
                  "id": "b",
                  "text": "config.ini",
                  "explanation": "No se usa en WordPress."
                },
                {
                  "id": "c",
                  "text": "index.php",
                  "explanation": "Es el archivo de entrada, no de configuración."
                },
                {
                  "id": "d",
                  "text": "wp-config.php",
                  "explanation": "El archivo wp-config.php contiene la configuración principal de WordPress, como la conexión a la base de datos y claves de seguridad."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que modelo de control de acceso utiliza wordpress para gesti",
              "question": "¿Qué modelo de control de acceso utiliza WordPress para gestionar permisos de usuario?",
              "options": [
                {
                  "id": "a",
                  "text": "DAC",
                  "explanation": "Control basado en el propietario, no es el modelo de WordPress."
                },
                {
                  "id": "b",
                  "text": "MAC",
                  "explanation": "Control rígido usado en entornos muy seguros, no en WordPress."
                },
                {
                  "id": "c",
                  "text": "ACL",
                  "explanation": "Se basa en listas por recurso, no en roles como WordPress."
                },
                {
                  "id": "d",
                  "text": "RBAC (Role-Based Access Control)",
                  "explanation": "WordPress utiliza un sistema basado en roles y capacidades, es decir, RBAC, donde cada rol (Administrador, Editor, etc.) tiene permisos asociados."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que herramienta integrada evalua la salud y el estado tecnic",
              "question": "¿Qué herramienta integrada evalúa la salud y el estado técnico del sitio WordPress?",
              "options": [
                {
                  "id": "a",
                  "text": "Performance Monitor",
                  "explanation": "No es una herramienta nativa de WordPress."
                },
                {
                  "id": "b",
                  "text": "Word Check",
                  "explanation": "No existe como herramienta oficial."
                },
                {
                  "id": "c",
                  "text": "Admin Report",
                  "explanation": "No es una funcionalidad integrada real."
                },
                {
                  "id": "d",
                  "text": "Site Health",
                  "explanation": "Site Health es la herramienta integrada de WordPress que analiza el estado del sitio, detecta problemas y recomienda mejoras de rendimiento y seguridad."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que documento recoge los procedimientos tecnicos estandariza",
              "question": "¿Qué documento recoge los procedimientos técnicos estandarizados en la administración del CMS?",
              "options": [
                {
                  "id": "a",
                  "text": "Registro de Sesión",
                  "explanation": "Solo guarda actividad, no procedimientos."
                },
                {
                  "id": "b",
                  "text": "Informe de Accesos",
                  "explanation": "Es un registro, no una guía de trabajo."
                },
                {
                  "id": "c",
                  "text": "Manual de Usuario Básico",
                  "explanation": "Es más general y no técnico/estandarizado."
                },
                {
                  "id": "d",
                  "text": "SOP (Procedimiento Operativo Normalizado)",
                  "explanation": "Un SOP (Standard Operating Procedure) recoge pasos claros y estandarizados para realizar tareas técnicas, asegurando que siempre se hagan igual y correctamente."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que es un tema hijo child theme",
              "question": "¿Qué es un tema hijo (Child Theme)?",
              "options": [
                {
                  "id": "a",
                  "text": "Sustituye completamente",
                  "explanation": "No, depende del tema padre."
                },
                {
                  "id": "b",
                  "text": "Temporal",
                  "explanation": "No es su función."
                },
                {
                  "id": "c",
                  "text": "Un tema que hereda la funcionalidad y diseño de un tema principal",
                  "explanation": "Un Child Theme permite modificar o ampliar un tema sin tocar el original, ya que hereda su diseño y funcionalidades, facilitando actualizaciones sin perder cambios."
                },
                {
                  "id": "d",
                  "text": "Sin CSS",
                  "explanation": "Sí usa CSS (normalmente hereda y añade estilos)."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-que archivo de configuracion se usa en nginx como equivalent",
              "question": "¿Qué archivo de configuración se usa en NGINX como equivalente funcional de .htaccess?",
              "options": [
                {
                  "id": "a",
                  "text": "index.html",
                  "explanation": "Es un archivo de contenido, no de configuración."
                },
                {
                  "id": "b",
                  "text": "nginx.conf",
                  "explanation": "En NGINX, la configuración del servidor (incluyendo reglas similares a .htaccess) se define en el archivo nginx.conf o en archivos de configuración incluidos."
                },
                {
                  "id": "c",
                  "text": "php.ini",
                  "explanation": "Configura PHP, no el servidor web."
                },
                {
                  "id": "d",
                  "text": "wp-login.php",
                  "explanation": "Archivo de WordPress, no de servidor."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut3-excel-que archivo controla las credenciales y parametros de la bas",
              "question": "¿Qué archivo controla las credenciales y parámetros de la base de datos?",
              "options": [
                {
                  "id": "a",
                  "text": "RBAC (Role-Based Access Control)",
                  "explanation": "RBAC (Role-Based Access Control) no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "b",
                  "text": "Principio de privilegio mínimo",
                  "explanation": "Principio de privilegio mínimo no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "c",
                  "text": "wp-config.php",
                  "explanation": "wp-config.php es la opción correcta porque responde directamente a la pregunta planteada en la autoevaluación y coincide con el contenido técnico esperado para ese concepto."
                },
                {
                  "id": "d",
                  "text": "WXR (WordPress eXtended RSS)",
                  "explanation": "WXR (WordPress eXtended RSS) no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                }
              ],
              "correctOptionId": "c",
              "source": "TESTS-AUTOEVALUACIÓN-IAW.XLSX"
            }
          ]
        },
        {
          "id": "ut4",
          "title": "Unidad 4",
          "questions": [
            {
              "id": "iaw-ut4-el principal inconveniente de la ofimatica web es",
              "question": "El principal inconveniente de la ofimática web es:",
              "options": [
                {
                  "id": "a",
                  "text": "Editar sin permisos",
                  "explanation": "Normalmente sí hay control de permisos."
                },
                {
                  "id": "b",
                  "text": "La dependencia de la conexión a Internet.",
                  "explanation": "Las herramientas de ofimática web (como Google Docs) necesitan conexión a Internet para funcionar correctamente y acceder a los archivos."
                },
                {
                  "id": "c",
                  "text": "Falta de almacenamiento",
                  "explanation": "Justo lo contrario, usan la nube."
                },
                {
                  "id": "d",
                  "text": "Imposibilidad de compartir",
                  "explanation": "Compartir es una de sus principales ventajas."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-el hardening de una aplicacion consiste en",
              "question": "El hardening de una aplicación consiste en:",
              "options": [
                {
                  "id": "a",
                  "text": "Más servicios abiertos",
                  "explanation": "Aumenta riesgos."
                },
                {
                  "id": "b",
                  "text": "Reducir vulnerabilidades desactivando servicios o funciones innecesarias.",
                  "explanation": "El hardening consiste en reforzar la seguridad del sistema eliminando lo innecesario y reduciendo la superficie de ataque."
                },
                {
                  "id": "c",
                  "text": "Quitar cifrado",
                  "explanation": "Reduce seguridad."
                },
                {
                  "id": "d",
                  "text": "Evitar contraseñas seguras",
                  "explanation": "Totalmente contrario a la seguridad."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-el rgpd exige que los datos personales sean",
              "question": "El RGPD exige que los datos personales sean:",
              "options": [
                {
                  "id": "a",
                  "text": "Sin límite de tiempo",
                  "explanation": "Deben conservarse solo el tiempo necesario."
                },
                {
                  "id": "b",
                  "text": "Accesibles a cualquiera",
                  "explanation": "Debe haber control de acceso."
                },
                {
                  "id": "c",
                  "text": "Tratados de forma lícita, leal y transparente.",
                  "explanation": "El RGPD establece que los datos personales deben tratarse de forma legal, justa y transparente, respetando los derechos del usuario."
                },
                {
                  "id": "d",
                  "text": "Transferidos libremente",
                  "explanation": "Hay restricciones fuera del EEE."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-la ofimatica web permite trabajar con documentos",
              "question": "La ofimática web permite trabajar con documentos:",
              "options": [
                {
                  "id": "a",
                  "text": "Directamente desde el navegador sin instalar programas locales.",
                  "explanation": "La ofimática web (como Google Docs) funciona desde el navegador, sin necesidad de instalar software en el equipo."
                },
                {
                  "id": "b",
                  "text": "Aplicaciones de escritorio",
                  "explanation": "Eso es ofimática tradicional."
                },
                {
                  "id": "c",
                  "text": "Sin Internet",
                  "explanation": "Normalmente requiere conexión."
                },
                {
                  "id": "d",
                  "text": "Redes locales",
                  "explanation": "Funciona en Internet, no solo en redes cerradas."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-en el contexto de la ofimatica web el rol del tecnico asix c",
              "question": "En el contexto de la ofimática web, el rol del técnico ASIX-CIBER es:",
              "options": [
                {
                  "id": "a",
                  "text": "Desarrollar software",
                  "explanation": "No es su función principal."
                },
                {
                  "id": "b",
                  "text": "Ignorar políticas",
                  "explanation": "Justo lo contrario, debe cumplirlas."
                },
                {
                  "id": "c",
                  "text": "Uso básico",
                  "explanation": "Su rol es técnico y de administración."
                },
                {
                  "id": "d",
                  "text": "Implantar, administrar y asegurar el acceso a las aplicaciones garantizando el cumplimiento normativo.",
                  "explanation": "El técnico ASIX-CIBER se encarga de gestionar, asegurar y mantener las aplicaciones, garantizando además que cumplan normativas como el RGPD."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-una buena practica de seguridad en suites web es",
              "question": "Una buena práctica de seguridad en suites web es:",
              "options": [
                {
                  "id": "a",
                  "text": "Desactivar auditoría",
                  "explanation": "Reduce la seguridad."
                },
                {
                  "id": "b",
                  "text": "Acceso público",
                  "explanation": "Expone información sensible."
                },
                {
                  "id": "c",
                  "text": "Compartir credenciales",
                  "explanation": "Mala práctica de seguridad."
                },
                {
                  "id": "d",
                  "text": "Revisar y revocar periódicamente permisos de aplicaciones de terceros.",
                  "explanation": "Revisar y revocar permisos ayuda a evitar accesos innecesarios o riesgos de seguridad en aplicaciones conectadas."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-el principio de minimo privilegio implica que",
              "question": "El principio de mínimo privilegio implica que:",
              "options": [
                {
                  "id": "a",
                  "text": "Cada usuario solo tiene los permisos estrictamente necesarios.",
                  "explanation": "El principio de mínimo privilegio consiste en dar a cada usuario solo los permisos imprescindibles, reduciendo riesgos de seguridad."
                },
                {
                  "id": "b",
                  "text": "Acceso total",
                  "explanation": "Es justo lo contrario."
                },
                {
                  "id": "c",
                  "text": "Desactivar roles admin",
                  "explanation": "No es necesario ni correcto."
                },
                {
                  "id": "d",
                  "text": "Eliminar políticas",
                  "explanation": "Va contra la seguridad."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-el sistema dlp tiene como finalidad",
              "question": "El sistema DLP tiene como finalidad:",
              "options": [
                {
                  "id": "a",
                  "text": "Desactivar cifrado",
                  "explanation": "Reduce seguridad."
                },
                {
                  "id": "b",
                  "text": "Compartir automáticamente",
                  "explanation": "Aumenta el riesgo de fuga."
                },
                {
                  "id": "c",
                  "text": "Evitar la fuga o pérdida de información sensible.",
                  "explanation": "Los sistemas DLP (Data Loss Prevention) están diseñados para proteger datos sensibles y evitar su fuga o uso indebido."
                },
                {
                  "id": "d",
                  "text": "Comprimir archivos",
                  "explanation": "No tiene relación con DLP."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-el cifrado en transito protege los datos",
              "question": "El cifrado en tránsito protege los datos:",
              "options": [
                {
                  "id": "a",
                  "text": "Mientras viajan entre el cliente y el servidor.",
                  "explanation": "El cifrado en tránsito protege la información cuando se transmite por la red, evitando que pueda ser interceptada."
                },
                {
                  "id": "b",
                  "text": "Backup local",
                  "explanation": "Eso sería cifrado en reposo."
                },
                {
                  "id": "c",
                  "text": "Solo móviles",
                  "explanation": "No es exclusivo de dispositivos."
                },
                {
                  "id": "d",
                  "text": "Almacenados",
                  "explanation": "Eso es cifrado en reposo."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-el protocolo utilizado habitualmente para la autenticacion c",
              "question": "El protocolo utilizado habitualmente para la autenticación centralizada en entornos web es:",
              "options": [
                {
                  "id": "a",
                  "text": "FTP",
                  "explanation": "Transferencia de archivos."
                },
                {
                  "id": "b",
                  "text": "SMTP",
                  "explanation": "Envío de correos."
                },
                {
                  "id": "c",
                  "text": "SNMP",
                  "explanation": "Monitorización de red."
                },
                {
                  "id": "d",
                  "text": "SAML.",
                  "explanation": "SAML (Security Assertion Markup Language) se usa para autenticación centralizada (SSO), permitiendo iniciar sesión una vez y acceder a múltiples servicios."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-un grupo de usuarios en una suite ofimatica web se utiliza p",
              "question": "Un grupo de usuarios en una suite ofimática web se utiliza para:",
              "options": [
                {
                  "id": "a",
                  "text": "Aislar usuarios",
                  "explanation": "No es su función."
                },
                {
                  "id": "b",
                  "text": "Impedir acceso",
                  "explanation": "Sirven para lo contrario."
                },
                {
                  "id": "c",
                  "text": "Sustituir políticas",
                  "explanation": "Complementan, no sustituyen."
                },
                {
                  "id": "d",
                  "text": "Asignar permisos o compartir recursos de manera colectiva.",
                  "explanation": "Los grupos permiten gestionar permisos de forma centralizada, facilitando compartir recursos con varios usuarios a la vez."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-el principal beneficio tecnico del modelo de ofimatica web e",
              "question": "El principal beneficio técnico del modelo de ofimática web es:",
              "options": [
                {
                  "id": "a",
                  "text": "Dependencia hardware",
                  "explanation": "Justo lo contrario, depende menos."
                },
                {
                  "id": "b",
                  "text": "Falta de integración",
                  "explanation": "Se integran fácilmente con otros servicios."
                },
                {
                  "id": "c",
                  "text": "Acceso ubicuo y colaboración en tiempo real.",
                  "explanation": "La ofimática web permite acceder desde cualquier lugar y trabajar varios usuarios a la vez en tiempo real, lo que mejora mucho la productividad."
                },
                {
                  "id": "d",
                  "text": "Más consumo local",
                  "explanation": "El procesamiento suele ser en la nube."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-una politica de retencion de datos define",
              "question": "Una política de retención de datos define:",
              "options": [
                {
                  "id": "a",
                  "text": "TLS",
                  "explanation": "Es sobre cifrado en tránsito."
                },
                {
                  "id": "b",
                  "text": "Usuarios simultáneos",
                  "explanation": "Es gestión de acceso, no retención."
                },
                {
                  "id": "c",
                  "text": "Cuánto tiempo se conservan los archivos y versiones.",
                  "explanation": "Una política de retención establece cuánto tiempo se guardan los datos antes de ser eliminados o archivados."
                },
                {
                  "id": "d",
                  "text": "Tamaño de documentos",
                  "explanation": "No define duración de almacenamiento."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-el cifrado en reposo protege los datos",
              "question": "El cifrado en reposo protege los datos:",
              "options": [
                {
                  "id": "a",
                  "text": "Solo en local",
                  "explanation": "También aplica en la nube."
                },
                {
                  "id": "b",
                  "text": "Durante transmisión",
                  "explanation": "Eso es cifrado en tránsito."
                },
                {
                  "id": "c",
                  "text": "Mientras se almacenan en los servidores del proveedor.",
                  "explanation": "El cifrado en reposo protege los datos cuando están almacenados, por ejemplo en discos o servidores en la nube."
                },
                {
                  "id": "d",
                  "text": "Contraseña",
                  "explanation": "No define el cifrado de almacenamiento."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-en una implantacion de ofimatica web el tecnico asix ciber d",
              "question": "En una implantación de ofimática web, el técnico ASIX-CIBER debe:",
              "options": [
                {
                  "id": "a",
                  "text": "Hardware",
                  "explanation": "No es su función principal."
                },
                {
                  "id": "b",
                  "text": "Evitar nube",
                  "explanation": "La ofimática web se basa en la nube."
                },
                {
                  "id": "c",
                  "text": "Configurar usuarios, permisos y políticas de seguridad.",
                  "explanation": "El técnico debe administrar el sistema, gestionando usuarios, accesos y seguridad para garantizar un uso correcto y protegido."
                },
                {
                  "id": "d",
                  "text": "Limitar seguridad",
                  "explanation": "Va en contra de buenas prácticas."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-un plan de respuesta ante incidentes debe incluir",
              "question": "Un plan de respuesta ante incidentes debe incluir:",
              "options": [
                {
                  "id": "a",
                  "text": "Detección, contención, erradicación, recuperación y lecciones aprendidas.",
                  "explanation": "Un plan de respuesta ante incidentes sigue fases clave: detectar el problema, contenerlo, eliminar la causa, recuperar el sistema y aprender para evitar futuros incidentes."
                },
                {
                  "id": "b",
                  "text": "Eliminar cuentas",
                  "explanation": "No es una respuesta adecuada ni proporcional."
                },
                {
                  "id": "c",
                  "text": "Excluir auditorías",
                  "explanation": "Va contra la mejora y control."
                },
                {
                  "id": "d",
                  "text": "Suspender servicio",
                  "explanation": "Puede ser parte de contención, pero no es el plan completo."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-la gestion de versiones en documentos colaborativos permite",
              "question": "La gestión de versiones en documentos colaborativos permite:",
              "options": [
                {
                  "id": "a",
                  "text": "Limitar acceso",
                  "explanation": "Eso es gestión de permisos."
                },
                {
                  "id": "b",
                  "text": "Restaurar cambios y conservar el historial de ediciones.",
                  "explanation": "La gestión de versiones permite ver cambios anteriores, restaurarlos y mantener un historial, algo clave en trabajo colaborativo."
                },
                {
                  "id": "c",
                  "text": "Evitar trabajo simultáneo",
                  "explanation": "Es justo al revés, lo permite."
                },
                {
                  "id": "d",
                  "text": "Borrar revisiones",
                  "explanation": "Se conservan, no se eliminan automáticamente."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-que factor es fundamental en una politica de autenticacion s",
              "question": "¿Qué factor es fundamental en una política de autenticación segura?",
              "options": [
                {
                  "id": "a",
                  "text": "Compartir credenciales",
                  "explanation": "Mala práctica de seguridad."
                },
                {
                  "id": "b",
                  "text": "Misma contraseña",
                  "explanation": "Aumenta el riesgo de comprometer cuentas."
                },
                {
                  "id": "c",
                  "text": "Implementar MFA (autenticación multifactor).",
                  "explanation": "La MFA añade una capa extra de seguridad (algo que sabes + algo que tienes + algo que eres), reduciendo el riesgo de accesos no autorizados."
                },
                {
                  "id": "d",
                  "text": "Deshabilitar control",
                  "explanation": "Reduce la seguridad."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-el ediscovery permite",
              "question": "El eDiscovery permite:",
              "options": [
                {
                  "id": "a",
                  "text": "Localizar y conservar evidencias digitales para auditorías.",
                  "explanation": "El eDiscovery se utiliza para buscar, recopilar y conservar información digital con fines legales o de auditoría."
                },
                {
                  "id": "b",
                  "text": "Desactivar trazabilidad",
                  "explanation": "Hace justo lo contrario."
                },
                {
                  "id": "c",
                  "text": "Limitar colaboración",
                  "explanation": "No es su función."
                },
                {
                  "id": "d",
                  "text": "Eliminar versiones",
                  "explanation": "No trata de borrado, sino de conservación."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut4-el modelo saas se caracteriza por",
              "question": "El modelo SaaS se caracteriza por:",
              "options": [
                {
                  "id": "a",
                  "text": "Infraestructura propia",
                  "explanation": "Eso es más típico de on-premise."
                },
                {
                  "id": "b",
                  "text": "Sin escalabilidad",
                  "explanation": "SaaS es altamente escalable."
                },
                {
                  "id": "c",
                  "text": "Ofrecer software gestionado por el proveedor y accesible por Internet.",
                  "explanation": "El modelo SaaS (Software as a Service) permite usar aplicaciones desde Internet, gestionadas por el proveedor, sin instalación local."
                },
                {
                  "id": "d",
                  "text": "Instalación local",
                  "explanation": "Es lo contrario a SaaS."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 IAW AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut5",
          "title": "Unidad 5",
          "questions": [
            {
              "id": "iaw-ut5-que metodo de envio se utiliza preferentemente para datos co",
              "question": "¿Qué método de envío se utiliza preferentemente para datos confidenciales en un formulario?",
              "options": [
                {
                  "id": "a",
                  "text": "POST",
                  "explanation": "El método POST envía los datos en el cuerpo de la petición, no visibles en la URL, lo que lo hace más adecuado para información sensible."
                },
                {
                  "id": "b",
                  "text": "MAILTO",
                  "explanation": "Abre el cliente de correo, no es seguro ni estándar para formularios."
                },
                {
                  "id": "c",
                  "text": "GET",
                  "explanation": "Los datos se ven en la URL, no es seguro."
                },
                {
                  "id": "d",
                  "text": "SEND",
                  "explanation": "No es un método HTTP válido."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que estructura condicional en php permite ejecutar un bloque",
              "question": "¿Qué estructura condicional en PHP permite ejecutar un bloque alternativo si la condición no se cumple?",
              "options": [
                {
                  "id": "a",
                  "text": "switch",
                  "explanation": "Evalúa múltiples casos, no un else directo."
                },
                {
                  "id": "b",
                  "text": "do...while",
                  "explanation": "Es un bucle, no una condición."
                },
                {
                  "id": "c",
                  "text": "foreach",
                  "explanation": "Es un bucle para recorrer elementos."
                },
                {
                  "id": "d",
                  "text": "if...else",
                  "explanation": "La estructura if...else permite ejecutar un bloque si la condición es verdadera y otro alternativo si es falsa."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que componente forma parte del entorno lamp",
              "question": "¿Qué componente forma parte del entorno LAMP?",
              "options": [
                {
                  "id": "a",
                  "text": "Windows",
                  "explanation": "LAMP usa Linux, no Windows."
                },
                {
                  "id": "b",
                  "text": "Chrome",
                  "explanation": "Es un navegador."
                },
                {
                  "id": "c",
                  "text": "Internet Explorer",
                  "explanation": "También es un navegador."
                },
                {
                  "id": "d",
                  "text": "Apache",
                  "explanation": "El entorno LAMP está formado por Linux, Apache, MySQL y PHP, por lo que Apache es uno de sus componentes principales."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que funcion principal cumplen los lenguajes de programacion ",
              "question": "¿Qué función principal cumplen los lenguajes de programación del lado del servidor?",
              "options": [
                {
                  "id": "a",
                  "text": "Sustituir HTML",
                  "explanation": "HTML sigue siendo necesario."
                },
                {
                  "id": "b",
                  "text": "Equipo del usuario",
                  "explanation": "Eso es lado cliente."
                },
                {
                  "id": "c",
                  "text": "Interfaces en navegador",
                  "explanation": "Eso es frontend."
                },
                {
                  "id": "d",
                  "text": "Generar contenido dinámico y procesar datos antes de enviarlos al cliente.",
                  "explanation": "Los lenguajes del lado del servidor (como PHP) procesan datos y generan contenido dinámico que luego se envía al navegador del usuario."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que tipo de vulnerabilidad permite la insercion de codigo ma",
              "question": "¿Qué tipo de vulnerabilidad permite la inserción de código malicioso en un campo de formulario?",
              "options": [
                {
                  "id": "a",
                  "text": "DoS",
                  "explanation": "Ataque de denegación de servicio, no inyección de código."
                },
                {
                  "id": "b",
                  "text": "Cross-Site Scripting (XSS)",
                  "explanation": "El XSS permite inyectar código (normalmente JavaScript) en campos de formularios o páginas, que luego se ejecuta en el navegador de otros usuarios."
                },
                {
                  "id": "c",
                  "text": "Phishing",
                  "explanation": "Engaño al usuario, no vulnerabilidad técnica del formulario."
                },
                {
                  "id": "d",
                  "text": "DNS Spoofing",
                  "explanation": "Suplantación de DNS, no relacionado con formularios."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-cual de los siguientes lenguajes es de tipo servidor",
              "question": "¿Cuál de los siguientes lenguajes es de tipo servidor?",
              "options": [
                {
                  "id": "a",
                  "text": "HTML",
                  "explanation": "Lenguaje de marcas (estructura)."
                },
                {
                  "id": "b",
                  "text": "CSS",
                  "explanation": "Estilos (diseño)."
                },
                {
                  "id": "c",
                  "text": "JavaScript",
                  "explanation": "Principalmente lado cliente."
                },
                {
                  "id": "d",
                  "text": "PHP",
                  "explanation": "PHP es un lenguaje de programación del lado del servidor que procesa datos y genera contenido dinámico antes de enviarlo al cliente."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que tecnica permite identificar a un usuario durante toda su",
              "question": "¿Qué técnica permite identificar a un usuario durante toda su navegación por la aplicación?",
              "options": [
                {
                  "id": "a",
                  "text": "HTML",
                  "explanation": "Solo estructura, no guarda estado."
                },
                {
                  "id": "b",
                  "text": "CSS",
                  "explanation": "Solo estilos."
                },
                {
                  "id": "c",
                  "text": "JavaScript",
                  "explanation": "Puede ayudar, pero no es el mecanismo principal de sesión en servidor."
                },
                {
                  "id": "d",
                  "text": "Uso de sesiones",
                  "explanation": "Las sesiones permiten mantener información del usuario (como login) durante toda la navegación en la aplicación."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que funcion destruye una sesion existente y elimina sus vari",
              "question": "¿Qué función destruye una sesión existente y elimina sus variables?",
              "options": [
                {
                  "id": "a",
                  "text": "session_destroy();",
                  "explanation": "En PHP, session_destroy(); elimina la sesión actual y borra todos los datos asociados."
                },
                {
                  "id": "b",
                  "text": "end_session();",
                  "explanation": "No existe en PHP."
                },
                {
                  "id": "c",
                  "text": "close_session();",
                  "explanation": "No es una función válida."
                },
                {
                  "id": "d",
                  "text": "stop_session();",
                  "explanation": "Tampoco existe."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que comando inicia una sesion en php",
              "question": "¿Qué comando inicia una sesión en PHP?",
              "options": [
                {
                  "id": "a",
                  "text": "start_session();",
                  "explanation": "No existe en PHP."
                },
                {
                  "id": "b",
                  "text": "session_start();",
                  "explanation": "La función session_start(); inicia una sesión en PHP y permite usar variables de sesión."
                },
                {
                  "id": "c",
                  "text": "init_session();",
                  "explanation": "No es una función válida."
                },
                {
                  "id": "d",
                  "text": "begin_session();",
                  "explanation": "Tampoco existe."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que funcion de php se utiliza para convertir caracteres espe",
              "question": "¿Qué función de PHP se utiliza para convertir caracteres especiales en entidades HTML seguras?",
              "options": [
                {
                  "id": "a",
                  "text": "htmlentities()",
                  "explanation": "También convierte, pero no es la opción más habitual en este contexto de formularios básicos."
                },
                {
                  "id": "b",
                  "text": "secure_text()",
                  "explanation": "No existe en PHP."
                },
                {
                  "id": "c",
                  "text": "htmlspecialchars()",
                  "explanation": "htmlspecialchars() convierte caracteres especiales (como <, >, \") en entidades HTML, evitando ataques como XSS."
                },
                {
                  "id": "d",
                  "text": "escape_html()",
                  "explanation": "No es una función válida."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que medida ayuda a evitar la fijacion de sesion session fixa",
              "question": "¿Qué medida ayuda a evitar la fijación de sesión (session fixation)?",
              "options": [
                {
                  "id": "a",
                  "text": "Regenerar el ID de sesión tras la autenticación.",
                  "explanation": "Regenerar el ID de sesión después del login evita que un atacante reutilice un ID previamente fijado."
                },
                {
                  "id": "b",
                  "text": "Mismo ID",
                  "explanation": "Grave fallo de seguridad."
                },
                {
                  "id": "c",
                  "text": "Texto plano",
                  "explanation": "Facilita robo de sesión."
                },
                {
                  "id": "d",
                  "text": "Deshabilitar cookies",
                  "explanation": "No soluciona el problema y rompe la sesión."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que parametro de configuracion en php ini define el tiempo m",
              "question": "¿Qué parámetro de configuración en php.ini define el tiempo máximo de vida de una sesión?",
              "options": [
                {
                  "id": "a",
                  "text": "session.cookie_time",
                  "explanation": "No es un parámetro válido (sería session.cookie_lifetime)."
                },
                {
                  "id": "b",
                  "text": "session.max_time",
                  "explanation": "No existe en PHP."
                },
                {
                  "id": "c",
                  "text": "session.gc_maxlifetime",
                  "explanation": "El parámetro session.gc_maxlifetime define el tiempo (en segundos) que una sesión puede permanecer activa antes de ser eliminada por el recolector de basura."
                },
                {
                  "id": "d",
                  "text": "session.limit_time",
                  "explanation": "Tampoco es un parámetro real."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que etiqueta permite incrustar codigo php dentro de html",
              "question": "¿Qué etiqueta permite incrustar código PHP dentro de HTML?",
              "options": [
                {
                  "id": "a",
                  "text": "<script>",
                  "explanation": "Es para JavaScript (lado cliente)."
                },
                {
                  "id": "b",
                  "text": "<server>",
                  "explanation": "No es una etiqueta válida."
                },
                {
                  "id": "c",
                  "text": "<?php ... ?>",
                  "explanation": "La etiqueta <?php ... ?> es la forma estándar de incrustar código PHP dentro de HTML para que se ejecute en el servidor."
                },
                {
                  "id": "d",
                  "text": "<php>",
                  "explanation": "No existe en PHP."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que operador se utiliza para concatenar cadenas de texto en ",
              "question": "¿Qué operador se utiliza para concatenar cadenas de texto en PHP?",
              "options": [
                {
                  "id": "a",
                  "text": ".",
                  "explanation": "En PHP, el operador . se utiliza para concatenar cadenas de texto."
                },
                {
                  "id": "b",
                  "text": "&",
                  "explanation": "Se usa para referencias, no concatenación."
                },
                {
                  "id": "c",
                  "text": "+",
                  "explanation": "Es para operaciones matemáticas."
                },
                {
                  "id": "d",
                  "text": ":",
                  "explanation": "No se usa para concatenar."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que funcion de php se utiliza para crear un hash seguro de c",
              "question": "¿Qué función de PHP se utiliza para crear un hash seguro de contraseña?",
              "options": [
                {
                  "id": "a",
                  "text": "encrypt_pass()",
                  "explanation": "No existe en PHP."
                },
                {
                  "id": "b",
                  "text": "md5()",
                  "explanation": "Es inseguro y obsoleto para contraseñas."
                },
                {
                  "id": "c",
                  "text": "make_hash()",
                  "explanation": "No es una función válida."
                },
                {
                  "id": "d",
                  "text": "password_hash()",
                  "explanation": "password_hash() genera hashes seguros usando algoritmos modernos (como bcrypt), recomendados para almacenar contraseñas."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-cual es la sintaxis correcta para definir una constante en p",
              "question": "¿Cuál es la sintaxis correcta para definir una constante en PHP?",
              "options": [
                {
                  "id": "a",
                  "text": "constant",
                  "explanation": "No es una sintaxis válida."
                },
                {
                  "id": "b",
                  "text": "static()",
                  "explanation": "No sirve para definir constantes."
                },
                {
                  "id": "c",
                  "text": "define(\"NOMBRE\", \"valor\");",
                  "explanation": "La función define() se utiliza en PHP para crear constantes con un nombre y un valor que no cambian durante la ejecución."
                },
                {
                  "id": "d",
                  "text": "const() =",
                  "explanation": "Sintaxis incorrecta (const no funciona así)."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que modelo de seguridad organiza los permisos segun el rol d",
              "question": "¿Qué modelo de seguridad organiza los permisos según el rol del usuario?",
              "options": [
                {
                  "id": "a",
                  "text": "ACL",
                  "explanation": "Permisos por recurso, no por rol."
                },
                {
                  "id": "b",
                  "text": "RBAC (Role-Based Access Control)",
                  "explanation": "El modelo RBAC asigna permisos en función del rol del usuario, facilitando la gestión de accesos."
                },
                {
                  "id": "c",
                  "text": "MAC",
                  "explanation": "Control obligatorio, más rígido."
                },
                {
                  "id": "d",
                  "text": "DAC",
                  "explanation": "Control basado en el propietario."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que variable superglobal de php recibe los datos enviados me",
              "question": "¿Qué variable superglobal de PHP recibe los datos enviados mediante método POST?",
              "options": [
                {
                  "id": "a",
                  "text": "$_DATA",
                  "explanation": "No existe en PHP."
                },
                {
                  "id": "b",
                  "text": "$_POST",
                  "explanation": "La superglobal $_POST almacena los datos enviados desde formularios usando el método POST."
                },
                {
                  "id": "c",
                  "text": "$_FORM",
                  "explanation": "No es una variable válida."
                },
                {
                  "id": "d",
                  "text": "$_GET",
                  "explanation": "Se usa para datos enviados por GET."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-cual es el proposito del archivo php ini en un servidor",
              "question": "¿Cuál es el propósito del archivo php.ini en un servidor?",
              "options": [
                {
                  "id": "a",
                  "text": "Bases de datos",
                  "explanation": "No tiene esa función."
                },
                {
                  "id": "b",
                  "text": "Hojas de estilo",
                  "explanation": "Eso es CSS."
                },
                {
                  "id": "c",
                  "text": "Configurar el comportamiento del intérprete PHP.",
                  "explanation": "El archivo php.ini define configuraciones clave de PHP como límites de memoria, sesiones, errores, extensiones, etc."
                },
                {
                  "id": "d",
                  "text": "Contenido HTML",
                  "explanation": "Eso son archivos web, no configuración."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut5-que protocolo debe emplearse siempre para enviar credenciale",
              "question": "¿Qué protocolo debe emplearse siempre para enviar credenciales de usuario de forma segura?",
              "options": [
                {
                  "id": "a",
                  "text": "POP3",
                  "explanation": "Protocolo de correo, no para envío web seguro."
                },
                {
                  "id": "b",
                  "text": "HTTPS",
                  "explanation": "HTTPS cifra la comunicación mediante TLS, protegiendo credenciales durante la transmisión."
                },
                {
                  "id": "c",
                  "text": "FTP",
                  "explanation": "No cifra por defecto."
                },
                {
                  "id": "d",
                  "text": "HTTP",
                  "explanation": "No es seguro, envía datos en texto plano."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 IAW AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut6",
          "title": "Unidad 6",
          "questions": [
            {
              "id": "iaw-ut6-que funcion tiene la clave foranea foreign key en una base d",
              "question": "¿Qué función tiene la clave foránea (FOREIGN KEY) en una base de datos relacional?",
              "options": [
                {
                  "id": "a",
                  "text": "Cifrar datos",
                  "explanation": "No tiene relación con claves."
                },
                {
                  "id": "b",
                  "text": "Validar tipos",
                  "explanation": "Eso lo hacen los tipos de datos."
                },
                {
                  "id": "c",
                  "text": "Copias de seguridad",
                  "explanation": "No es su función."
                },
                {
                  "id": "d",
                  "text": "Vincular registros entre tablas",
                  "explanation": "Una clave foránea (FOREIGN KEY) permite relacionar registros entre tablas, asegurando la integridad referencial."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que funcion en php se usa para cifrar contrasenas antes de g",
              "question": "¿Qué función en PHP se usa para cifrar contraseñas antes de guardarlas?",
              "options": [
                {
                  "id": "a",
                  "text": "sha1()",
                  "explanation": "Inseguro para contraseñas hoy en día."
                },
                {
                  "id": "b",
                  "text": "password_hash()",
                  "explanation": "password_hash() genera hashes seguros con algoritmos modernos (como bcrypt), recomendados para almacenar contraseñas."
                },
                {
                  "id": "c",
                  "text": "md5()",
                  "explanation": "Obsoleto y vulnerable."
                },
                {
                  "id": "d",
                  "text": "crypt_old()",
                  "explanation": "No es una función válida en PHP."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que funcion cumple una base de datos en una aplicacion web",
              "question": "¿Qué función cumple una base de datos en una aplicación web?",
              "options": [
                {
                  "id": "a",
                  "text": "Interfaz",
                  "explanation": "Eso es frontend."
                },
                {
                  "id": "b",
                  "text": "Servidor",
                  "explanation": "Eso es administración de sistemas."
                },
                {
                  "id": "c",
                  "text": "Almacenar y organizar información de manera estructurada",
                  "explanation": "Una base de datos permite guardar, organizar y consultar datos de forma eficiente en una aplicación web."
                },
                {
                  "id": "d",
                  "text": "JavaScript",
                  "explanation": "Se ejecuta en el navegador o servidor, no en la BD."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que configuracion debe aplicarse en un entorno de produccion",
              "question": "¿Qué configuración debe aplicarse en un entorno de producción para evitar mostrar errores al usuario?",
              "options": [
                {
                  "id": "a",
                  "text": "E_ALL",
                  "explanation": "Muestra todos los errores (útil en desarrollo)."
                },
                {
                  "id": "b",
                  "text": "log_errors = Off",
                  "explanation": "Desactiva logs, mala práctica."
                },
                {
                  "id": "c",
                  "text": "display_errors = On",
                  "explanation": "Mostraría errores al usuario."
                },
                {
                  "id": "d",
                  "text": "display_errors = Off",
                  "explanation": "En producción se debe ocultar los errores al usuario para no exponer información sensible. Por eso se usa display_errors = Off."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que instruccion sql se emplea para modificar un registro exi",
              "question": "¿Qué instrucción SQL se emplea para modificar un registro existente?",
              "options": [
                {
                  "id": "a",
                  "text": "CHANGE",
                  "explanation": "No es una instrucción SQL estándar para registros."
                },
                {
                  "id": "b",
                  "text": "UPDATE",
                  "explanation": "La instrucción UPDATE se utiliza para modificar registros existentes en una tabla."
                },
                {
                  "id": "c",
                  "text": "ALTER",
                  "explanation": "Se usa para modificar la estructura de la tabla."
                },
                {
                  "id": "d",
                  "text": "MODIFY",
                  "explanation": "No se usa para modificar registros en SQL estándar."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que extension de php se recomienda para conectar de forma se",
              "question": "¿Qué extensión de PHP se recomienda para conectar de forma segura a bases de datos MySQL?",
              "options": [
                {
                  "id": "a",
                  "text": "PDO (PHP Data Objects)",
                  "explanation": "PDO permite conexiones seguras y uso de consultas preparadas, evitando inyecciones SQL."
                },
                {
                  "id": "b",
                  "text": "MySQL_connect()",
                  "explanation": "Obsoleta y eliminada."
                },
                {
                  "id": "c",
                  "text": "ODBC antiguo",
                  "explanation": "No es la opción recomendada."
                },
                {
                  "id": "d",
                  "text": "JSON PHP API",
                  "explanation": "No sirve para bases de datos."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que tipo de archivo se recomienda para centralizar la conexi",
              "question": "¿Qué tipo de archivo se recomienda para centralizar la conexión a la base de datos en una aplicación PHP?",
              "options": [
                {
                  "id": "a",
                  "text": "conexion.php",
                  "explanation": "Se suele crear un archivo como conexion.php para centralizar la conexión a la base de datos y reutilizarla en toda la aplicación."
                },
                {
                  "id": "b",
                  "text": "usuario.ini",
                  "explanation": "No es estándar para conexiones."
                },
                {
                  "id": "c",
                  "text": "config.html",
                  "explanation": "HTML no sirve para lógica backend."
                },
                {
                  "id": "d",
                  "text": "data.json",
                  "explanation": "Es para datos, no conexión."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que elemento identifica de forma unica cada registro de una ",
              "question": "¿Qué elemento identifica de forma única cada registro de una tabla?",
              "options": [
                {
                  "id": "a",
                  "text": "Clave primaria",
                  "explanation": "La clave primaria (PRIMARY KEY) identifica de forma única cada registro dentro de una tabla."
                },
                {
                  "id": "b",
                  "text": "Columna temporal",
                  "explanation": "No garantiza unicidad."
                },
                {
                  "id": "c",
                  "text": "Clave externa",
                  "explanation": "Sirve para relaciones, no para identificar."
                },
                {
                  "id": "d",
                  "text": "Índice",
                  "explanation": "Mejora búsquedas, pero no identifica de forma única."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que comando sql se utiliza para crear una base de datos",
              "question": "¿Qué comando SQL se utiliza para crear una base de datos?",
              "options": [
                {
                  "id": "a",
                  "text": "CREATE DATABASE",
                  "explanation": "El comando CREATE DATABASE se utiliza para crear una nueva base de datos en el sistema gestor."
                },
                {
                  "id": "b",
                  "text": "NEW DATABASE",
                  "explanation": "No es sintaxis SQL válida."
                },
                {
                  "id": "c",
                  "text": "INSERT DATABASE",
                  "explanation": "INSERT es para datos, no bases."
                },
                {
                  "id": "d",
                  "text": "GENERATE DATABASE",
                  "explanation": "No existe en SQL."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que archivo de configuracion de php permite activar el regis",
              "question": "¿Qué archivo de configuración de PHP permite activar el registro de errores?",
              "options": [
                {
                  "id": "a",
                  "text": "config.php",
                  "explanation": "No es el archivo global de configuración de PHP."
                },
                {
                  "id": "b",
                  "text": ".htaccess",
                  "explanation": "Configura Apache, no PHP directamente."
                },
                {
                  "id": "c",
                  "text": "php.ini",
                  "explanation": "El archivo php.ini permite configurar opciones como log_errors, activando el registro de errores en PHP."
                },
                {
                  "id": "d",
                  "text": "settings.json",
                  "explanation": "No es un archivo de configuración de PHP."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que instruccion permite recuperar datos almacenados en una t",
              "question": "¿Qué instrucción permite recuperar datos almacenados en una tabla?",
              "options": [
                {
                  "id": "a",
                  "text": "UPDATE",
                  "explanation": "Modifica datos existentes."
                },
                {
                  "id": "b",
                  "text": "INSERT",
                  "explanation": "Inserta nuevos registros."
                },
                {
                  "id": "c",
                  "text": "SELECT",
                  "explanation": "La instrucción SELECT se utiliza para consultar y recuperar datos de una tabla en una base de datos."
                },
                {
                  "id": "d",
                  "text": "DELETE",
                  "explanation": "Elimina registros."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que principio establece que cada usuario debe tener solo los",
              "question": "¿Qué principio establece que cada usuario debe tener solo los permisos necesarios para su función?",
              "options": [
                {
                  "id": "a",
                  "text": "Tolerancia",
                  "explanation": "No está relacionado con permisos."
                },
                {
                  "id": "b",
                  "text": "Principio de mínimo privilegio",
                  "explanation": "El principio de mínimo privilegio indica que cada usuario debe tener solo los permisos imprescindibles, reduciendo riesgos de seguridad."
                },
                {
                  "id": "c",
                  "text": "Redundancia",
                  "explanation": "Relacionado con copias, no accesos."
                },
                {
                  "id": "d",
                  "text": "Acceso completo",
                  "explanation": "Es lo contrario a seguridad."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que comando de mysql se utiliza para realizar una copia de s",
              "question": "¿Qué comando de MySQL se utiliza para realizar una copia de seguridad de una base de datos?",
              "options": [
                {
                  "id": "a",
                  "text": "POST",
                  "explanation": "No es un comando real. El comando mysqldump permite exportar la base de datos a un archivo, creando una copia de seguridad. El método POST envía los datos en el cuerpo de la petición, no visibles en la URL, siendo más adecuado para información sensible."
                },
                {
                  "id": "b",
                  "text": "GET",
                  "explanation": "No es comando estándar de MySQL. Los datos aparecen en la URL."
                },
                {
                  "id": "c",
                  "text": "PUT",
                  "explanation": "Se usa para actualizaciones en APIs, no formularios básicos."
                },
                {
                  "id": "d",
                  "text": "DELETE",
                  "explanation": "No es sintaxis válida en MySQL. . ¿Qué método HTTP se utiliza preferentemente para enviar datos de formularios sensibles? Se usa para eliminar recursos, no para enviar formularios."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que comando permite eliminar definitivamente un registro de ",
              "question": "¿Qué comando permite eliminar definitivamente un registro de una tabla?",
              "options": [
                {
                  "id": "a",
                  "text": "ERASE",
                  "explanation": "No es comando SQL válido."
                },
                {
                  "id": "b",
                  "text": "DROP",
                  "explanation": "Elimina la tabla completa, no registros."
                },
                {
                  "id": "c",
                  "text": "REMOVE",
                  "explanation": "No existe en SQL."
                },
                {
                  "id": "d",
                  "text": "DELETE",
                  "explanation": "El comando DELETE se utiliza para eliminar registros específicos de una tabla."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que prueba permite evaluar el rendimiento de una consulta sq",
              "question": "¿Qué prueba permite evaluar el rendimiento de una consulta SQL?",
              "options": [
                {
                  "id": "a",
                  "text": "VERIFY",
                  "explanation": "No es un comando SQL estándar."
                },
                {
                  "id": "b",
                  "text": "DESCRIBE",
                  "explanation": "Muestra estructura de tabla, no rendimiento."
                },
                {
                  "id": "c",
                  "text": "TEST QUERY",
                  "explanation": "No existe como comando SQL."
                },
                {
                  "id": "d",
                  "text": "EXPLAIN",
                  "explanation": "El comando EXPLAIN muestra cómo se ejecuta una consulta SQL, permitiendo analizar su rendimiento y optimizarla."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que sentencia php permite capturar y gestionar errores en la",
              "question": "¿Qué sentencia PHP permite capturar y gestionar errores en la ejecución del código?",
              "options": [
                {
                  "id": "a",
                  "text": "foreach",
                  "explanation": "Es un bucle."
                },
                {
                  "id": "b",
                  "text": "try/catch",
                  "explanation": "La estructura try/catch permite capturar excepciones y manejar errores de forma controlada en PHP."
                },
                {
                  "id": "c",
                  "text": "do/while",
                  "explanation": "También es un bucle."
                },
                {
                  "id": "d",
                  "text": "if/else",
                  "explanation": "Controla condiciones, no errores."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que sistema gestor de bases de datos se utiliza habitualment",
              "question": "¿Qué sistema gestor de bases de datos se utiliza habitualmente junto con PHP?",
              "options": [
                {
                  "id": "a",
                  "text": "MongoDB",
                  "explanation": "Es NoSQL, no el más habitual con PHP clásico."
                },
                {
                  "id": "b",
                  "text": "MySQL",
                  "explanation": "MySQL es el SGBD más común junto con PHP (entorno LAMP), usado en la mayoría de aplicaciones web."
                },
                {
                  "id": "c",
                  "text": "SQL Server",
                  "explanation": "Se usa más en entornos Microsoft."
                },
                {
                  "id": "d",
                  "text": "Oracle",
                  "explanation": "Más complejo y empresarial."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que mecanismo evita ataques de inyeccion sql al separar dato",
              "question": "¿Qué mecanismo evita ataques de inyección SQL al separar datos y consultas?",
              "options": [
                {
                  "id": "a",
                  "text": "Concatenación",
                  "explanation": "Justo lo que provoca inyección SQL."
                },
                {
                  "id": "b",
                  "text": "Consultas preparadas",
                  "explanation": "Las consultas preparadas separan la lógica SQL de los datos, evitando que se inyecte código malicioso."
                },
                {
                  "id": "c",
                  "text": "Variables globales",
                  "explanation": "No protegen contra SQL injection."
                },
                {
                  "id": "d",
                  "text": "Filtros HTML",
                  "explanation": "Sirven para XSS, no para SQL."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-que herramienta permite simular multiples usuarios accediend",
              "question": "¿Qué herramienta permite simular múltiples usuarios accediendo a un sitio web para medir rendimiento?",
              "options": [
                {
                  "id": "a",
                  "text": "phpMyAdmin",
                  "explanation": "Gestión de bases de datos."
                },
                {
                  "id": "b",
                  "text": "Netcat",
                  "explanation": "Herramienta de red, no de carga web."
                },
                {
                  "id": "c",
                  "text": "Apache JMeter",
                  "explanation": "Apache JMeter permite hacer pruebas de carga simulando muchos usuarios para medir el rendimiento de una web."
                },
                {
                  "id": "d",
                  "text": "GitLab Runner",
                  "explanation": "CI/CD, no testing de carga."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 IAW AUTOEVALUACION.docx"
            },
            {
              "id": "iaw-ut6-excel-que metodo http se utiliza preferentemente para enviar datos",
              "question": "¿Qué método HTTP se utiliza preferentemente para enviar datos de formularios sensibles?",
              "options": [
                {
                  "id": "a",
                  "text": "Almacenar y organizar información de manera estructurada",
                  "explanation": "Almacenar y organizar información de manera estructurada no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "b",
                  "text": "POST",
                  "explanation": "POST es la opción correcta porque responde directamente a la pregunta planteada en la autoevaluación y coincide con el contenido técnico esperado para ese concepto."
                },
                {
                  "id": "c",
                  "text": "MySQL",
                  "explanation": "MySQL no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "d",
                  "text": "PDO (PHP Data Objects)",
                  "explanation": "PDO (PHP Data Objects) no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                }
              ],
              "correctOptionId": "b",
              "source": "TESTS-AUTOEVALUACIÓN-IAW.XLSX"
            }
          ]
        }
      ]
    },
    {
      "id": "lenguaje-marcas",
      "name": "LENGUAJE MARCAS",
      "finalExamSize": 30,
      "units": [
        {
          "id": "ut1",
          "title": "Unidad 1",
          "questions": [
            {
              "id": "lenguaje-marcas-ut1-que caracteristica distingue a un documento xml valido",
              "question": "¿Qué característica distingue a un documento XML válido?",
              "options": [
                {
                  "id": "a",
                  "text": "Cumple las reglas definidas en su esquema.",
                  "explanation": "Un XML válido no solo está bien formado, sino que además cumple las reglas definidas en un esquema (como DTD o XSD) que especifica la estructura del documento."
                },
                {
                  "id": "b",
                  "text": "Contiene solo datos numéricos",
                  "explanation": "XML puede contener texto, números y otros tipos de datos."
                },
                {
                  "id": "c",
                  "text": "No incluye namespaces",
                  "explanation": "Los namespaces son opcionales, su ausencia no define la validez."
                },
                {
                  "id": "d",
                  "text": "Está en formato binario",
                  "explanation": "XML es un formato de texto, no binario."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que herramienta se utiliza para transformar xml en otros for",
              "question": "¿Qué herramienta se utiliza para transformar XML en otros formatos?",
              "options": [
                {
                  "id": "a",
                  "text": "XSD",
                  "explanation": "Sirve para definir la estructura y reglas de un XML, no para transformarlo."
                },
                {
                  "id": "b",
                  "text": "JSON",
                  "explanation": "Es otro formato de datos, no una herramienta de transformación."
                },
                {
                  "id": "c",
                  "text": "XSLT",
                  "explanation": "XSLT (Extensible Stylesheet Language Transformations) se utiliza para transformar documentos XML en otros formatos, como HTML, texto o incluso otro XML."
                },
                {
                  "id": "d",
                  "text": "XPath",
                  "explanation": "Se usa para localizar o seleccionar elementos dentro de un XML, pero no para transformarlo."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que papel cumplen los espacios de nombres namespaces en xml",
              "question": "¿Qué papel cumplen los espacios de nombres (namespaces) en XML?",
              "options": [
                {
                  "id": "a",
                  "text": "Controlan el tamaño del archivo",
                  "explanation": "Los namespaces no afectan al tamaño del XML."
                },
                {
                  "id": "b",
                  "text": "Evitan colisiones entre vocabularios distintos.",
                  "explanation": "Los namespaces en XML permiten diferenciar elementos con el mismo nombre que pertenecen a vocabularios distintos, evitando conflictos entre etiquetas."
                },
                {
                  "id": "c",
                  "text": "Permiten definir estilos visuales",
                  "explanation": "Los estilos se definen con CSS o XSL, no con namespaces."
                },
                {
                  "id": "d",
                  "text": "Limitan el número de etiquetas por documento",
                  "explanation": "XML no tiene un límite de etiquetas por usar namespaces."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que significa que un documento xml este bien formado",
              "question": "¿Qué significa que un documento XML esté “bien formado”?",
              "options": [
                {
                  "id": "a",
                  "text": "Contiene datos numéricos válidos",
                  "explanation": "XML puede contener cualquier tipo de datos, no solo números."
                },
                {
                  "id": "b",
                  "text": "Cumple las reglas de un esquema XSD",
                  "explanation": "Eso define un XML válido, no solo bien formado."
                },
                {
                  "id": "c",
                  "text": "Está validado con Schematron",
                  "explanation": "Schematron es otra forma de validación, no define si está bien formado."
                },
                {
                  "id": "d",
                  "text": "Tiene etiquetas correctamente anidadas y cerradas.",
                  "explanation": "Un XML bien formado cumple las reglas básicas de sintaxis, como tener etiquetas correctamente abiertas, cerradas y anidadas, además de un único elemento raíz."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que caracteriza a un lenguaje de marcas",
              "question": "¿Qué caracteriza a un lenguaje de marcas?",
              "options": [
                {
                  "id": "a",
                  "text": "Describe cómo ejecutar operaciones",
                  "explanation": "Eso es propio de lenguajes de programación."
                },
                {
                  "id": "b",
                  "text": "Es un lenguaje de programación imperativo",
                  "explanation": "Los lenguajes de marcas no son lenguajes de programación."
                },
                {
                  "id": "c",
                  "text": "Se utiliza solo para cálculos numéricos",
                  "explanation": "Los lenguajes de marcas no están diseñados para cálculos."
                },
                {
                  "id": "d",
                  "text": "Define estructura y significado del contenido mediante etiquetas.",
                  "explanation": "Un lenguaje de marcas (como HTML o XML) utiliza etiquetas para estructurar y describir el contenido de un documento."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-cual de las siguientes herramientas es un editor profesional",
              "question": "¿Cuál de las siguientes herramientas es un editor profesional XML?",
              "options": [
                {
                  "id": "a",
                  "text": "Notepad clásico",
                  "explanation": "Es un editor de texto simple, no especializado para XML."
                },
                {
                  "id": "b",
                  "text": "Paint",
                  "explanation": "Es un programa de edición de imágenes, no de texto o XML."
                },
                {
                  "id": "c",
                  "text": "Oxygen XML Editor",
                  "explanation": "Oxygen XML Editor es una herramienta profesional para crear, editar y validar documentos XML, muy utilizada en entornos profesionales y académicos."
                },
                {
                  "id": "d",
                  "text": "Excel",
                  "explanation": "Es una hoja de cálculo, no un editor XML."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que extension tienen normalmente los esquemas xml",
              "question": "¿Qué extensión tienen normalmente los esquemas XML?",
              "options": [
                {
                  "id": "a",
                  "text": ".xsd",
                  "explanation": "Los esquemas XML suelen usar la extensión .xsd (XML Schema Definition), que sirve para definir la estructura y reglas que debe cumplir un documento XML."
                },
                {
                  "id": "b",
                  "text": ".css",
                  "explanation": "Extensión usada para hojas de estilo en HTML."
                },
                {
                  "id": "c",
                  "text": ".json",
                  "explanation": "Formato de intercambio de datos, distinto de XML."
                },
                {
                  "id": "d",
                  "text": ".html",
                  "explanation": "Extensión de páginas web HTML, no de esquemas XML."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que lenguaje permite seleccionar nodos dentro de un document",
              "question": "¿Qué lenguaje permite seleccionar nodos dentro de un documento XML?",
              "options": [
                {
                  "id": "a",
                  "text": "XQuery",
                  "explanation": "Sirve para consultar y manipular datos XML, pero no es el lenguaje básico de selección de nodos."
                },
                {
                  "id": "b",
                  "text": "XSLT",
                  "explanation": "Se utiliza para transformar documentos XML."
                },
                {
                  "id": "c",
                  "text": "CSS",
                  "explanation": "Se usa para aplicar estilos a páginas web, no para consultar XML."
                },
                {
                  "id": "d",
                  "text": "XPath",
                  "explanation": "XPath (XML Path Language) se utiliza para localizar y seleccionar nodos o elementos dentro de un documento XML mediante rutas."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que elemento xml sirve como raiz del documento",
              "question": "¿Qué elemento XML sirve como raíz del documento?",
              "options": [
                {
                  "id": "a",
                  "text": "El primer comentario",
                  "explanation": "Los comentarios no son el elemento raíz."
                },
                {
                  "id": "b",
                  "text": "El esquema XSD",
                  "explanation": "El XSD define reglas, pero no forma parte del XML como raíz."
                },
                {
                  "id": "c",
                  "text": "Un único elemento contenedor de todos los demás",
                  "explanation": "Todo documento XML debe tener un único elemento raíz, que contiene todos los demás elementos del documento."
                },
                {
                  "id": "d",
                  "text": "El encabezado XML",
                  "explanation": "La declaración <?xml version=\".0\"?> no es el elemento raíz."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que es un atributo en xml",
              "question": "¿Qué es un atributo en XML?",
              "options": [
                {
                  "id": "a",
                  "text": "Una metainformación del elemento en forma clave-valor.",
                  "explanation": "Un atributo en XML proporciona información adicional sobre un elemento y se expresa en formato clave=\"valor\" dentro de la etiqueta."
                },
                {
                  "id": "b",
                  "text": "Una etiqueta de cierre",
                  "explanation": "Es la parte que cierra un elemento, no un atributo."
                },
                {
                  "id": "c",
                  "text": "Un comentario del autor",
                  "explanation": "Los comentarios se escriben como <!-- comentario -->."
                },
                {
                  "id": "d",
                  "text": "Un elemento hijo con contenido textual",
                  "explanation": "Eso sería otro elemento, no un atributo."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-cual de los siguientes no es un lenguaje de marcas",
              "question": "¿Cuál de los siguientes NO es un lenguaje de marcas?",
              "options": [
                {
                  "id": "a",
                  "text": "XML",
                  "explanation": "Es un lenguaje de marcas usado para estructurar datos."
                },
                {
                  "id": "b",
                  "text": "HTML",
                  "explanation": "Es un lenguaje de marcas utilizado para crear páginas web."
                },
                {
                  "id": "c",
                  "text": "Python",
                  "explanation": "Python es un lenguaje de programación, no un lenguaje de marcas. Se utiliza para desarrollar aplicaciones y scripts."
                },
                {
                  "id": "d",
                  "text": "XSD",
                  "explanation": "Es un lenguaje de definición de esquemas para XML."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-cual fue el antecesor historico del xml y html",
              "question": "¿Cuál fue el antecesor histórico del XML y HTML?",
              "options": [
                {
                  "id": "a",
                  "text": "YAML",
                  "explanation": "Formato moderno de serialización de datos, no antecesor de XML o HTML."
                },
                {
                  "id": "b",
                  "text": "JSON",
                  "explanation": "Formato de intercambio de datos, posterior a XML."
                },
                {
                  "id": "c",
                  "text": "SGML",
                  "explanation": "SGML (Standard Generalized Markup Language) es el lenguaje del que derivan XML y HTML, y fue diseñado para definir estructuras de documentos mediante etiquetas."
                },
                {
                  "id": "d",
                  "text": "CSS",
                  "explanation": "Lenguaje usado para dar estilo a páginas web, no relacionado con el origen de XML."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que representa la etiqueta doctype html",
              "question": "¿Qué representa la etiqueta <!DOCTYPE html>?",
              "options": [
                {
                  "id": "a",
                  "text": "Un comentario de autoría",
                  "explanation": "Los comentarios se escriben como <!-- comentario -->."
                },
                {
                  "id": "b",
                  "text": "Una declaración de codificación XML",
                  "explanation": "La codificación se define con <meta charset=\"UTF-8\">."
                },
                {
                  "id": "c",
                  "text": "La definición del tipo de documento HTML.",
                  "explanation": "La declaración <!DOCTYPE html> indica al navegador qué tipo de documento HTML se está utilizando (HTML5) para que lo interprete correctamente."
                },
                {
                  "id": "d",
                  "text": "Un espacio de nombres por defecto",
                  "explanation": "Los namespaces se usan en XML, no en esta declaración."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-cual de las siguientes opciones describe mejor json frente a",
              "question": "¿Cuál de las siguientes opciones describe mejor JSON frente a XML?",
              "options": [
                {
                  "id": "a",
                  "text": "Es más pesado pero más formal",
                  "explanation": "En realidad JSON suele ser más ligero que XML."
                },
                {
                  "id": "b",
                  "text": "Es más ligero y orientado a APIs.",
                  "explanation": "JSON suele ser más ligero y simple que XML, por lo que se usa mucho en APIs y aplicaciones web para intercambiar datos."
                },
                {
                  "id": "c",
                  "text": "No admite jerarquía",
                  "explanation": "JSON sí permite estructuras jerárquicas mediante objetos y arrays."
                },
                {
                  "id": "d",
                  "text": "Solo se usa en impresión",
                  "explanation": "JSON se usa principalmente en intercambio de datos y APIs web."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que lenguaje se utiliza principalmente para estructurar pagi",
              "question": "¿Qué lenguaje se utiliza principalmente para estructurar páginas web?",
              "options": [
                {
                  "id": "a",
                  "text": "HTML",
                  "explanation": "HTML (HyperText Markup Language) es el lenguaje de marcas utilizado para estructurar el contenido de las páginas web, como textos, imágenes, enlaces y secciones."
                },
                {
                  "id": "b",
                  "text": "JSON",
                  "explanation": "Se usa para intercambiar datos entre aplicaciones, no para estructurar páginas web."
                },
                {
                  "id": "c",
                  "text": "XML",
                  "explanation": "Sirve para almacenar y transportar datos, no para crear páginas web directamente."
                },
                {
                  "id": "d",
                  "text": "CSV",
                  "explanation": "Es un formato para datos tabulares, como hojas de cálculo."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que lenguaje define reglas de validacion por condiciones log",
              "question": "¿Qué lenguaje define reglas de validación por condiciones lógicas en XML?",
              "options": [
                {
                  "id": "a",
                  "text": "XSD",
                  "explanation": "Define estructura y tipos de datos, pero no reglas lógicas complejas."
                },
                {
                  "id": "b",
                  "text": "DTD",
                  "explanation": "Define la estructura básica del XML, pero es más limitado que Schematron."
                },
                {
                  "id": "c",
                  "text": "CSS",
                  "explanation": "Se usa para estilos visuales, no para validar XML."
                },
                {
                  "id": "d",
                  "text": "Schematron",
                  "explanation": "Schematron permite validar documentos XML mediante reglas y condiciones lógicas, usando expresiones como XPath para comprobar patrones o restricciones complejas."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-cual de los siguientes pares de lenguajes se usan juntos par",
              "question": "¿Cuál de los siguientes pares de lenguajes se usan juntos para publicar y dar estilo a contenidos web?",
              "options": [
                {
                  "id": "a",
                  "text": "HTML y CSS",
                  "explanation": "HTML se utiliza para estructurar el contenido de una página web, mientras que CSS se usa para aplicar estilos visuales como colores, tamaños o diseño."
                },
                {
                  "id": "b",
                  "text": "DTD y Schematron",
                  "explanation": "Se usan para validar documentos XML, no para publicar páginas web."
                },
                {
                  "id": "c",
                  "text": "XML y JSON",
                  "explanation": "Son formatos de intercambio de datos, no para diseño web."
                },
                {
                  "id": "d",
                  "text": "XSD y XSLT",
                  "explanation": "Se utilizan para definir y transformar documentos XML, no para estilo web."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-cual es la diferencia principal entre html y xml",
              "question": "¿Cuál es la diferencia principal entre HTML y XML?",
              "options": [
                {
                  "id": "a",
                  "text": "XML no usa etiquetas",
                  "explanation": "XML sí utiliza etiquetas, igual que HTML."
                },
                {
                  "id": "b",
                  "text": "XML solo se usa en navegadores",
                  "explanation": "XML se usa en muchos sistemas y aplicaciones, no solo en navegadores."
                },
                {
                  "id": "c",
                  "text": "HTML permite errores; XML exige corrección total.",
                  "explanation": "Los navegadores toleran muchos errores en HTML, mientras que XML exige que el documento esté perfectamente bien formado (etiquetas cerradas, estructura correcta, etc.)."
                },
                {
                  "id": "d",
                  "text": "HTML es binario; XML es textual",
                  "explanation": "Ambos son formatos de texto."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que editor gratuito puede configurarse con plugins xml en en",
              "question": "¿Qué editor gratuito puede configurarse con plugins XML en entornos docentes?",
              "options": [
                {
                  "id": "a",
                  "text": "VS Code",
                  "explanation": "Visual Studio Code es un editor gratuito que permite añadir extensiones o plugins para trabajar con XML, por lo que se usa mucho en entornos educativos."
                },
                {
                  "id": "b",
                  "text": "Dreamweaver",
                  "explanation": "Es una herramienta de pago enfocada al desarrollo web."
                },
                {
                  "id": "c",
                  "text": "XMLSpy",
                  "explanation": "Es un editor profesional de pago para XML."
                },
                {
                  "id": "d",
                  "text": "Oxygen XML Editor",
                  "explanation": "También es un editor profesional de pago."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut1-que funcion cumple la validacion en xml",
              "question": "¿Qué función cumple la validación en XML?",
              "options": [
                {
                  "id": "a",
                  "text": "Traducirlo a JSON",
                  "explanation": "La validación no transforma formatos."
                },
                {
                  "id": "b",
                  "text": "Verificar estructura y tipos de datos.",
                  "explanation": "La validación en XML comprueba que el documento cumple las reglas definidas en un esquema (como DTD o XSD), verificando estructura, elementos y tipos de datos."
                },
                {
                  "id": "c",
                  "text": "Comprimir el documento",
                  "explanation": "XML no se valida para reducir tamaño."
                },
                {
                  "id": "d",
                  "text": "Asignar estilos visuales",
                  "explanation": "Los estilos se aplican con CSS o XSL, no con validación."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut2",
          "title": "Unidad 2",
          "questions": [
            {
              "id": "lenguaje-marcas-ut2-que formato de sindicacion utiliza una estructura xml con et",
              "question": "¿Qué formato de sindicación utiliza una estructura XML con etiquetas <channel> y <item>?",
              "options": [
                {
                  "id": "a",
                  "text": "JSON",
                  "explanation": "No es XML y no usa etiquetas, sino pares clave-valor."
                },
                {
                  "id": "b",
                  "text": "Atom",
                  "explanation": "También es un formato de sindicación, pero usa etiquetas como <feed> y <entry>, no <channel> y <item>."
                },
                {
                  "id": "c",
                  "text": "RSS",
                  "explanation": "RSS es un formato de sindicación basado en XML que utiliza etiquetas como <channel> (para el canal o feed) y <item> (para cada noticia o entrada). Es el formato típico de los feeds de noticias."
                },
                {
                  "id": "d",
                  "text": "SOAP",
                  "explanation": "Es un protocolo para intercambio de información, no un formato de sindicación de contenidos."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que formato de fecha utiliza atom para las actualizaciones",
              "question": "¿Qué formato de fecha utiliza Atom para las actualizaciones?",
              "options": [
                {
                  "id": "a",
                  "text": "ISO 8601",
                  "explanation": "Atom utiliza el formato de fecha ISO 860, que es un estándar internacional muy preciso (por ejemplo: 06-0-T0:0:00Z). Este formato permite indicar fecha, hora y zona horaria de forma clara."
                },
                {
                  "id": "b",
                  "text": "Unix timestamp",
                  "explanation": "Es un número entero de segundos desde 970, no es el formato usado en Atom."
                },
                {
                  "id": "c",
                  "text": "RFC 822",
                  "explanation": "Este formato se usa en RSS, no en Atom."
                },
                {
                  "id": "d",
                  "text": "DD/MM/YYYY",
                  "explanation": "Es un formato común para humanos, pero no es un estándar válido en Atom."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que atributo de la etiqueta img mejora la accesibilidad desc",
              "question": "¿Qué atributo de la etiqueta <img> mejora la accesibilidad describiendo la imagen?",
              "options": [
                {
                  "id": "a",
                  "text": "title",
                  "explanation": "Muestra un texto al pasar el ratón, pero no es el principal para accesibilidad."
                },
                {
                  "id": "b",
                  "text": "src",
                  "explanation": "Indica la ruta de la imagen, no la describe."
                },
                {
                  "id": "c",
                  "text": "alt",
                  "explanation": "El atributo alt (texto alternativo) describe el contenido de la imagen. Es fundamental para la accesibilidad, ya que los lectores de pantalla lo utilizan para personas con discapacidad visual, y también aparece si la imagen no carga."
                },
                {
                  "id": "d",
                  "text": "label",
                  "explanation": "No es un atributo válido para la etiqueta <img>."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que herramienta del w3c permite validar la estructura de un ",
              "question": "¿Qué herramienta del W3C permite validar la estructura de un canal RSS?",
              "options": [
                {
                  "id": "a",
                  "text": "Feed Validation Service",
                  "explanation": "El Feed Validation Service es la herramienta del WC diseñada específicamente para comprobar que un feed RSS o Atom está bien estructurado y cumple los estándares."
                },
                {
                  "id": "b",
                  "text": "Lighthouse",
                  "explanation": "Sirve para analizar rendimiento, accesibilidad y SEO de páginas web, no feeds RSS."
                },
                {
                  "id": "c",
                  "text": "CSS Linter",
                  "explanation": "Valida estilos CSS, no estructuras RSS."
                },
                {
                  "id": "d",
                  "text": "HTML Validator",
                  "explanation": "Valida documentos HTML, no canales RSS."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que lenguaje se usa para definir la presentacion visual de u",
              "question": "¿Qué lenguaje se usa para definir la presentación visual de un documento HTML?",
              "options": [
                {
                  "id": "a",
                  "text": "JSON",
                  "explanation": "Se usa para intercambio de datos, no para diseño."
                },
                {
                  "id": "b",
                  "text": "PHP",
                  "explanation": "Es un lenguaje de programación del lado del servidor."
                },
                {
                  "id": "c",
                  "text": "XML",
                  "explanation": "Sirve para estructurar datos, no para definir estilos visuales."
                },
                {
                  "id": "d",
                  "text": "CSS",
                  "explanation": "CSS (Cascading Style Sheets) es el lenguaje que se utiliza para definir el diseño visual de una página web: colores, tamaños, márgenes, tipografías, etc."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que metaetiqueta se usa para definir la codificacion de cara",
              "question": "¿Qué metaetiqueta se usa para definir la codificación de caracteres UTF-8?",
              "options": [
                {
                  "id": "a",
                  "text": "<meta charset=\"UTF-8\">",
                  "explanation": "La etiqueta <meta charset=\"UTF-8\"> se utiliza en HTML para indicar al navegador la codificación de caracteres del documento, asegurando que se muestren correctamente acentos, símbolos, etc."
                },
                {
                  "id": "b",
                  "text": "<meta lang=\"UTF-8\">",
                  "explanation": "lang sirve para indicar el idioma, no la codificación."
                },
                {
                  "id": "c",
                  "text": "<meta encoding=\"UTF-8\">",
                  "explanation": "No es un atributo válido en HTML."
                },
                {
                  "id": "d",
                  "text": "<meta type=\"UTF-8\">",
                  "explanation": "Tampoco es un atributo válido para este propósito."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que etiqueta identifica de forma unica una entrada en un fee",
              "question": "¿Qué etiqueta identifica de forma única una entrada en un feed RSS?",
              "options": [
                {
                  "id": "a",
                  "text": "<unique>",
                  "explanation": "No existe en el estándar RSS."
                },
                {
                  "id": "b",
                  "text": "<ref>",
                  "explanation": "No es una etiqueta válida en RSS para este uso."
                },
                {
                  "id": "c",
                  "text": "<id>",
                  "explanation": "Se usa en Atom, no en RSS."
                },
                {
                  "id": "d",
                  "text": "<guid>",
                  "explanation": "La etiqueta <guid> (Globally Unique Identifier) se usa en RSS para identificar de forma única cada <item> del feed, evitando duplicados y permitiendo a los lectores saber si una entrada ya ha sido leída."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-cual es la principal diferencia entre html y xhtml",
              "question": "¿Cuál es la principal diferencia entre HTML y XHTML?",
              "options": [
                {
                  "id": "a",
                  "text": "HTML es incompatible con navegadores modernos",
                  "explanation": "Es totalmente falso, HTML es el estándar actual."
                },
                {
                  "id": "b",
                  "text": "XHTML no necesita DOCTYPE",
                  "explanation": "Sí lo necesita para declararse correctamente."
                },
                {
                  "id": "c",
                  "text": "XHTML es más estricto y sigue las reglas de XML",
                  "explanation": "XHTML es una versión de HTML que sigue las reglas estrictas de XML, lo que implica, por ejemplo, que todas las etiquetas deben cerrarse correctamente, estar bien anidadas y respetar una sintaxis más rígida."
                },
                {
                  "id": "d",
                  "text": "HTML requiere etiquetas cerradas siempre",
                  "explanation": "No es obligatorio en HTML clásico, pero sí en XHTML."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que propiedad css define el espacio interno entre el conteni",
              "question": "¿Qué propiedad CSS define el espacio interno entre el contenido y el borde?",
              "options": [
                {
                  "id": "a",
                  "text": "padding",
                  "explanation": "La propiedad padding define el espacio interno de un elemento, es decir, la distancia entre el contenido y su borde."
                },
                {
                  "id": "b",
                  "text": "spacing",
                  "explanation": "No es una propiedad válida en CSS."
                },
                {
                  "id": "c",
                  "text": "margin",
                  "explanation": "Define el espacio externo (fuera del borde)."
                },
                {
                  "id": "d",
                  "text": "border",
                  "explanation": "Define el borde del elemento, no el espacio."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que modelo de diseno css se usa para crear layouts flexibles",
              "question": "¿Qué modelo de diseño CSS se usa para crear layouts flexibles en una sola dirección?",
              "options": [
                {
                  "id": "a",
                  "text": "Float",
                  "explanation": "Se usaba antiguamente para maquetar, pero no es un sistema moderno de layout."
                },
                {
                  "id": "b",
                  "text": "Flexbox",
                  "explanation": "Flexbox (Flexible Box Layout) está diseñado para crear layouts flexibles en una sola dirección (fila o columna), facilitando la alineación y distribución de elementos."
                },
                {
                  "id": "c",
                  "text": "Grid",
                  "explanation": "Trabaja en dos dimensiones (filas y columnas), no solo en una."
                },
                {
                  "id": "d",
                  "text": "Table",
                  "explanation": "No es un sistema de layout moderno para diseño web."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que etiqueta se usa para definir un enlace en html",
              "question": "¿Qué etiqueta se usa para definir un enlace en HTML?",
              "options": [
                {
                  "id": "a",
                  "text": "<connect>",
                  "explanation": "No es una etiqueta válida en HTML."
                },
                {
                  "id": "b",
                  "text": "<link>",
                  "explanation": "Se usa en el <head> para enlazar recursos (como CSS), no para enlaces visibles."
                },
                {
                  "id": "c",
                  "text": "<href>",
                  "explanation": "No es una etiqueta, es un atributo."
                },
                {
                  "id": "d",
                  "text": "<a>",
                  "explanation": "La etiqueta <a> (anchor) se utiliza para crear enlaces en HTML, normalmente acompañada del atributo href que indica la URL de destino."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que atributo define el idioma del documento html",
              "question": "¿Qué atributo define el idioma del documento HTML?",
              "options": [
                {
                  "id": "a",
                  "text": "type",
                  "explanation": "Se usa para indicar el tipo de contenido, no el idioma."
                },
                {
                  "id": "b",
                  "text": "charset",
                  "explanation": "Define la codificación de caracteres, no el idioma."
                },
                {
                  "id": "c",
                  "text": "lang",
                  "explanation": "El atributo lang se utiliza para indicar el idioma principal del documento HTML (por ejemplo: <html lang=\"es\">). Esto es importante para accesibilidad y SEO."
                },
                {
                  "id": "d",
                  "text": "dir",
                  "explanation": "Indica la dirección del texto (izquierda a derecha o derecha a izquierda), no el idioma."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que propiedad css controla la disposicion de elementos en fi",
              "question": "¿Qué propiedad CSS controla la disposición de elementos en filas y columnas bidimensionales?",
              "options": [
                {
                  "id": "a",
                  "text": "Grid",
                  "explanation": "CSS Grid es el sistema de diseño que permite organizar elementos en dos dimensiones (filas y columnas), ideal para layouts complejos."
                },
                {
                  "id": "b",
                  "text": "Float",
                  "explanation": "Método antiguo, no sirve para layouts complejos modernos."
                },
                {
                  "id": "c",
                  "text": "Display",
                  "explanation": "Es una propiedad general que puede activar Grid (display: grid), pero no es el sistema en sí."
                },
                {
                  "id": "d",
                  "text": "Flexbox",
                  "explanation": "Solo trabaja en una dimensión (fila o columna)."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que indica la declaracion doctype html en un documento html5",
              "question": "¿Qué indica la declaración <!DOCTYPE html> en un documento HTML5?",
              "options": [
                {
                  "id": "a",
                  "text": "Que el documento incluye JavaScript",
                  "explanation": "No tiene relación con JavaScript."
                },
                {
                  "id": "b",
                  "text": "Que el documento está escrito en HTML5",
                  "explanation": "La declaración <!DOCTYPE html> indica al navegador que el documento debe interpretarse como HTML5, asegurando que se renderice correctamente según este estándar."
                },
                {
                  "id": "c",
                  "text": "Que el documento usa CSS3",
                  "explanation": "Tampoco indica nada sobre estilos."
                },
                {
                  "id": "d",
                  "text": "Que el documento está comprimido",
                  "explanation": "No tiene nada que ver con compresión."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que elemento html agrupa contenido tematico",
              "question": "¿Qué elemento HTML agrupa contenido temático?",
              "options": [
                {
                  "id": "a",
                  "text": "<meta>",
                  "explanation": "Se usa en el <head> para metadatos, no para agrupar contenido visible."
                },
                {
                  "id": "b",
                  "text": "<div>",
                  "explanation": "Agrupa contenido, pero sin significado semántico."
                },
                {
                  "id": "c",
                  "text": "<footer>",
                  "explanation": "Representa el pie de página, no un bloque temático general."
                },
                {
                  "id": "d",
                  "text": "<section>",
                  "explanation": "La etiqueta <section> se usa para agrupar contenido relacionado temáticamente dentro de una página, normalmente con un título, formando una sección con significado semántico."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que etiqueta sirve para insertar una imagen",
              "question": "¿Qué etiqueta sirve para insertar una imagen?",
              "options": [
                {
                  "id": "a",
                  "text": "<src>",
                  "explanation": "No es una etiqueta, es un atributo."
                },
                {
                  "id": "b",
                  "text": "<img>",
                  "explanation": "La etiqueta <img> se utiliza en HTML para insertar imágenes. Funciona junto con atributos como src (ruta de la imagen) y alt (descripción)."
                },
                {
                  "id": "c",
                  "text": "<pic>",
                  "explanation": "No es una etiqueta válida en HTML."
                },
                {
                  "id": "d",
                  "text": "<image>",
                  "explanation": "Tampoco es una etiqueta válida en HTML estándar."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que propiedad css controla el color del texto",
              "question": "¿Qué propiedad CSS controla el color del texto?",
              "options": [
                {
                  "id": "a",
                  "text": "font-color",
                  "explanation": "No es una propiedad válida en CSS."
                },
                {
                  "id": "b",
                  "text": "text-color",
                  "explanation": "Tampoco existe en CSS."
                },
                {
                  "id": "c",
                  "text": "color",
                  "explanation": "La propiedad color en CSS se utiliza para definir el color del texto de un elemento."
                },
                {
                  "id": "d",
                  "text": "foreground",
                  "explanation": "No es una propiedad válida en CSS."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que framework css utiliza un sistema de 12 columnas y compon",
              "question": "¿Qué framework CSS utiliza un sistema de 12 columnas y componentes predefinidos?",
              "options": [
                {
                  "id": "a",
                  "text": "Tailwind",
                  "explanation": "Es un framework utility-first, no basado en un sistema clásico de columnas por defecto."
                },
                {
                  "id": "b",
                  "text": "Bootstrap",
                  "explanation": "Bootstrap es un framework CSS muy popular que utiliza un sistema de rejilla de columnas y ofrece muchos componentes predefinidos (botones, formularios, menús, etc.)."
                },
                {
                  "id": "c",
                  "text": "Foundation",
                  "explanation": "También usa grid, pero no es el más característico ni el que suelen preguntar con columnas."
                },
                {
                  "id": "d",
                  "text": "Bulma",
                  "explanation": "Usa sistema de columnas, pero no es el estándar típico que se asocia a esta pregunta."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-cual es la sintaxis correcta de un comentario en css",
              "question": "¿Cuál es la sintaxis correcta de un comentario en CSS?",
              "options": [
                {
                  "id": "a",
                  "text": "// comentario",
                  "explanation": "Se usa en JavaScript, no en CSS."
                },
                {
                  "id": "b",
                  "text": "/* comentario */",
                  "explanation": "En CSS los comentarios se escriben entre /* ... */, permitiendo añadir anotaciones dentro del código sin que afecten al estilo."
                },
                {
                  "id": "c",
                  "text": "<!-- comentario -->",
                  "explanation": "Es la sintaxis de comentarios en HTML."
                },
                {
                  "id": "d",
                  "text": "# comentario",
                  "explanation": "No es válida en CSS."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut2-que formato de sindicacion permite mayor flexibilidad y exte",
              "question": "¿Qué formato de sindicación permite mayor flexibilidad y extensibilidad que RSS?",
              "options": [
                {
                  "id": "a",
                  "text": "Atom",
                  "explanation": "Atom es un formato de sindicación más moderno que RSS, diseñado para ser más flexible y extensible, con una estructura más estricta y mejor definida."
                },
                {
                  "id": "b",
                  "text": "HTML",
                  "explanation": "Es un lenguaje de marcado para páginas web, no un formato de sindicación."
                },
                {
                  "id": "c",
                  "text": "JSON",
                  "explanation": "Es un formato de intercambio de datos, pero no un estándar de sindicación como tal."
                },
                {
                  "id": "d",
                  "text": "XML",
                  "explanation": "Es el lenguaje base en el que se construyen RSS y Atom, pero no es en sí un formato de sindicación."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACIÓN.docx"
            }
          ]
        },
        {
          "id": "ut3",
          "title": "Unidad 3",
          "questions": [
            {
              "id": "lenguaje-marcas-ut3-que es una transformacion xml",
              "question": "¿Qué es una transformación XML?",
              "options": [
                {
                  "id": "a",
                  "text": "Eliminar etiquetas",
                  "explanation": "No define una transformación completa."
                },
                {
                  "id": "b",
                  "text": "Validar documentos",
                  "explanation": "Es otro proceso distinto (DTD/XSD)."
                },
                {
                  "id": "c",
                  "text": "El proceso de convertir un documento XML en otro formato",
                  "explanation": "Una transformación XML consiste en convertir un documento XML en otro formato (como HTML, texto o incluso otro XML), normalmente usando XSLT."
                },
                {
                  "id": "d",
                  "text": "Encriptar datos",
                  "explanation": "No tiene relación con XML en este contexto."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que elemento de xslt define una plantilla",
              "question": "¿Qué elemento de XSLT define una plantilla?",
              "options": [
                {
                  "id": "a",
                  "text": "<xsl:style>",
                  "explanation": "No es un elemento válido en XSLT."
                },
                {
                  "id": "b",
                  "text": "<xsl:rule>",
                  "explanation": "Tampoco existe en XSLT."
                },
                {
                  "id": "c",
                  "text": "<xsl:case>",
                  "explanation": "No es una etiqueta válida (en XSLT se usan <xsl:if> o <xsl:choose>)."
                },
                {
                  "id": "d",
                  "text": "<xsl:template>",
                  "explanation": "En XSLT, el elemento <xsl:template> se utiliza para definir una plantilla que indica cómo transformar partes de un documento XML."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que etiqueta se utiliza en un esquema xsd para definir un el",
              "question": "¿Qué etiqueta se utiliza en un esquema XSD para definir un elemento?",
              "options": [
                {
                  "id": "a",
                  "text": "<xs:item>",
                  "explanation": "No es una etiqueta válida en XSD."
                },
                {
                  "id": "b",
                  "text": "<xs:rule>",
                  "explanation": "Tampoco existe en XSD."
                },
                {
                  "id": "c",
                  "text": "<xs:element>",
                  "explanation": "En XML Schema (XSD), la etiqueta <xs:element> se utiliza para definir los elementos que pueden aparecer en un documento XML, indicando su nombre, tipo, etc."
                },
                {
                  "id": "d",
                  "text": "<xs:data>",
                  "explanation": "No es una etiqueta válida para definir elementos."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-cual es la funcion principal de xpath en xslt",
              "question": "¿Cuál es la función principal de XPath en XSLT?",
              "options": [
                {
                  "id": "a",
                  "text": "Traducir etiquetas XML a HTML",
                  "explanation": "Eso lo hace XSLT en conjunto, no XPath directamente."
                },
                {
                  "id": "b",
                  "text": "Crear atributos nuevos",
                  "explanation": "Eso se hace con XSLT, no con XPath."
                },
                {
                  "id": "c",
                  "text": "Comprimir datos XML",
                  "explanation": "No tiene ninguna relación con XPath."
                },
                {
                  "id": "d",
                  "text": "Seleccionar nodos dentro de un documento XML",
                  "explanation": "XPath se utiliza en XSLT para navegar y seleccionar nodos dentro de un documento XML (elementos, atributos, textos, etc.), sobre los que luego se aplican las transformaciones."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que herramienta se usa para seleccionar nodos en xml",
              "question": "¿Qué herramienta se usa para seleccionar nodos en XML?",
              "options": [
                {
                  "id": "a",
                  "text": "XPath",
                  "explanation": "XPath es el lenguaje que se utiliza para navegar y seleccionar nodos dentro de un documento XML."
                },
                {
                  "id": "b",
                  "text": "HTML",
                  "explanation": "Es un lenguaje de marcado, no sirve para seleccionar nodos en XML."
                },
                {
                  "id": "c",
                  "text": "XQuery",
                  "explanation": "Se usa para consultas más complejas, pero no es la respuesta básica típica."
                },
                {
                  "id": "d",
                  "text": "CSS",
                  "explanation": "Se usa para estilos, no para XML."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que elemento de xslt se utiliza para aplicar una plantilla",
              "question": "¿Qué elemento de XSLT se utiliza para aplicar una plantilla?",
              "options": [
                {
                  "id": "a",
                  "text": "<xsl:for-each>",
                  "explanation": "Sirve para recorrer nodos, pero no aplica plantillas automáticamente."
                },
                {
                  "id": "b",
                  "text": "<xsl:template-call>",
                  "explanation": "No es una etiqueta válida en XSLT."
                },
                {
                  "id": "c",
                  "text": "<xsl:use-template>",
                  "explanation": "Tampoco existe en XSLT."
                },
                {
                  "id": "d",
                  "text": "<xsl:apply-templates>",
                  "explanation": "El elemento <xsl:apply-templates> se usa para aplicar las plantillas definidas (<xsl:template>) a los nodos seleccionados en el XML."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que atributo en xsd permite indicar el numero minimo de ocur",
              "question": "¿Qué atributo en XSD permite indicar el número mínimo de ocurrencias?",
              "options": [
                {
                  "id": "a",
                  "text": "minOccurs",
                  "explanation": "El atributo minOccurs en XSD se utiliza para indicar el número mínimo de veces que un elemento puede aparecer en un documento XML."
                },
                {
                  "id": "b",
                  "text": "minRepeat",
                  "explanation": "No es un atributo válido en XSD."
                },
                {
                  "id": "c",
                  "text": "minCount",
                  "explanation": "Tampoco existe en XSD."
                },
                {
                  "id": "d",
                  "text": "lowerBound",
                  "explanation": "No se usa en XML Schema."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que lenguaje permite definir reglas logicas de validacion",
              "question": "¿Qué lenguaje permite definir reglas lógicas de validación?",
              "options": [
                {
                  "id": "a",
                  "text": "JSON",
                  "explanation": "Es un formato de datos, no un lenguaje de validación."
                },
                {
                  "id": "b",
                  "text": "Schematron",
                  "explanation": "Schematron es un lenguaje de validación basado en reglas que permite definir condiciones lógicas (por ejemplo, usando XPath) para comprobar la estructura y el contenido de un XML."
                },
                {
                  "id": "c",
                  "text": "XMLPath",
                  "explanation": "No es un lenguaje correcto (probablemente confunde con XPath)."
                },
                {
                  "id": "d",
                  "text": "XSLT",
                  "explanation": "Sirve para transformar XML, no para validar con reglas lógicas."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que combinacion de tecnologias permite validar tanto estruct",
              "question": "¿Qué combinación de tecnologías permite validar tanto estructura como reglas lógicas?",
              "options": [
                {
                  "id": "a",
                  "text": "XSLT y XQuery",
                  "explanation": "Sirven para transformar o consultar, no validar."
                },
                {
                  "id": "b",
                  "text": "DTD y CSS",
                  "explanation": "DTD valida estructura básica, pero CSS no valida nada."
                },
                {
                  "id": "c",
                  "text": "XSD y Schematron",
                  "explanation": "XSD (XML Schema) valida la estructura (tipos de datos, jerarquía, ocurrencias...), mientras que Schematron permite validar reglas lógicas complejas. Juntos cubren ambos tipos de validación."
                },
                {
                  "id": "d",
                  "text": "XPath y HTML",
                  "explanation": "XPath selecciona nodos y HTML es marcado, no validación."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que lenguaje se utiliza para realizar transformaciones xml",
              "question": "¿Qué lenguaje se utiliza para realizar transformaciones XML?",
              "options": [
                {
                  "id": "a",
                  "text": "DTD",
                  "explanation": "Sirve para definir la estructura de un XML, no para transformarlo."
                },
                {
                  "id": "b",
                  "text": "XSLT",
                  "explanation": "XSLT (eXtensible Stylesheet Language Transformations) es el lenguaje diseñado específicamente para transformar documentos XML en otros formatos como HTML, texto o incluso otro XML."
                },
                {
                  "id": "c",
                  "text": "XSD",
                  "explanation": "También define estructura y tipos de datos, no realiza transformaciones."
                },
                {
                  "id": "d",
                  "text": "CSS",
                  "explanation": "Define estilos visuales, no transforma XML."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-cual es la funcion principal de dtd",
              "question": "¿Cuál es la función principal de DTD?",
              "options": [
                {
                  "id": "a",
                  "text": "Transformar XML a HTML",
                  "explanation": "Eso lo hace XSLT."
                },
                {
                  "id": "b",
                  "text": "Definir la estructura y los elementos permitidos de un documento XML",
                  "explanation": "Una DTD (Document Type Definition) se utiliza para definir la estructura de un documento XML, indicando qué elementos pueden aparecer, cómo se organizan y qué atributos tienen."
                },
                {
                  "id": "c",
                  "text": "Crear estilos CSS",
                  "explanation": "CSS se usa para estilos, no para estructura XML."
                },
                {
                  "id": "d",
                  "text": "Definir presentación visual",
                  "explanation": "Eso también corresponde a CSS, no a DTD."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que atributo en xslt permite definir el formato de salida",
              "question": "¿Qué atributo en XSLT permite definir el formato de salida?",
              "options": [
                {
                  "id": "a",
                  "text": "<xsl:template>",
                  "explanation": "Define plantillas, no el formato de salida."
                },
                {
                  "id": "b",
                  "text": "<xsl:format>",
                  "explanation": "No es un elemento válido en XSLT."
                },
                {
                  "id": "c",
                  "text": "<xsl:style>",
                  "explanation": "Tampoco existe en XSLT."
                },
                {
                  "id": "d",
                  "text": "<xsl:output>",
                  "explanation": "El elemento <xsl:output> se utiliza en XSLT para definir el formato de salida (por ejemplo, HTML, XML o texto), así como opciones como codificación o indentación."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que permite hacer schematron ademas de la validacion estruct",
              "question": "¿Qué permite hacer Schematron además de la validación estructural?",
              "options": [
                {
                  "id": "a",
                  "text": "Validar reglas de negocio mediante expresiones XPath",
                  "explanation": "Schematron permite definir reglas lógicas o de negocio utilizando expresiones XPath, lo que va más allá de la validación estructural básica."
                },
                {
                  "id": "b",
                  "text": "Convertir XML en JSON",
                  "explanation": "Eso sería una transformación (XSLT u otras herramientas)."
                },
                {
                  "id": "c",
                  "text": "Transformar XML en CSS",
                  "explanation": "No tiene sentido ni relación."
                },
                {
                  "id": "d",
                  "text": "Comprimir documentos XML",
                  "explanation": "No es una función de Schematron."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que herramienta del w3c valida documentos xml contra xsd",
              "question": "¿Qué herramienta del W3C valida documentos XML contra XSD?",
              "options": [
                {
                  "id": "a",
                  "text": "XSLT Transformer",
                  "explanation": "Sirve para transformar XML, no para validarlo."
                },
                {
                  "id": "b",
                  "text": "W3C XML Schema Validator",
                  "explanation": "El WC XML Schema Validator es la herramienta que permite comprobar si un documento XML cumple con un esquema definido en XSD."
                },
                {
                  "id": "c",
                  "text": "XML Beautifier",
                  "explanation": "Solo formatea el XML para que sea más legible."
                },
                {
                  "id": "d",
                  "text": "HTML Linter",
                  "explanation": "Valida HTML, no XML ni XSD."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que ventaja tiene xsd sobre dtd",
              "question": "¿Qué ventaja tiene XSD sobre DTD?",
              "options": [
                {
                  "id": "a",
                  "text": "Permite definir tipos de datos y restricciones",
                  "explanation": "XSD (XML Schema) permite definir tipos de datos (string, integer, date, etc.) y aplicar restricciones (longitud, valores mínimos/máximos...), lo que lo hace más potente que DTD."
                },
                {
                  "id": "b",
                  "text": "Es menos estricto",
                  "explanation": "En realidad es más completo y detallado."
                },
                {
                  "id": "c",
                  "text": "Más simple",
                  "explanation": "Suele ser más complejo que DTD."
                },
                {
                  "id": "d",
                  "text": "No requiere validación",
                  "explanation": "Precisamente sirve para validar."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que significa xsd",
              "question": "¿Qué significa XSD?",
              "options": [
                {
                  "id": "a",
                  "text": "XHTML Style Directive",
                  "explanation": "No corresponde a XSD."
                },
                {
                  "id": "b",
                  "text": "XML Schema Definition",
                  "explanation": "XSD significa XML Schema Definition, y es el lenguaje utilizado para definir la estructura, tipos de datos y restricciones de un documento XML."
                },
                {
                  "id": "c",
                  "text": "XML Structured Document",
                  "explanation": "No es el significado real."
                },
                {
                  "id": "d",
                  "text": "Extended Schema Definition",
                  "explanation": "Suena parecido, pero es incorrecto."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que etiqueta xslt se usa para iterar sobre nodos repetidos",
              "question": "¿Qué etiqueta XSLT se usa para iterar sobre nodos repetidos?",
              "options": [
                {
                  "id": "a",
                  "text": "<xsl:loop>",
                  "explanation": "No es una etiqueta válida en XSLT."
                },
                {
                  "id": "b",
                  "text": "<xsl:cycle>",
                  "explanation": "Tampoco existe en XSLT."
                },
                {
                  "id": "c",
                  "text": "<xsl:repeat>",
                  "explanation": "No es una etiqueta válida."
                },
                {
                  "id": "d",
                  "text": "<xsl:for-each>",
                  "explanation": "La etiqueta <xsl:for-each> se utiliza en XSLT para recorrer (iterar) un conjunto de nodos y aplicar instrucciones a cada uno de ellos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que elemento xslt permite realizar condiciones",
              "question": "¿Qué elemento XSLT permite realizar condiciones?",
              "options": [
                {
                  "id": "a",
                  "text": "<xsl:choose>",
                  "explanation": "Se usa para múltiples condiciones (tipo switch), pero no es la opción básica que suelen preguntar."
                },
                {
                  "id": "b",
                  "text": "<xsl:if>",
                  "explanation": "El elemento <xsl:if> permite realizar condiciones simples en XSLT, ejecutando código solo si se cumple una condición."
                },
                {
                  "id": "c",
                  "text": "<xsl:case>",
                  "explanation": "No es una etiqueta válida en XSLT."
                },
                {
                  "id": "d",
                  "text": "<xsl:when>",
                  "explanation": "Se usa dentro de <xsl:choose>, no de forma independiente."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que significa xslt",
              "question": "¿Qué significa XSLT?",
              "options": [
                {
                  "id": "a",
                  "text": "XML Structure Language Tool",
                  "explanation": "No es el significado real."
                },
                {
                  "id": "b",
                  "text": "XHTML Source Language Transformation",
                  "explanation": "Incorrecto."
                },
                {
                  "id": "c",
                  "text": "Extended Style Layout Table",
                  "explanation": "No tiene relación con XSLT."
                },
                {
                  "id": "d",
                  "text": "Extensible Stylesheet Language Transformations",
                  "explanation": "XSLT significa Extensible Stylesheet Language Transformations, y es el lenguaje utilizado para transformar documentos XML en otros formatos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut3-que tipo de salida puede generar una transformacion xslt",
              "question": "¿Qué tipo de salida puede generar una transformación XSLT?",
              "options": [
                {
                  "id": "a",
                  "text": "Solo HTML",
                  "explanation": "XSLT no se limita solo a HTML."
                },
                {
                  "id": "b",
                  "text": "Solo PDF",
                  "explanation": "No genera PDF directamente."
                },
                {
                  "id": "c",
                  "text": "HTML, texto plano o XML",
                  "explanation": "Una transformación con XSLT puede generar distintos tipos de salida, principalmente HTML, XML o texto plano, dependiendo de cómo se configure (por ejemplo con <xsl:output>)."
                },
                {
                  "id": "d",
                  "text": "Solo JSON",
                  "explanation": "Tampoco está limitado a JSON ni es su uso típico."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACIÓN.docx"
            }
          ]
        },
        {
          "id": "ut4",
          "title": "Unidad 4",
          "questions": [
            {
              "id": "lenguaje-marcas-ut4-que hace la clausula where en una consulta flwor",
              "question": "¿Qué hace la cláusula WHERE en una consulta FLWOR?",
              "options": [
                {
                  "id": "a",
                  "text": "Filtra los resultados según una condición",
                  "explanation": "En una consulta FLWOR de XQuery, la cláusula where se utiliza para filtrar los datos que cumplen una determinada condición, igual que en SQL."
                },
                {
                  "id": "b",
                  "text": "Crea variables locales",
                  "explanation": "Eso lo hace la cláusula for o let."
                },
                {
                  "id": "c",
                  "text": "Devuelve los datos transformados",
                  "explanation": "Eso lo hace return."
                },
                {
                  "id": "d",
                  "text": "Define el orden de los resultados",
                  "explanation": "Eso lo hace order by."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que tipo de lenguaje es xpath",
              "question": "¿Qué tipo de lenguaje es XPath?",
              "options": [
                {
                  "id": "a",
                  "text": "Un lenguaje de consulta para navegar por estructuras XML",
                  "explanation": "XPath es un lenguaje que se utiliza para consultar, navegar y seleccionar nodos dentro de documentos XML."
                },
                {
                  "id": "b",
                  "text": "Un lenguaje de marcado",
                  "explanation": "Eso sería XML o HTML."
                },
                {
                  "id": "c",
                  "text": "Un lenguaje de programación imperativo",
                  "explanation": "XPath no es un lenguaje de programación completo."
                },
                {
                  "id": "d",
                  "text": "Un lenguaje de validación de esquemas",
                  "explanation": "Eso corresponde a XSD o Schematron."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que es la conversion xml relacional",
              "question": "¿Qué es la conversión XML-relacional?",
              "options": [
                {
                  "id": "a",
                  "text": "Transformar HTML a XML",
                  "explanation": "No tiene relación con bases de datos."
                },
                {
                  "id": "b",
                  "text": "Validación de esquemas",
                  "explanation": "Eso corresponde a XSD/DTD."
                },
                {
                  "id": "c",
                  "text": "Cifrar datos XML",
                  "explanation": "No tiene relación con conversión de modelos."
                },
                {
                  "id": "d",
                  "text": "El proceso de mapear estructuras XML en tablas de una base de datos relacional",
                  "explanation": "La conversión XML-relacional consiste en transformar la estructura jerárquica de un XML en un modelo relacional (tablas, filas, columnas) para poder almacenarlo o consultarlo en bases de datos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que herramienta permite indexar documentos xml para acelerar",
              "question": "¿Qué herramienta permite indexar documentos XML para acelerar consultas?",
              "options": [
                {
                  "id": "a",
                  "text": "Compilador SQL",
                  "explanation": "No trabaja directamente con XML ni indexa documentos XML."
                },
                {
                  "id": "b",
                  "text": "Transformador XSLT",
                  "explanation": "Sirve para transformar XML, no para indexarlo."
                },
                {
                  "id": "c",
                  "text": "El motor de base de datos nativa XML",
                  "explanation": "Un motor de base de datos nativa XML permite almacenar documentos XML y crear índices sobre ellos, lo que mejora el rendimiento de las consultas (XPath/XQuery)."
                },
                {
                  "id": "d",
                  "text": "Editor de texto",
                  "explanation": "Solo permite editar, no gestionar ni optimizar consultas."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que significa xquery",
              "question": "¿Qué significa XQuery?",
              "options": [
                {
                  "id": "a",
                  "text": "XML Quick Response",
                  "explanation": "No es el significado real."
                },
                {
                  "id": "b",
                  "text": "XML Query Language",
                  "explanation": "XQuery significa XML Query Language, y es el lenguaje utilizado para consultar y manipular datos en documentos XML."
                },
                {
                  "id": "c",
                  "text": "Extended Query Resource",
                  "explanation": "Incorrecto."
                },
                {
                  "id": "d",
                  "text": "XML Quality Reader",
                  "explanation": "No tiene relación con XQuery."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que permite realizar sql xml",
              "question": "¿Qué permite realizar SQL/XML?",
              "options": [
                {
                  "id": "a",
                  "text": "Validar documentos XML",
                  "explanation": "No es su función principal (eso es XSD/Schematron)."
                },
                {
                  "id": "b",
                  "text": "Convertir JSON a XML",
                  "explanation": "No es el objetivo de SQL/XML."
                },
                {
                  "id": "c",
                  "text": "Consultas híbridas que combinan SQL y XPath/XQuery",
                  "explanation": "SQL/XML permite trabajar con datos XML dentro de bases de datos relacionales, combinando consultas SQL con XPath o XQuery, lo que facilita el acceso y manipulación de datos XML."
                },
                {
                  "id": "d",
                  "text": "Transformar XML en CSS",
                  "explanation": "No tiene sentido ni relación."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que operador de xpath selecciona todos los descendientes de ",
              "question": "¿Qué operador de XPath selecciona todos los descendientes de un nodo?",
              "options": [
                {
                  "id": "a",
                  "text": "/",
                  "explanation": "Selecciona hijos directos o rutas absolutas."
                },
                {
                  "id": "b",
                  "text": "//",
                  "explanation": "El operador // selecciona todos los nodos descendientes (a cualquier nivel) desde el nodo actual."
                },
                {
                  "id": "c",
                  "text": ".",
                  "explanation": "Hace referencia al nodo actual."
                },
                {
                  "id": "d",
                  "text": "@",
                  "explanation": "Se usa para seleccionar atributos, no descendientes."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que caracteriza a la serializacion binaria de xml",
              "question": "¿Qué caracteriza a la serialización binaria de XML?",
              "options": [
                {
                  "id": "a",
                  "text": "Legible por humanos",
                  "explanation": "Eso es XML en texto, no binario."
                },
                {
                  "id": "b",
                  "text": "Validación con DTD",
                  "explanation": "No tiene relación directa con la serialización."
                },
                {
                  "id": "c",
                  "text": "Representa datos XML en formato compacto y eficiente",
                  "explanation": "La serialización binaria de XML convierte el XML en un formato más compacto y eficiente, optimizado para almacenamiento y transmisión, pero no pensado para ser leído directamente por humanos."
                },
                {
                  "id": "d",
                  "text": "Editable con cualquier editor",
                  "explanation": "El formato binario no es fácilmente editable."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que extension de sql permite combinar datos xml y relacional",
              "question": "¿Qué extensión de SQL permite combinar datos XML y relacionales?",
              "options": [
                {
                  "id": "a",
                  "text": "SQL/JSON",
                  "explanation": "Es para trabajar con JSON, no XML."
                },
                {
                  "id": "b",
                  "text": "XSD/SQL",
                  "explanation": "No es una extensión real."
                },
                {
                  "id": "c",
                  "text": "XML/DB",
                  "explanation": "No es una extensión estándar de SQL."
                },
                {
                  "id": "d",
                  "text": "SQL/XML",
                  "explanation": "SQL/XML es una extensión que permite trabajar con datos XML dentro de bases de datos relacionales, combinando consultas SQL con XML."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-cual es la principal funcion de xpath",
              "question": "¿Cuál es la principal función de XPath?",
              "options": [
                {
                  "id": "a",
                  "text": "Validar estructura",
                  "explanation": "Eso lo hacen XSD o DTD."
                },
                {
                  "id": "b",
                  "text": "Generar HTML",
                  "explanation": "Eso lo hace XSLT."
                },
                {
                  "id": "c",
                  "text": "Transformar XML",
                  "explanation": "También corresponde a XSLT."
                },
                {
                  "id": "d",
                  "text": "Seleccionar nodos dentro de un documento XML",
                  "explanation": "La función principal de XPath es navegar y seleccionar nodos dentro de un documento XML."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que es una base de datos nativa xml nxd",
              "question": "¿Qué es una base de datos nativa XML (NXD)?",
              "options": [
                {
                  "id": "a",
                  "text": "Formato binario",
                  "explanation": "No es una base de datos."
                },
                {
                  "id": "b",
                  "text": "Texto plano sin estructura",
                  "explanation": "XML sí tiene estructura."
                },
                {
                  "id": "c",
                  "text": "Base de datos relacional",
                  "explanation": "Eso sería SQL/XML, no una NXD."
                },
                {
                  "id": "d",
                  "text": "Un sistema diseñado específicamente para almacenar y consultar documentos XML",
                  "explanation": "Una base de datos nativa XML (NXD) está diseñada específicamente para almacenar, gestionar y consultar documentos XML manteniendo su estructura jerárquica."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que funcion tiene la clausula return en una consulta xquery",
              "question": "¿Qué función tiene la cláusula RETURN en una consulta XQuery?",
              "options": [
                {
                  "id": "a",
                  "text": "Devuelve el resultado final de la consulta",
                  "explanation": "En una consulta XQuery (FLWOR), la cláusula return se encarga de devolver el resultado final, es decir, qué datos se muestran tras aplicar las condiciones y transformaciones."
                },
                {
                  "id": "b",
                  "text": "Determina el orden",
                  "explanation": "Eso lo hace order by."
                },
                {
                  "id": "c",
                  "text": "Condición de filtrado",
                  "explanation": "Eso lo hace where."
                },
                {
                  "id": "d",
                  "text": "Variable temporal",
                  "explanation": "Eso lo hacen for o let."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que funcion cumple la indexacion en bases de datos xml",
              "question": "¿Qué función cumple la indexación en bases de datos XML?",
              "options": [
                {
                  "id": "a",
                  "text": "Convertir XML",
                  "explanation": "No tiene relación con indexación."
                },
                {
                  "id": "b",
                  "text": "Reducir tamaño",
                  "explanation": "No es su objetivo principal."
                },
                {
                  "id": "c",
                  "text": "Seguridad",
                  "explanation": "Tampoco es su función principal."
                },
                {
                  "id": "d",
                  "text": "Mejorar la velocidad de búsqueda y recuperación de datos",
                  "explanation": "La indexación permite organizar los datos de forma que las consultas (XPath/XQuery) sean mucho más rápidas, mejorando el rendimiento en la búsqueda y recuperación."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que lenguaje se utiliza para seleccionar nodos dentro de un ",
              "question": "¿Qué lenguaje se utiliza para seleccionar nodos dentro de un documento XML?",
              "options": [
                {
                  "id": "a",
                  "text": "XPath",
                  "explanation": "XPath es el lenguaje diseñado para navegar y seleccionar nodos dentro de documentos XML."
                },
                {
                  "id": "b",
                  "text": "SQL",
                  "explanation": "Se usa para bases de datos relacionales, no para XML directamente."
                },
                {
                  "id": "c",
                  "text": "XSL-FO",
                  "explanation": "Se usa para formateo y presentación (por ejemplo, generar PDF)."
                },
                {
                  "id": "d",
                  "text": "JSONPath",
                  "explanation": "Similar a XPath, pero para JSON, no XML."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que ventaja ofrecen las bases de datos nativas xml frente a ",
              "question": "¿Qué ventaja ofrecen las bases de datos nativas XML frente a las relacionales?",
              "options": [
                {
                  "id": "a",
                  "text": "No requieren índices ni esquemas",
                  "explanation": "Sí pueden usar índices y estructuras."
                },
                {
                  "id": "b",
                  "text": "Almacenan y consultan XML directamente sin necesidad de conversión",
                  "explanation": "Las bases de datos nativas XML permiten trabajar con documentos XML tal cual, manteniendo su estructura jerárquica sin necesidad de transformarlos a tablas como en las relacionales."
                },
                {
                  "id": "c",
                  "text": "Solo lectura",
                  "explanation": "Permiten lectura y escritura."
                },
                {
                  "id": "d",
                  "text": "Menor espacio",
                  "explanation": "No es su ventaja principal ni siempre es cierto."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que estructura define el lenguaje xquery",
              "question": "¿Qué estructura define el lenguaje XQuery?",
              "options": [
                {
                  "id": "a",
                  "text": "TRY-CATCH",
                  "explanation": "Es para manejo de errores, no la estructura principal."
                },
                {
                  "id": "b",
                  "text": "LOOP-IF-END",
                  "explanation": "No existe en XQuery."
                },
                {
                  "id": "c",
                  "text": "FLWOR (For, Let, Where, Order, Return)",
                  "explanation": "El lenguaje XQuery utiliza la estructura FLWOR, que permite recorrer, filtrar, ordenar y devolver datos de documentos XML."
                },
                {
                  "id": "d",
                  "text": "SELECT-FROM-WHERE",
                  "explanation": "Es de SQL, no de XQuery."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-cual es el proposito de la serializacion xml",
              "question": "¿Cuál es el propósito de la serialización XML?",
              "options": [
                {
                  "id": "a",
                  "text": "Transformar a JSON",
                  "explanation": "Eso es una conversión de formato, no serialización."
                },
                {
                  "id": "b",
                  "text": "Cifrar datos",
                  "explanation": "No tiene relación con serialización."
                },
                {
                  "id": "c",
                  "text": "Convertir documentos XML en una secuencia de bytes para almacenamiento o transmisión",
                  "explanation": "La serialización XML consiste en convertir el documento en una secuencia de bytes para poder guardarlo o enviarlo, ya sea en formato texto o binario."
                },
                {
                  "id": "d",
                  "text": "Validar sintaxis",
                  "explanation": "Eso corresponde a validación (XSD/DTD)."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que representa el termino flwor en xquery",
              "question": "¿Qué representa el término FLWOR en XQuery?",
              "options": [
                {
                  "id": "a",
                  "text": "Format, Label...",
                  "explanation": "No corresponde a XQuery."
                },
                {
                  "id": "b",
                  "text": "Fetch, Loop...",
                  "explanation": "Incorrecto."
                },
                {
                  "id": "c",
                  "text": "File, Load...",
                  "explanation": "No tiene relación con XQuery."
                },
                {
                  "id": "d",
                  "text": "For, Let, Where, Order, Return",
                  "explanation": "FLWOR es la estructura principal de XQuery y significa For, Let, Where, Order by, Return, utilizada para consultar y manipular datos en XML."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que formato de almacenamiento permite mayor interoperabilida",
              "question": "¿Qué formato de almacenamiento permite mayor interoperabilidad entre sistemas?",
              "options": [
                {
                  "id": "a",
                  "text": "BIN",
                  "explanation": "Formato binario, no interoperable ni legible."
                },
                {
                  "id": "b",
                  "text": "XML",
                  "explanation": "XML es un formato estándar, estructurado y ampliamente compatible, lo que permite intercambiar datos fácilmente entre diferentes sistemas y plataformas."
                },
                {
                  "id": "c",
                  "text": "PDF",
                  "explanation": "Pensado para visualización, no para intercambio de datos estructurados."
                },
                {
                  "id": "d",
                  "text": "CSV",
                  "explanation": "Es simple, pero menos flexible y estructurado que XML."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            },
            {
              "id": "lenguaje-marcas-ut4-que funcion tiene la clausula order by en xquery",
              "question": "¿Qué función tiene la cláusula ORDER BY en XQuery?",
              "options": [
                {
                  "id": "a",
                  "text": "Filtrar nodos",
                  "explanation": "Eso lo hace where."
                },
                {
                  "id": "b",
                  "text": "Validar XSD",
                  "explanation": "No tiene relación con consultas XQuery."
                },
                {
                  "id": "c",
                  "text": "Ordenar los resultados de una consulta",
                  "explanation": "La cláusula order by en XQuery se utiliza para ordenar los resultados obtenidos en una consulta FLWOR."
                },
                {
                  "id": "d",
                  "text": "Crear etiquetas",
                  "explanation": "Eso se hace en return, no en order by."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACIÓN.docx"
            }
          ]
        },
        {
          "id": "ut5",
          "title": "Unidad 5",
          "questions": [
            {
              "id": "lenguaje-marcas-ut5-que garantiza la gestion de transacciones en bases de datos ",
              "question": "¿Qué garantiza la gestión de transacciones en bases de datos XML?",
              "options": [
                {
                  "id": "a",
                  "text": "La integridad y consistencia de los datos en operaciones concurrentes",
                  "explanation": "La gestión de transacciones asegura que las operaciones en la base de datos se realicen de forma segura y coherente, manteniendo la integridad y consistencia incluso cuando hay varios procesos trabajando a la vez (propiedades ACID)."
                },
                {
                  "id": "b",
                  "text": "Cifrado SOAP",
                  "explanation": "Eso es seguridad, no transacciones."
                },
                {
                  "id": "c",
                  "text": "Transformación XML",
                  "explanation": "Eso es XSLT."
                },
                {
                  "id": "d",
                  "text": "Compresión",
                  "explanation": "No tiene relación con transacciones."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que caracteristica distingue a las plataformas eai enterpris",
              "question": "¿Qué característica distingue a las plataformas EAI (Enterprise Application Integration)?",
              "options": [
                {
                  "id": "a",
                  "text": "No requieren seguridad",
                  "explanation": "Falso, la seguridad es clave."
                },
                {
                  "id": "b",
                  "text": "Solo JSON",
                  "explanation": "Pueden trabajar con muchos formatos (XML, JSON...)."
                },
                {
                  "id": "c",
                  "text": "Sustituyen ERP",
                  "explanation": "No los sustituyen, los conectan."
                },
                {
                  "id": "d",
                  "text": "Facilitan la comunicación entre sistemas heterogéneos mediante transformación y orquestación de datos",
                  "explanation": "Las plataformas EAI permiten integrar distintos sistemas (aunque sean diferentes entre sí) facilitando la comunicación, transformación de datos y orquestación de procesos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que concepto combina integracion automatizacion y control de",
              "question": "¿Qué concepto combina integración, automatización y control de calidad continuo?",
              "options": [
                {
                  "id": "a",
                  "text": "UML",
                  "explanation": "Es un lenguaje de modelado, no de integración continua."
                },
                {
                  "id": "b",
                  "text": "CI/CD (Integración y Despliegue Continuos)",
                  "explanation": "CI/CD integra desarrollo y operaciones mediante integración continua (CI) y despliegue continuo (CD), automatizando pruebas y control de calidad de forma constante."
                },
                {
                  "id": "c",
                  "text": "XML-RPC",
                  "explanation": "Es un protocolo de comunicación."
                },
                {
                  "id": "d",
                  "text": "VPN",
                  "explanation": "Es una tecnología de red para conexiones seguras."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que formato utiliza esquemas estrictos definidos en archivos",
              "question": "¿Qué formato utiliza esquemas estrictos definidos en archivos .proto?",
              "options": [
                {
                  "id": "a",
                  "text": "Protocol Buffers",
                  "explanation": "Protocol Buffers (Protobuf) utiliza archivos .proto para definir esquemas estrictos de datos, permitiendo una serialización eficiente y estructurada."
                },
                {
                  "id": "b",
                  "text": "XSLT",
                  "explanation": "Sirve para transformar XML."
                },
                {
                  "id": "c",
                  "text": "JSON",
                  "explanation": "No usa esquemas .proto."
                },
                {
                  "id": "d",
                  "text": "XML",
                  "explanation": "Usa XSD o DTD, no .proto."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que permite la automatizacion de flujos de integracion",
              "question": "¿Qué permite la automatización de flujos de integración?",
              "options": [
                {
                  "id": "a",
                  "text": "Evitar validaciones",
                  "explanation": "No elimina validaciones, de hecho suelen mantenerse."
                },
                {
                  "id": "b",
                  "text": "Reducir errores y acelerar los procesos empresariales",
                  "explanation": "La automatización de flujos de integración permite que los procesos se ejecuten de forma automática, lo que reduce errores humanos y mejora la eficiencia y rapidez en las operaciones empresariales."
                },
                {
                  "id": "c",
                  "text": "Sustituir REST por SOAP",
                  "explanation": "No es su función."
                },
                {
                  "id": "d",
                  "text": "Aumentar tamaño",
                  "explanation": "No tiene sentido ni relación."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que ventaja ofrece json frente a xml en integraciones web",
              "question": "¿Qué ventaja ofrece JSON frente a XML en integraciones web?",
              "options": [
                {
                  "id": "a",
                  "text": "Datos jerárquicos",
                  "explanation": "XML es más potente en estructuras complejas."
                },
                {
                  "id": "b",
                  "text": "Namespaces",
                  "explanation": "Eso es propio de XML."
                },
                {
                  "id": "c",
                  "text": "Mayor ligereza y velocidad de procesamiento",
                  "explanation": "JSON es más ligero y rápido de procesar que XML, lo que lo hace muy eficiente en integraciones web (APIs, etc.)."
                },
                {
                  "id": "d",
                  "text": "Validaciones",
                  "explanation": "XML (con XSD) tiene más soporte."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que herramienta se usa para probar servicios web y validar e",
              "question": "¿Qué herramienta se usa para probar servicios web y validar esquemas XML?",
              "options": [
                {
                  "id": "a",
                  "text": "Notepad++",
                  "explanation": "Editor de texto, no prueba servicios web."
                },
                {
                  "id": "b",
                  "text": "Photoshop",
                  "explanation": "Edición de imágenes."
                },
                {
                  "id": "c",
                  "text": "SoapUI",
                  "explanation": "SoapUI es una herramienta diseñada para probar servicios web (SOAP y REST) y también permite validar respuestas XML, incluidos esquemas."
                },
                {
                  "id": "d",
                  "text": "Docker",
                  "explanation": "Contenedores, no testeo de servicios web directamente."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que herramienta permite convertir xml a json utilizando plan",
              "question": "¿Qué herramienta permite convertir XML a JSON utilizando plantillas?",
              "options": [
                {
                  "id": "a",
                  "text": "SQL/XML",
                  "explanation": "Para consultas en bases de datos."
                },
                {
                  "id": "b",
                  "text": "XMLSpy",
                  "explanation": "Es una herramienta, pero no el lenguaje de transformación en sí."
                },
                {
                  "id": "c",
                  "text": "XSLT 3.0",
                  "explanation": "XSLT .0 permite transformar XML a otros formatos, incluyendo JSON, utilizando plantillas y funciones específicas."
                },
                {
                  "id": "d",
                  "text": "JSON Schema",
                  "explanation": "Sirve para validar JSON, no para transformar."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que formato es mas compacto y rapido para la serializacion d",
              "question": "¿Qué formato es más compacto y rápido para la serialización de datos?",
              "options": [
                {
                  "id": "a",
                  "text": "XML",
                  "explanation": "Más pesado y lento."
                },
                {
                  "id": "b",
                  "text": "JSON",
                  "explanation": "Más ligero que XML, pero menos eficiente que Protobuf."
                },
                {
                  "id": "c",
                  "text": "YAML",
                  "explanation": "Más legible, pero no optimizado para rendimiento."
                },
                {
                  "id": "d",
                  "text": "Protocol Buffers",
                  "explanation": "Protocol Buffers es un formato binario diseñado para ser muy compacto y rápido, superando en rendimiento y tamaño a XML, JSON o YAML."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que lenguaje se usa en la orquestacion de servicios web",
              "question": "¿Qué lenguaje se usa en la orquestación de servicios web?",
              "options": [
                {
                  "id": "a",
                  "text": "JSONPath",
                  "explanation": "Para consultar JSON."
                },
                {
                  "id": "b",
                  "text": "SQL",
                  "explanation": "Bases de datos relacionales."
                },
                {
                  "id": "c",
                  "text": "BPEL",
                  "explanation": "BPEL (Business Process Execution Language) se utiliza para la orquestación de servicios web, permitiendo definir procesos de negocio que coordinan múltiples servicios."
                },
                {
                  "id": "d",
                  "text": "XSD",
                  "explanation": "Validación de XML."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que rol cumple xml en sistemas erp",
              "question": "¿Qué rol cumple XML en sistemas ERP?",
              "options": [
                {
                  "id": "a",
                  "text": "Facilitar la interoperabilidad entre módulos y sistemas externos mediante un formato estándar",
                  "explanation": "En sistemas ERP, XML se usa como formato estándar para intercambiar datos entre módulos y con sistemas externos, facilitando la integración."
                },
                {
                  "id": "b",
                  "text": "Interfaces gráficas",
                  "explanation": "No es su función."
                },
                {
                  "id": "c",
                  "text": "Sustituir SQL",
                  "explanation": "No reemplaza bases de datos."
                },
                {
                  "id": "d",
                  "text": "Reemplazar BBDD",
                  "explanation": "Tampoco es correcto."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que lenguajes se utilizan principalmente para realizar consu",
              "question": "¿Qué lenguajes se utilizan principalmente para realizar consultas en bases de datos XML?",
              "options": [
                {
                  "id": "a",
                  "text": "SMTP",
                  "explanation": "Protocolo de correo electrónico."
                },
                {
                  "id": "b",
                  "text": "SOAP",
                  "explanation": "XSLT transforma y DTD valida, no consultan. Usa XML, pero no es un estilo basado en HTTP de la misma forma que REST."
                },
                {
                  "id": "c",
                  "text": "REST",
                  "explanation": "SQL es relacional y JSONPath es para JSON. XPath y XQuery son los lenguajes principales para consultar y acceder a datos en documentos XML. REST es un estilo arquitectónico que utiliza métodos HTTP (GET, POST, PUT, DELETE) y permite intercambiar datos en formatos como XML o JSON."
                },
                {
                  "id": "d",
                  "text": "RPC",
                  "explanation": "Son protocolos, no lenguajes de consulta. 8. ¿Qué estilo arquitectónico usa los métodos HTTP y puede transmitir datos en XML o JSON? Modelo de llamada remota, no estilo REST."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que protocolo usa mensajes estructurados en formato xml con ",
              "question": "¿Qué protocolo usa mensajes estructurados en formato XML con encabezado y cuerpo definidos?",
              "options": [
                {
                  "id": "a",
                  "text": "SOAP",
                  "explanation": "SOAP es un protocolo que utiliza mensajes en XML con una estructura definida que incluye Header (encabezado) y Body (cuerpo)."
                },
                {
                  "id": "b",
                  "text": "REST",
                  "explanation": "Usa HTTP pero no define estructura XML fija."
                },
                {
                  "id": "c",
                  "text": "JSON-RPC",
                  "explanation": "Usa JSON, no XML."
                },
                {
                  "id": "d",
                  "text": "FTP",
                  "explanation": "Protocolo de transferencia de archivos."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que componente centraliza las peticiones a microservicios en",
              "question": "¿Qué componente centraliza las peticiones a microservicios en una arquitectura distribuida?",
              "options": [
                {
                  "id": "a",
                  "text": "ESB",
                  "explanation": "Integra sistemas, pero no es específico de microservicios modernos."
                },
                {
                  "id": "b",
                  "text": "DTD",
                  "explanation": "Validación de XML."
                },
                {
                  "id": "c",
                  "text": "BaseX",
                  "explanation": "Base de datos XML."
                },
                {
                  "id": "d",
                  "text": "API Gateway",
                  "explanation": "El API Gateway actúa como punto de entrada único que centraliza y gestiona las peticiones hacia los microservicios en una arquitectura distribuida."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que es un pipeline de integracion",
              "question": "¿Qué es un pipeline de integración?",
              "options": [
                {
                  "id": "a",
                  "text": "Autenticación",
                  "explanation": "No es su función principal."
                },
                {
                  "id": "b",
                  "text": "Un flujo automatizado de tareas de validación, transformación y despliegue",
                  "explanation": "Un pipeline de integración es un proceso automatizado que encadena tareas como validación, transformación, pruebas y despliegue, típico en CI/CD."
                },
                {
                  "id": "c",
                  "text": "Correo",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "d",
                  "text": "Tabla XML",
                  "explanation": "No es un concepto de pipeline."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que diferencia principal existe entre una base de datos nati",
              "question": "¿Qué diferencia principal existe entre una base de datos nativa XML y una relacional con soporte XML?",
              "options": [
                {
                  "id": "a",
                  "text": "La nativa almacena documentos XML completos, mientras que la relacional los fragmenta en tablas.",
                  "explanation": "Las bases de datos nativas XML guardan el XML tal cual (estructura jerárquica), mientras que las relacionales suelen convertirlo en tablas, perdiendo esa estructura directa."
                },
                {
                  "id": "b",
                  "text": "Sí soporta XPath/XQuery",
                  "explanation": "Es una de sus principales ventajas."
                },
                {
                  "id": "c",
                  "text": "No almacenan igual",
                  "explanation": "Esa es la diferencia clave."
                },
                {
                  "id": "d",
                  "text": "Relacional mejor jerárquico",
                  "explanation": "Falso, XML es mejor para jerarquías."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-que tecnica mejora el rendimiento de las consultas en bases ",
              "question": "¿Qué técnica mejora el rendimiento de las consultas en bases de datos XML?",
              "options": [
                {
                  "id": "a",
                  "text": "HTTPS",
                  "explanation": "Reduce tamaño, pero no acelera consultas. Protege la comunicación, pero no define seguridad dentro del mensaje SOAP."
                },
                {
                  "id": "b",
                  "text": "WS-Security",
                  "explanation": "La indexación de caminos y valores permite acceder más rápido a partes concretas del XML, mejorando mucho el rendimiento de las consultas (XPath/XQuery). WS-Security es el estándar específico para añadir seguridad a mensajes SOAP, incluyendo cifrado y firma digital."
                },
                {
                  "id": "c",
                  "text": "OAuth 2.0",
                  "explanation": "No es una técnica estándar ni recomendable. Autorización, no cifrado de mensajes SOAP."
                },
                {
                  "id": "d",
                  "text": "XMLSchema",
                  "explanation": "No mejora directamente el rendimiento de consultas. 9. ¿Qué estándar define mecanismos de seguridad como cifrado y firma digital en servicios SOAP? Validación de XML, no seguridad."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "lenguaje-marcas-ut5-excel-que estilo arquitectonico usa los metodos http y puede trans",
              "question": "¿Qué estilo arquitectónico usa los métodos HTTP y puede transmitir datos en XML o JSON?",
              "options": [
                {
                  "id": "a",
                  "text": "La nativa almacena documentos XML completos, mientras que la relacional los fragmenta en tablas.",
                  "explanation": "La nativa almacena documentos XML completos, mientras que la relacional los fragmenta en tablas. no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "b",
                  "text": "REST",
                  "explanation": "REST es la opción correcta porque responde directamente a la pregunta planteada en la autoevaluación y coincide con el contenido técnico esperado para ese concepto."
                },
                {
                  "id": "c",
                  "text": "XPath y XQuery",
                  "explanation": "XPath y XQuery no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "d",
                  "text": "Convertir un documento XML en una secuencia de bytes para almacenamiento o transmisión.",
                  "explanation": "Convertir un documento XML en una secuencia de bytes para almacenamiento o transmisión. no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                }
              ],
              "correctOptionId": "b",
              "source": "TESTS-AUTOEVALUACIÓN-LMSGI.XLSX"
            },
            {
              "id": "lenguaje-marcas-ut5-excel-que estandar define mecanismos de seguridad como cifrado y f",
              "question": "¿Qué estándar define mecanismos de seguridad como cifrado y firma digital en servicios SOAP?",
              "options": [
                {
                  "id": "a",
                  "text": "La nativa almacena documentos XML completos, mientras que la relacional los fragmenta en tablas.",
                  "explanation": "La nativa almacena documentos XML completos, mientras que la relacional los fragmenta en tablas. no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "b",
                  "text": "XPath y XQuery",
                  "explanation": "XPath y XQuery no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "c",
                  "text": "WS-Security",
                  "explanation": "WS-Security es la opción correcta porque responde directamente a la pregunta planteada en la autoevaluación y coincide con el contenido técnico esperado para ese concepto."
                },
                {
                  "id": "d",
                  "text": "Convertir un documento XML en una secuencia de bytes para almacenamiento o transmisión.",
                  "explanation": "Convertir un documento XML en una secuencia de bytes para almacenamiento o transmisión. no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                }
              ],
              "correctOptionId": "c",
              "source": "TESTS-AUTOEVALUACIÓN-LMSGI.XLSX"
            }
          ]
        }
      ]
    },
    {
      "id": "sgbd",
      "name": "SGBD",
      "finalExamSize": 30,
      "units": [
        {
          "id": "ut1",
          "title": "Unidad 1",
          "questions": [
            {
              "id": "sgbd-ut1-que se recomienda al documentar una instalacion de sgbd",
              "question": "¿Qué se recomienda al documentar una instalación de SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Usar una guía oficial sin cambios",
                  "explanation": "La documentación técnica debe reflejar la experiencia práctica propia, no ser una copia de un manual externo."
                },
                {
                  "id": "b",
                  "text": "Anotar pasos, comandos, resultados y capturas propias",
                  "explanation": "Una documentación profesional registra los pasos realizados, los comandos ejecutados, los resultados obtenidos y las capturas propias, para que el proceso sea reproducible."
                },
                {
                  "id": "c",
                  "text": "Describir solo el sistema operativo",
                  "explanation": "Describir solo el sistema operativo es una parte mínima; faltan comandos, configuración, incidencias y verificación."
                },
                {
                  "id": "d",
                  "text": "Redactar un texto breve sin capturas",
                  "explanation": "Las capturas son esenciales para demostrar que el proceso se realizó realmente."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-cual es el principal objetivo del modulo de recuperacion de ",
              "question": "¿Cuál es el principal objetivo del módulo de recuperación de un SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Generar informes de actividad",
                  "explanation": "Los informes de actividad corresponden a herramientas de monitorización o auditoría, no al módulo de recuperación."
                },
                {
                  "id": "b",
                  "text": "Recuperar datos tras un fallo del sistema",
                  "explanation": "El módulo de recuperación restaura la base de datos a un estado consistente tras fallos como caídas del servidor o cortes eléctricos, aplicando registros de log (redo/undo)."
                },
                {
                  "id": "c",
                  "text": "Permitir la replicación de archivos multimedia",
                  "explanation": "La replicación es un mecanismo distinto orientado a la alta disponibilidad, no la función del módulo de recuperación."
                },
                {
                  "id": "d",
                  "text": "Establecer relaciones entre tablas",
                  "explanation": "Establecer relaciones entre tablas corresponde al modelo relacional y la integridad referencial, no al subsistema de recuperación."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-cual es el proposito de una comprobacion funcional tras inst",
              "question": "¿Cuál es el propósito de una comprobación funcional tras instalar un SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Verificar que el sistema responde correctamente a consultas básicas",
                  "explanation": "Tras instalar un SGBD hay que comprobar que el servicio está activo, el puerto escucha y se pueden ejecutar consultas básicas como SHOW DATABASES."
                },
                {
                  "id": "b",
                  "text": "Confirmar que los logs se han vaciado",
                  "explanation": "Los logs no se vacían tras la instalación; se usan para diagnóstico."
                },
                {
                  "id": "c",
                  "text": "Cambiar el sistema de archivos",
                  "explanation": "Cambiar el sistema de archivos es configuración del sistema operativo, no verificación funcional del SGBD."
                },
                {
                  "id": "d",
                  "text": "Asegurar la compatibilidad con el navegador",
                  "explanation": "Un SGBD no depende del navegador para funcionar."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que tipo de base de datos es mongodb",
              "question": "¿Qué tipo de base de datos es MongoDB?",
              "options": [
                {
                  "id": "a",
                  "text": "Documental NoSQL",
                  "explanation": "MongoDB es un SGBD NoSQL de tipo documental: almacena datos en documentos con formato similar a JSON (BSON), sin necesidad de esquema fijo ni tablas relacionales."
                },
                {
                  "id": "b",
                  "text": "Relacional",
                  "explanation": "Las bases relacionales usan tablas y SQL, como MySQL o PostgreSQL."
                },
                {
                  "id": "c",
                  "text": "Grafos",
                  "explanation": "Las bases de grafos están diseñadas para relaciones complejas tipo nodos y aristas, como Neo4j."
                },
                {
                  "id": "d",
                  "text": "Orientada a objetos",
                  "explanation": "Las bases orientadas a objetos almacenan objetos directamente, como db4o."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que base de datos seria mas adecuada para una tienda online ",
              "question": "¿Qué base de datos sería más adecuada para una tienda online de tamaño medio?",
              "options": [
                {
                  "id": "a",
                  "text": "Neo4j",
                  "explanation": "Neo4j es una base de datos de grafos, pensada para relaciones complejas tipo redes sociales, no para e-commerce tradicional."
                },
                {
                  "id": "b",
                  "text": "SQLite",
                  "explanation": "SQLite es ligera y embebida; no es adecuada para múltiples usuarios concurrentes en producción."
                },
                {
                  "id": "c",
                  "text": "MySQL",
                  "explanation": "MySQL es relacional, soporta transacciones (pedidos, pagos, stock), gestiona bien la concurrencia y tiene buen rendimiento para aplicaciones web de tamaño medio."
                },
                {
                  "id": "d",
                  "text": "Oracle Autonomous DB",
                  "explanation": "Oracle Autonomous DB es muy potente pero excesivamente costoso para una tienda online de tamaño medio."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que aspecto se debe evitar al elegir un sgbd para produccion",
              "question": "¿Qué aspecto se debe evitar al elegir un SGBD para producción?",
              "options": [
                {
                  "id": "a",
                  "text": "Considerar la seguridad",
                  "explanation": "La seguridad es fundamental en producción y nunca debe ignorarse."
                },
                {
                  "id": "b",
                  "text": "Ignorar requisitos de rendimiento y escalabilidad",
                  "explanation": "No analizar el volumen de datos, la escalabilidad y los picos de carga puede causar caídas del servicio, lentitud o saturación en producción."
                },
                {
                  "id": "c",
                  "text": "Confirmar soporte técnico",
                  "explanation": "El soporte técnico es un criterio importante, especialmente en entornos empresariales."
                },
                {
                  "id": "d",
                  "text": "Verificar compatibilidad con el sistema",
                  "explanation": "Es obligatorio comprobar la compatibilidad con el sistema operativo y el entorno."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que herramienta se utiliza habitualmente para instalar mysql",
              "question": "¿Qué herramienta se utiliza habitualmente para instalar MySQL en Windows?",
              "options": [
                {
                  "id": "a",
                  "text": "SQL Developer",
                  "explanation": "SQL Developer es una herramienta de Oracle Database, no para instalar MySQL."
                },
                {
                  "id": "b",
                  "text": "MySQL Installer",
                  "explanation": "MySQL Installer es la herramienta gráfica oficial para Windows que permite instalar MySQL Server, configurar el puerto y el usuario root, y gestionar componentes adicionales."
                },
                {
                  "id": "c",
                  "text": "PGAdmin",
                  "explanation": "PGAdmin es la herramienta gráfica para PostgreSQL, no para MySQL."
                },
                {
                  "id": "d",
                  "text": "Docker Compose",
                  "explanation": "Docker Compose puede desplegar contenedores, pero no es la herramienta habitual para instalación estándar de MySQL en Windows."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que significa que un servicio este habilitado en linux",
              "question": "¿Qué significa que un servicio esté “habilitado” en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "Se iniciará automáticamente con el sistema",
                  "explanation": "Habilitar un servicio con systemctl enable configura el arranque automático al inicio del sistema; es distinto de start, que lo inicia en ese momento."
                },
                {
                  "id": "b",
                  "text": "Solo funciona con acceso a Internet",
                  "explanation": "Un servicio puede funcionar localmente sin ninguna conexión externa."
                },
                {
                  "id": "c",
                  "text": "Se ejecuta con permisos de usuario limitado",
                  "explanation": "Los permisos de ejecución dependen de la configuración del servicio, no del estado habilitado."
                },
                {
                  "id": "d",
                  "text": "Está disponible para la nube",
                  "explanation": "El estado habilitado no tiene relación con servicios cloud."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que caracteristica distingue a postgresql de otros sgbd",
              "question": "¿Qué característica distingue a PostgreSQL de otros SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Solo funciona en Windows",
                  "explanation": "PostgreSQL es multiplataforma: funciona en Linux, Windows y macOS."
                },
                {
                  "id": "b",
                  "text": "Soporta funciones definidas por el usuario y extensiones",
                  "explanation": "PostgreSQL destaca por su alta extensibilidad: permite crear funciones propias, añadir extensiones como PostGIS o pgcrypto y definir tipos de datos personalizados."
                },
                {
                  "id": "c",
                  "text": "No es compatible con SQL",
                  "explanation": "PostgreSQL es uno de los gestores más fieles al estándar SQL."
                },
                {
                  "id": "d",
                  "text": "No soporta tipos personalizados",
                  "explanation": "Precisamente es conocido por permitir crear tipos de datos personalizados."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-cual es un caso de uso tipico de una base de datos relaciona",
              "question": "¿Cuál es un caso de uso típico de una base de datos relacional?",
              "options": [
                {
                  "id": "a",
                  "text": "Sistema de gestión académica",
                  "explanation": "Un sistema académico (alumnos, asignaturas, matrículas, calificaciones) tiene datos estructurados con relaciones claras entre tablas, lo que encaja perfectamente con el modelo relacional."
                },
                {
                  "id": "b",
                  "text": "Almacenamiento de sensores IoT en tiempo real",
                  "explanation": "Los datos de sensores IoT en tiempo real requieren bases NoSQL o de series temporales como InfluxDB, mejor adaptadas a escrituras masivas y continuas."
                },
                {
                  "id": "c",
                  "text": "Recomendaciones personalizadas en redes sociales",
                  "explanation": "Las recomendaciones basadas en relaciones complejas entre usuarios se gestionan mejor con bases de grafos o sistemas distribuidos."
                },
                {
                  "id": "d",
                  "text": "Mapas de relaciones entre usuarios",
                  "explanation": "Los mapas de relaciones entre usuarios son el caso típico de bases de datos de grafos como Neo4j."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que puerto se utiliza por defecto en postgresql",
              "question": "¿Qué puerto se utiliza por defecto en PostgreSQL?",
              "options": [
                {
                  "id": "a",
                  "text": "5432",
                  "explanation": "PostgreSQL usa el puerto 5432 por defecto, definido en postgresql.conf. Referencia: MySQL→3306, SQL Server→1433, Oracle→1521."
                },
                {
                  "id": "b",
                  "text": "3306",
                  "explanation": "El puerto 3306 es el predeterminado de MySQL, no de PostgreSQL."
                },
                {
                  "id": "c",
                  "text": "8080",
                  "explanation": "El puerto 8080 es un alternativo habitual para servidores web HTTP."
                },
                {
                  "id": "d",
                  "text": "1521",
                  "explanation": "El puerto 1521 es el predeterminado de Oracle Database."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que tecnica permite ejecutar la instalacion de un sgbd sin e",
              "question": "¿Qué técnica permite ejecutar la instalación de un SGBD sin entorno gráfico?",
              "options": [
                {
                  "id": "a",
                  "text": "Instalación por terminal (CLI)",
                  "explanation": "La instalación por CLI (Command Line Interface) usa comandos de consola como apt install mysql-server en Linux, sin necesitar entorno gráfico; es el método habitual en servidores de producción."
                },
                {
                  "id": "b",
                  "text": "GUI",
                  "explanation": "GUI significa interfaz gráfica de usuario; es lo contrario de lo que pregunta."
                },
                {
                  "id": "c",
                  "text": "Interfaz táctil",
                  "explanation": "La interfaz táctil no es un método de instalación en servidores."
                },
                {
                  "id": "d",
                  "text": "Modo seguro",
                  "explanation": "El modo seguro es un modo de arranque del sistema, no un método de instalación del SGBD."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-cual es la ubicacion tipica del archivo de log de errores de",
              "question": "¿Cuál es la ubicación típica del archivo de log de errores de MySQL en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "/etc/mysql/logfile",
                  "explanation": "/etc/ contiene archivos de configuración, no logs de servicios."
                },
                {
                  "id": "b",
                  "text": "/usr/bin/mysql/logs",
                  "explanation": "/usr/bin/ contiene ejecutables del sistema, no registros de errores."
                },
                {
                  "id": "c",
                  "text": "/home/mysql/logs",
                  "explanation": "No es una ubicación estándar del sistema para logs de servicios."
                },
                {
                  "id": "d",
                  "text": "/var/log/mysql/error.log",
                  "explanation": "En Linux, los logs de servicios se almacenan en /var/log/; el log de errores de MySQL está en /var/log/mysql/error.log y es la primera fuente a consultar cuando el SGBD no arranca."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que accion debe realizarse tras modificar el archivo de conf",
              "question": "¿Qué acción debe realizarse tras modificar el archivo de configuración de un SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Volver a compilar la base de datos",
                  "explanation": "No se recompila el SGBD tras modificar la configuración estándar."
                },
                {
                  "id": "b",
                  "text": "Eliminar todos los usuarios",
                  "explanation": "Eliminar usuarios no tiene ninguna relación con cambios de configuración."
                },
                {
                  "id": "c",
                  "text": "Reiniciar el servicio del gestor",
                  "explanation": "Los cambios en archivos como my.cnf (MySQL) o postgresql.conf no se aplican automáticamente; hay que reiniciar el servicio con systemctl restart para cargar la nueva configuración."
                },
                {
                  "id": "d",
                  "text": "Cambiar de sistema operativo",
                  "explanation": "No es necesario ni tiene relación con modificar un archivo de configuración."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que funcion cumple el motor de almacenamiento de un sgbd",
              "question": "¿Qué función cumple el motor de almacenamiento de un SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Visualizar el esquema de la base de datos",
                  "explanation": "Visualizar el esquema lo hacen herramientas gráficas como MySQL Workbench o pgAdmin."
                },
                {
                  "id": "b",
                  "text": "Ejecutar sentencias de red",
                  "explanation": "La ejecución de sentencias de red corresponde al módulo de comunicación cliente-servidor."
                },
                {
                  "id": "c",
                  "text": "Interpretar lenguaje HTML",
                  "explanation": "HTML es un lenguaje web sin ninguna relación con las funciones de un SGBD."
                },
                {
                  "id": "d",
                  "text": "Gestionar el almacenamiento físico de los datos",
                  "explanation": "El motor de almacenamiento gestiona cómo se escriben y leen los datos en disco, maneja índices y participa en la recuperación ante fallos. En MySQL, InnoDB es el motor más usado por soportar transacciones."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que representa un error comun tras una instalacion de sgbd",
              "question": "¿Qué representa un error común tras una instalación de SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "“Access denied for user 'root'@'localhost'”",
                  "explanation": "Este error indica que la contraseña es incorrecta, el método de autenticación no coincide o el usuario root no tiene los permisos adecuados; es el error más frecuente en la configuración inicial."
                },
                {
                  "id": "b",
                  "text": "“404: página no encontrada”",
                  "explanation": "El error 404 es un código HTTP de servidores web, no de SGBD."
                },
                {
                  "id": "c",
                  "text": "“Fatal error: division by zero”",
                  "explanation": "Division by zero es un error lógico de programación, no específico de instalaciones de SGBD."
                },
                {
                  "id": "d",
                  "text": "“File not found: documento.txt”",
                  "explanation": "File not found es un error genérico del sistema de archivos, no típico del SGBD tras instalar."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que comando se utiliza para iniciar el servicio mysql en lin",
              "question": "¿Qué comando se utiliza para iniciar el servicio MySQL en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "sudo systemctl start mysql",
                  "explanation": "En Linux con systemd, systemctl start mysql inicia el servicio en ese momento. Otros usos: stop para parar, restart para reiniciar, enable para que arranque automáticamente."
                },
                {
                  "id": "b",
                  "text": "launch mysql-server",
                  "explanation": "launch mysql-server no es un comando válido en Linux estándar."
                },
                {
                  "id": "c",
                  "text": "sudo service mysql run",
                  "explanation": "En sistemas con sysvinit se usaba service mysql start, no run."
                },
                {
                  "id": "d",
                  "text": "mysql-start",
                  "explanation": "mysql-start no existe como comando oficial del sistema."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-cual de las siguientes opciones representa un requisito de h",
              "question": "¿Cuál de las siguientes opciones representa un requisito de hardware recomendado para SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Unidad óptica",
                  "explanation": "Una unidad óptica no es un requisito relevante para un servidor de bases de datos."
                },
                {
                  "id": "b",
                  "text": "Teclado inalámbrico",
                  "explanation": "El teclado inalámbrico es un periférico de usuario, no un requisito técnico del SGBD."
                },
                {
                  "id": "c",
                  "text": "512 MB de RAM",
                  "explanation": "512 MB de RAM es insuficiente para un SGBD moderno; el mínimo orientativo suele ser 2 GB."
                },
                {
                  "id": "d",
                  "text": "4 núcleos de CPU",
                  "explanation": "Para un SGBD con concurrencia se recomiendan al menos 4 núcleos de CPU y 8 GB de RAM; con menos recursos el rendimiento bajo carga puede verse comprometido."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-cual de las siguientes acciones no forma parte de la prepara",
              "question": "¿Cuál de las siguientes acciones NO forma parte de la preparación del entorno?",
              "options": [
                {
                  "id": "a",
                  "text": "Crear usuario específico para el SGBD",
                  "explanation": "Crear un usuario dedicado sí forma parte de la preparación; limita el impacto de posibles problemas de seguridad."
                },
                {
                  "id": "b",
                  "text": "Desactivar el puerto de red",
                  "explanation": "El puerto de red debe estar disponible para que el SGBD reciba conexiones; desactivarlo impediría el funcionamiento del servicio."
                },
                {
                  "id": "c",
                  "text": "Reservar espacio para logs y backups",
                  "explanation": "Reservar espacio para logs y backups es una buena práctica fundamental."
                },
                {
                  "id": "d",
                  "text": "Descargar el instalador desde la web oficial",
                  "explanation": "Descargar el instalador desde la web oficial es uno de los primeros pasos en la preparación del entorno."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            },
            {
              "id": "sgbd-ut1-que propiedad no forma parte de las transacciones acid",
              "question": "¿Qué propiedad NO forma parte de las transacciones ACID?",
              "options": [
                {
                  "id": "a",
                  "text": "Durabilidad",
                  "explanation": "Durabilidad (D de ACID) sí forma parte: garantiza que los cambios confirmados persisten aunque haya un fallo posterior."
                },
                {
                  "id": "b",
                  "text": "Integridad",
                  "explanation": "Integridad no es una propiedad ACID. Las cuatro propiedades son: Atomicidad, Consistencia, Aislamiento y Durabilidad."
                },
                {
                  "id": "c",
                  "text": "Consistencia",
                  "explanation": "Consistencia (C de ACID) sí forma parte: la base de datos pasa siempre de un estado válido a otro válido."
                },
                {
                  "id": "d",
                  "text": "Atomicidad",
                  "explanation": "Atomicidad (A de ACID) sí forma parte: una transacción se completa entera o no se aplica."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACION BBDD.docx"
            }
          ]
        },
        {
          "id": "ut2",
          "title": "Unidad 2",
          "questions": [
            {
              "id": "sgbd-ut2-que parametro en mysql controla el tiempo maximo de inactivi",
              "question": "¿Qué parámetro en MySQL controla el tiempo máximo de inactividad de una conexión?",
              "options": [
                {
                  "id": "a",
                  "text": "connect_time",
                  "explanation": "No es un parámetro válido en MySQL."
                },
                {
                  "id": "b",
                  "text": "wait_timeout",
                  "explanation": "El parámetro wait_timeout define el tiempo (en segundos) que una conexión puede permanecer inactiva antes de que MySQL la cierre automáticamente, evitando consumo innecesario de recursos."
                },
                {
                  "id": "c",
                  "text": "delay_time",
                  "explanation": "No existe como parámetro estándar en MySQL."
                },
                {
                  "id": "d",
                  "text": "max_delay",
                  "explanation": "No es un parámetro relacionado con la gestión de conexiones."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-cual es el puerto por defecto de oracle database",
              "question": "¿Cuál es el puerto por defecto de Oracle Database?",
              "options": [
                {
                  "id": "a",
                  "text": "1521",
                  "explanation": "El puerto 1521 es el que utiliza Oracle Database por defecto para las conexiones mediante el listener (servicio que gestiona las conexiones de clientes)."
                },
                {
                  "id": "b",
                  "text": "1433",
                  "explanation": "Es el puerto por defecto de Microsoft SQL Server."
                },
                {
                  "id": "c",
                  "text": "5432",
                  "explanation": "Es el puerto por defecto de PostgreSQL."
                },
                {
                  "id": "d",
                  "text": "3306",
                  "explanation": "Es el puerto por defecto de MySQL."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-cual de los siguientes parametros se configura en el archivo",
              "question": "¿Cuál de los siguientes parámetros se configura en el archivo my.cnf de MySQL?",
              "options": [
                {
                  "id": "a",
                  "text": "sql_path",
                  "explanation": "No es un parámetro válido en MySQL."
                },
                {
                  "id": "b",
                  "text": "datadir",
                  "explanation": "El parámetro datadir define la ruta donde MySQL almacena físicamente las bases de datos en el sistema. Se configura en el archivo my.cnf y es clave para la gestión del almacenamiento."
                },
                {
                  "id": "c",
                  "text": "config_log",
                  "explanation": "No existe como parámetro estándar en MySQL."
                },
                {
                  "id": "d",
                  "text": "query_speed",
                  "explanation": "No es un parámetro real de configuración."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que tipo de archivo almacena todas las transacciones de mysq",
              "question": "¿Qué tipo de archivo almacena todas las transacciones de MySQL y permite replicación?",
              "options": [
                {
                  "id": "a",
                  "text": "General log",
                  "explanation": "Registra todas las consultas, pero no está pensado para replicación."
                },
                {
                  "id": "b",
                  "text": "Audit log",
                  "explanation": "Se usa para auditoría, no para replicación estándar."
                },
                {
                  "id": "c",
                  "text": "Error log",
                  "explanation": "Solo guarda errores del servidor, no transacciones."
                },
                {
                  "id": "d",
                  "text": "Binary log",
                  "explanation": "El Binary log (binlog) registra todos los cambios realizados en la base de datos (INSERT, UPDATE, DELETE...), lo que permite la replicación y la recuperación de datos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-cual de los siguientes archivos de log registra las consulta",
              "question": "¿Cuál de los siguientes archivos de log registra las consultas lentas en MySQL?",
              "options": [
                {
                  "id": "a",
                  "text": "binary log",
                  "explanation": "Guarda cambios en datos para replicación, no mide lentitud."
                },
                {
                  "id": "b",
                  "text": "general log",
                  "explanation": "Registra todas las consultas, pero no filtra por lentitud."
                },
                {
                  "id": "c",
                  "text": "slow query log",
                  "explanation": "El slow query log registra las consultas que tardan más de un tiempo determinado en ejecutarse, lo que permite detectar problemas de rendimiento y optimizar la base de datos."
                },
                {
                  "id": "d",
                  "text": "error log",
                  "explanation": "Solo recoge errores del servidor."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que comando en linux permite iniciar el servicio de postgres",
              "question": "¿Qué comando en Linux permite iniciar el servicio de PostgreSQL?",
              "options": [
                {
                  "id": "a",
                  "text": "servicectl pg_on",
                  "explanation": "No es un comando válido en Linux."
                },
                {
                  "id": "b",
                  "text": "systemctl start postgresql",
                  "explanation": "El comando systemctl start postgresql se utiliza en sistemas Linux con systemd para iniciar el servicio de PostgreSQL correctamente."
                },
                {
                  "id": "c",
                  "text": "dbstart pgsql",
                  "explanation": "No es un comando estándar para PostgreSQL."
                },
                {
                  "id": "d",
                  "text": "pg_service start",
                  "explanation": "No existe como comando válido."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que funcion cumple el registro de cambios en la documentacio",
              "question": "¿Qué función cumple el registro de cambios en la documentación técnica?",
              "options": [
                {
                  "id": "a",
                  "text": "Verificar los permisos de acceso",
                  "explanation": "Eso corresponde a la gestión de usuarios y seguridad."
                },
                {
                  "id": "b",
                  "text": "Listar usuarios activos",
                  "explanation": "Se relaciona con monitorización, no con documentación."
                },
                {
                  "id": "c",
                  "text": "Mostrar los errores del sistema operativo",
                  "explanation": "Eso lo hacen los logs del sistema, no el registro de cambios."
                },
                {
                  "id": "d",
                  "text": "Controlar las modificaciones realizadas y su responsable",
                  "explanation": "El registro de cambios (change log) permite llevar un control de qué modificaciones se han hecho, cuándo y quién las ha realizado, lo que facilita el mantenimiento, auditoría y seguimiento del sistema."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que elemento garantiza la trazabilidad y coherencia en la ad",
              "question": "¿Qué elemento garantiza la trazabilidad y coherencia en la administración del SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Automatización de tareas",
                  "explanation": "Mejora eficiencia, pero no garantiza trazabilidad."
                },
                {
                  "id": "b",
                  "text": "Cifrado de contraseñas",
                  "explanation": "Es una medida de seguridad, no de control de cambios."
                },
                {
                  "id": "c",
                  "text": "Uso de contraseñas temporales",
                  "explanation": "También es seguridad, no gestión ni trazabilidad."
                },
                {
                  "id": "d",
                  "text": "Documentación y versionado de configuraciones",
                  "explanation": "La documentación y el versionado permiten saber qué cambios se han hecho, cuándo y por quién, asegurando la trazabilidad y manteniendo coherencia en la configuración del sistema."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que tecnologia garantiza la confidencialidad de los datos tr",
              "question": "¿Qué tecnología garantiza la confidencialidad de los datos transmitidos entre cliente y servidor?",
              "options": [
                {
                  "id": "a",
                  "text": "RAID",
                  "explanation": "Es una tecnología de almacenamiento, no de transmisión segura."
                },
                {
                  "id": "b",
                  "text": "SSH",
                  "explanation": "También cifra comunicaciones, pero se usa principalmente para acceso remoto, no como estándar general cliente-servidor web/BD."
                },
                {
                  "id": "c",
                  "text": "SNMP",
                  "explanation": "Se usa para monitorización de red, no para cifrado seguro de datos."
                },
                {
                  "id": "d",
                  "text": "SSL/TLS",
                  "explanation": "SSL/TLS cifra la comunicación entre cliente y servidor, asegurando que los datos no puedan ser interceptados ni leídos por terceros."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que comando de mysql se usa para detener el servidor desde l",
              "question": "¿Qué comando de MySQL se usa para detener el servidor desde la línea de comandos?",
              "options": [
                {
                  "id": "a",
                  "text": "mysqladmin shutdown",
                  "explanation": "El comando mysqladmin shutdown permite detener el servidor MySQL de forma segura desde la línea de comandos, asegurando que se cierren correctamente las conexiones y procesos."
                },
                {
                  "id": "b",
                  "text": "dbstop mysql",
                  "explanation": "No es un comando válido en MySQL."
                },
                {
                  "id": "c",
                  "text": "service stop mysql",
                  "explanation": "Puede usarse en Linux, pero no es un comando propio de MySQL, sino del sistema."
                },
                {
                  "id": "d",
                  "text": "mysql stop",
                  "explanation": "No existe como comando válido."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-en postgresql el parametro max_connections define",
              "question": "En PostgreSQL, el parámetro max_connections define:",
              "options": [
                {
                  "id": "a",
                  "text": "El tamaño máximo de las consultas",
                  "explanation": "No lo controla este parámetro."
                },
                {
                  "id": "b",
                  "text": "El límite de espacio en disco por base de datos",
                  "explanation": "PostgreSQL no lo define así con este parámetro."
                },
                {
                  "id": "c",
                  "text": "El número máximo de bases de datos instaladas",
                  "explanation": "No tiene relación con conexiones."
                },
                {
                  "id": "d",
                  "text": "El número máximo de conexiones simultáneas al servidor",
                  "explanation": "El parámetro max_connections establece cuántos clientes pueden conectarse al mismo tiempo al servidor PostgreSQL, controlando así el uso de recursos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-cual de las siguientes practicas es correcta para proteger l",
              "question": "¿Cuál de las siguientes prácticas es correcta para proteger la cuenta root?",
              "options": [
                {
                  "id": "a",
                  "text": "Compartir credenciales entre administradores",
                  "explanation": "Mala práctica de seguridad, elimina la trazabilidad."
                },
                {
                  "id": "b",
                  "text": "Deshabilitar accesos remotos directos",
                  "explanation": "Deshabilitar el acceso remoto directo a root reduce el riesgo de ataques, obligando a usar usuarios intermedios y aumentando la seguridad del sistema."
                },
                {
                  "id": "c",
                  "text": "No establecer contraseña",
                  "explanation": "Gravísimo riesgo de seguridad."
                },
                {
                  "id": "d",
                  "text": "Permitir acceso desde cualquier IP",
                  "explanation": "Aumenta la exposición a ataques."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que define el parametro bind_address en un archivo de config",
              "question": "¿Qué define el parámetro bind_address en un archivo de configuración?",
              "options": [
                {
                  "id": "a",
                  "text": "La contraseña del administrador",
                  "explanation": "No tiene relación con este parámetro."
                },
                {
                  "id": "b",
                  "text": "La ruta de los datos",
                  "explanation": "Eso lo define otro parámetro como datadir."
                },
                {
                  "id": "c",
                  "text": "El nombre del archivo de log",
                  "explanation": "Se configura con parámetros de logging, no con bind_address."
                },
                {
                  "id": "d",
                  "text": "La dirección IP desde la que el servidor acepta conexiones",
                  "explanation": "El parámetro bind_address indica en qué dirección IP escucha el servidor, es decir, desde dónde acepta conexiones (por ejemplo, solo localhost o desde red)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que archivo define los permisos de conexion en postgresql",
              "question": "¿Qué archivo define los permisos de conexión en PostgreSQL?",
              "options": [
                {
                  "id": "a",
                  "text": "pg_hba.conf",
                  "explanation": "El archivo pg_hba.conf (Host-Based Authentication) controla qué usuarios pueden conectarse, desde qué IP y con qué método de autenticación."
                },
                {
                  "id": "b",
                  "text": "pg_access.ini",
                  "explanation": "No es un archivo real de PostgreSQL."
                },
                {
                  "id": "c",
                  "text": "connect.conf",
                  "explanation": "No existe como archivo de configuración estándar."
                },
                {
                  "id": "d",
                  "text": "pg_log.conf",
                  "explanation": "No define accesos, está relacionado (de forma incorrecta aquí) con logs."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-en windows como se controla el inicio o parada del servicio ",
              "question": "En Windows, ¿cómo se controla el inicio o parada del servicio de SQL Server?",
              "options": [
                {
                  "id": "a",
                  "text": "netctl launch",
                  "explanation": "No es un comando válido en Windows."
                },
                {
                  "id": "b",
                  "text": "net start/stop MSSQLSERVER",
                  "explanation": "El comando net start MSSQLSERVER y net stop MSSQLSERVER permite iniciar y detener el servicio de SQL Server desde la línea de comandos en Windows."
                },
                {
                  "id": "c",
                  "text": "sqlctl start/stop",
                  "explanation": "No existe como comando estándar."
                },
                {
                  "id": "d",
                  "text": "sqladmin run",
                  "explanation": "No es un comando real para gestionar servicios."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que se debe hacer antes de modificar un archivo de configura",
              "question": "¿Qué se debe hacer antes de modificar un archivo de configuración de un SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Crear una copia de seguridad del archivo",
                  "explanation": "Antes de modificar cualquier archivo de configuración, es fundamental hacer una copia de seguridad para poder restaurarlo en caso de error y evitar fallos en el sistema."
                },
                {
                  "id": "b",
                  "text": "Borrar el archivo anterior",
                  "explanation": "Puede causar fallos graves si algo sale mal."
                },
                {
                  "id": "c",
                  "text": "Cerrar todas las conexiones de usuario",
                  "explanation": "Puede ser recomendable en algunos casos, pero no es lo primero ni obligatorio siempre."
                },
                {
                  "id": "d",
                  "text": "Reiniciar el servicio",
                  "explanation": "Se hace después de modificar, no antes."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-cual es la finalidad principal de los comandos de inicio y p",
              "question": "¿Cuál es la finalidad principal de los comandos de inicio y parada en un SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Eliminar bases de datos inactivas",
                  "explanation": "No tiene relación con iniciar o parar el servicio."
                },
                {
                  "id": "b",
                  "text": "Actualizar los índices de la base de datos",
                  "explanation": "Es una tarea de mantenimiento, no de control del servicio."
                },
                {
                  "id": "c",
                  "text": "Cambiar los privilegios de usuario",
                  "explanation": "Se gestiona con comandos de permisos, no con inicio/parada."
                },
                {
                  "id": "d",
                  "text": "Garantizar la disponibilidad y estabilidad del servicio",
                  "explanation": "Los comandos de inicio y parada permiten controlar el funcionamiento del SGBD, asegurando que el servicio esté disponible cuando se necesita y se detenga de forma controlada para evitar errores o pérdida de datos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que ventaja ofrece automatizar el arranque de un sgbd al ini",
              "question": "¿Qué ventaja ofrece automatizar el arranque de un SGBD al iniciar el sistema operativo?",
              "options": [
                {
                  "id": "a",
                  "text": "Elimina la necesidad de supervisión",
                  "explanation": "Sigue siendo necesario supervisar el sistema."
                },
                {
                  "id": "b",
                  "text": "Garantiza la disponibilidad inmediata del servicio tras reinicio",
                  "explanation": "Automatizar el arranque hace que el SGBD se inicie automáticamente al encender el sistema, asegurando que el servicio esté disponible sin intervención manual."
                },
                {
                  "id": "c",
                  "text": "Aumenta la seguridad de los usuarios",
                  "explanation": "No tiene relación directa con la seguridad."
                },
                {
                  "id": "d",
                  "text": "Reduce el tamaño de los archivos de datos",
                  "explanation": "No afecta al almacenamiento."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que herramienta se recomienda para el versionado de archivos",
              "question": "¿Qué herramienta se recomienda para el versionado de archivos de configuración?",
              "options": [
                {
                  "id": "a",
                  "text": "Workbench",
                  "explanation": "Es una herramienta de gestión de bases de datos, no de versionado."
                },
                {
                  "id": "b",
                  "text": "Oracle Cloud Shell",
                  "explanation": "Es un entorno de línea de comandos en la nube, no una herramienta de control de versiones."
                },
                {
                  "id": "c",
                  "text": "SQL Developer",
                  "explanation": "Es una herramienta para gestionar bases de datos Oracle, no para versionado."
                },
                {
                  "id": "d",
                  "text": "Git",
                  "explanation": "Git permite llevar un control de versiones de los archivos, registrar cambios, recuperar versiones anteriores y trabajar en equipo de forma organizada."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut2-que herramienta grafica se emplea normalmente para gestionar",
              "question": "¿Qué herramienta gráfica se emplea normalmente para gestionar MySQL?",
              "options": [
                {
                  "id": "a",
                  "text": "Oracle Grid Control",
                  "explanation": "Es una herramienta de Oracle, no de MySQL."
                },
                {
                  "id": "b",
                  "text": "MySQL Workbench",
                  "explanation": "MySQL Workbench es la herramienta gráfica oficial para administrar bases de datos MySQL, permitiendo diseñar, consultar y gestionar servidores de forma visual."
                },
                {
                  "id": "c",
                  "text": "SQL Developer",
                  "explanation": "Se utiliza para bases de datos Oracle."
                },
                {
                  "id": "d",
                  "text": "pgAdmin",
                  "explanation": "Es la herramienta gráfica de PostgreSQL."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 BBDD AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut3",
          "title": "Unidad 3",
          "questions": [
            {
              "id": "sgbd-ut3-cual de los siguientes modelos de control de acceso se basa ",
              "question": "¿Cuál de los siguientes modelos de control de acceso se basa en la asignación de permisos a roles?",
              "options": [
                {
                  "id": "a",
                  "text": "MAC",
                  "explanation": "Control obligatorio basado en niveles de seguridad."
                },
                {
                  "id": "b",
                  "text": "DAC",
                  "explanation": "Control discrecional, el propietario decide los permisos."
                },
                {
                  "id": "c",
                  "text": "RBAC",
                  "explanation": "El modelo RBAC (Role-Based Access Control) asigna permisos a roles, y los usuarios heredan esos permisos según el rol que tengan, facilitando la gestión de accesos."
                },
                {
                  "id": "d",
                  "text": "ABAC",
                  "explanation": "Basado en atributos, no en roles."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que comando se utiliza para asignar un rol a un usuario",
              "question": "¿Qué comando se utiliza para asignar un rol a un usuario?",
              "options": [
                {
                  "id": "a",
                  "text": "ATTACH ROLE",
                  "explanation": "No es un comando estándar SQL."
                },
                {
                  "id": "b",
                  "text": "GRANT rol TO usuario",
                  "explanation": "El comando GRANT rol TO usuario se utiliza para asignar un rol a un usuario, permitiéndole heredar los permisos asociados a ese rol."
                },
                {
                  "id": "c",
                  "text": "USE ROLE",
                  "explanation": "Sirve para activar un rol, no para asignarlo."
                },
                {
                  "id": "d",
                  "text": "ENABLE ROLE",
                  "explanation": "No es un comando estándar para asignación."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-cual de los siguientes privilegios es de tipo sistema en mys",
              "question": "¿Cuál de los siguientes privilegios es de tipo “sistema” en MySQL?",
              "options": [
                {
                  "id": "a",
                  "text": "DELETE",
                  "explanation": "Es un privilegio sobre datos (tabla), no del sistema."
                },
                {
                  "id": "b",
                  "text": "SUPER",
                  "explanation": "El privilegio SUPER es un privilegio de nivel sistema en MySQL, que permite realizar acciones administrativas como gestionar conexiones, procesos o configuración del servidor."
                },
                {
                  "id": "c",
                  "text": "SELECT",
                  "explanation": "Permite consultar datos, no es de sistema."
                },
                {
                  "id": "d",
                  "text": "CREATE TABLE",
                  "explanation": "Es un privilegio sobre objetos, no de sistema."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que comando crea un rol en mysql",
              "question": "¿Qué comando crea un rol en MySQL?",
              "options": [
                {
                  "id": "a",
                  "text": "INSERT ROLE",
                  "explanation": "No es un comando SQL válido."
                },
                {
                  "id": "b",
                  "text": "ADD ROLE",
                  "explanation": "No existe como comando estándar."
                },
                {
                  "id": "c",
                  "text": "CREATE ROLE",
                  "explanation": "El comando CREATE ROLE se utiliza para crear un nuevo rol en MySQL, al que posteriormente se le pueden asignar permisos y usuarios."
                },
                {
                  "id": "d",
                  "text": "NEW ROLE",
                  "explanation": "Tampoco es un comando válido en MySQL."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que significa trazabilidad en un sistema de base de datos",
              "question": "¿Qué significa trazabilidad en un sistema de base de datos?",
              "options": [
                {
                  "id": "a",
                  "text": "Capacidad de registrar y reconstruir acciones sobre los datos",
                  "explanation": "La trazabilidad permite saber qué acciones se han realizado, cuándo y por quién, pudiendo reconstruir eventos sobre los datos."
                },
                {
                  "id": "b",
                  "text": "Capacidad para copiar datos",
                  "explanation": "Eso es replicación o copia, no trazabilidad."
                },
                {
                  "id": "c",
                  "text": "Capacidad para realizar backups automáticos",
                  "explanation": "Es una función de mantenimiento."
                },
                {
                  "id": "d",
                  "text": "Capacidad para controlar tiempos de ejecución",
                  "explanation": "Está relacionado con rendimiento, no con trazabilidad."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que comando se emplea para eliminar una cuenta de usuario",
              "question": "¿Qué comando se emplea para eliminar una cuenta de usuario?",
              "options": [
                {
                  "id": "a",
                  "text": "ERASE USER",
                  "explanation": "No es un comando válido en SQL."
                },
                {
                  "id": "b",
                  "text": "REMOVE USER",
                  "explanation": "No existe como comando estándar."
                },
                {
                  "id": "c",
                  "text": "DELETE USER",
                  "explanation": "DELETE se usa para datos, no para usuarios."
                },
                {
                  "id": "d",
                  "text": "DROP USER",
                  "explanation": "El comando DROP USER se utiliza para eliminar completamente un usuario del SGBD, eliminando su acceso y permisos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que normativa regula la proteccion de datos personales en es",
              "question": "¿Qué normativa regula la protección de datos personales en España?",
              "options": [
                {
                  "id": "a",
                  "text": "ISO/IEC 27001",
                  "explanation": "Es una norma internacional de seguridad, no una ley española."
                },
                {
                  "id": "b",
                  "text": "Ley de Firma Electrónica",
                  "explanation": "Regula firmas digitales, no protección de datos."
                },
                {
                  "id": "c",
                  "text": "Ley Orgánica 3/2018",
                  "explanation": "La Ley Orgánica /08 (LOPDGDD) adapta en España el Reglamento Europeo de Protección de Datos (RGPD) y regula el tratamiento de datos personales."
                },
                {
                  "id": "d",
                  "text": "Real Decreto 39/2015",
                  "explanation": "Relacionado con procedimientos administrativos, no con protección de datos."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que elemento permite agrupar varios privilegios comunes para",
              "question": "¿Qué elemento permite agrupar varios privilegios comunes para simplificar su gestión?",
              "options": [
                {
                  "id": "a",
                  "text": "Conjunto",
                  "explanation": "No es un concepto estándar en gestión de permisos."
                },
                {
                  "id": "b",
                  "text": "Rol",
                  "explanation": "Un rol permite agrupar varios permisos y asignarlos fácilmente a uno o varios usuarios, simplificando la administración."
                },
                {
                  "id": "c",
                  "text": "Usuario",
                  "explanation": "Es quien recibe permisos, no quien los agrupa."
                },
                {
                  "id": "d",
                  "text": "Perfil",
                  "explanation": "Puede existir en algunos sistemas, pero el concepto estándar es rol."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que principio indica que cada usuario debe tener solo los pe",
              "question": "¿Qué principio indica que cada usuario debe tener solo los permisos estrictamente necesarios?",
              "options": [
                {
                  "id": "a",
                  "text": "Principio de auditoría",
                  "explanation": "Se centra en el registro de acciones."
                },
                {
                  "id": "b",
                  "text": "Principio de mínimo privilegio",
                  "explanation": "El principio de mínimo privilegio establece que cada usuario debe tener únicamente los permisos necesarios para realizar su trabajo, reduciendo riesgos de seguridad."
                },
                {
                  "id": "c",
                  "text": "Principio de trazabilidad",
                  "explanation": "Permite seguir acciones, no limitar permisos."
                },
                {
                  "id": "d",
                  "text": "Principio de mínima exposición",
                  "explanation": "No es el término estándar en este contexto."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que comando se utiliza en mysql para crear un nuevo usuario",
              "question": "¿Qué comando se utiliza en MySQL para crear un nuevo usuario?",
              "options": [
                {
                  "id": "a",
                  "text": "CREATE USER",
                  "explanation": "El comando CREATE USER se utiliza para crear un nuevo usuario en MySQL y poder asignarle permisos posteriormente."
                },
                {
                  "id": "b",
                  "text": "INSERT USER",
                  "explanation": "No es un comando SQL válido."
                },
                {
                  "id": "c",
                  "text": "NEW USER",
                  "explanation": "No existe en MySQL."
                },
                {
                  "id": "d",
                  "text": "ADD USER",
                  "explanation": "Tampoco es un comando estándar."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que privilegio permite modificar registros existentes en una",
              "question": "¿Qué privilegio permite modificar registros existentes en una tabla?",
              "options": [
                {
                  "id": "a",
                  "text": "SELECT",
                  "explanation": "Solo permite consultar datos."
                },
                {
                  "id": "b",
                  "text": "DELETE",
                  "explanation": "Elimina registros, no los modifica."
                },
                {
                  "id": "c",
                  "text": "UPDATE",
                  "explanation": "El privilegio UPDATE permite modificar datos ya existentes en una tabla (cambiar valores de registros)."
                },
                {
                  "id": "d",
                  "text": "INSERT",
                  "explanation": "Añade nuevos registros, no modifica los existentes."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que practica se considera esencial para garantizar la seguri",
              "question": "¿Qué práctica se considera esencial para garantizar la seguridad en la gestión de accesos?",
              "options": [
                {
                  "id": "a",
                  "text": "Usar contraseñas predeterminadas",
                  "explanation": "Muy inseguro."
                },
                {
                  "id": "b",
                  "text": "Documentar, auditar y aplicar el principio de mínimo privilegio",
                  "explanation": "Combinar documentación, auditoría y mínimo privilegio asegura control, trazabilidad y reducción de riesgos en los accesos."
                },
                {
                  "id": "c",
                  "text": "Asignar privilegios globales a todos los usuarios",
                  "explanation": "Aumenta riesgos de acceso indebido."
                },
                {
                  "id": "d",
                  "text": "Permitir conexiones sin cifrado",
                  "explanation": "Expone los datos a interceptación."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-en el modelo dac quien decide que usuarios pueden acceder a ",
              "question": "En el modelo DAC, ¿quién decide qué usuarios pueden acceder a un objeto?",
              "options": [
                {
                  "id": "a",
                  "text": "El propietario del objeto",
                  "explanation": "En el modelo DAC (Discretionary Access Control), el propietario del recurso decide quién puede acceder y qué permisos tiene."
                },
                {
                  "id": "b",
                  "text": "El auditor de seguridad",
                  "explanation": "Supervisa, pero no asigna permisos."
                },
                {
                  "id": "c",
                  "text": "El sistema operativo",
                  "explanation": "Aplica políticas, pero no decide en DAC."
                },
                {
                  "id": "d",
                  "text": "El administrador del sistema",
                  "explanation": "Puede intervenir, pero no es la base del modelo DAC."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-cual es el proposito del comando flush privileges",
              "question": "¿Cuál es el propósito del comando FLUSH PRIVILEGES?",
              "options": [
                {
                  "id": "a",
                  "text": "Eliminar todos los usuarios",
                  "explanation": "No tiene esa función."
                },
                {
                  "id": "b",
                  "text": "Reiniciar el servidor",
                  "explanation": "No reinicia servicios."
                },
                {
                  "id": "c",
                  "text": "Recargar los privilegios desde las tablas del sistema",
                  "explanation": "El comando FLUSH PRIVILEGES hace que MySQL recargue los permisos desde las tablas internas, aplicando cambios sin necesidad de reiniciar el servidor."
                },
                {
                  "id": "d",
                  "text": "Crear roles predeterminados",
                  "explanation": "No crea roles."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que comando muestra los privilegios de un usuario en mysql",
              "question": "¿Qué comando muestra los privilegios de un usuario en MySQL?",
              "options": [
                {
                  "id": "a",
                  "text": "SHOW USERS",
                  "explanation": "No es un comando válido en MySQL."
                },
                {
                  "id": "b",
                  "text": "DISPLAY ACCESS",
                  "explanation": "No existe como comando estándar."
                },
                {
                  "id": "c",
                  "text": "LIST PRIVILEGES",
                  "explanation": "Tampoco es un comando válido."
                },
                {
                  "id": "d",
                  "text": "SHOW GRANTS",
                  "explanation": "El comando SHOW GRANTS permite ver los permisos asignados a un usuario en MySQL."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-en mysql que comando se usa para retirar un privilegio",
              "question": "En MySQL, ¿qué comando se usa para retirar un privilegio?",
              "options": [
                {
                  "id": "a",
                  "text": "DENY",
                  "explanation": "No es un comando válido en MySQL (sí en otros SGBD como SQL Server)."
                },
                {
                  "id": "b",
                  "text": "UNGRANT",
                  "explanation": "No existe como comando SQL."
                },
                {
                  "id": "c",
                  "text": "REVOKE",
                  "explanation": "El comando REVOKE se utiliza para quitar permisos o privilegios previamente concedidos a un usuario o rol en MySQL."
                },
                {
                  "id": "d",
                  "text": "REMOVE",
                  "explanation": "No es un comando válido para privilegios."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que tipo de objeto permite renombrar o simplificar el nombre",
              "question": "¿Qué tipo de objeto permite renombrar o simplificar el nombre real de una tabla o vista?",
              "options": [
                {
                  "id": "a",
                  "text": "Perfil",
                  "explanation": "Relacionado con configuraciones de usuario, no con objetos."
                },
                {
                  "id": "b",
                  "text": "Índice",
                  "explanation": "Mejora el rendimiento de consultas, no renombra tablas."
                },
                {
                  "id": "c",
                  "text": "Sinónimo",
                  "explanation": "Un sinónimo (synonym) permite crear un nombre alternativo para una tabla o vista, facilitando su uso y simplificando consultas."
                },
                {
                  "id": "d",
                  "text": "Rol",
                  "explanation": "Agrupa permisos, no afecta nombres de objetos."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que tipo de privilegio permite crear y eliminar tablas en un",
              "question": "¿Qué tipo de privilegio permite crear y eliminar tablas en una base de datos?",
              "options": [
                {
                  "id": "a",
                  "text": "UPDATE",
                  "explanation": "Modifica datos, no estructuras."
                },
                {
                  "id": "b",
                  "text": "ALTER",
                  "explanation": "Modifica estructuras existentes, pero no crea ni elimina tablas."
                },
                {
                  "id": "c",
                  "text": "CREATE",
                  "explanation": "El privilegio CREATE permite crear tablas (y otros objetos). En muchos contextos de examen se asocia a la gestión de estructuras de la BD, incluyendo creación y eliminación."
                },
                {
                  "id": "d",
                  "text": "DELETE",
                  "explanation": "Elimina registros, no tablas."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que comando sql se usa para otorgar permisos a un usuario",
              "question": "¿Qué comando SQL se usa para otorgar permisos a un usuario?",
              "options": [
                {
                  "id": "a",
                  "text": "ALLOW",
                  "explanation": "No es un comando SQL estándar."
                },
                {
                  "id": "b",
                  "text": "PERMIT",
                  "explanation": "Tampoco es un comando válido en SQL."
                },
                {
                  "id": "c",
                  "text": "GRANT",
                  "explanation": "El comando GRANT se utiliza para asignar permisos o privilegios a un usuario o rol en un SGBD."
                },
                {
                  "id": "d",
                  "text": "REVOKE",
                  "explanation": "Sirve para quitar permisos, no para otorgarlos."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut3-que vista de base de datos se usa para ofrecer acceso limita",
              "question": "¿Qué vista de base de datos se usa para ofrecer acceso limitado a ciertas columnas o filas?",
              "options": [
                {
                  "id": "a",
                  "text": "Sinónimo",
                  "explanation": "Solo cambia el nombre de un objeto, no limita datos."
                },
                {
                  "id": "b",
                  "text": "Perfil",
                  "explanation": "Relacionado con configuración de usuarios."
                },
                {
                  "id": "c",
                  "text": "Vista",
                  "explanation": "Una vista (VIEW) permite mostrar solo ciertos datos de una tabla (columnas o filas), controlando el acceso sin modificar la tabla original."
                },
                {
                  "id": "d",
                  "text": "Alias",
                  "explanation": "Es temporal en consultas, no controla acceso permanente."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 BBDD AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut4",
          "title": "Unidad 4",
          "questions": [
            {
              "id": "sgbd-ut4-que evento puede activar un trigger dml",
              "question": "¿Qué evento puede activar un trigger DML?",
              "options": [
                {
                  "id": "a",
                  "text": "ALTER DATABASE",
                  "explanation": "Es una operación DDL, no DML."
                },
                {
                  "id": "b",
                  "text": "CREATE TABLE",
                  "explanation": "También es DDL, no activa triggers DML."
                },
                {
                  "id": "c",
                  "text": "INSERT, UPDATE o DELETE",
                  "explanation": "Los triggers DML se activan cuando ocurre una operación sobre los datos: INSERT, UPDATE o DELETE."
                },
                {
                  "id": "d",
                  "text": "SELECT",
                  "explanation": "No modifica datos, por lo que no dispara triggers."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que tipo de trigger se ejecuta una sola vez por sentencia dm",
              "question": "¿Qué tipo de trigger se ejecuta una sola vez por sentencia DML?",
              "options": [
                {
                  "id": "a",
                  "text": "Row-level",
                  "explanation": "Se ejecuta una vez por cada fila afectada."
                },
                {
                  "id": "b",
                  "text": "Column-level",
                  "explanation": "No es un tipo estándar de trigger."
                },
                {
                  "id": "c",
                  "text": "Global-level",
                  "explanation": "No existe como tipo de trigger."
                },
                {
                  "id": "d",
                  "text": "Statement-level",
                  "explanation": "Un trigger statement-level se ejecuta una sola vez por cada sentencia DML, independientemente del número de filas afectadas."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que diferencia principal existe entre un procedimiento y una",
              "question": "¿Qué diferencia principal existe entre un procedimiento y una función en PL/SQL?",
              "options": [
                {
                  "id": "a",
                  "text": "El procedimiento devuelve siempre un valor, la función no",
                  "explanation": "Es justo al revés."
                },
                {
                  "id": "b",
                  "text": "El procedimiento solo se usa en SELECT",
                  "explanation": "No es cierto, se ejecuta con CALL o bloques PL/SQL."
                },
                {
                  "id": "c",
                  "text": "La función no puede recibir parámetros",
                  "explanation": "Sí puede recibirlos."
                },
                {
                  "id": "d",
                  "text": "La función devuelve un valor, el procedimiento no necesariamente",
                  "explanation": "Una función en PL/SQL siempre devuelve un valor mediante RETURN, mientras que un procedimiento puede o no devolver valores (por ejemplo, mediante parámetros OUT)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que conjunto de propiedades define la integridad de una tran",
              "question": "¿Qué conjunto de propiedades define la integridad de una transacción?",
              "options": [
                {
                  "id": "a",
                  "text": "CRUD",
                  "explanation": "Son operaciones básicas (crear, leer, actualizar, eliminar), no propiedades de transacción."
                },
                {
                  "id": "b",
                  "text": "ACID",
                  "explanation": "Las propiedades ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad) garantizan que las transacciones se ejecuten de forma fiable y segura."
                },
                {
                  "id": "c",
                  "text": "DML",
                  "explanation": "Es un tipo de lenguaje SQL, no define integridad."
                },
                {
                  "id": "d",
                  "text": "SQLCODE",
                  "explanation": "Es un código de estado, no un conjunto de propiedades."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que comando se utiliza para confirmar de forma permanente un",
              "question": "¿Qué comando se utiliza para confirmar de forma permanente una transacción?",
              "options": [
                {
                  "id": "a",
                  "text": "ROLLBACK",
                  "explanation": "Deshace los cambios de la transacción."
                },
                {
                  "id": "b",
                  "text": "VALIDATE",
                  "explanation": "No es un comando estándar para transacciones."
                },
                {
                  "id": "c",
                  "text": "SAVEPOINT",
                  "explanation": "Marca un punto dentro de la transacción, pero no la confirma."
                },
                {
                  "id": "d",
                  "text": "COMMIT",
                  "explanation": "El comando COMMIT guarda definitivamente los cambios realizados en una transacción, haciéndolos permanentes en la base de datos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que estructura condicional permite manejar multiples alterna",
              "question": "¿Qué estructura condicional permite manejar múltiples alternativas de ejecución?",
              "options": [
                {
                  "id": "a",
                  "text": "LOOP",
                  "explanation": "Es una estructura repetitiva, no condicional."
                },
                {
                  "id": "b",
                  "text": "CASE",
                  "explanation": "La estructura CASE permite evaluar múltiples condiciones y ejecutar diferentes acciones según el caso, siendo ideal para varias alternativas."
                },
                {
                  "id": "c",
                  "text": "RETURN",
                  "explanation": "Sirve para devolver un valor, no para controlar flujo."
                },
                {
                  "id": "d",
                  "text": "IF-THEN",
                  "explanation": "Permite decisiones, pero no es tan eficiente para múltiples alternativas como CASE."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-en pl sql que tipo de bloque no se almacena en la base de da",
              "question": "En PL/SQL, ¿qué tipo de bloque no se almacena en la base de datos?",
              "options": [
                {
                  "id": "a",
                  "text": "Paquete",
                  "explanation": "Se almacena en la base de datos."
                },
                {
                  "id": "b",
                  "text": "Procedimiento",
                  "explanation": "También se guarda."
                },
                {
                  "id": "c",
                  "text": "Bloque anónimo",
                  "explanation": "Un bloque anónimo se ejecuta en el momento, pero no se guarda en la base de datos."
                },
                {
                  "id": "d",
                  "text": "Función",
                  "explanation": "Se almacena y puede reutilizarse."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-cual de los siguientes es un ejemplo de excepcion predefinid",
              "question": "¿Cuál de los siguientes es un ejemplo de excepción predefinida en PL/SQL?",
              "options": [
                {
                  "id": "a",
                  "text": "TOO_FEW_ROWS",
                  "explanation": "La excepción correcta es NO_DATA_FOUND."
                },
                {
                  "id": "b",
                  "text": "INVALID_TRIGGER",
                  "explanation": "No es una excepción estándar."
                },
                {
                  "id": "c",
                  "text": "ZERO_DIVIDE",
                  "explanation": "ZERO_DIVIDE es una excepción predefinida en PL/SQL que ocurre cuando se intenta dividir un número entre cero."
                },
                {
                  "id": "d",
                  "text": "TABLE_NOT_FOUND",
                  "explanation": "No es una excepción predefinida en PL/SQL."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que clausula define el momento de ejecucion de un trigger",
              "question": "¿Qué cláusula define el momento de ejecución de un trigger?",
              "options": [
                {
                  "id": "a",
                  "text": "BEFORE o AFTER",
                  "explanation": "Las cláusulas BEFORE y AFTER indican si el trigger se ejecuta antes o después de la operación (INSERT, UPDATE, DELETE)."
                },
                {
                  "id": "b",
                  "text": "WHILE",
                  "explanation": "Es una estructura de bucle."
                },
                {
                  "id": "c",
                  "text": "DURING",
                  "explanation": "No es una cláusula válida para triggers."
                },
                {
                  "id": "d",
                  "text": "CASE",
                  "explanation": "Es una estructura condicional."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-en un trigger de nivel fila row level que estructura permite",
              "question": "En un trigger de nivel fila (Row-level), ¿qué estructura permite referirse al valor antiguo?",
              "options": [
                {
                  "id": "a",
                  "text": ":OLD",
                  "explanation": "En triggers de nivel fila, :OLD permite acceder al valor anterior del registro antes de la modificación."
                },
                {
                  "id": "b",
                  "text": ":PREVIOUS",
                  "explanation": "No existe en PL/SQL."
                },
                {
                  "id": "c",
                  "text": ":LAST",
                  "explanation": "Tampoco es válido."
                },
                {
                  "id": "d",
                  "text": ":AFTER",
                  "explanation": "Es una cláusula de ejecución, no una referencia a valores."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que propiedad de las transacciones asegura que todas las ope",
              "question": "¿Qué propiedad de las transacciones asegura que todas las operaciones se completan o se deshacen juntas?",
              "options": [
                {
                  "id": "a",
                  "text": "Atomicidad",
                  "explanation": "La atomicidad garantiza que una transacción se ejecute completamente o no se ejecute en absoluto (todo o nada)."
                },
                {
                  "id": "b",
                  "text": "Durabilidad",
                  "explanation": "Asegura que los cambios se mantienen tras un fallo."
                },
                {
                  "id": "c",
                  "text": "Consistencia",
                  "explanation": "Garantiza que la BD pasa de un estado válido a otro."
                },
                {
                  "id": "d",
                  "text": "Aislamiento",
                  "explanation": "Controla la ejecución simultánea de transacciones."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que instruccion permite manejar errores personalizados en pl",
              "question": "¿Qué instrucción permite manejar errores personalizados en PL/SQL?",
              "options": [
                {
                  "id": "a",
                  "text": "RAISE",
                  "explanation": "La instrucción RAISE permite lanzar excepciones en PL/SQL, incluidas las definidas por el usuario."
                },
                {
                  "id": "b",
                  "text": "PRINT",
                  "explanation": "Sirve para mostrar información, no manejar errores."
                },
                {
                  "id": "c",
                  "text": "THROW",
                  "explanation": "No es una instrucción de PL/SQL (sí en otros lenguajes)."
                },
                {
                  "id": "d",
                  "text": "EXEC",
                  "explanation": "Ejecuta comandos, no gestiona errores."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que sentencia se usa para revertir los cambios realizados en",
              "question": "¿Qué sentencia se usa para revertir los cambios realizados en una transacción?",
              "options": [
                {
                  "id": "a",
                  "text": "UNDO LOG",
                  "explanation": "No es un comando SQL, es un mecanismo interno."
                },
                {
                  "id": "b",
                  "text": "RETURN",
                  "explanation": "Devuelve un valor en funciones, no gestiona transacciones."
                },
                {
                  "id": "c",
                  "text": "ABORT",
                  "explanation": "No es una instrucción estándar SQL para transacciones."
                },
                {
                  "id": "d",
                  "text": "ROLLBACK",
                  "explanation": "El comando ROLLBACK deshace todos los cambios realizados en una transacción que aún no ha sido confirmada."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-cual es el principal objetivo de la automatizacion en la adm",
              "question": "¿Cuál es el principal objetivo de la automatización en la administración de bases de datos?",
              "options": [
                {
                  "id": "a",
                  "text": "Aumentar la dependencia del hardware",
                  "explanation": "No es el objetivo."
                },
                {
                  "id": "b",
                  "text": "Sustituir al DBA en todas sus funciones",
                  "explanation": "La automatización ayuda, pero no sustituye completamente."
                },
                {
                  "id": "c",
                  "text": "Eliminar la interacción entre usuarios y base de datos",
                  "explanation": "No es real ni deseable."
                },
                {
                  "id": "d",
                  "text": "Reducir errores, mejorar la eficiencia y garantizar continuidad",
                  "explanation": "La automatización busca minimizar errores humanos, optimizar tareas repetitivas y asegurar que el sistema funcione de forma continua y eficiente."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que medida garantiza la consistencia de los datos automatiza",
              "question": "¿Qué medida garantiza la consistencia de los datos automatizados?",
              "options": [
                {
                  "id": "a",
                  "text": "Ejecutar sin manejo de excepciones",
                  "explanation": "Aumenta errores y fallos."
                },
                {
                  "id": "b",
                  "text": "Eliminar las claves foráneas",
                  "explanation": "Rompe la integridad referencial."
                },
                {
                  "id": "c",
                  "text": "Permitir duplicados para mayor flexibilidad",
                  "explanation": "Genera inconsistencias."
                },
                {
                  "id": "d",
                  "text": "Usar restricciones, validaciones y control ACID",
                  "explanation": "El uso de restricciones (constraints), validaciones y las propiedades ACID garantiza que los datos sean coherentes, íntegros y fiables."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que estructura se utiliza para ejecutar un bloque de codigo ",
              "question": "¿Qué estructura se utiliza para ejecutar un bloque de código repetidamente mientras se cumpla una condición?",
              "options": [
                {
                  "id": "a",
                  "text": "CASE",
                  "explanation": "Es una estructura condicional, no repetitiva."
                },
                {
                  "id": "b",
                  "text": "IF",
                  "explanation": "También es condicional, no bucle."
                },
                {
                  "id": "c",
                  "text": "EXIT",
                  "explanation": "Sirve para salir de un bucle, no para crearlo."
                },
                {
                  "id": "d",
                  "text": "WHILE LOOP",
                  "explanation": "El WHILE LOOP ejecuta un bloque de código mientras se cumpla una condición, repitiéndose hasta que deje de cumplirse."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que practica se recomienda al programar scripts complejos",
              "question": "¿Qué práctica se recomienda al programar scripts complejos?",
              "options": [
                {
                  "id": "a",
                  "text": "Ejecutar siempre en modo anónimo",
                  "explanation": "No es recomendable para código complejo."
                },
                {
                  "id": "b",
                  "text": "Evitar los comentarios",
                  "explanation": "Hace el código más difícil de entender."
                },
                {
                  "id": "c",
                  "text": "Modularizar código en funciones pequeñas y claras",
                  "explanation": "Dividir el código en funciones pequeñas y claras mejora la legibilidad, el mantenimiento y la reutilización."
                },
                {
                  "id": "d",
                  "text": "No documentar para ahorrar tiempo",
                  "explanation": "Es mala práctica."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que instruccion se utiliza para capturar errores en un bloqu",
              "question": "¿Qué instrucción se utiliza para capturar errores en un bloque PL/SQL?",
              "options": [
                {
                  "id": "a",
                  "text": "ON FAILURE",
                  "explanation": "No es una instrucción válida en PL/SQL."
                },
                {
                  "id": "b",
                  "text": "WHEN ERROR",
                  "explanation": "No existe como sintaxis estándar."
                },
                {
                  "id": "c",
                  "text": "HANDLE_ERROR",
                  "explanation": "No es una instrucción válida."
                },
                {
                  "id": "d",
                  "text": "EXCEPTION",
                  "explanation": "En PL/SQL, el bloque EXCEPTION se usa para capturar y manejar errores durante la ejecución del código."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que tipo de tareas son mas adecuadas para automatizar en un ",
              "question": "¿Qué tipo de tareas son más adecuadas para automatizar en un SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Las repetitivas y programables como backups o limpieza de registros",
                  "explanation": "Las tareas repetitivas y programables son ideales para automatizar, ya que reducen errores y ahorran tiempo."
                },
                {
                  "id": "b",
                  "text": "Las que modifican el diseño físico de la base de datos",
                  "explanation": "Requieren análisis y control manual."
                },
                {
                  "id": "c",
                  "text": "Las que requieren intervención humana constante",
                  "explanation": "No se pueden automatizar."
                },
                {
                  "id": "d",
                  "text": "Las que dependen de decisiones externas",
                  "explanation": "No son automatizables fácilmente."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut4-que palabras clave permiten acceder a los valores antes y de",
              "question": "¿Qué palabras clave permiten acceder a los valores antes y después del trigger?",
              "options": [
                {
                  "id": "a",
                  "text": "NEW y OLD",
                  "explanation": "En triggers, OLD permite acceder al valor anterior y NEW al valor nuevo tras la operación."
                },
                {
                  "id": "b",
                  "text": "PRE y POST",
                  "explanation": "No son palabras clave en SQL."
                },
                {
                  "id": "c",
                  "text": "THIS y THAT",
                  "explanation": "No existen en este contexto."
                },
                {
                  "id": "d",
                  "text": "IN y OUT",
                  "explanation": "Son modos de parámetros, no valores de trigger."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 BBDD AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut5",
          "title": "Unidad 5",
          "questions": [
            {
              "id": "sgbd-ut5-que desventaja presenta la creacion excesiva de indices",
              "question": "¿Qué desventaja presenta la creación excesiva de índices?",
              "options": [
                {
                  "id": "a",
                  "text": "Facilita la normalización",
                  "explanation": "No tiene relación con índices."
                },
                {
                  "id": "b",
                  "text": "Aumenta el espacio en disco y ralentiza las escrituras.",
                  "explanation": "Tener muchos índices consume más espacio y hace que las operaciones de escritura (INSERT, UPDATE, DELETE) sean más lentas, ya que hay que actualizar todos los índices."
                },
                {
                  "id": "c",
                  "text": "Incrementa el número de consultas concurrentes",
                  "explanation": "No depende de los índices directamente."
                },
                {
                  "id": "d",
                  "text": "Mejora la velocidad de lectura",
                  "explanation": "Es una ventaja, no una desventaja."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que herramienta externa permite definir alertas automaticas ",
              "question": "¿Qué herramienta externa permite definir alertas automáticas para recursos del sistema?",
              "options": [
                {
                  "id": "a",
                  "text": "Power BI",
                  "explanation": "Es una herramienta de análisis de datos, no de monitorización."
                },
                {
                  "id": "b",
                  "text": "Grafana Cloud únicamente",
                  "explanation": "Grafana visualiza métricas, pero no es exclusivamente una herramienta de alertas por sí sola."
                },
                {
                  "id": "c",
                  "text": "Netbeans",
                  "explanation": "Es un entorno de desarrollo, no de monitorización."
                },
                {
                  "id": "d",
                  "text": "Nagios",
                  "explanation": "Nagios es una herramienta de monitorización que permite configurar alertas automáticas sobre el estado de sistemas, servicios y recursos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que ajuste de sistema operativo mejora el rendimiento de red",
              "question": "¿Qué ajuste de sistema operativo mejora el rendimiento de red en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "Ejecutar consultas en paralelo",
                  "explanation": "Es del SGBD, no del SO."
                },
                {
                  "id": "b",
                  "text": "Incrementar net.core.rmem_max y net.core.wmem_max.",
                  "explanation": "Aumentar net.core.rmem_max y net.core.wmem_max mejora el rendimiento de red al permitir buffers más grandes para recepción y envío de datos."
                },
                {
                  "id": "c",
                  "text": "Desactivar los puertos activos",
                  "explanation": "Reduce conectividad."
                },
                {
                  "id": "d",
                  "text": "Reducir el tamaño del buffer TCP",
                  "explanation": "Empeora el rendimiento."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que parametro controla la memoria disponible por consulta en",
              "question": "¿Qué parámetro controla la memoria disponible por consulta en PostgreSQL?",
              "options": [
                {
                  "id": "a",
                  "text": "sql_mem_size",
                  "explanation": "No es un parámetro válido."
                },
                {
                  "id": "b",
                  "text": "query_size",
                  "explanation": "No existe como parámetro en PostgreSQL."
                },
                {
                  "id": "c",
                  "text": "cache_buffer",
                  "explanation": "El correcto es shared_buffers, no este."
                },
                {
                  "id": "d",
                  "text": "work_mem",
                  "explanation": "El parámetro work_mem define la cantidad de memoria que PostgreSQL puede usar por operación de consulta (ordenaciones, joins, etc.)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que herramienta de postgresql permite visualizar las consult",
              "question": "¿Qué herramienta de PostgreSQL permite visualizar las consultas activas en ejecución?",
              "options": [
                {
                  "id": "a",
                  "text": "EXPLAIN ANALYZE",
                  "explanation": "Analiza el plan de ejecución, no muestra sesiones activas."
                },
                {
                  "id": "b",
                  "text": "SHOW PROCESSLIST",
                  "explanation": "Es de MySQL, no de PostgreSQL."
                },
                {
                  "id": "c",
                  "text": "pg_stat_activity",
                  "explanation": "La vista pg_stat_activity muestra información en tiempo real sobre las conexiones y consultas activas en PostgreSQL."
                },
                {
                  "id": "d",
                  "text": "V$SESSION",
                  "explanation": "Es de Oracle, no de PostgreSQL."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que politica energetica se recomienda aplicar en un servidor",
              "question": "¿Qué política energética se recomienda aplicar en un servidor de bases de datos?",
              "options": [
                {
                  "id": "a",
                  "text": "Predeterminada del sistema operativo",
                  "explanation": "No está optimizada para servidores."
                },
                {
                  "id": "b",
                  "text": "Máximo rendimiento.",
                  "explanation": "En servidores de bases de datos se recomienda máximo rendimiento para evitar limitaciones de CPU y garantizar tiempos de respuesta rápidos."
                },
                {
                  "id": "c",
                  "text": "Equilibrada",
                  "explanation": "Puede limitar el rendimiento en momentos de carga."
                },
                {
                  "id": "d",
                  "text": "Ahorro de energía",
                  "explanation": "Reduce rendimiento, no es adecuada para servidores."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que herramienta en oracle permite obtener el plan de ejecuci",
              "question": "¿Qué herramienta en Oracle permite obtener el plan de ejecución de una consulta?",
              "options": [
                {
                  "id": "a",
                  "text": "RUN PROFILE",
                  "explanation": "No es un comando estándar."
                },
                {
                  "id": "b",
                  "text": "EXPLAIN PLAN.",
                  "explanation": "El comando EXPLAIN PLAN permite ver cómo Oracle ejecutará una consulta, mostrando el plan de ejecución."
                },
                {
                  "id": "c",
                  "text": "TRACE SQL",
                  "explanation": "No es la herramienta principal para planes de ejecución."
                },
                {
                  "id": "d",
                  "text": "ANALYZE PLAN",
                  "explanation": "No existe como comando válido."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que objetivo principal tiene la monitorizacion en un sgbd",
              "question": "¿Qué objetivo principal tiene la monitorización en un SGBD?",
              "options": [
                {
                  "id": "a",
                  "text": "Reducir el tamaño de la base de datos",
                  "explanation": "No es su objetivo principal."
                },
                {
                  "id": "b",
                  "text": "Detectar fallos y optimizar el rendimiento antes de que afecten al servicio.",
                  "explanation": "La monitorización permite anticiparse a problemas, detectar fallos y mejorar el rendimiento antes de que impacten a los usuarios."
                },
                {
                  "id": "c",
                  "text": "Sustituir hardware antiguo",
                  "explanation": "Es una decisión de infraestructura, no de monitorización."
                },
                {
                  "id": "d",
                  "text": "Cambiar el motor de base de datos",
                  "explanation": "No tiene relación directa."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-cual de los siguientes tipos de indice es el mas adecuado pa",
              "question": "¿Cuál de los siguientes tipos de índice es el más adecuado para búsquedas por igualdad?",
              "options": [
                {
                  "id": "a",
                  "text": "Hash.",
                  "explanation": "Los índices Hash son los más eficientes para búsquedas por igualdad (=), ya que acceden directamente al valor sin necesidad de recorrer estructuras."
                },
                {
                  "id": "b",
                  "text": "Spatial",
                  "explanation": "Se usa para datos geográficos."
                },
                {
                  "id": "c",
                  "text": "B-Tree",
                  "explanation": "Es versátil, pero no el más óptimo específicamente para igualdad pura."
                },
                {
                  "id": "d",
                  "text": "Bitmap",
                  "explanation": "Se usa en columnas con pocos valores distintos."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que motor de almacenamiento de mysql es mas adecuado para op",
              "question": "¿Qué motor de almacenamiento de MySQL es más adecuado para operaciones transaccionales?",
              "options": [
                {
                  "id": "a",
                  "text": "MyISAM",
                  "explanation": "No soporta transacciones."
                },
                {
                  "id": "b",
                  "text": "Archive",
                  "explanation": "Orientado a almacenamiento, no a transacciones."
                },
                {
                  "id": "c",
                  "text": "Memory",
                  "explanation": "Almacena en RAM y no está diseñado para persistencia transaccional."
                },
                {
                  "id": "d",
                  "text": "InnoDB.",
                  "explanation": "InnoDB soporta transacciones (ACID), bloqueo a nivel de fila y claves foráneas, siendo el motor recomendado para operaciones transaccionales."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que vista del sistema oracle proporciona informacion de rend",
              "question": "¿Qué vista del sistema Oracle proporciona información de rendimiento en tiempo real?",
              "options": [
                {
                  "id": "a",
                  "text": "performance_schema",
                  "explanation": "Es de MySQL."
                },
                {
                  "id": "b",
                  "text": "sys.dm_exec_requests",
                  "explanation": "Es de SQL Server."
                },
                {
                  "id": "c",
                  "text": "V$ views.",
                  "explanation": "Las V$ views (vistas dinámicas de rendimiento) en Oracle muestran información en tiempo real sobre el estado y rendimiento del sistema."
                },
                {
                  "id": "d",
                  "text": "pg_stat_user_tables",
                  "explanation": "Es de PostgreSQL."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que comando de postgresql permite analizar el coste de ejecu",
              "question": "¿Qué comando de PostgreSQL permite analizar el coste de ejecución real de una consulta?",
              "options": [
                {
                  "id": "a",
                  "text": "ANALYZE QUERY",
                  "explanation": "No es un comando válido."
                },
                {
                  "id": "b",
                  "text": "SHOW COST",
                  "explanation": "No existe como comando estándar."
                },
                {
                  "id": "c",
                  "text": "EXPLAIN ANALYZE.",
                  "explanation": "El comando EXPLAIN ANALYZE ejecuta la consulta y muestra el plan real de ejecución junto con tiempos y costes."
                },
                {
                  "id": "d",
                  "text": "TRACE PLAN",
                  "explanation": "No es un comando de PostgreSQL."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que herramienta ofrece paneles y alertas configurables para ",
              "question": "¿Qué herramienta ofrece paneles y alertas configurables para bases de datos y redes?",
              "options": [
                {
                  "id": "a",
                  "text": "Zabbix.",
                  "explanation": "Zabbix es una herramienta de monitorización que permite crear paneles (dashboards) y configurar alertas para sistemas, redes y bases de datos."
                },
                {
                  "id": "b",
                  "text": "Oracle Profiler",
                  "explanation": "Herramienta específica de Oracle, no de monitorización global con dashboards."
                },
                {
                  "id": "c",
                  "text": "Jenkins",
                  "explanation": "Es una herramienta de integración continua, no de monitorización."
                },
                {
                  "id": "d",
                  "text": "PostgreSQL Monitor",
                  "explanation": "No es una herramienta estándar conocida."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-cual de las siguientes sentencias crea un indice en la colum",
              "question": "¿Cuál de las siguientes sentencias crea un índice en la columna email de la tabla usuarios en MySQL?",
              "options": [
                {
                  "id": "a",
                  "text": "ADD INDEX...",
                  "explanation": "No es la sintaxis correcta fuera de ALTER TABLE."
                },
                {
                  "id": "b",
                  "text": "CREATE INDEX idx_email ON usuarios(email);",
                  "explanation": "La sintaxis correcta para crear un índice es CREATE INDEX nombre_indice ON tabla(columna)."
                },
                {
                  "id": "c",
                  "text": "INSERT INDEX...",
                  "explanation": "No existe como comando."
                },
                {
                  "id": "d",
                  "text": "CREATE TABLE...",
                  "explanation": "Se usa para crear tablas, no índices."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que clausula puede obligar a mysql a usar un indice en una c",
              "question": "¿Qué cláusula puede obligar a MySQL a usar un índice en una consulta?",
              "options": [
                {
                  "id": "a",
                  "text": "REQUIRE INDEX",
                  "explanation": "No es una cláusula válida."
                },
                {
                  "id": "b",
                  "text": "USE INDEX",
                  "explanation": "Sugiere un índice, pero no obliga."
                },
                {
                  "id": "c",
                  "text": "ENABLE INDEX",
                  "explanation": "No es una cláusula válida."
                },
                {
                  "id": "d",
                  "text": "FORCE INDEX.",
                  "explanation": "La cláusula FORCE INDEX obliga al optimizador de MySQL a usar un índice específico en la consulta."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que metrica se considera critica cuando supera el 80 de uso",
              "question": "¿Qué métrica se considera crítica cuando supera el 80 % de uso?",
              "options": [
                {
                  "id": "a",
                  "text": "CPU.",
                  "explanation": "Un uso de CPU por encima del 80 % suele considerarse crítico porque puede provocar cuellos de botella y afectar al rendimiento general del sistema."
                },
                {
                  "id": "b",
                  "text": "I/O",
                  "explanation": "Es importante, pero no tiene un umbral estándar tan claro como la CPU."
                },
                {
                  "id": "c",
                  "text": "Locks",
                  "explanation": "No se mide en porcentaje de uso como la CPU."
                },
                {
                  "id": "d",
                  "text": "Memoria compartida",
                  "explanation": "Es relevante, pero el 80 % no es una referencia típica universal."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que metrica indica el numero de operaciones de lectura y esc",
              "question": "¿Qué métrica indica el número de operaciones de lectura y escritura realizadas en disco?",
              "options": [
                {
                  "id": "a",
                  "text": "Memory usage",
                  "explanation": "Mide uso de memoria, no disco."
                },
                {
                  "id": "b",
                  "text": "I/O.",
                  "explanation": "La métrica I/O (Input/Output) mide las operaciones de lectura y escritura en disco, clave para evaluar el rendimiento de almacenamiento."
                },
                {
                  "id": "c",
                  "text": "CPU",
                  "explanation": "Mide procesamiento, no acceso a disco."
                },
                {
                  "id": "d",
                  "text": "Locks",
                  "explanation": "Relacionado con concurrencia, no con I/O."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que tecnica se utiliza para agrupar los datos en funcion de ",
              "question": "¿Qué técnica se utiliza para agrupar los datos en función de un rango de fechas?",
              "options": [
                {
                  "id": "a",
                  "text": "Clustering",
                  "explanation": "Organiza datos físicamente, pero no por rangos."
                },
                {
                  "id": "b",
                  "text": "Particionado.",
                  "explanation": "El particionado permite dividir una tabla en partes (particiones) según criterios como rangos de fechas, mejorando rendimiento y gestión."
                },
                {
                  "id": "c",
                  "text": "Normalización",
                  "explanation": "Organiza estructura lógica, no datos por fechas."
                },
                {
                  "id": "d",
                  "text": "Fragmentación",
                  "explanation": "Es un concepto más general, no específico como el particionado."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-cual es el proposito de la reescritura de consultas",
              "question": "¿Cuál es el propósito de la reescritura de consultas?",
              "options": [
                {
                  "id": "a",
                  "text": "Reducir el tiempo de ejecución sin cambiar el resultado.",
                  "explanation": "La reescritura de consultas busca optimizar el rendimiento manteniendo el mismo resultado lógico."
                },
                {
                  "id": "b",
                  "text": "Modificar la estructura de la tabla",
                  "explanation": "Eso es DDL, no reescritura."
                },
                {
                  "id": "c",
                  "text": "Cambiar el motor de almacenamiento",
                  "explanation": "No tiene relación directa."
                },
                {
                  "id": "d",
                  "text": "Eliminar restricciones de integridad",
                  "explanation": "Sería una mala práctica."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut5-que comando en mysql permite visualizar las metricas de uso ",
              "question": "¿Qué comando en MySQL permite visualizar las métricas de uso general del servidor?",
              "options": [
                {
                  "id": "a",
                  "text": "LIST QUERIES",
                  "explanation": "No es un comando válido."
                },
                {
                  "id": "b",
                  "text": "SHOW STATUS.",
                  "explanation": "El comando SHOW STATUS muestra métricas y estadísticas del servidor MySQL, como uso de conexiones, consultas y rendimiento general."
                },
                {
                  "id": "c",
                  "text": "DESCRIBE SERVER",
                  "explanation": "No existe como comando estándar."
                },
                {
                  "id": "d",
                  "text": "SHOW INDEXES",
                  "explanation": "Muestra índices, no métricas generales."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 BBDD AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut6",
          "title": "Unidad 6",
          "questions": [
            {
              "id": "sgbd-ut6-un nodo esclavo tiene como funcion",
              "question": "Un nodo esclavo tiene como función:",
              "options": [
                {
                  "id": "a",
                  "text": "Eliminar transacciones duplicadas",
                  "explanation": "No es su función principal."
                },
                {
                  "id": "b",
                  "text": "Coordinar las escrituras",
                  "explanation": "Eso lo hace el nodo maestro."
                },
                {
                  "id": "c",
                  "text": "Recibir y aplicar las actualizaciones del maestro.",
                  "explanation": "En un sistema de replicación, el nodo esclavo (replica) recibe los cambios del nodo maestro y los aplica para mantener una copia actualizada."
                },
                {
                  "id": "d",
                  "text": "Mantener la base de datos inactiva",
                  "explanation": "Totalmente incorrecto."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-las bases de datos distribuidas se caracterizan por",
              "question": "Las bases de datos distribuidas se caracterizan por:",
              "options": [
                {
                  "id": "a",
                  "text": "Almacenar en un único servidor",
                  "explanation": "Eso es centralizado, no distribuido."
                },
                {
                  "id": "b",
                  "text": "Impedir sincronización",
                  "explanation": "Justo lo contrario, necesitan sincronizarse."
                },
                {
                  "id": "c",
                  "text": "No admitir consultas simultáneas",
                  "explanation": "Sí las permiten."
                },
                {
                  "id": "d",
                  "text": "Distribuir los datos en varios nodos coordinados.",
                  "explanation": "Una base de datos distribuida reparte los datos en varios nodos conectados y coordinados, mejorando disponibilidad y escalabilidad."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-la fragmentacion horizontal divide",
              "question": "La fragmentación horizontal divide:",
              "options": [
                {
                  "id": "a",
                  "text": "Las consultas entre usuarios",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "b",
                  "text": "Las filas o registros de una tabla.",
                  "explanation": "La fragmentación horizontal divide una tabla por filas (registros), por ejemplo por rangos de datos o localización."
                },
                {
                  "id": "c",
                  "text": "Las tablas entre diferentes bases",
                  "explanation": "No es fragmentación horizontal."
                },
                {
                  "id": "d",
                  "text": "Las columnas de una tabla",
                  "explanation": "Eso es fragmentación vertical."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-el protocolo three phase commit 3pc",
              "question": "El protocolo Three-Phase Commit (3PC):",
              "options": [
                {
                  "id": "a",
                  "text": "Se usa solo en sistemas centralizados",
                  "explanation": "Es para sistemas distribuidos."
                },
                {
                  "id": "b",
                  "text": "Es más simple que el 2PC",
                  "explanation": "Es más complejo."
                },
                {
                  "id": "c",
                  "text": "No asegura tolerancia a fallos",
                  "explanation": "Precisamente mejora este aspecto."
                },
                {
                  "id": "d",
                  "text": "Añade una fase adicional para evitar bloqueos.",
                  "explanation": "El PC introduce una fase extra respecto a PC para reducir bloqueos y mejorar la tolerancia a fallos en sistemas distribuidos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-la principal ventaja de una base de datos distribuida es",
              "question": "La principal ventaja de una base de datos distribuida es:",
              "options": [
                {
                  "id": "a",
                  "text": "Reducción del espacio",
                  "explanation": "No es su objetivo principal."
                },
                {
                  "id": "b",
                  "text": "Aislamiento completo",
                  "explanation": "Los datos están distribuidos y coordinados."
                },
                {
                  "id": "c",
                  "text": "Simplicidad en configuración",
                  "explanation": "Son más complejas, no más simples."
                },
                {
                  "id": "d",
                  "text": "La mejora de disponibilidad y rendimiento.",
                  "explanation": "Las bases de datos distribuidas mejoran la disponibilidad (si falla un nodo, otros siguen funcionando) y el rendimiento al repartir la carga."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-en la arquitectura maestro esclavo de mysql",
              "question": "En la arquitectura maestro-esclavo de MySQL:",
              "options": [
                {
                  "id": "a",
                  "text": "Los esclavos gestionan los commits",
                  "explanation": "Los commits se hacen en el maestro."
                },
                {
                  "id": "b",
                  "text": "No se permite replicación automática",
                  "explanation": "Sí se permite."
                },
                {
                  "id": "c",
                  "text": "El maestro escribe y los esclavos replican las lecturas.",
                  "explanation": "En esta arquitectura, el maestro gestiona las escrituras y los esclavos replican los datos, normalmente para servir lecturas."
                },
                {
                  "id": "d",
                  "text": "Ambos escriben simultáneamente",
                  "explanation": "Eso sería multi-maestro."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-la replicacion en cadena consiste en",
              "question": "La replicación en cadena consiste en:",
              "options": [
                {
                  "id": "a",
                  "text": "Replicar de manera aleatoria",
                  "explanation": "No tiene sentido en replicación."
                },
                {
                  "id": "b",
                  "text": "Encadenar los nodos para que cada uno replique al siguiente.",
                  "explanation": "En la replicación en cadena, un nodo replica al siguiente, formando una cadena de replicación."
                },
                {
                  "id": "c",
                  "text": "Todos al maestro",
                  "explanation": "Eso es replicación clásica, no en cadena."
                },
                {
                  "id": "d",
                  "text": "Sin logs",
                  "explanation": "La replicación necesita logs."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-los logs de replicacion",
              "question": "Los logs de replicación:",
              "options": [
                {
                  "id": "a",
                  "text": "Registran los cambios para aplicarlos en nodos secundarios.",
                  "explanation": "Los logs de replicación almacenan los cambios realizados en el nodo maestro para que los nodos secundarios los apliquen y se mantengan sincronizados."
                },
                {
                  "id": "b",
                  "text": "No intervienen",
                  "explanation": "Son esenciales para la replicación."
                },
                {
                  "id": "c",
                  "text": "Se eliminan tras cada sincronización",
                  "explanation": "No necesariamente, se gestionan según configuración."
                },
                {
                  "id": "d",
                  "text": "Solo almacenan errores",
                  "explanation": "Eso corresponde a logs de error, no de replicación."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-en una base de datos distribuida homogenea",
              "question": "En una base de datos distribuida homogénea:",
              "options": [
                {
                  "id": "a",
                  "text": "Solo un nodo contiene la base completa",
                  "explanation": "No define homogeneidad."
                },
                {
                  "id": "b",
                  "text": "Cada nodo usa un SGBD diferente",
                  "explanation": "Eso es una base distribuida heterogénea."
                },
                {
                  "id": "c",
                  "text": "Todos los nodos usan el mismo SGBD.",
                  "explanation": "En una base de datos distribuida homogénea, todos los nodos utilizan el mismo sistema gestor de bases de datos, lo que facilita la comunicación y gestión."
                },
                {
                  "id": "d",
                  "text": "Se impide la replicación",
                  "explanation": "No tiene relación con el concepto."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-la sincronizacion sincrona",
              "question": "La sincronización síncrona:",
              "options": [
                {
                  "id": "a",
                  "text": "No garantiza coherencia",
                  "explanation": "Justo al contrario, la asegura."
                },
                {
                  "id": "b",
                  "text": "Confirma la transacción tras recibir confirmación de los esclavos.",
                  "explanation": "En sincronización síncrona, el maestro espera la confirmación de los nodos secundarios antes de confirmar la transacción, garantizando consistencia."
                },
                {
                  "id": "c",
                  "text": "Mejora rendimiento sacrificando consistencia",
                  "explanation": "Eso es asincrónica."
                },
                {
                  "id": "d",
                  "text": "Replica datos obsoletos",
                  "explanation": "Incorrecto."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-el balanceo de carga tiene como finalidad",
              "question": "El balanceo de carga tiene como finalidad:",
              "options": [
                {
                  "id": "a",
                  "text": "Repartir las peticiones entre varios servidores.",
                  "explanation": "El balanceo de carga distribuye las peticiones entre varios servidores para mejorar rendimiento y disponibilidad."
                },
                {
                  "id": "b",
                  "text": "Deshabilitar la replicación",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "c",
                  "text": "Reducir el tráfico en la red",
                  "explanation": "Puede influir, pero no es su objetivo principal."
                },
                {
                  "id": "d",
                  "text": "Centralizar en un nodo",
                  "explanation": "Es lo contrario del balanceo."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-los backups en caliente",
              "question": "Los backups en caliente:",
              "options": [
                {
                  "id": "a",
                  "text": "Solo desde el nodo maestro",
                  "explanation": "No necesariamente."
                },
                {
                  "id": "b",
                  "text": "No incluyen logs",
                  "explanation": "Pueden incluirlos para consistencia."
                },
                {
                  "id": "c",
                  "text": "Se realizan mientras la base de datos está en funcionamiento.",
                  "explanation": "Los backups en caliente permiten hacer copias de seguridad sin detener el servicio, manteniendo la base de datos operativa."
                },
                {
                  "id": "d",
                  "text": "Requieren detener el sistema",
                  "explanation": "Eso sería un backup en frío."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-la fragmentacion vertical se aplica cuando",
              "question": "La fragmentación vertical se aplica cuando:",
              "options": [
                {
                  "id": "a",
                  "text": "Copiar tablas completas",
                  "explanation": "Eso es replicación, no fragmentación."
                },
                {
                  "id": "b",
                  "text": "Dividir por índices",
                  "explanation": "No es el concepto."
                },
                {
                  "id": "c",
                  "text": "Se desean separar columnas en diferentes fragmentos.",
                  "explanation": "La fragmentación vertical divide una tabla por columnas, separando atributos en distintos fragmentos."
                },
                {
                  "id": "d",
                  "text": "Distribuir filas según región",
                  "explanation": "Eso es fragmentación horizontal."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-el failover automatico permite",
              "question": "El failover automático permite:",
              "options": [
                {
                  "id": "a",
                  "text": "Borrar las réplicas",
                  "explanation": "Haría perder disponibilidad."
                },
                {
                  "id": "b",
                  "text": "Conmutar al nodo secundario en caso de fallo del maestro.",
                  "explanation": "El failover automático permite que, si falla el nodo principal, el sistema cambie automáticamente a un nodo secundario para mantener el servicio."
                },
                {
                  "id": "c",
                  "text": "Sincronizar manualmente los logs",
                  "explanation": "No es automático ni el objetivo."
                },
                {
                  "id": "d",
                  "text": "Detener el servicio",
                  "explanation": "Justo lo contrario, busca mantenerlo activo."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-el objetivo principal de la replicacion es",
              "question": "El objetivo principal de la replicación es:",
              "options": [
                {
                  "id": "a",
                  "text": "Aumentar la redundancia y disponibilidad.",
                  "explanation": "La replicación permite tener copias de los datos en varios nodos, mejorando la disponibilidad y la tolerancia a fallos."
                },
                {
                  "id": "b",
                  "text": "Eliminar los backups",
                  "explanation": "No sustituye a las copias de seguridad."
                },
                {
                  "id": "c",
                  "text": "Reducir servidores",
                  "explanation": "Normalmente requiere más, no menos."
                },
                {
                  "id": "d",
                  "text": "Evitar sincronización",
                  "explanation": "Justo lo contrario, necesita sincronización."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-un nodo maestro es responsable de",
              "question": "Un nodo maestro es responsable de:",
              "options": [
                {
                  "id": "a",
                  "text": "Controlar acceso de usuarios",
                  "explanation": "Es una función de seguridad, no específica del maestro."
                },
                {
                  "id": "b",
                  "text": "Coordinar escrituras y replicar los cambios a los esclavos.",
                  "explanation": "El nodo maestro gestiona las operaciones de escritura y envía los cambios a los nodos esclavos para mantenerlos sincronizados."
                },
                {
                  "id": "c",
                  "text": "Copias de seguridad manuales",
                  "explanation": "No es su función principal."
                },
                {
                  "id": "d",
                  "text": "Solo lectura",
                  "explanation": "Eso corresponde a los esclavos."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-el protocolo two phase commit 2pc",
              "question": "El protocolo Two-Phase Commit (2PC):",
              "options": [
                {
                  "id": "a",
                  "text": "Elimina logs",
                  "explanation": "No, los necesita."
                },
                {
                  "id": "b",
                  "text": "No requiere comunicación",
                  "explanation": "Requiere coordinación entre nodos."
                },
                {
                  "id": "c",
                  "text": "Garantiza la coherencia en transacciones distribuidas.",
                  "explanation": "El PC asegura que todos los nodos confirmen o cancelen una transacción de forma coordinada, garantizando coherencia."
                },
                {
                  "id": "d",
                  "text": "Solo backups",
                  "explanation": "No tiene relación."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-la sincronizacion asincrona",
              "question": "La sincronización asíncrona:",
              "options": [
                {
                  "id": "a",
                  "text": "Es más lenta",
                  "explanation": "Suele ser más rápida."
                },
                {
                  "id": "b",
                  "text": "Confirma las transacciones sin esperar a los esclavos.",
                  "explanation": "En sincronización asíncrona, el maestro confirma la transacción sin esperar a que los nodos secundarios la reciban, mejorando rendimiento."
                },
                {
                  "id": "c",
                  "text": "Requiere confirmación total",
                  "explanation": "Eso es síncrona."
                },
                {
                  "id": "d",
                  "text": "Bloquea el sistema",
                  "explanation": "No es su comportamiento."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-la verificacion de logs y metricas en sistemas distribuidos ",
              "question": "La verificación de logs y métricas en sistemas distribuidos permite:",
              "options": [
                {
                  "id": "a",
                  "text": "Eliminar transacciones viejas",
                  "explanation": "No es el objetivo de la verificación."
                },
                {
                  "id": "b",
                  "text": "Reiniciar replicación automáticamente",
                  "explanation": "No es su función principal."
                },
                {
                  "id": "c",
                  "text": "Confirmar la correcta sincronización y rendimiento del sistema.",
                  "explanation": "La monitorización mediante logs y métricas permite comprobar que los nodos están sincronizados correctamente y que el sistema mantiene un buen rendimiento."
                },
                {
                  "id": "d",
                  "text": "Apagar nodos",
                  "explanation": "No forma parte de la verificación."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            },
            {
              "id": "sgbd-ut6-el mecanismo de heartbeat sirve para",
              "question": "El mecanismo de heartbeat sirve para:",
              "options": [
                {
                  "id": "a",
                  "text": "Controlar permisos de usuarios",
                  "explanation": "Es gestión de seguridad, no de nodos."
                },
                {
                  "id": "b",
                  "text": "Realizar backups automáticos",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "c",
                  "text": "Verificar logs de consultas",
                  "explanation": "Es monitorización, pero no heartbeat."
                },
                {
                  "id": "d",
                  "text": "Detectar la caída de nodos mediante señales periódicas.",
                  "explanation": "El heartbeat es un mecanismo que envía señales periódicas entre nodos para comprobar que siguen activos y detectar fallos o caídas."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 BBDD AUTOEVALUACION.docx"
            }
          ]
        }
      ]
    },
    {
      "id": "sri",
      "name": "SRI",
      "finalExamSize": 30,
      "units": [
        {
          "id": "ut1",
          "title": "Unidad 1",
          "questions": [
            {
              "id": "sri-ut1-que parametro disminuye considerablemente en una segunda con",
              "question": "¿Qué parámetro disminuye considerablemente en una segunda consulta gracias a la caché DNS?",
              "options": [
                {
                  "id": "a",
                  "text": "La prioridad MX",
                  "explanation": "La prioridad MX es un valor fijo del registro; no cambia por usar caché."
                },
                {
                  "id": "b",
                  "text": "El tiempo de respuesta",
                  "explanation": "La caché DNS guarda la respuesta de una consulta anterior, por lo que en la segunda consulta no necesita preguntar a servidores externos y el tiempo de respuesta se reduce considerablemente."
                },
                {
                  "id": "c",
                  "text": "El tamaño del paquete",
                  "explanation": "La respuesta tiene un tamaño similar; la caché no lo modifica."
                },
                {
                  "id": "d",
                  "text": "El TTL",
                  "explanation": "El TTL va contando hacia abajo con el tiempo, pero no disminuye por ser una segunda consulta."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que zona permite obtener un nombre a partir de una ip conoci",
              "question": "¿Qué zona permite obtener un nombre a partir de una IP conocida?",
              "options": [
                {
                  "id": "a",
                  "text": "Zona directa",
                  "explanation": "La zona directa hace la resolución nombre→IP, no al revés."
                },
                {
                  "id": "b",
                  "text": "Zona inversa",
                  "explanation": "La zona inversa contiene registros PTR que permiten obtener un nombre a partir de una IP conocida (resolución inversa: IP→nombre)."
                },
                {
                  "id": "c",
                  "text": "Zona primaria",
                  "explanation": "Zona primaria indica que es editable y autoritativa, no el tipo de resolución."
                },
                {
                  "id": "d",
                  "text": "Zona aliased",
                  "explanation": "No es un tipo de zona DNS; podría confundirse con los registros CNAME (alias)."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que tecnica distribuye carga utilizando varias ip para un mi",
              "question": "¿Qué técnica distribuye carga utilizando varias IP para un mismo nombre?",
              "options": [
                {
                  "id": "a",
                  "text": "NAT",
                  "explanation": "NAT traduce direcciones privadas a públicas; no reparte carga entre servidores."
                },
                {
                  "id": "b",
                  "text": "Iteración",
                  "explanation": "La iteración es un tipo de consulta DNS, no una técnica de balanceo."
                },
                {
                  "id": "c",
                  "text": "Round Robin",
                  "explanation": "Round Robin DNS asigna varias IPs al mismo nombre de dominio y alterna entre ellas en cada respuesta, distribuyendo las peticiones entre varios servidores."
                },
                {
                  "id": "d",
                  "text": "Reenviadores",
                  "explanation": "Los reenviadores delegan consultas externas a otro servidor DNS; no reparten carga de aplicación."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-cual de los siguientes no es un tld generico gtld",
              "question": "¿Cuál de los siguientes NO es un TLD genérico (gTLD)?",
              "options": [
                {
                  "id": "a",
                  "text": ".edu",
                  "explanation": ".edu es un gTLD genérico para instituciones educativas."
                },
                {
                  "id": "b",
                  "text": ".com",
                  "explanation": ".com es un gTLD genérico de uso comercial."
                },
                {
                  "id": "c",
                  "text": ".org",
                  "explanation": ".org es un gTLD genérico para organizaciones."
                },
                {
                  "id": "d",
                  "text": ".fr",
                  "explanation": ".fr es un ccTLD (Country Code TLD) correspondiente a Francia, no un dominio genérico."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-cual es la funcion principal del sistema dns",
              "question": "¿Cuál es la función principal del sistema DNS?",
              "options": [
                {
                  "id": "a",
                  "text": "Traducir direcciones MAC a direcciones IP",
                  "explanation": "Traducir direcciones MAC a IP lo hace el protocolo ARP, no DNS."
                },
                {
                  "id": "b",
                  "text": "Traducir nombres de dominio a direcciones IP y viceversa",
                  "explanation": "DNS convierte nombres de dominio legibles (como google.com) en direcciones IP que usan las redes, y también puede hacer la resolución inversa (IP→nombre)."
                },
                {
                  "id": "c",
                  "text": "Almacenar configuraciones de red",
                  "explanation": "Almacenar configuraciones de red lo hace DHCP u otros servicios."
                },
                {
                  "id": "d",
                  "text": "Gestionar direcciones públicas",
                  "explanation": "La gestión del espacio de IPs públicas corresponde a ICANN y los registros regionales, no al servidor DNS."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-como se denomina el nombre de dominio completo que incluye t",
              "question": "¿Cómo se denomina el nombre de dominio completo que incluye todos los niveles hasta la raíz?",
              "options": [
                {
                  "id": "a",
                  "text": "TLD",
                  "explanation": "TLD es solo el dominio de nivel superior (.com, .es...); no incluye todos los niveles."
                },
                {
                  "id": "b",
                  "text": "FQDN",
                  "explanation": "FQDN (Fully Qualified Domain Name) es el nombre completo que incluye host, subdominio, dominio, TLD y termina con un punto que representa la raíz DNS."
                },
                {
                  "id": "c",
                  "text": "Alias",
                  "explanation": "Un alias es un CNAME, no un nombre completamente cualificado."
                },
                {
                  "id": "d",
                  "text": "ccTLD",
                  "explanation": "ccTLD es el dominio de código de país (.es, .fr...), solo el nivel superior."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que protocolo y puerto utiliza normalmente dns",
              "question": "¿Qué protocolo y puerto utiliza normalmente DNS?",
              "options": [
                {
                  "id": "a",
                  "text": "UDP 25",
                  "explanation": "El puerto 25 corresponde a SMTP (correo electrónico)."
                },
                {
                  "id": "b",
                  "text": "UDP 53",
                  "explanation": "DNS usa normalmente UDP por el puerto 53, ya que es más rápido y las consultas suelen ser pequeñas. TCP también se usa, por ejemplo en transferencias de zona."
                },
                {
                  "id": "c",
                  "text": "TCP 80",
                  "explanation": "El puerto 80 corresponde a HTTP (web)."
                },
                {
                  "id": "d",
                  "text": "TCP 110",
                  "explanation": "El puerto 110 corresponde a POP3 (descarga de correo)."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que comando en linux permite vaciar la cache dns local",
              "question": "¿Qué comando en Linux permite vaciar la caché DNS local?",
              "options": [
                {
                  "id": "a",
                  "text": "flushdns",
                  "explanation": "flushdns es estilo Windows (ipconfig /flushdns); no existe como comando en Linux."
                },
                {
                  "id": "b",
                  "text": "systemd-resolve --flush-caches",
                  "explanation": "En sistemas con systemd-resolved, este comando vacía la caché DNS local. En versiones más recientes se usa resolvectl flush-caches."
                },
                {
                  "id": "c",
                  "text": "dnsreset",
                  "explanation": "dnsreset no existe como comando estándar en Linux."
                },
                {
                  "id": "d",
                  "text": "clearcache",
                  "explanation": "clearcache no es un comando real para DNS en Linux."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que tipo de servidor dns almacena la informacion oficial de ",
              "question": "¿Qué tipo de servidor DNS almacena la información oficial de una zona?",
              "options": [
                {
                  "id": "a",
                  "text": "Servidor autoritativo",
                  "explanation": "El servidor autoritativo contiene los registros reales de una zona (A, MX, PTR...) y responde con autoridad. Puede ser primario (editable) o secundario (copia)."
                },
                {
                  "id": "b",
                  "text": "Servidor de caché",
                  "explanation": "El servidor de caché solo almacena temporalmente respuestas de otros servidores."
                },
                {
                  "id": "c",
                  "text": "Servidor proxy",
                  "explanation": "El servidor proxy no es un término habitual en el contexto de DNS."
                },
                {
                  "id": "d",
                  "text": "Servidor recursivo",
                  "explanation": "El servidor recursivo consulta a otros servidores y guarda el resultado en caché, pero no tiene la información oficial de la zona."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que registro dns asocia un nombre con una direccion ipv4",
              "question": "¿Qué registro DNS asocia un nombre con una dirección IPv4?",
              "options": [
                {
                  "id": "a",
                  "text": "MX",
                  "explanation": "El registro MX indica el servidor de correo del dominio, no asocia nombre a IPv4."
                },
                {
                  "id": "b",
                  "text": "PTR",
                  "explanation": "PTR es para resolución inversa (IP→nombre)."
                },
                {
                  "id": "c",
                  "text": "NS",
                  "explanation": "NS indica qué servidor gestiona la zona, no mapea nombre a IP."
                },
                {
                  "id": "d",
                  "text": "A",
                  "explanation": "El registro A (Address) asocia un nombre de host con su dirección IPv4. Para IPv6 se usa AAAA."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que papel desempenan los reenviadores en un servidor dns",
              "question": "¿Qué papel desempeñan los reenviadores en un servidor DNS?",
              "options": [
                {
                  "id": "a",
                  "text": "Consultar servidores externos cuando el servidor local no sabe la respuesta",
                  "explanation": "Los reenviadores (forwarders) son servidores DNS a los que se delegan las consultas externas que el servidor local no puede resolver, mejorando el rendimiento al aprovechar cachés más grandes."
                },
                {
                  "id": "b",
                  "text": "Reemplazar la caché local",
                  "explanation": "Los reenviadores no reemplazan la caché; la complementan al resolver consultas externas."
                },
                {
                  "id": "c",
                  "text": "Crear zonas automáticamente",
                  "explanation": "Los reenviadores no tienen relación con la creación de zonas DNS."
                },
                {
                  "id": "d",
                  "text": "Resolver consultas internas",
                  "explanation": "Las consultas internas las resuelve el propio servidor si es autoritativo para esa zona."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que herramienta permite realizar consultas y diagnosticos dn",
              "question": "¿Qué herramienta permite realizar consultas y diagnósticos DNS desde Windows?",
              "options": [
                {
                  "id": "a",
                  "text": "ping",
                  "explanation": "ping puede comprobar si un nombre resuelve, pero no es una herramienta específica de diagnóstico DNS."
                },
                {
                  "id": "b",
                  "text": "dig",
                  "explanation": "dig es la herramienta estándar en Linux para consultas DNS; no viene por defecto en Windows."
                },
                {
                  "id": "c",
                  "text": "nslookup",
                  "explanation": "nslookup es la herramienta clásica de Windows para consultar registros DNS (A, MX, PTR) y diagnosticar problemas de resolución."
                },
                {
                  "id": "d",
                  "text": "traceroute",
                  "explanation": "traceroute muestra la ruta de red hasta un destino; no es específica para consultas DNS."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que registro identifica el servidor principal de una zona dn",
              "question": "¿Qué registro identifica el servidor principal de una zona DNS?",
              "options": [
                {
                  "id": "a",
                  "text": "MX",
                  "explanation": "MX indica el servidor de correo del dominio, no el servidor principal de la zona."
                },
                {
                  "id": "b",
                  "text": "SOA",
                  "explanation": "El registro SOA (Start of Authority) identifica el servidor maestro de una zona y contiene parámetros de control como número de serie y tiempos de actualización."
                },
                {
                  "id": "c",
                  "text": "CNAME",
                  "explanation": "CNAME es un alias que apunta a otro nombre, no define el servidor principal de la zona."
                },
                {
                  "id": "d",
                  "text": "A",
                  "explanation": "El registro A asocia un nombre a una IPv4; no indica quién gestiona la zona."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que registro permite realizar una resolucion inversa",
              "question": "¿Qué registro permite realizar una resolución inversa?",
              "options": [
                {
                  "id": "a",
                  "text": "SOA",
                  "explanation": "SOA define el servidor principal de la zona, no realiza resolución inversa."
                },
                {
                  "id": "b",
                  "text": "PTR",
                  "explanation": "El registro PTR asocia una dirección IP con un nombre de host, permitiendo la resolución inversa (IP→nombre)."
                },
                {
                  "id": "c",
                  "text": "CNAME",
                  "explanation": "CNAME crea un alias entre dos nombres, no resuelve IPs."
                },
                {
                  "id": "d",
                  "text": "MX",
                  "explanation": "MX define el servidor de correo de un dominio."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-antes de existir dns que archivo contenia todas las asociaci",
              "question": "Antes de existir DNS, ¿qué archivo contenía todas las asociaciones nombre–IP?",
              "options": [
                {
                  "id": "a",
                  "text": "dnszone.conf",
                  "explanation": "dnszone.conf no existía como archivo histórico oficial."
                },
                {
                  "id": "b",
                  "text": "netconfig.txt",
                  "explanation": "netconfig.txt no es el archivo histórico correcto."
                },
                {
                  "id": "c",
                  "text": "hosts.txt",
                  "explanation": "Antes de 1983, un único archivo llamado hosts.txt contenía todas las relaciones nombre-IP; cuando Internet creció, su mantenimiento manual se volvió insostenible y nació DNS."
                },
                {
                  "id": "d",
                  "text": "resolve.cfg",
                  "explanation": "resolve.cfg no es el archivo histórico oficial."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que registro define los servidores de correo de un dominio",
              "question": "¿Qué registro define los servidores de correo de un dominio?",
              "options": [
                {
                  "id": "a",
                  "text": "MX",
                  "explanation": "El registro MX (Mail eXchanger) indica qué servidor gestiona el correo de un dominio; puede haber varios con diferentes prioridades."
                },
                {
                  "id": "b",
                  "text": "PTR",
                  "explanation": "PTR es para resolución inversa (IP→nombre)."
                },
                {
                  "id": "c",
                  "text": "A",
                  "explanation": "El registro A asocia un nombre a una dirección IPv4."
                },
                {
                  "id": "d",
                  "text": "CNAME",
                  "explanation": "CNAME es un alias que apunta a otro nombre de host."
                }
              ],
              "correctOptionId": "a",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que componente se consulta primero antes de usar un servidor",
              "question": "¿Qué componente se consulta primero antes de usar un servidor DNS?",
              "options": [
                {
                  "id": "a",
                  "text": "Root servers",
                  "explanation": "Los root servers solo se consultan si el servidor DNS local necesita escalar la consulta hacia arriba en la jerarquía."
                },
                {
                  "id": "b",
                  "text": "Archivo hosts",
                  "explanation": "El orden de resolución es: primero el archivo hosts local, luego la caché DNS y después el servidor DNS configurado."
                },
                {
                  "id": "c",
                  "text": "Servidores secundarios",
                  "explanation": "Los servidores secundarios solo se consultan si el primario no está disponible."
                },
                {
                  "id": "d",
                  "text": "Reenviadores",
                  "explanation": "Los reenviadores se usan cuando el servidor local no puede resolver la consulta por sí mismo."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que herramienta de linux valida los archivos de zona dns",
              "question": "¿Qué herramienta de Linux valida los archivos de zona DNS?",
              "options": [
                {
                  "id": "a",
                  "text": "dnscheck",
                  "explanation": "dnscheck no es el comando estándar de BIND para validar zonas."
                },
                {
                  "id": "b",
                  "text": "validate-zone",
                  "explanation": "validate-zone no existe como comando en herramientas DNS típicas."
                },
                {
                  "id": "c",
                  "text": "named-checkzone",
                  "explanation": "named-checkzone es la herramienta de BIND en Linux para verificar la sintaxis y estructura de un archivo de zona antes de reiniciar el servicio."
                },
                {
                  "id": "d",
                  "text": "dig-check",
                  "explanation": "dig sirve para consultas DNS, no para validar archivos de zona."
                }
              ],
              "correctOptionId": "c",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que es una zona secundaria en dns",
              "question": "¿Qué es una zona secundaria en DNS?",
              "options": [
                {
                  "id": "a",
                  "text": "Un dominio interno",
                  "explanation": "Las zonas pueden ser internas o externas; eso no define si son secundarias."
                },
                {
                  "id": "b",
                  "text": "Una copia de la zona primaria usada para redundancia",
                  "explanation": "La zona secundaria es una copia de solo lectura de la zona primaria, que se sincroniza mediante transferencias de zona y proporciona redundancia y alta disponibilidad."
                },
                {
                  "id": "c",
                  "text": "Un servidor de nombres público",
                  "explanation": "La visibilidad pública o privada no define si una zona es secundaria."
                },
                {
                  "id": "d",
                  "text": "La zona donde se crean registros automáticamente",
                  "explanation": "Los registros se crean en la zona primaria, no en la secundaria."
                }
              ],
              "correctOptionId": "b",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            },
            {
              "id": "sri-ut1-que elemento se debe configurar para permitir que un servido",
              "question": "¿Qué elemento se debe configurar para permitir que un servidor secundario reciba la zona?",
              "options": [
                {
                  "id": "a",
                  "text": "TTL reducido",
                  "explanation": "Reducir el TTL afecta al tiempo de caché de las respuestas, no a la transferencia de zona."
                },
                {
                  "id": "b",
                  "text": "Puerto alternativo",
                  "explanation": "DNS usa el puerto 53; cambiar de puerto no es necesario para las transferencias."
                },
                {
                  "id": "c",
                  "text": "SOA extendido",
                  "explanation": "El SOA contiene datos de control de la zona, pero no habilita por sí solo la transferencia."
                },
                {
                  "id": "d",
                  "text": "Transferencia de zona",
                  "explanation": "En el servidor primario hay que autorizar las transferencias de zona para que el servidor secundario pueda copiar y sincronizar los registros DNS."
                }
              ],
              "correctOptionId": "d",
              "source": "UT1 AUTOEVALUACIÓN_.docx"
            }
          ]
        },
        {
          "id": "ut2",
          "title": "Unidad 2",
          "questions": [
            {
              "id": "sri-ut2-que tipo de asignacion ip concede direcciones durante un tie",
              "question": "¿Qué tipo de asignación IP concede direcciones durante un tiempo limitado?",
              "options": [
                {
                  "id": "a",
                  "text": "Asignación dinámica",
                  "explanation": "La asignación dinámica (normalmente mediante DHCP) asigna una dirección IP temporalmente, durante un periodo llamado lease o tiempo de concesión."
                },
                {
                  "id": "b",
                  "text": "Asignación manual",
                  "explanation": "La IP la configura el administrador, no se asigna automáticamente."
                },
                {
                  "id": "c",
                  "text": "Asignación permanente",
                  "explanation": "No es un tipo estándar de asignación en redes."
                },
                {
                  "id": "d",
                  "text": "Asignación estática",
                  "explanation": "La IP no cambia y se configura manualmente."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que mensaje confirma definitivamente la concesion de la ip",
              "question": "¿Qué mensaje confirma definitivamente la concesión de la IP?",
              "options": [
                {
                  "id": "a",
                  "text": "DHCPDISCOVER",
                  "explanation": "Es el mensaje inicial que envía el cliente para buscar servidores DHCP."
                },
                {
                  "id": "b",
                  "text": "DHCPREQUEST",
                  "explanation": "El cliente solicita formalmente la IP ofrecida, pero aún no está confirmada."
                },
                {
                  "id": "c",
                  "text": "DHCPACK",
                  "explanation": "El mensaje DHCPACK (DHCP Acknowledgment) es el que confirma que el servidor DHCP concede definitivamente la dirección IP al cliente."
                },
                {
                  "id": "d",
                  "text": "DHCPDECLINE",
                  "explanation": "El cliente indica que rechaza la IP ofrecida porque detecta un problema."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que rango utilizan las direcciones apipa",
              "question": "¿Qué rango utilizan las direcciones APIPA?",
              "options": [
                {
                  "id": "a",
                  "text": "169.254.0.0 – 169.254.255.255",
                  "explanation": "Las direcciones APIPA (Automatic Private IP Addressing) se asignan automáticamente cuando no hay servidor DHCP disponible. Utilizan el rango 169.254.0.0 – 169.254.255.255."
                },
                {
                  "id": "b",
                  "text": "172.16.0.0 – 172.31.255.255",
                  "explanation": "Es un rango privado de red, no de APIPA."
                },
                {
                  "id": "c",
                  "text": "10.0.0.0 – 10.255.255.255",
                  "explanation": "También es un rango de direcciones privadas."
                },
                {
                  "id": "d",
                  "text": "192.168.0.0 – 192.168.255.255",
                  "explanation": "Otro rango privado común en redes locales."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que parametro permite identificar que parte de una direccion",
              "question": "¿Qué parámetro permite identificar qué parte de una dirección IP corresponde a la red?",
              "options": [
                {
                  "id": "a",
                  "text": "DNS",
                  "explanation": "Sirve para traducir nombres de dominio a direcciones IP."
                },
                {
                  "id": "b",
                  "text": "MAC",
                  "explanation": "Es la dirección física de la tarjeta de red, no identifica la red en una IP."
                },
                {
                  "id": "c",
                  "text": "Máscara de subred",
                  "explanation": "La máscara de subred permite distinguir qué parte de la dirección IP corresponde a la red y cuál al host dentro de esa red."
                },
                {
                  "id": "d",
                  "text": "Gateway",
                  "explanation": "Es la puerta de enlace que conecta la red local con otras redes."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que fichero contiene las concesiones dhcp en ubuntu",
              "question": "¿Qué fichero contiene las concesiones DHCP en Ubuntu?",
              "options": [
                {
                  "id": "a",
                  "text": "/etc/dhcp.conf",
                  "explanation": "Archivo de configuración del servidor DHCP, no de concesiones."
                },
                {
                  "id": "b",
                  "text": "/var/lib/dhcp/dhcpd.leases",
                  "explanation": "El archivo /var/lib/dhcp/dhcpd.leases almacena las concesiones DHCP, es decir, las direcciones IP que el servidor ha asignado a los clientes."
                },
                {
                  "id": "c",
                  "text": "/var/log/syslog",
                  "explanation": "Archivo de registros del sistema, no guarda las concesiones DHCP."
                },
                {
                  "id": "d",
                  "text": "/etc/network/interfaces",
                  "explanation": "Archivo para configurar interfaces de red, no concesiones DHCP."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que mensaje indica que el servidor rechaza una concesion de ",
              "question": "¿Qué mensaje indica que el servidor rechaza una concesión de IP?",
              "options": [
                {
                  "id": "a",
                  "text": "DHCPACK",
                  "explanation": "Confirma que la IP ha sido concedida correctamente."
                },
                {
                  "id": "b",
                  "text": "DHCPREQUEST",
                  "explanation": "Mensaje del cliente solicitando la IP ofrecida."
                },
                {
                  "id": "c",
                  "text": "DHCPNACK",
                  "explanation": "El mensaje DHCPNACK (Negative Acknowledgment) indica que el servidor DHCP rechaza la solicitud de IP del cliente, por ejemplo si la dirección ya no es válida."
                },
                {
                  "id": "d",
                  "text": "DHCPDISCOVER",
                  "explanation": "Mensaje inicial del cliente para localizar servidores DHCP."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que tipo de asignacion ip permite asociar una ip fija a una ",
              "question": "¿Qué tipo de asignación IP permite asociar una IP fija a una dirección MAC?",
              "options": [
                {
                  "id": "a",
                  "text": "Asignación automática",
                  "explanation": "Asigna IPs automáticamente pero no las vincula a una MAC específica."
                },
                {
                  "id": "b",
                  "text": "Asignación dinámica",
                  "explanation": "Las IPs se asignan temporalmente y pueden cambiar."
                },
                {
                  "id": "c",
                  "text": "Reserva DHCP",
                  "explanation": "La reserva DHCP permite que el servidor asigne siempre la misma dirección IP a un dispositivo específico, identificándolo por su dirección MAC."
                },
                {
                  "id": "d",
                  "text": "Asignación pública",
                  "explanation": "Se refiere a IPs accesibles desde Internet, no a la relación IP-MAC."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que dispositivo permite a los clientes acceder a otras redes",
              "question": "¿Qué dispositivo permite a los clientes acceder a otras redes o a Internet?",
              "options": [
                {
                  "id": "a",
                  "text": "DNS",
                  "explanation": "Se encarga de traducir nombres de dominio a direcciones IP."
                },
                {
                  "id": "b",
                  "text": "Switch",
                  "explanation": "Conecta dispositivos dentro de la misma red local, no otras redes."
                },
                {
                  "id": "c",
                  "text": "Bridge",
                  "explanation": "Une segmentos de una misma red, pero no conecta con Internet."
                },
                {
                  "id": "d",
                  "text": "Puerta de enlace",
                  "explanation": "La puerta de enlace (gateway) es el dispositivo que conecta una red local con otras redes, como Internet, permitiendo que los dispositivos puedan comunicarse fuera de su red."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-en que rfc se define el protocolo dhcp",
              "question": "¿En qué RFC se define el protocolo DHCP?",
              "options": [
                {
                  "id": "a",
                  "text": "RFC 1918",
                  "explanation": "Define los rangos de direcciones IP privadas."
                },
                {
                  "id": "b",
                  "text": "RFC 1035",
                  "explanation": "Define aspectos del protocolo DNS."
                },
                {
                  "id": "c",
                  "text": "RFC 2616",
                  "explanation": "Define el protocolo HTTP/.."
                },
                {
                  "id": "d",
                  "text": "RFC 2131",
                  "explanation": "El protocolo DHCP (Dynamic Host Configuration Protocol) está definido en la RFC , donde se describe su funcionamiento y los mensajes utilizados."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que ocurre cuando un cliente no encuentra un servidor dhcp",
              "question": "¿Qué ocurre cuando un cliente no encuentra un servidor DHCP?",
              "options": [
                {
                  "id": "a",
                  "text": "Se apaga la red",
                  "explanation": "La red no se apaga; el sistema intenta autoasignarse una IP."
                },
                {
                  "id": "b",
                  "text": "Se asigna una dirección APIPA",
                  "explanation": "Cuando un equipo no encuentra un servidor DHCP, el sistema operativo asigna automáticamente una dirección APIPA del rango 169.254.0.0 – 169.254.255.255 para permitir comunicación local."
                },
                {
                  "id": "c",
                  "text": "Se asigna una IP pública",
                  "explanation": "Las IP públicas no se asignan automáticamente en este caso."
                },
                {
                  "id": "d",
                  "text": "Se reinicia el equipo",
                  "explanation": "El sistema no necesita reiniciarse, solo asigna una IP automática."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-cual es el primer mensaje del proceso dhcp",
              "question": "¿Cuál es el primer mensaje del proceso DHCP?",
              "options": [
                {
                  "id": "a",
                  "text": "DHCPDISCOVER",
                  "explanation": "El proceso DHCP comienza cuando el cliente envía un mensaje DHCPDISCOVER para buscar servidores DHCP disponibles en la red."
                },
                {
                  "id": "b",
                  "text": "DHCPACK",
                  "explanation": "Es el mensaje que confirma la concesión de la IP, no el primero."
                },
                {
                  "id": "c",
                  "text": "DHCPREQUEST",
                  "explanation": "El cliente solicita formalmente la IP ofrecida, después del discover."
                },
                {
                  "id": "d",
                  "text": "DHCPRELEASE",
                  "explanation": "Se usa para liberar una dirección IP, no para iniciar el proceso."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que comando se usa en linux para reiniciar un servicio",
              "question": "¿Qué comando se usa en Linux para reiniciar un servicio?",
              "options": [
                {
                  "id": "a",
                  "text": "net restart",
                  "explanation": "No es un comando estándar en Linux."
                },
                {
                  "id": "b",
                  "text": "restart network",
                  "explanation": "No es una sintaxis válida de comando."
                },
                {
                  "id": "c",
                  "text": "systemctl restart servicio",
                  "explanation": "El comando systemctl restart servicio se utiliza en sistemas Linux con systemd para reiniciar un servicio, por ejemplo: systemctl restart apache."
                },
                {
                  "id": "d",
                  "text": "service show",
                  "explanation": "No se utiliza para reiniciar servicios."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-a que capa del modelo tcp ip pertenece dhcp",
              "question": "¿A qué capa del modelo TCP/IP pertenece DHCP?",
              "options": [
                {
                  "id": "a",
                  "text": "Capa física",
                  "explanation": "Se encarga de la transmisión de señales físicas, no de protocolos como DHCP."
                },
                {
                  "id": "b",
                  "text": "Capa de transporte",
                  "explanation": "Aquí se encuentran protocolos como TCP o UDP, no DHCP."
                },
                {
                  "id": "c",
                  "text": "Capa de aplicación",
                  "explanation": "DHCP pertenece a la capa de aplicación del modelo TCP/IP, ya que es un protocolo que proporciona servicios de configuración de red a los dispositivos."
                },
                {
                  "id": "d",
                  "text": "Capa de red",
                  "explanation": "Incluye protocolos como IP, responsables del direccionamiento."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-como se denomina el tiempo durante el cual un cliente puede ",
              "question": "¿Cómo se denomina el tiempo durante el cual un cliente puede utilizar una dirección IP asignada por DHCP?",
              "options": [
                {
                  "id": "a",
                  "text": "TTL",
                  "explanation": "Se usa en redes para indicar el tiempo de vida de los paquetes, no de una IP DHCP."
                },
                {
                  "id": "b",
                  "text": "Session Time",
                  "explanation": "No es un término utilizado en DHCP."
                },
                {
                  "id": "c",
                  "text": "Lease Time",
                  "explanation": "El Lease Time es el tiempo de concesión durante el cual un cliente puede usar la dirección IP asignada por el servidor DHCP antes de tener que renovarla."
                },
                {
                  "id": "d",
                  "text": "Timeout",
                  "explanation": "Es un tiempo de espera general, pero no el término específico de DHCP."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que protocolo antecede a dhcp",
              "question": "¿Qué protocolo antecede a DHCP?",
              "options": [
                {
                  "id": "a",
                  "text": "FTP",
                  "explanation": "Protocolo para transferencia de archivos."
                },
                {
                  "id": "b",
                  "text": "SMTP",
                  "explanation": "Protocolo para envío de correos electrónicos."
                },
                {
                  "id": "c",
                  "text": "HTTP",
                  "explanation": "Protocolo para comunicación web."
                },
                {
                  "id": "d",
                  "text": "BOOTP",
                  "explanation": "BOOTP (Bootstrap Protocol) es el protocolo anterior a DHCP y se utilizaba para asignar direcciones IP a dispositivos automáticamente. DHCP es una evolución de BOOTP con más funcionalidades."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que significa dhcp",
              "question": "¿Qué significa DHCP?",
              "options": [
                {
                  "id": "a",
                  "text": "Data Host Communication Protocol",
                  "explanation": "No corresponde al significado real del acrónimo DHCP."
                },
                {
                  "id": "b",
                  "text": "Data Host Configuration Protocol",
                  "explanation": "La palabra correcta es Dynamic, no Data."
                },
                {
                  "id": "c",
                  "text": "Dynamic Host Configuration Protocol",
                  "explanation": "DHCP (Dynamic Host Configuration Protocol) es el protocolo que asigna automáticamente direcciones IP y otros parámetros de red a los dispositivos de una red."
                },
                {
                  "id": "d",
                  "text": "Dynamic Hardware Control Protocol",
                  "explanation": "No es el nombre correcto del protocolo."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que mensaje envia el cliente para aceptar la oferta del serv",
              "question": "¿Qué mensaje envía el cliente para aceptar la oferta del servidor?",
              "options": [
                {
                  "id": "a",
                  "text": "DHCPDISCOVER",
                  "explanation": "Es el mensaje inicial del cliente para buscar servidores DHCP."
                },
                {
                  "id": "b",
                  "text": "DHCPACK",
                  "explanation": "Lo envía el servidor para confirmar la concesión de la IP."
                },
                {
                  "id": "c",
                  "text": "DHCPRELEASE",
                  "explanation": "Se utiliza cuando el cliente libera la dirección IP."
                },
                {
                  "id": "d",
                  "text": "DHCPREQUEST",
                  "explanation": "El cliente envía DHCPREQUEST para aceptar la oferta de dirección IP que ha enviado el servidor DHCP."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que servidores se encargan de traducir nombres de dominio en",
              "question": "¿Qué servidores se encargan de traducir nombres de dominio en direcciones IP?",
              "options": [
                {
                  "id": "a",
                  "text": "DNS",
                  "explanation": "Los servidores DNS (Domain Name System) se encargan de traducir nombres de dominio como google.com a direcciones IP para que los equipos puedan localizar los servidores en Internet."
                },
                {
                  "id": "b",
                  "text": "DHCP",
                  "explanation": "Se usa para asignar direcciones IP automáticamente a los dispositivos."
                },
                {
                  "id": "c",
                  "text": "FTP",
                  "explanation": "Protocolo para transferencia de archivos."
                },
                {
                  "id": "d",
                  "text": "SMTP",
                  "explanation": "Protocolo para envío de correos electrónicos."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que es una exclusion en dhcp",
              "question": "¿Qué es una exclusión en DHCP?",
              "options": [
                {
                  "id": "a",
                  "text": "Rango de IP que el servidor no puede asignar",
                  "explanation": "Una exclusión DHCP es un rango de direcciones IP que el servidor DHCP no puede asignar, normalmente porque están reservadas para dispositivos con IP fija."
                },
                {
                  "id": "b",
                  "text": "IP asignada a todos los equipos",
                  "explanation": "Cada equipo recibe una IP distinta."
                },
                {
                  "id": "c",
                  "text": "Dirección MAC",
                  "explanation": "Es la dirección física de la tarjeta de red, no una exclusión DHCP."
                },
                {
                  "id": "d",
                  "text": "Dirección IP pública",
                  "explanation": "Se refiere a una IP accesible desde Internet, no a exclusiones."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que parametro identifica de forma unica a un host dentro de ",
              "question": "¿Qué parámetro identifica de forma única a un host dentro de una red?",
              "options": [
                {
                  "id": "a",
                  "text": "Dirección IP",
                  "explanation": "La dirección IP identifica de forma única a cada dispositivo (host) dentro de una red para que pueda comunicarse con otros equipos."
                },
                {
                  "id": "b",
                  "text": "DNS",
                  "explanation": "Se usa para traducir nombres de dominio a direcciones IP."
                },
                {
                  "id": "c",
                  "text": "Gateway",
                  "explanation": "Es la puerta de enlace que conecta la red con otras redes."
                },
                {
                  "id": "d",
                  "text": "Broadcast",
                  "explanation": "Es una dirección usada para enviar mensajes a todos los dispositivos de la red."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que mensaje envia el servidor para ofrecer una direccion ip",
              "question": "¿Qué mensaje envía el servidor para ofrecer una dirección IP?",
              "options": [
                {
                  "id": "a",
                  "text": "DHCPDECLINE",
                  "explanation": "El cliente indica que rechaza la IP ofrecida."
                },
                {
                  "id": "b",
                  "text": "DHCPREQUEST",
                  "explanation": "El cliente acepta la oferta de IP del servidor."
                },
                {
                  "id": "c",
                  "text": "DHCPOFFER",
                  "explanation": "El servidor DHCP envía el mensaje DHCPOFFER para ofrecer una dirección IP al cliente después de recibir el DHCPDISCOVER."
                },
                {
                  "id": "d",
                  "text": "DHCPDISCOVER",
                  "explanation": "Es el mensaje inicial que envía el cliente para buscar servidores DHCP."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que comando permite ver la configuracion ip en linux",
              "question": "¿Qué comando permite ver la configuración IP en Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "netstat",
                  "explanation": "Muestra conexiones de red y puertos, no la configuración IP."
                },
                {
                  "id": "b",
                  "text": "traceroute",
                  "explanation": "Sirve para ver la ruta que siguen los paquetes hasta un destino."
                },
                {
                  "id": "c",
                  "text": "ls",
                  "explanation": "Lista archivos y directorios, no información de red."
                },
                {
                  "id": "d",
                  "text": "ip addr show",
                  "explanation": "El comando ip addr show permite ver la configuración de las interfaces de red, incluyendo direcciones IP, estado de la interfaz y máscara de red."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que direccion se utiliza normalmente en el mensaje dhcpdisco",
              "question": "¿Qué dirección se utiliza normalmente en el mensaje DHCPDISCOVER?",
              "options": [
                {
                  "id": "a",
                  "text": "8.8.8.8",
                  "explanation": "Es una dirección de servidor DNS público de Google, no se usa en DHCPDISCOVER."
                },
                {
                  "id": "b",
                  "text": "192.168.1.1",
                  "explanation": "Suele ser la puerta de enlace, pero no se usa en el primer mensaje DHCP."
                },
                {
                  "id": "c",
                  "text": "255.255.255.255",
                  "explanation": "El mensaje DHCPDISCOVER se envía a la dirección 255.255.255.255, que es la dirección de broadcast, para que todos los servidores DHCP de la red puedan recibir la solicitud."
                },
                {
                  "id": "d",
                  "text": "127.0.0.1",
                  "explanation": "Es la dirección loopback, usada para comunicación interna del propio equipo."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que mensaje envia el cliente para liberar una direccion ip",
              "question": "¿Qué mensaje envía el cliente para liberar una dirección IP?",
              "options": [
                {
                  "id": "a",
                  "text": "DHCPRELEASE",
                  "explanation": "El cliente envía DHCPRELEASE al servidor DHCP para liberar la dirección IP que estaba utilizando, de modo que pueda ser asignada a otro dispositivo."
                },
                {
                  "id": "b",
                  "text": "DHCPREQUEST",
                  "explanation": "Se usa para solicitar o aceptar una dirección IP ofrecida."
                },
                {
                  "id": "c",
                  "text": "DHCPDISCOVER",
                  "explanation": "Es el mensaje inicial que envía el cliente para buscar servidores DHCP."
                },
                {
                  "id": "d",
                  "text": "DHCPINFORM",
                  "explanation": "Se usa cuando un cliente ya tiene IP pero solicita información adicional de configuración."
                }
              ],
              "correctOptionId": "a",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que modelo de funcionamiento utiliza dhcp",
              "question": "¿Qué modelo de funcionamiento utiliza DHCP?",
              "options": [
                {
                  "id": "a",
                  "text": "Anillo",
                  "explanation": "Es una topología de red, no un modelo de funcionamiento de protocolos."
                },
                {
                  "id": "b",
                  "text": "Bus",
                  "explanation": "También es una topología de red, no el modelo de DHCP."
                },
                {
                  "id": "c",
                  "text": "Peer to peer",
                  "explanation": "En este modelo los equipos se comunican entre iguales, pero DHCP necesita un servidor que asigne las IPs."
                },
                {
                  "id": "d",
                  "text": "Cliente-servidor",
                  "explanation": "DHCP funciona con un modelo cliente-servidor, donde el cliente solicita configuración de red y el servidor DHCP responde asignando una dirección IP y otros parámetros."
                }
              ],
              "correctOptionId": "d",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que concepto define el conjunto de direcciones ip disponible",
              "question": "¿Qué concepto define el conjunto de direcciones IP disponibles para asignar?",
              "options": [
                {
                  "id": "a",
                  "text": "Subred",
                  "explanation": "Define una división de la red, pero no el conjunto de IP que asigna DHCP."
                },
                {
                  "id": "b",
                  "text": "Gateway",
                  "explanation": "Es la puerta de enlace hacia otras redes."
                },
                {
                  "id": "c",
                  "text": "Rango DHCP",
                  "explanation": "El rango DHCP es el conjunto de direcciones IP que el servidor DHCP puede asignar automáticamente a los clientes de la red."
                },
                {
                  "id": "d",
                  "text": "Broadcast",
                  "explanation": "Dirección usada para enviar mensajes a todos los dispositivos de la red."
                }
              ],
              "correctOptionId": "c",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-que protocolo de transporte utiliza dhcp",
              "question": "¿Qué protocolo de transporte utiliza DHCP?",
              "options": [
                {
                  "id": "a",
                  "text": "ICMP",
                  "explanation": "Se usa para diagnóstico de red, como el comando ping."
                },
                {
                  "id": "b",
                  "text": "UDP",
                  "explanation": "DHCP utiliza UDP (User Datagram Protocol) para comunicarse entre cliente y servidor, concretamente puertos 67 (servidor) y 68 (cliente)."
                },
                {
                  "id": "c",
                  "text": "IP",
                  "explanation": "Es el protocolo de direccionamiento de red, no de transporte."
                },
                {
                  "id": "d",
                  "text": "TCP",
                  "explanation": "Protocolo de transporte orientado a conexión, DHCP usa UDP porque es más rápido y simple."
                }
              ],
              "correctOptionId": "b",
              "source": "UT2 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut2-excel-que comando permite ver la configuracion ip en windows",
              "question": "¿Qué comando permite ver la configuración IP en Windows?",
              "options": [
                {
                  "id": "a",
                  "text": "BOOTP",
                  "explanation": "BOOTP no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "b",
                  "text": "Máscara de subred",
                  "explanation": "Máscara de subred no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                },
                {
                  "id": "c",
                  "text": "ipconfig /all",
                  "explanation": "ipconfig /all es la opción correcta porque responde directamente a la pregunta planteada en la autoevaluación y coincide con el contenido técnico esperado para ese concepto."
                },
                {
                  "id": "d",
                  "text": "/var/lib/dhcp/dhcpd.leases",
                  "explanation": "/var/lib/dhcp/dhcpd.leases no es la respuesta adecuada para esta pregunta; corresponde a otro concepto distinto de la misma unidad y por eso no encaja como solución correcta aquí."
                }
              ],
              "correctOptionId": "c",
              "source": "TESTS-AUTOEVALUACIÓN-SRI.XLSX"
            }
          ]
        },
        {
          "id": "ut3",
          "title": "Unidad 3",
          "questions": [
            {
              "id": "sri-ut3-que archivo registra todas las peticiones recibidas por apac",
              "question": "¿Qué archivo registra todas las peticiones recibidas por Apache?",
              "options": [
                {
                  "id": "a",
                  "text": "access.log",
                  "explanation": "El archivo access.log registra todas las peticiones HTTP que recibe Apache (visitas, URLs solicitadas, códigos de estado, IPs, etc.)."
                },
                {
                  "id": "b",
                  "text": "error.log",
                  "explanation": "Solo guarda errores del servidor."
                },
                {
                  "id": "c",
                  "text": "server.log",
                  "explanation": "No es un archivo estándar en Apache."
                },
                {
                  "id": "d",
                  "text": "request.log",
                  "explanation": "No es un archivo típico en Apache."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que directiva define el directorio raiz de publicacion de un",
              "question": "¿Qué directiva define el directorio raíz de publicación de una web en Apache?",
              "options": [
                {
                  "id": "a",
                  "text": "DocumentRoot",
                  "explanation": "La directiva DocumentRoot indica la carpeta donde están los archivos de la web que Apache va a servir (HTML, PHP, etc.)."
                },
                {
                  "id": "b",
                  "text": "DirectoryIndex",
                  "explanation": "Define el archivo por defecto (ej: index.html)."
                },
                {
                  "id": "c",
                  "text": "Listen",
                  "explanation": "Indica el puerto en el que escucha Apache."
                },
                {
                  "id": "d",
                  "text": "ServerName",
                  "explanation": "Define el nombre del servidor (dominio)."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que protocolo se utiliza principalmente para transferir pagi",
              "question": "¿Qué protocolo se utiliza principalmente para transferir páginas web?",
              "options": [
                {
                  "id": "a",
                  "text": "FTP",
                  "explanation": "Se usa para transferencia de archivos, no para visualizar webs."
                },
                {
                  "id": "b",
                  "text": "HTTP",
                  "explanation": "El protocolo HTTP es el que se utiliza para transferir páginas web desde el servidor (como Apache) al navegador del usuario."
                },
                {
                  "id": "c",
                  "text": "DNS",
                  "explanation": "Sirve para traducir nombres de dominio a direcciones IP."
                },
                {
                  "id": "d",
                  "text": "SMTP",
                  "explanation": "Se utiliza para el envío de correos electrónicos."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que es un virtual host en apache",
              "question": "¿Qué es un Virtual Host en Apache?",
              "options": [
                {
                  "id": "a",
                  "text": "Un mecanismo para alojar varios sitios web en un mismo servidor",
                  "explanation": "Un Virtual Host permite que un mismo servidor Apache aloje varios sitios web diferentes usando el mismo servidor (por dominio o IP)."
                },
                {
                  "id": "b",
                  "text": "Sistema de bases de datos virtual",
                  "explanation": "No tiene relación con Apache."
                },
                {
                  "id": "c",
                  "text": "Sistema de virtualización",
                  "explanation": "Eso es tipo VirtualBox, no Apache."
                },
                {
                  "id": "d",
                  "text": "Servidor virtual dentro de una máquina virtual",
                  "explanation": "No es el concepto de Virtual Host."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que codigo http indica que el recurso no existe",
              "question": "¿Qué código HTTP indica que el recurso no existe?",
              "options": [
                {
                  "id": "a",
                  "text": "503",
                  "explanation": "Servicio no disponible (servidor caído o saturado)."
                },
                {
                  "id": "b",
                  "text": "200",
                  "explanation": "Todo correcto, la petición ha funcionado."
                },
                {
                  "id": "c",
                  "text": "301",
                  "explanation": "Redirección permanente a otra URL."
                },
                {
                  "id": "d",
                  "text": "404",
                  "explanation": "El código 404 (Not Found) indica que el recurso solicitado no existe en el servidor o no se ha encontrado."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que directiva define el documento que se mostrara por defect",
              "question": "¿Qué directiva define el documento que se mostrará por defecto?",
              "options": [
                {
                  "id": "a",
                  "text": "ServerRoot",
                  "explanation": "Define la carpeta principal de configuración de Apache."
                },
                {
                  "id": "b",
                  "text": "Directory",
                  "explanation": "Se usa para aplicar configuraciones a carpetas."
                },
                {
                  "id": "c",
                  "text": "DirectoryIndex",
                  "explanation": "La directiva DirectoryIndex indica cuál es el archivo que se carga por defecto cuando entras a una web (por ejemplo: index.html o index.php)."
                },
                {
                  "id": "d",
                  "text": "ServerName",
                  "explanation": "Define el nombre del servidor (dominio)."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que es un servidor web",
              "question": "¿Qué es un servidor web?",
              "options": [
                {
                  "id": "a",
                  "text": "Protocolo de transferencia",
                  "explanation": "Eso sería HTTP o FTP."
                },
                {
                  "id": "b",
                  "text": "Sistema operativo",
                  "explanation": "No es un SO, es un servicio que funciona sobre él."
                },
                {
                  "id": "c",
                  "text": "Gestión de bases de datos",
                  "explanation": "Eso sería un SGBD como MySQL."
                },
                {
                  "id": "d",
                  "text": "Un servicio que publica contenidos web y responde a peticiones de clientes",
                  "explanation": "Un servidor web es un servicio (como Apache o Nginx) que almacena páginas web y las envía a los clientes (navegadores) cuando las solicitan."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que codigo de estado http indica que el recurso se ha entreg",
              "question": "¿Qué código de estado HTTP indica que el recurso se ha entregado correctamente?",
              "options": [
                {
                  "id": "a",
                  "text": "500",
                  "explanation": "Error interno del servidor."
                },
                {
                  "id": "b",
                  "text": "200",
                  "explanation": "El código 200 (OK) indica que la petición se ha realizado correctamente y el servidor ha entregado el recurso sin problemas."
                },
                {
                  "id": "c",
                  "text": "404",
                  "explanation": "Recurso no encontrado."
                },
                {
                  "id": "d",
                  "text": "301",
                  "explanation": "Redirección permanente a otra URL."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-en que directorio se almacena por defecto el contenido web e",
              "question": "¿En qué directorio se almacena por defecto el contenido web en Apache en Ubuntu?",
              "options": [
                {
                  "id": "a",
                  "text": "/etc/apache",
                  "explanation": "Carpeta de configuración, no de contenido web."
                },
                {
                  "id": "b",
                  "text": "/home/apache",
                  "explanation": "No es un directorio estándar de Apache."
                },
                {
                  "id": "c",
                  "text": "/var/www/html",
                  "explanation": "En Ubuntu, Apache sirve por defecto los archivos web desde la carpeta /var/www/html, que es el DocumentRoot inicial."
                },
                {
                  "id": "d",
                  "text": "/usr/apache",
                  "explanation": "Tampoco es una ruta por defecto."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que tecnologia cifra las comunicaciones en https",
              "question": "¿Qué tecnología cifra las comunicaciones en HTTPS?",
              "options": [
                {
                  "id": "a",
                  "text": "FTP",
                  "explanation": "Protocolo de transferencia de archivos, sin cifrado por defecto."
                },
                {
                  "id": "b",
                  "text": "SSH",
                  "explanation": "Se usa para acceso remoto seguro, no para HTTPS."
                },
                {
                  "id": "c",
                  "text": "TLS",
                  "explanation": "TLS (Transport Layer Security) es el protocolo que cifra la comunicación en HTTPS, protegiendo los datos entre el cliente y el servidor."
                },
                {
                  "id": "d",
                  "text": "DNS",
                  "explanation": "Traduce nombres de dominio a IP, no cifra la comunicación."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que servicio gratuito permite obtener certificados ssl autom",
              "question": "¿Qué servicio gratuito permite obtener certificados SSL automáticamente?",
              "options": [
                {
                  "id": "a",
                  "text": "Apache",
                  "explanation": "Es un servidor web, no emite certificados."
                },
                {
                  "id": "b",
                  "text": "GitHub",
                  "explanation": "Plataforma de desarrollo, no gestiona SSL directamente."
                },
                {
                  "id": "c",
                  "text": "Cloudflare",
                  "explanation": "Ofrece SSL, pero no es el servicio estándar gratuito de certificados automáticos como Let’s Encrypt."
                },
                {
                  "id": "d",
                  "text": "Let's Encrypt",
                  "explanation": "Let’s Encrypt es una autoridad certificadora gratuita que permite generar certificados SSL/TLS automáticamente, normalmente usando herramientas como Certbot."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que servidor web es uno de los mas utilizados en internet",
              "question": "¿Qué servidor web es uno de los más utilizados en Internet?",
              "options": [
                {
                  "id": "a",
                  "text": "MySQL",
                  "explanation": "Sistema gestor de bases de datos."
                },
                {
                  "id": "b",
                  "text": "Oracle",
                  "explanation": "También relacionado con bases de datos."
                },
                {
                  "id": "c",
                  "text": "PostgreSQL",
                  "explanation": "Otro sistema gestor de bases de datos."
                },
                {
                  "id": "d",
                  "text": "Apache",
                  "explanation": "Apache es uno de los servidores web más usados en Internet para servir páginas web."
                }
              ],
              "correctOptionId": "d",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-sobre que protocolo de transporte funciona normalmente http",
              "question": "¿Sobre qué protocolo de transporte funciona normalmente HTTP?",
              "options": [
                {
                  "id": "a",
                  "text": "TCP",
                  "explanation": "HTTP funciona sobre TCP, que garantiza una comunicación fiable (los datos llegan completos y en orden)."
                },
                {
                  "id": "b",
                  "text": "UDP",
                  "explanation": "No garantiza entrega ni orden (no se usa para HTTP clásico)."
                },
                {
                  "id": "c",
                  "text": "IPX",
                  "explanation": "Protocolo antiguo, ya en desuso."
                },
                {
                  "id": "d",
                  "text": "ICMP",
                  "explanation": "Se usa para diagnóstico (ej: ping), no para transferir webs."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que directiva especifica el nombre de dominio de un sitio en",
              "question": "¿Qué directiva especifica el nombre de dominio de un sitio en Apache?",
              "options": [
                {
                  "id": "a",
                  "text": "ServerName",
                  "explanation": "La directiva ServerName define el nombre de dominio principal del sitio (por ejemplo: www.midominio.com )."
                },
                {
                  "id": "b",
                  "text": "ServerAlias",
                  "explanation": "Sirve para añadir dominios alternativos, no el principal."
                },
                {
                  "id": "c",
                  "text": "Listen",
                  "explanation": "Define el puerto en el que escucha Apache."
                },
                {
                  "id": "d",
                  "text": "DocumentRoot",
                  "explanation": "Define la carpeta donde está la web."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que modulo de apache permite utilizar https",
              "question": "¿Qué módulo de Apache permite utilizar HTTPS?",
              "options": [
                {
                  "id": "a",
                  "text": "mod_headers",
                  "explanation": "Sirve para gestionar cabeceras HTTP."
                },
                {
                  "id": "b",
                  "text": "mod_ssl",
                  "explanation": "El módulo mod_ssl permite a Apache trabajar con HTTPS, gestionando el cifrado mediante SSL/TLS."
                },
                {
                  "id": "c",
                  "text": "mod_proxy",
                  "explanation": "Se usa para hacer de proxy."
                },
                {
                  "id": "d",
                  "text": "mod_security",
                  "explanation": "Añade seguridad (firewall web), pero no habilita HTTPS."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-cual es el puerto por defecto del protocolo http",
              "question": "¿Cuál es el puerto por defecto del protocolo HTTP?",
              "options": [
                {
                  "id": "a",
                  "text": "80",
                  "explanation": "El protocolo HTTP utiliza por defecto el puerto 80 para la comunicación entre cliente y servidor."
                },
                {
                  "id": "b",
                  "text": "443",
                  "explanation": "Es el puerto de HTTPS (HTTP seguro)."
                },
                {
                  "id": "c",
                  "text": "21",
                  "explanation": "Se usa para FTP."
                },
                {
                  "id": "d",
                  "text": "25",
                  "explanation": "Se usa para SMTP (correo electrónico)."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que directiva define el puerto o ip en el que escucha apache",
              "question": "¿Qué directiva define el puerto o IP en el que escucha Apache?",
              "options": [
                {
                  "id": "a",
                  "text": "Redirect",
                  "explanation": "Sirve para redirigir URLs."
                },
                {
                  "id": "b",
                  "text": "Alias",
                  "explanation": "Permite asignar rutas alternativas a directorios."
                },
                {
                  "id": "c",
                  "text": "Listen",
                  "explanation": "La directiva Listen indica el puerto y/o IP en el que Apache acepta conexiones (por ejemplo: Listen 80)."
                },
                {
                  "id": "d",
                  "text": "ServerRoot",
                  "explanation": "Define la carpeta principal de configuración de Apache."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que significa https",
              "question": "¿Qué significa HTTPS?",
              "options": [
                {
                  "id": "a",
                  "text": "Transport Public System",
                  "explanation": "No es una denominación real."
                },
                {
                  "id": "b",
                  "text": "Private Server",
                  "explanation": "No corresponde al significado de HTTPS."
                },
                {
                  "id": "c",
                  "text": "HyperText Transfer Protocol Secure",
                  "explanation": "HTTPS significa HyperText Transfer Protocol Secure, es decir, la versión segura de HTTP que cifra la comunicación usando TLS."
                },
                {
                  "id": "d",
                  "text": "Hyper Transfer Protocol System",
                  "explanation": "Está mal formulado."
                }
              ],
              "correctOptionId": "c",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-cual es el puerto por defecto utilizado por https",
              "question": "¿Cuál es el puerto por defecto utilizado por HTTPS?",
              "options": [
                {
                  "id": "a",
                  "text": "443",
                  "explanation": "El protocolo HTTPS utiliza por defecto el puerto , ya que es la versión segura de HTTP."
                },
                {
                  "id": "b",
                  "text": "21",
                  "explanation": "Se usa para FTP."
                },
                {
                  "id": "c",
                  "text": "22",
                  "explanation": "Se usa para SSH."
                },
                {
                  "id": "d",
                  "text": "80",
                  "explanation": "Es el puerto de HTTP (sin cifrado)."
                }
              ],
              "correctOptionId": "a",
              "source": "UT3 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut3-que caracteristica describe mejor al protocolo http",
              "question": "¿Qué característica describe mejor al protocolo HTTP?",
              "options": [
                {
                  "id": "a",
                  "text": "Solo redes privadas",
                  "explanation": "HTTP funciona en Internet (red pública)."
                },
                {
                  "id": "b",
                  "text": "Es un protocolo sin estado",
                  "explanation": "HTTP es un protocolo sin estado (stateless), lo que significa que cada petición es independiente y el servidor no guarda información entre ellas."
                },
                {
                  "id": "c",
                  "text": "Orientado a sesión",
                  "explanation": "HTTP no mantiene sesión por sí solo."
                },
                {
                  "id": "d",
                  "text": "No utiliza puertos",
                  "explanation": "Sí usa puertos (80 para HTTP, para HTTPS)."
                }
              ],
              "correctOptionId": "b",
              "source": "UT3 AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut4",
          "title": "Unidad 4",
          "questions": [
            {
              "id": "sri-ut4-que tipo de ataque evita un firewall bien configurado",
              "question": "¿Qué tipo de ataque evita un firewall bien configurado?",
              "options": [
                {
                  "id": "a",
                  "text": "Fallos eléctricos",
                  "explanation": "Problema físico, no de red."
                },
                {
                  "id": "b",
                  "text": "Intrusiones no autorizadas desde redes externas",
                  "explanation": "Un firewall controla el tráfico de red y bloquea accesos no permitidos, evitando intrusiones desde el exterior."
                },
                {
                  "id": "c",
                  "text": "Fuerza bruta en capa física",
                  "explanation": "No tiene sentido en este contexto."
                },
                {
                  "id": "d",
                  "text": "Degradación del cableado",
                  "explanation": "Problema de hardware, no de seguridad."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que riesgo se mitiga al segmentar redes mediante vlans y fir",
              "question": "¿Qué riesgo se mitiga al segmentar redes mediante VLANs y firewalls internos?",
              "options": [
                {
                  "id": "a",
                  "text": "Rendimiento gráfico",
                  "explanation": "No tiene relación con redes."
                },
                {
                  "id": "b",
                  "text": "Colisiones de red",
                  "explanation": "Se reduce con switches, no es el objetivo principal aquí."
                },
                {
                  "id": "c",
                  "text": "Propagación lateral de ataques",
                  "explanation": "Al segmentar la red con VLANs y firewalls internos, se evita que un atacante que entra en una parte de la red pueda moverse libremente a otras (propagación lateral)."
                },
                {
                  "id": "d",
                  "text": "Fallos en DHCP",
                  "explanation": "No es el problema que se mitiga con segmentación."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que ventaja tiene un firewall de inspeccion con estado state",
              "question": "¿Qué ventaja tiene un firewall de inspección con estado (stateful)?",
              "options": [
                {
                  "id": "a",
                  "text": "Solo IPv6",
                  "explanation": "Funciona tanto en IPv como IPv6."
                },
                {
                  "id": "b",
                  "text": "No almacena info",
                  "explanation": "Justo al revés, sí almacena estado."
                },
                {
                  "id": "c",
                  "text": "Mantiene tablas de conexión para validar tráfico legítimo",
                  "explanation": "Un firewall stateful guarda información de las conexiones activas (tablas de estado) y así puede diferenciar tráfico legítimo del malicioso."
                },
                {
                  "id": "d",
                  "text": "IP duplicadas",
                  "explanation": "No es su función principal."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-cual es la funcion principal de un firewall perimetral",
              "question": "¿Cuál es la función principal de un firewall perimetral?",
              "options": [
                {
                  "id": "a",
                  "text": "Traducir nombres de dominio",
                  "explanation": "Eso lo hace el DNS."
                },
                {
                  "id": "b",
                  "text": "Controlar el tráfico entre redes según reglas definidas",
                  "explanation": "Un firewall perimetral se encarga de filtrar y controlar el tráfico que entra y sale de una red según unas reglas de seguridad."
                },
                {
                  "id": "c",
                  "text": "Asignar IP dinámicas",
                  "explanation": "Eso lo hace el DHCP."
                },
                {
                  "id": "d",
                  "text": "Aumentar velocidad",
                  "explanation": "No es su función principal."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que tecnica permite que varios dispositivos internos compart",
              "question": "¿Qué técnica permite que varios dispositivos internos compartan una única IP pública?",
              "options": [
                {
                  "id": "a",
                  "text": "DNS dinámico",
                  "explanation": "Actualiza IPs en dominios, no comparte IP."
                },
                {
                  "id": "b",
                  "text": "Proxy transparente",
                  "explanation": "Intermedia tráfico, pero no hace esa función principal."
                },
                {
                  "id": "c",
                  "text": "VLAN tagging",
                  "explanation": "Se usa para segmentar redes, no para compartir IP."
                },
                {
                  "id": "d",
                  "text": "NAT",
                  "explanation": "NAT (Network Address Translation) permite que varios dispositivos de una red privada usen una sola IP pública para salir a Internet."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que caracteristica tiene un proxy transparente",
              "question": "¿Qué característica tiene un proxy transparente?",
              "options": [
                {
                  "id": "a",
                  "text": "No puede filtrar contenido",
                  "explanation": "Sí puede filtrar."
                },
                {
                  "id": "b",
                  "text": "No permite caché",
                  "explanation": "Puede usar caché."
                },
                {
                  "id": "c",
                  "text": "Funciona sin que los clientes tengan que configurarlo",
                  "explanation": "Un proxy transparente intercepta el tráfico sin necesidad de configurar nada en los clientes, funcionando de forma automática."
                },
                {
                  "id": "d",
                  "text": "Requiere configuración manual",
                  "explanation": "Justo lo contrario."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que tipo de filtrado revisa unicamente la cabecera de la cap",
              "question": "¿Qué tipo de filtrado revisa únicamente la cabecera de la capa 3 y 4?",
              "options": [
                {
                  "id": "a",
                  "text": "Filtrado de paquetes estático",
                  "explanation": "El filtrado de paquetes estático solo analiza la cabecera de red (IP) y transporte (puertos), es decir, capas y ."
                },
                {
                  "id": "b",
                  "text": "DPI",
                  "explanation": "Analiza también el contenido (capas superiores)."
                },
                {
                  "id": "c",
                  "text": "Análisis heurístico",
                  "explanation": "Se usa más en antivirus, no en este tipo de filtrado."
                },
                {
                  "id": "d",
                  "text": "Filtrado de contenido",
                  "explanation": "Inspecciona datos más profundos, no solo cabeceras."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que recurso permite registrar actividad del firewall",
              "question": "¿Qué recurso permite registrar actividad del firewall?",
              "options": [
                {
                  "id": "a",
                  "text": "DNS Forwarders",
                  "explanation": "Se usan para resolver nombres de dominio."
                },
                {
                  "id": "b",
                  "text": "Logs del sistema",
                  "explanation": "Los logs del sistema registran la actividad del firewall: conexiones permitidas, bloqueadas, intentos de acceso, etc."
                },
                {
                  "id": "c",
                  "text": "ARP Cache",
                  "explanation": "Relaciona IP con direcciones MAC."
                },
                {
                  "id": "d",
                  "text": "NAT table",
                  "explanation": "Gestiona traducciones de IP, no registra actividad como tal."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que tipo de firewall combina inspeccion de estado con filtra",
              "question": "¿Qué tipo de firewall combina inspección de estado con filtrado profundo y análisis avanzado?",
              "options": [
                {
                  "id": "a",
                  "text": "NAT simple",
                  "explanation": "Solo traduce direcciones IP."
                },
                {
                  "id": "b",
                  "text": "Firewall UTM / de nueva generación",
                  "explanation": "Los firewalls UTM o de nueva generación (NGFW) combinan inspección con estado + filtrado profundo (DPI) + análisis avanzado, ofreciendo mayor seguridad."
                },
                {
                  "id": "c",
                  "text": "Firewall básico",
                  "explanation": "Solo hace filtrado simple (capas -)."
                },
                {
                  "id": "d",
                  "text": "Proxy sin caché",
                  "explanation": "No cumple esas funciones de seguridad avanzada."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que variante de nat permite que muchas ip internas usen una ",
              "question": "¿Qué variante de NAT permite que muchas IP internas usen una sola IP pública mediante puertos?",
              "options": [
                {
                  "id": "a",
                  "text": "Proxy ARP",
                  "explanation": "Relaciona IP con MAC en red local."
                },
                {
                  "id": "b",
                  "text": "DNAT",
                  "explanation": "Traduce direcciones de destino, no comparte IP así."
                },
                {
                  "id": "c",
                  "text": "PAT",
                  "explanation": "PAT (Port Address Translation) permite que varios dispositivos compartan una sola IP pública diferenciándose por puertos."
                },
                {
                  "id": "d",
                  "text": "NAT estático",
                  "explanation": "Asigna una IP pública fija a una privada (:)."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que propiedad caracteriza a un proxy cache",
              "question": "¿Qué propiedad caracteriza a un proxy caché?",
              "options": [
                {
                  "id": "a",
                  "text": "Cortafuegos físico",
                  "explanation": "No es su función principal."
                },
                {
                  "id": "b",
                  "text": "Claves criptográficas",
                  "explanation": "No se encarga de esto."
                },
                {
                  "id": "c",
                  "text": "Cambia IP",
                  "explanation": "Eso lo hace NAT, no un proxy caché."
                },
                {
                  "id": "d",
                  "text": "Almacena contenido para acelerar accesos posteriores",
                  "explanation": "Un proxy caché guarda copias de contenido web para servirlas más rápido en futuras peticiones, mejorando el rendimiento."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que comando en linux muestra reglas activas de iptables",
              "question": "¿Qué comando en Linux muestra reglas activas de iptables?",
              "options": [
                {
                  "id": "a",
                  "text": "netfilter view",
                  "explanation": "No es un comando válido."
                },
                {
                  "id": "b",
                  "text": "fwctl show",
                  "explanation": "No es un comando estándar de Linux."
                },
                {
                  "id": "c",
                  "text": "firewall-cmd -show",
                  "explanation": "Sintaxis incorrecta (además es de firewalld)."
                },
                {
                  "id": "d",
                  "text": "iptables -L",
                  "explanation": "El comando iptables -L lista las reglas activas del firewall en Linux."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que tipo de servidores se suelen ubicar en la dmz",
              "question": "¿Qué tipo de servidores se suelen ubicar en la DMZ?",
              "options": [
                {
                  "id": "a",
                  "text": "Impresoras",
                  "explanation": "Deben estar en la red interna."
                },
                {
                  "id": "b",
                  "text": "Bases de datos críticas",
                  "explanation": "Son sensibles, no deben exponerse."
                },
                {
                  "id": "c",
                  "text": "Controladores de dominio",
                  "explanation": "Son muy críticos, no se colocan en DMZ."
                },
                {
                  "id": "d",
                  "text": "Servidores expuestos públicamente, como web o correo",
                  "explanation": "La DMZ (zona desmilitarizada) se usa para colocar servidores que deben ser accesibles desde Internet, como web, correo, DNS, pero aislados de la red interna."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que elemento del firewall determina que trafico se permite o",
              "question": "¿Qué elemento del firewall determina qué tráfico se permite o se bloquea?",
              "options": [
                {
                  "id": "a",
                  "text": "NAT Overload",
                  "explanation": "Variante de NAT, no define reglas de filtrado."
                },
                {
                  "id": "b",
                  "text": "ACL o lista de control de acceso",
                  "explanation": "Las ACL (Access Control List) son las reglas del firewall que indican qué tráfico se permite y cuál se bloquea."
                },
                {
                  "id": "c",
                  "text": "SLA",
                  "explanation": "Acuerdos de servicio, no filtran tráfico."
                },
                {
                  "id": "d",
                  "text": "DNS forwarding",
                  "explanation": "Relacionado con resolución de nombres, no con filtrado."
                }
              ],
              "correctOptionId": "b",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que metodo se utiliza para permitir acceso remoto seguro a l",
              "question": "¿Qué método se utiliza para permitir acceso remoto seguro a la red interna?",
              "options": [
                {
                  "id": "a",
                  "text": "VPN",
                  "explanation": "Una VPN (Virtual Private Network) permite acceder a la red interna de forma segura y cifrada desde el exterior."
                },
                {
                  "id": "b",
                  "text": "Proxy inverso sin SSL",
                  "explanation": "No es para acceso remoto seguro."
                },
                {
                  "id": "c",
                  "text": "FTP sin cifrar",
                  "explanation": "Inseguro, transmite datos en claro."
                },
                {
                  "id": "d",
                  "text": "Telnet",
                  "explanation": "También es inseguro (sin cifrado)."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que funcion tiene spi stateful packet inspection",
              "question": "¿Qué función tiene SPI (Stateful Packet Inspection)?",
              "options": [
                {
                  "id": "a",
                  "text": "Multicast",
                  "explanation": "No es su función."
                },
                {
                  "id": "b",
                  "text": "DHCP",
                  "explanation": "No asigna IPs."
                },
                {
                  "id": "c",
                  "text": "Verifica conexiones según su estado y contexto",
                  "explanation": "El SPI analiza los paquetes teniendo en cuenta el estado de la conexión, permitiendo solo tráfico que forma parte de conexiones válidas."
                },
                {
                  "id": "d",
                  "text": "VLANs",
                  "explanation": "No crea redes."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-cual es la funcion del proxy inverso",
              "question": "¿Cuál es la función del proxy inverso?",
              "options": [
                {
                  "id": "a",
                  "text": "Filtrar DNS",
                  "explanation": "No es su función principal."
                },
                {
                  "id": "b",
                  "text": "Logs de tráfico",
                  "explanation": "Puede registrarlos, pero no es su función principal."
                },
                {
                  "id": "c",
                  "text": "Traducir IPs",
                  "explanation": "Eso lo hace NAT."
                },
                {
                  "id": "d",
                  "text": "Proteger y distribuir tráfico hacia servidores internos",
                  "explanation": "Un proxy inverso recibe las peticiones desde Internet y las redirige a servidores internos, ayudando a protegerlos y balancear carga."
                }
              ],
              "correctOptionId": "d",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que concepto define la red interna protegida tras un firewal",
              "question": "¿Qué concepto define la red interna protegida tras un firewall?",
              "options": [
                {
                  "id": "a",
                  "text": "LAN segura",
                  "explanation": "La LAN segura es la red interna que está protegida por el firewall, donde se encuentran los equipos y recursos sensibles."
                },
                {
                  "id": "b",
                  "text": "VLAN 0",
                  "explanation": "No define una red protegida como tal."
                },
                {
                  "id": "c",
                  "text": "Backbone",
                  "explanation": "Es la red troncal, no la interna protegida."
                },
                {
                  "id": "d",
                  "text": "DMZ",
                  "explanation": "Es una zona intermedia expuesta, no la red interna segura."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que servicio permite redirigir trafico entrante hacia un ser",
              "question": "¿Qué servicio permite redirigir tráfico entrante hacia un servidor interno (port forwarding)?",
              "options": [
                {
                  "id": "a",
                  "text": "DHCP Relay",
                  "explanation": "Reenvía peticiones DHCP, no tráfico de servicios."
                },
                {
                  "id": "b",
                  "text": "Proxy SOCKS",
                  "explanation": "Intermedia conexiones, pero no hace redirección NAT directa."
                },
                {
                  "id": "c",
                  "text": "DNAT",
                  "explanation": "DNAT (Destination NAT) permite redirigir tráfico que llega a una IP pública hacia un servidor interno, lo que se conoce como port forwarding."
                },
                {
                  "id": "d",
                  "text": "SNMP",
                  "explanation": "Se usa para monitorización de red."
                }
              ],
              "correctOptionId": "c",
              "source": "UT4 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut4-que servicio permite bloquear sitios web segun politicas cor",
              "question": "¿Qué servicio permite bloquear sitios web según políticas corporativas?",
              "options": [
                {
                  "id": "a",
                  "text": "Proxy filtrante",
                  "explanation": "Un proxy filtrante permite bloquear o permitir el acceso a páginas web según reglas o políticas de la empresa."
                },
                {
                  "id": "b",
                  "text": "DHCP",
                  "explanation": "Asigna direcciones IP."
                },
                {
                  "id": "c",
                  "text": "DNSSEC",
                  "explanation": "Asegura la resolución DNS, no bloquea webs."
                },
                {
                  "id": "d",
                  "text": "SSH",
                  "explanation": "Protocolo de acceso remoto seguro."
                }
              ],
              "correctOptionId": "a",
              "source": "UT4 AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut5",
          "title": "Unidad 5",
          "questions": [
            {
              "id": "sri-ut5-cual es la principal funcion de dkim",
              "question": "¿Cuál es la principal función de DKIM?",
              "options": [
                {
                  "id": "a",
                  "text": "Puertos",
                  "explanation": "No tiene que ver con DKIM."
                },
                {
                  "id": "b",
                  "text": "Cifrar conexión",
                  "explanation": "Eso lo hace TLS."
                },
                {
                  "id": "c",
                  "text": "Firmar digitalmente los mensajes del dominio",
                  "explanation": "DKIM (DomainKeys Identified Mail) añade una firma digital a los correos para verificar que realmente vienen del dominio y que no han sido modificados."
                },
                {
                  "id": "d",
                  "text": "Analizar spam",
                  "explanation": "Eso lo hacen filtros antispam."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que protocolo se usa para cifrar la conexion en pop3",
              "question": "¿Qué protocolo se usa para cifrar la conexión en POP3?",
              "options": [
                {
                  "id": "a",
                  "text": "FTP",
                  "explanation": "Transferencia de archivos."
                },
                {
                  "id": "b",
                  "text": "SSL/TLS",
                  "explanation": "POP puede cifrarse usando SSL/TLS (por ejemplo, POPS en el puerto 995), protegiendo la comunicación."
                },
                {
                  "id": "c",
                  "text": "DNS",
                  "explanation": "Resolución de nombres."
                },
                {
                  "id": "d",
                  "text": "ARP",
                  "explanation": "Relaciona IP con MAC."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que mecanismo evita el uso del servidor por usuarios no aute",
              "question": "¿Qué mecanismo evita el uso del servidor por usuarios no autenticados?",
              "options": [
                {
                  "id": "a",
                  "text": "POP3",
                  "explanation": "Sirve para recibir correos, no para autenticación de envío."
                },
                {
                  "id": "b",
                  "text": "SMTP AUTH",
                  "explanation": "SMTP AUTH obliga a los usuarios a autenticarse antes de enviar correos, evitando el uso indebido del servidor (relay abierto)."
                },
                {
                  "id": "c",
                  "text": "PING",
                  "explanation": "Herramienta de red para comprobar conectividad."
                },
                {
                  "id": "d",
                  "text": "ARP",
                  "explanation": "Relaciona IP con MAC."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que herramienta se utiliza para detectar correos no deseados",
              "question": "¿Qué herramienta se utiliza para detectar correos no deseados?",
              "options": [
                {
                  "id": "a",
                  "text": "Netcat",
                  "explanation": "Herramienta de red para conexiones."
                },
                {
                  "id": "b",
                  "text": "Cron",
                  "explanation": "Planificador de tareas."
                },
                {
                  "id": "c",
                  "text": "SpamAssassin",
                  "explanation": "SpamAssassin es una herramienta que analiza correos y detecta spam usando reglas y filtros."
                },
                {
                  "id": "d",
                  "text": "Ping",
                  "explanation": "Comprueba conectividad."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que componente se encarga de la entrega local del correo",
              "question": "¿Qué componente se encarga de la entrega local del correo?",
              "options": [
                {
                  "id": "a",
                  "text": "MUA",
                  "explanation": "Es el cliente de correo (Outlook, Thunderbird)."
                },
                {
                  "id": "b",
                  "text": "MDA",
                  "explanation": "El MDA (Mail Delivery Agent) es el encargado de entregar el correo en el buzón del usuario dentro del servidor."
                },
                {
                  "id": "c",
                  "text": "HTTP",
                  "explanation": "Protocolo web."
                },
                {
                  "id": "d",
                  "text": "DNS",
                  "explanation": "Resolución de nombres."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-cual es el proposito de spf en el correo electronico",
              "question": "¿Cuál es el propósito de SPF en el correo electrónico?",
              "options": [
                {
                  "id": "a",
                  "text": "Cifrar contenido",
                  "explanation": "Eso lo hace TLS."
                },
                {
                  "id": "b",
                  "text": "Autenticar los servidores autorizados a enviar en nombre de un dominio",
                  "explanation": "SPF (Sender Policy Framework) permite indicar qué servidores están autorizados a enviar correos en nombre de un dominio, evitando suplantaciones."
                },
                {
                  "id": "c",
                  "text": "Reenvío automático",
                  "explanation": "No es su función."
                },
                {
                  "id": "d",
                  "text": "Ancho de banda",
                  "explanation": "No tiene relación."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que herramienta sirve para monitorizar colas de correo",
              "question": "¿Qué herramienta sirve para monitorizar colas de correo?",
              "options": [
                {
                  "id": "a",
                  "text": "Gimp",
                  "explanation": "Editor de imágenes."
                },
                {
                  "id": "b",
                  "text": "Photoshop",
                  "explanation": "Editor de imágenes."
                },
                {
                  "id": "c",
                  "text": "Mailgraph",
                  "explanation": "Mailgraph permite monitorizar estadísticas del servidor de correo, incluyendo colas y actividad de envío/recepción."
                },
                {
                  "id": "d",
                  "text": "Wireshark",
                  "explanation": "Analiza tráfico de red, no colas de correo."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-cual es el puerto estandar para smtp con autenticacion segur",
              "question": "¿Cuál es el puerto estándar para SMTP con autenticación segura?",
              "options": [
                {
                  "id": "a",
                  "text": "587",
                  "explanation": "El puerto 587 se usa para SMTP con autenticación (SMTP AUTH) y cifrado mediante TLS, recomendado para envío de correo."
                },
                {
                  "id": "b",
                  "text": "110",
                  "explanation": "POP sin cifrar."
                },
                {
                  "id": "c",
                  "text": "995",
                  "explanation": "POP con SSL."
                },
                {
                  "id": "d",
                  "text": "80",
                  "explanation": "HTTP."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que protocolo se utiliza para enviar correos electronicos",
              "question": "¿Qué protocolo se utiliza para enviar correos electrónicos?",
              "options": [
                {
                  "id": "a",
                  "text": "HTTP",
                  "explanation": "Protocolo web."
                },
                {
                  "id": "b",
                  "text": "POP3",
                  "explanation": "Se usa para recibir correos."
                },
                {
                  "id": "c",
                  "text": "SMTP",
                  "explanation": "SMTP (Simple Mail Transfer Protocol) es el protocolo encargado de enviar correos electrónicos entre clientes y servidores."
                },
                {
                  "id": "d",
                  "text": "IMAP",
                  "explanation": "También para recibir y gestionar correos en servidor."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que cliente de correo funciona en modo texto",
              "question": "¿Qué cliente de correo funciona en modo texto?",
              "options": [
                {
                  "id": "a",
                  "text": "Gmail",
                  "explanation": "Cliente web con interfaz gráfica."
                },
                {
                  "id": "b",
                  "text": "Mutt",
                  "explanation": "Mutt es un cliente de correo que funciona en modo texto (terminal) en sistemas Linux."
                },
                {
                  "id": "c",
                  "text": "Thunderbird",
                  "explanation": "Cliente de escritorio con interfaz gráfica."
                },
                {
                  "id": "d",
                  "text": "Outlook",
                  "explanation": "Cliente de correo con interfaz gráfica."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que archivo de configuracion principal usa postfix",
              "question": "¿Qué archivo de configuración principal usa Postfix?",
              "options": [
                {
                  "id": "a",
                  "text": "/etc/dhcp/dhcpd.conf",
                  "explanation": "Configuración de DHCP."
                },
                {
                  "id": "b",
                  "text": "/var/mail.log",
                  "explanation": "Archivo de logs, no de configuración."
                },
                {
                  "id": "c",
                  "text": "/etc/postfix/main.cf",
                  "explanation": "El archivo /etc/postfix/main.cf es el principal donde se configura el servidor de correo Postfix."
                },
                {
                  "id": "d",
                  "text": "/etc/hosts",
                  "explanation": "Resolución local de nombres."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-cual de los siguientes servidores es un mta",
              "question": "¿Cuál de los siguientes servidores es un MTA?",
              "options": [
                {
                  "id": "a",
                  "text": "Chrome",
                  "explanation": "Navegador web."
                },
                {
                  "id": "b",
                  "text": "Thunderbird",
                  "explanation": "Cliente de correo (MUA)."
                },
                {
                  "id": "c",
                  "text": "Outlook",
                  "explanation": "Cliente de correo (MUA)."
                },
                {
                  "id": "d",
                  "text": "Postfix",
                  "explanation": "Postfix es un MTA (Mail Transfer Agent), encargado de enviar y enrutar correos entre servidores."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que puerto utiliza imaps",
              "question": "¿Qué puerto utiliza IMAPS?",
              "options": [
                {
                  "id": "a",
                  "text": "587",
                  "explanation": "SMTP con autenticación."
                },
                {
                  "id": "b",
                  "text": "995",
                  "explanation": "POPS (POP seguro)."
                },
                {
                  "id": "c",
                  "text": "25",
                  "explanation": "SMTP sin cifrar."
                },
                {
                  "id": "d",
                  "text": "993",
                  "explanation": "IMAPS (IMAP seguro con SSL/TLS) utiliza el puerto 993."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que servicio permite descargar correo remoto de otros servid",
              "question": "¿Qué servicio permite descargar correo remoto de otros servidores?",
              "options": [
                {
                  "id": "a",
                  "text": "S/MIME",
                  "explanation": "Descarga datos web, no correo específicamente. Fetchmail se utiliza para recoger correos de servidores remotos (POP/IMAP) y traerlos al servidor local. S/MIME permite firmar digitalmente y cifrar correos electrónicos, garantizando autenticidad e integridad."
                },
                {
                  "id": "b",
                  "text": "SMTP",
                  "explanation": "Protocolo de envío de correo."
                },
                {
                  "id": "c",
                  "text": "DNS",
                  "explanation": "Analiza rutas de red. Resolución de nombres."
                },
                {
                  "id": "d",
                  "text": "HTTP",
                  "explanation": "Muestra conexiones de red. 5. ¿Qué estándar permite firmar digitalmente un mensaje? Protocolo web."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que registro dns indica el servidor encargado de recibir el ",
              "question": "¿Qué registro DNS indica el servidor encargado de recibir el correo de un dominio?",
              "options": [
                {
                  "id": "a",
                  "text": "CNAME",
                  "explanation": "Alias de un dominio."
                },
                {
                  "id": "b",
                  "text": "TXT",
                  "explanation": "Se usa para información adicional (ej: SPF, DKIM)."
                },
                {
                  "id": "c",
                  "text": "MX",
                  "explanation": "El registro MX (Mail Exchange) indica qué servidor se encarga de recibir el correo de un dominio."
                },
                {
                  "id": "d",
                  "text": "A",
                  "explanation": "Asocia dominio con una IP."
                }
              ],
              "correctOptionId": "c",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que comando permite comprobar la conexion al puerto 25",
              "question": "¿Qué comando permite comprobar la conexión al puerto 25?",
              "options": [
                {
                  "id": "a",
                  "text": "Ifconfig",
                  "explanation": "Muestra configuración de red."
                },
                {
                  "id": "b",
                  "text": "Telnet",
                  "explanation": "Con telnet puedes probar si un puerto está abierto (ej: telnet servidor 5 para SMTP)."
                },
                {
                  "id": "c",
                  "text": "Ls",
                  "explanation": "Lista archivos."
                },
                {
                  "id": "d",
                  "text": "Top",
                  "explanation": "Muestra procesos del sistema."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que protocolo cifra la conexion entre cliente y servidor de ",
              "question": "¿Qué protocolo cifra la conexión entre cliente y servidor de correo?",
              "options": [
                {
                  "id": "a",
                  "text": "FTP",
                  "explanation": "Transferencia de archivos."
                },
                {
                  "id": "b",
                  "text": "TLS",
                  "explanation": "TLS (Transport Layer Security) cifra la comunicación entre cliente y servidor de correo, protegiendo los datos."
                },
                {
                  "id": "c",
                  "text": "HTTP",
                  "explanation": "Protocolo web sin cifrado por defecto."
                },
                {
                  "id": "d",
                  "text": "SNMP",
                  "explanation": "Monitorización de red."
                }
              ],
              "correctOptionId": "b",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que componente realiza la transmision entre servidores",
              "question": "¿Qué componente realiza la transmisión entre servidores?",
              "options": [
                {
                  "id": "a",
                  "text": "MDA",
                  "explanation": "Entrega el correo al buzón."
                },
                {
                  "id": "b",
                  "text": "MUA",
                  "explanation": "Cliente de correo."
                },
                {
                  "id": "c",
                  "text": "DHCP",
                  "explanation": "Asigna direcciones IP."
                },
                {
                  "id": "d",
                  "text": "MTA",
                  "explanation": "El MTA (Mail Transfer Agent) es el encargado de enviar correos entre servidores."
                }
              ],
              "correctOptionId": "d",
              "source": "UT5 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut5-que protocolo permite acceder a los mensajes desde varios di",
              "question": "¿Qué protocolo permite acceder a los mensajes desde varios dispositivos?",
              "options": [
                {
                  "id": "a",
                  "text": "IMAP",
                  "explanation": "IMAP permite gestionar el correo directamente en el servidor, por lo que puedes acceder desde varios dispositivos y todo se mantiene sincronizado."
                },
                {
                  "id": "b",
                  "text": "DHCP",
                  "explanation": "Asigna direcciones IP."
                },
                {
                  "id": "c",
                  "text": "FTP",
                  "explanation": "Transferencia de archivos."
                },
                {
                  "id": "d",
                  "text": "POP3",
                  "explanation": "Descarga correos al dispositivo y no sincroniza bien entre varios."
                }
              ],
              "correctOptionId": "a",
              "source": "UT5 AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut6",
          "title": "Unidad 6",
          "questions": [
            {
              "id": "sri-ut6-que protocolo utilizan las salas de chat clasicas",
              "question": "¿Qué protocolo utilizan las salas de chat clásicas?",
              "options": [
                {
                  "id": "a",
                  "text": "SMTP",
                  "explanation": "Envío de correo electrónico."
                },
                {
                  "id": "b",
                  "text": "IRC",
                  "explanation": "IRC (Internet Relay Chat) es el protocolo clásico utilizado para salas de chat en tiempo real."
                },
                {
                  "id": "c",
                  "text": "TLS",
                  "explanation": "Protocolo de cifrado, no de chat."
                },
                {
                  "id": "d",
                  "text": "XMPP",
                  "explanation": "Mensajería instantánea más moderna, no el clásico."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que ocurre si el cliente pidgin no acepta el certificado ssl",
              "question": "¿Qué ocurre si el cliente Pidgin no acepta el certificado SSL?",
              "options": [
                {
                  "id": "a",
                  "text": "Servidor se reinicia",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "b",
                  "text": "No permite iniciar sesión correctamente",
                  "explanation": "Si Pidgin no acepta el certificado SSL, no puede establecer una conexión segura, por lo que falla el inicio de sesión."
                },
                {
                  "id": "c",
                  "text": "Se eliminan cuentas",
                  "explanation": "No ocurre por este motivo."
                },
                {
                  "id": "d",
                  "text": "No muestra contactos",
                  "explanation": "El problema es anterior: no conecta."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que tipo de lista requiere aprobacion de los mensajes enviad",
              "question": "¿Qué tipo de lista requiere aprobación de los mensajes enviados?",
              "options": [
                {
                  "id": "a",
                  "text": "Restringida",
                  "explanation": "Limita quién puede enviar, pero no implica aprobación."
                },
                {
                  "id": "b",
                  "text": "Abierta",
                  "explanation": "Cualquiera puede enviar sin control."
                },
                {
                  "id": "c",
                  "text": "Pública",
                  "explanation": "Se refiere al acceso, no a la moderación."
                },
                {
                  "id": "d",
                  "text": "Moderada",
                  "explanation": "En una lista moderada, los mensajes deben ser aprobados por un moderador antes de enviarse a todos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que ventaja ofrece ejabberd",
              "question": "¿Qué ventaja ofrece ejabberd?",
              "options": [
                {
                  "id": "a",
                  "text": "Solo Windows",
                  "explanation": "Funciona en múltiples sistemas (Linux, etc.)."
                },
                {
                  "id": "b",
                  "text": "Múltiples CPUs",
                  "explanation": "No es un requisito obligatorio."
                },
                {
                  "id": "c",
                  "text": "No soporta cifrado",
                  "explanation": "Sí soporta cifrado (TLS)."
                },
                {
                  "id": "d",
                  "text": "Es una implementación XMPP libre y robusta",
                  "explanation": "ejabberd es un servidor de mensajería basado en XMPP, conocido por ser libre, escalable y robusto."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que indica el estado de presencia en mensajeria",
              "question": "¿Qué indica el estado de presencia en mensajería?",
              "options": [
                {
                  "id": "a",
                  "text": "Puertos",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "b",
                  "text": "Temas favoritos",
                  "explanation": "No es información de presencia."
                },
                {
                  "id": "c",
                  "text": "Disponibilidad del usuario",
                  "explanation": "El estado de presencia indica si un usuario está conectado, ausente, ocupado, etc."
                },
                {
                  "id": "d",
                  "text": "Almacenamiento",
                  "explanation": "No aplica aquí."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que componente es obligatorio para conectarse a xmpp",
              "question": "¿Qué componente es obligatorio para conectarse a XMPP?",
              "options": [
                {
                  "id": "a",
                  "text": "Token HMAC",
                  "explanation": "No es obligatorio para conexión básica."
                },
                {
                  "id": "b",
                  "text": "Número de teléfono",
                  "explanation": "No se usa en XMPP."
                },
                {
                  "id": "c",
                  "text": "Dirección MAC",
                  "explanation": "No se utiliza para autenticación en este protocolo."
                },
                {
                  "id": "d",
                  "text": "JID",
                  "explanation": "En XMPP, el usuario se identifica mediante un JID (Jabber ID), que es como una dirección tipo usuario@dominio."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que se necesita para crear salas privadas en spark",
              "question": "¿Qué se necesita para crear salas privadas en Spark?",
              "options": [
                {
                  "id": "a",
                  "text": "Permisos configurados en OpenFire",
                  "explanation": "Para crear salas privadas en Spark (cliente XMPP) necesitas que el servidor (Openfire) tenga configurados los permisos adecuados."
                },
                {
                  "id": "b",
                  "text": "Certificado wildcard",
                  "explanation": "Relacionado con SSL, no con salas."
                },
                {
                  "id": "c",
                  "text": "OAuth",
                  "explanation": "Sistema de autenticación externa, no necesario aquí."
                },
                {
                  "id": "d",
                  "text": "Token de registro",
                  "explanation": "No es requisito para crear salas privadas."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-cual es el cliente utilizado para xmpp en windows",
              "question": "¿Cuál es el cliente utilizado para XMPP en Windows?",
              "options": [
                {
                  "id": "a",
                  "text": "Pidgin",
                  "explanation": "También soporta XMPP, pero no es el cliente típico en este contexto académico."
                },
                {
                  "id": "b",
                  "text": "Spark",
                  "explanation": "Spark es un cliente de mensajería basado en XMPP, muy utilizado en entornos Windows junto con Openfire."
                },
                {
                  "id": "c",
                  "text": "Skype",
                  "explanation": "Usa su propio protocolo."
                },
                {
                  "id": "d",
                  "text": "IRCII",
                  "explanation": "Cliente para IRC, no XMPP."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que protocolo implementa openfire",
              "question": "¿Qué protocolo implementa OpenFire?",
              "options": [
                {
                  "id": "a",
                  "text": "SIP",
                  "explanation": "Protocolo de VoIP."
                },
                {
                  "id": "b",
                  "text": "XMPP",
                  "explanation": "Openfire es un servidor de mensajería que implementa el protocolo XMPP (Jabber)."
                },
                {
                  "id": "c",
                  "text": "IRC",
                  "explanation": "Protocolo de chat clásico diferente."
                },
                {
                  "id": "d",
                  "text": "HTTP/3",
                  "explanation": "Protocolo web."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-donde se accede a la consola de administracion de openfire",
              "question": "¿Dónde se accede a la consola de administración de OpenFire?",
              "options": [
                {
                  "id": "a",
                  "text": "22",
                  "explanation": "SSH."
                },
                {
                  "id": "b",
                  "text": "Puerto 9090",
                  "explanation": "La consola de administración de Openfire se accede normalmente desde el navegador en el puerto 9090 (http://localhost:9090 )."
                },
                {
                  "id": "c",
                  "text": "3306",
                  "explanation": "MySQL."
                },
                {
                  "id": "d",
                  "text": "443",
                  "explanation": "HTTPS."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que servidor xmpp se utiliza en windows segun la ut6",
              "question": "¿Qué servidor XMPP se utiliza en Windows según la UT6?",
              "options": [
                {
                  "id": "a",
                  "text": "Spark",
                  "explanation": "Es un cliente, no servidor."
                },
                {
                  "id": "b",
                  "text": "OpenFire",
                  "explanation": "En la UT6 se utiliza Openfire como servidor XMPP en Windows para gestionar usuarios, salas y mensajería."
                },
                {
                  "id": "c",
                  "text": "Prosody",
                  "explanation": "Servidor XMPP, pero no el usado en esta UT."
                },
                {
                  "id": "d",
                  "text": "ejabberd",
                  "explanation": "También servidor XMPP, pero no el del ejercicio."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que problema comun presenta la red irc",
              "question": "¿Qué problema común presenta la red IRC?",
              "options": [
                {
                  "id": "a",
                  "text": "Canales privados",
                  "explanation": "Sí existen."
                },
                {
                  "id": "b",
                  "text": "No identifica realmente a los usuarios",
                  "explanation": "En IRC, los usuarios se identifican principalmente por un nick, lo que hace que no haya una verificación real de identidad."
                },
                {
                  "id": "c",
                  "text": "Hardware dedicado",
                  "explanation": "No es necesario."
                },
                {
                  "id": "d",
                  "text": "No permite salas",
                  "explanation": "IRC se basa precisamente en salas (canales)."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que ventaja tiene xmpp frente a protocolos propietarios",
              "question": "¿Qué ventaja tiene XMPP frente a protocolos propietarios?",
              "options": [
                {
                  "id": "a",
                  "text": "Videollamadas obligatorias",
                  "explanation": "No es obligatorio ni exclusivo."
                },
                {
                  "id": "b",
                  "text": "Es interoperable y extensible",
                  "explanation": "XMPP es un protocolo abierto, lo que permite que diferentes sistemas se comuniquen (interoperable) y que se puedan añadir funciones (extensible)."
                },
                {
                  "id": "c",
                  "text": "Sin internet",
                  "explanation": "Necesita red."
                },
                {
                  "id": "d",
                  "text": "No requiere servidor",
                  "explanation": "Sí necesita servidor XMPP."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que caracteristica presenta xmpp",
              "question": "¿Qué característica presenta XMPP?",
              "options": [
                {
                  "id": "a",
                  "text": "No soporta cifrado",
                  "explanation": "Sí soporta (TLS)."
                },
                {
                  "id": "b",
                  "text": "Es estándar abierto",
                  "explanation": "XMPP es un protocolo abierto, lo que permite su uso libre y compatible entre diferentes sistemas."
                },
                {
                  "id": "c",
                  "text": "Propietario",
                  "explanation": "Es lo contrario, es abierto."
                },
                {
                  "id": "d",
                  "text": "Centralizado",
                  "explanation": "Puede ser distribuido, no necesariamente centralizado."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que permite una lista de distribucion",
              "question": "¿Qué permite una lista de distribución?",
              "options": [
                {
                  "id": "a",
                  "text": "Distribuir mensajes a múltiples destinatarios desde una sola dirección",
                  "explanation": "Una lista de distribución permite enviar un correo a muchos destinatarios a la vez usando una única dirección."
                },
                {
                  "id": "b",
                  "text": "Envío individual",
                  "explanation": "Es justo lo contrario."
                },
                {
                  "id": "c",
                  "text": "Dominios XMPP",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "d",
                  "text": "Chats en vivo",
                  "explanation": "Eso es mensajería, no listas."
                }
              ],
              "correctOptionId": "a",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que archivo se edita en ejabberd para configurar dominios",
              "question": "¿Qué archivo se edita en ejabberd para configurar dominios?",
              "options": [
                {
                  "id": "a",
                  "text": "server.xml",
                  "explanation": "Usado en otros servicios (ej: Tomcat)."
                },
                {
                  "id": "b",
                  "text": "jabberd.conf",
                  "explanation": "De otros servidores XMPP, no ejabberd."
                },
                {
                  "id": "c",
                  "text": "ejabberd.yml",
                  "explanation": "El archivo ejabberd.yml es el principal de configuración donde se definen dominios, usuarios y opciones del servidor."
                },
                {
                  "id": "d",
                  "text": "xmppd.ini",
                  "explanation": "No corresponde a ejabberd."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que accion forma parte de la verificacion del servicio en me",
              "question": "¿Qué acción forma parte de la verificación del servicio en mensajería?",
              "options": [
                {
                  "id": "a",
                  "text": "Certificados wildcard",
                  "explanation": "Relacionado con SSL, no verificación básica."
                },
                {
                  "id": "b",
                  "text": "Compilar núcleo",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "c",
                  "text": "Probar conexión, envío y recepción de mensajes",
                  "explanation": "Para verificar un servicio de mensajería hay que comprobar que funciona correctamente, es decir: conexión, envío y recepción."
                },
                {
                  "id": "d",
                  "text": "VLANs",
                  "explanation": "Redes, no mensajería."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que dato necesita un usuario spark para iniciar sesion",
              "question": "¿Qué dato necesita un usuario Spark para iniciar sesión?",
              "options": [
                {
                  "id": "a",
                  "text": "Token JWT",
                  "explanation": "No se usa en este contexto."
                },
                {
                  "id": "b",
                  "text": "Puerto 3389",
                  "explanation": "Es de RDP (escritorio remoto)."
                },
                {
                  "id": "c",
                  "text": "IP del servidor en dominio",
                  "explanation": "Para iniciar sesión en Spark (cliente XMPP) necesitas indicar el servidor (dominio o IP) donde está Openfire."
                },
                {
                  "id": "d",
                  "text": "Código QR",
                  "explanation": "No es necesario en Spark."
                }
              ],
              "correctOptionId": "c",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que diferencia principal existe entre chat irc y mensajeria ",
              "question": "¿Qué diferencia principal existe entre chat IRC y mensajería instantánea?",
              "options": [
                {
                  "id": "a",
                  "text": "Tiempo real",
                  "explanation": "Ambos lo son."
                },
                {
                  "id": "b",
                  "text": "Más seguro",
                  "explanation": "No necesariamente."
                },
                {
                  "id": "c",
                  "text": "Conversaciones múltiples",
                  "explanation": "Sí permite."
                },
                {
                  "id": "d",
                  "text": "La mensajería requiere identificación de usuario",
                  "explanation": "En la mensajería instantánea (XMPP, etc.) los usuarios están identificados (cuentas/JID), mientras que en IRC la identidad no está realmente verificada (solo nick)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT6 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut6-que servicio se usa para gestionar listas de distribucion en",
              "question": "¿Qué servicio se usa para gestionar listas de distribución en entornos GNU/Linux?",
              "options": [
                {
                  "id": "a",
                  "text": "Spark",
                  "explanation": "Cliente de mensajería XMPP."
                },
                {
                  "id": "b",
                  "text": "Mailman",
                  "explanation": "Mailman es una herramienta en GNU/Linux para gestionar listas de distribución de correo (envío masivo, suscriptores, moderación)."
                },
                {
                  "id": "c",
                  "text": "ejabberd",
                  "explanation": "Servidor XMPP."
                },
                {
                  "id": "d",
                  "text": "OpenFire",
                  "explanation": "Servidor XMPP."
                }
              ],
              "correctOptionId": "b",
              "source": "UT6 AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut7",
          "title": "Unidad 7",
          "questions": [
            {
              "id": "sri-ut7-que herramienta se usa como codificador en streaming",
              "question": "¿Qué herramienta se usa como codificador en streaming?",
              "options": [
                {
                  "id": "a",
                  "text": "Apache",
                  "explanation": "Servidor web."
                },
                {
                  "id": "b",
                  "text": "Samba",
                  "explanation": "Compartición de archivos en red."
                },
                {
                  "id": "c",
                  "text": "FFmpeg",
                  "explanation": "FFmpeg es una herramienta muy utilizada para codificar, convertir y transmitir vídeo/audio en streaming."
                },
                {
                  "id": "d",
                  "text": "DNS",
                  "explanation": "Resolución de nombres."
                }
              ],
              "correctOptionId": "c",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que elemento captura o genera el contenido en un sistema de ",
              "question": "¿Qué elemento captura o genera el contenido en un sistema de streaming?",
              "options": [
                {
                  "id": "a",
                  "text": "Switch",
                  "explanation": "Dispositivo de red, no genera contenido."
                },
                {
                  "id": "b",
                  "text": "Origen",
                  "explanation": "El origen es la fuente que captura o genera el contenido (cámara, micrófono, archivo de vídeo, etc.) para el streaming."
                },
                {
                  "id": "c",
                  "text": "Cliente",
                  "explanation": "Recibe el contenido."
                },
                {
                  "id": "d",
                  "text": "Servidor",
                  "explanation": "Distribuye el contenido, pero no lo genera."
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que codec es ampliamente utilizado para sonido sin perdidas",
              "question": "¿Qué códec es ampliamente utilizado para sonido sin pérdidas?",
              "options": [
                {
                  "id": "a",
                  "text": "Opus",
                  "explanation": "Con pérdida (aunque muy eficiente)."
                },
                {
                  "id": "b",
                  "text": "AAC",
                  "explanation": "Con pérdida."
                },
                {
                  "id": "c",
                  "text": "MP3",
                  "explanation": "Con pérdida."
                },
                {
                  "id": "d",
                  "text": "FLAC",
                  "explanation": "FLAC (Free Lossless Audio Codec) permite comprimir audio sin pérdida de calidad."
                }
              ],
              "correctOptionId": "d",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que mide el jitter en voip",
              "question": "¿Qué mide el jitter en VoIP?",
              "options": [
                {
                  "id": "a",
                  "text": "Ancho de banda",
                  "explanation": "Cantidad de datos, no variación."
                },
                {
                  "id": "b",
                  "text": "Número de llamadas",
                  "explanation": "No tiene relación."
                },
                {
                  "id": "c",
                  "text": "Tasa de compresión",
                  "explanation": "Propiedad de codecs."
                },
                {
                  "id": "d",
                  "text": "Variación del retardo entre paquetes",
                  "explanation": "El jitter mide la variación en el tiempo de llegada de los paquetes, lo que puede afectar a la calidad del audio en VoIP."
                }
              ],
              "correctOptionId": "d",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-por que se usa udp en voip",
              "question": "¿Por qué se usa UDP en VoIP?",
              "options": [
                {
                  "id": "a",
                  "text": "Vídeo",
                  "explanation": "No es específico de UDP."
                },
                {
                  "id": "b",
                  "text": "Alta seguridad",
                  "explanation": "UDP no es seguro por sí mismo."
                },
                {
                  "id": "c",
                  "text": "Cifrado nativo",
                  "explanation": "No lo tiene (se usa TLS/SRTP)."
                },
                {
                  "id": "d",
                  "text": "Evita retransmisiones y reduce latencia",
                  "explanation": "UDP no retransmite paquetes perdidos, lo que reduce la latencia, algo clave en VoIP (mejor fluidez aunque se pierdan algunos paquetes)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que protocolo ofrece latencia 1 segundo",
              "question": "¿Qué protocolo ofrece latencia <1 segundo?",
              "options": [
                {
                  "id": "a",
                  "text": "WebRTC",
                  "explanation": "WebRTC permite comunicación en tiempo real con latencias muy bajas (<s), ideal para videollamadas."
                },
                {
                  "id": "b",
                  "text": "SRT",
                  "explanation": "Baja latencia, pero normalmente mayor que WebRTC."
                },
                {
                  "id": "c",
                  "text": "HLS",
                  "explanation": "Latencia alta (varios segundos)."
                },
                {
                  "id": "d",
                  "text": "DASH",
                  "explanation": "También mayor latencia."
                }
              ],
              "correctOptionId": "a",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que caracteriza al streaming frente a la descarga directa",
              "question": "¿Qué caracteriza al streaming frente a la descarga directa?",
              "options": [
                {
                  "id": "a",
                  "text": "Se reproduce en tiempo real sin descarga total",
                  "explanation": "El streaming permite reproducir contenido mientras se recibe, sin necesidad de descargarlo completamente."
                },
                {
                  "id": "b",
                  "text": "No necesita conexión estable",
                  "explanation": "Sí la necesita."
                },
                {
                  "id": "c",
                  "text": "Archivo completo",
                  "explanation": "Eso es descarga tradicional."
                },
                {
                  "id": "d",
                  "text": "FTP",
                  "explanation": "No es el protocolo usado para streaming."
                }
              ],
              "correctOptionId": "a",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que protocolo es habitual para video bajo demanda",
              "question": "¿Qué protocolo es habitual para vídeo bajo demanda?",
              "options": [
                {
                  "id": "a",
                  "text": "HLS",
                  "explanation": "HLS (HTTP Live Streaming) es muy usado para vídeo bajo demanda y streaming, especialmente en plataformas como YouTube o Netflix."
                },
                {
                  "id": "b",
                  "text": "SIP",
                  "explanation": "Protocolo de VoIP."
                },
                {
                  "id": "c",
                  "text": "RTMP",
                  "explanation": "Más usado para streaming en directo, no tanto VOD moderno."
                },
                {
                  "id": "d",
                  "text": "FTP",
                  "explanation": "Transferencia de archivos."
                }
              ],
              "correctOptionId": "a",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que extension identifica tipicamente videos en contenedor mo",
              "question": "¿Qué extensión identifica típicamente vídeos en contenedor moderno?",
              "options": [
                {
                  "id": "a",
                  "text": ".mp4",
                  "explanation": "El formato .mp es uno de los contenedores más usados para vídeo moderno, compatible con la mayoría de dispositivos."
                },
                {
                  "id": "b",
                  "text": ".txt",
                  "explanation": "Archivo de texto."
                },
                {
                  "id": "c",
                  "text": ".ogg",
                  "explanation": "Más usado para audio (aunque puede contener vídeo, no es lo típico)."
                },
                {
                  "id": "d",
                  "text": ".wav",
                  "explanation": "Formato de audio."
                }
              ],
              "correctOptionId": "a",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-en que consiste la descarga progresiva",
              "question": "¿En qué consiste la descarga progresiva?",
              "options": [
                {
                  "id": "a",
                  "text": "Solo 4K",
                  "explanation": "No depende de la resolución."
                },
                {
                  "id": "b",
                  "text": "No buffering",
                  "explanation": "Sí puede haber buffering."
                },
                {
                  "id": "c",
                  "text": "Archivo completo",
                  "explanation": "Eso es descarga tradicional."
                },
                {
                  "id": "d",
                  "text": "Se reproduce mientras se descarga",
                  "explanation": "La descarga progresiva permite empezar a reproducir el contenido antes de que se haya descargado completamente."
                }
              ],
              "correctOptionId": "d",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que parametro indica la cantidad de bits por segundo transmi",
              "question": "¿Qué parámetro indica la cantidad de bits por segundo transmitidos?",
              "options": [
                {
                  "id": "a",
                  "text": "Bitrate",
                  "explanation": "El bitrate indica la cantidad de bits por segundo (bps) que se transmiten, afectando directamente a la calidad del audio/vídeo."
                },
                {
                  "id": "b",
                  "text": "Sample rate",
                  "explanation": "Frecuencia de muestreo (audio)."
                },
                {
                  "id": "c",
                  "text": "Canales",
                  "explanation": "Número de canales (mono, estéreo)."
                },
                {
                  "id": "d",
                  "text": "Muestreo",
                  "explanation": "Relacionado con cómo se capturan las muestras, no con bits por segundo."
                }
              ],
              "correctOptionId": "a",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que bitrate minimo se recomienda para video 1080p",
              "question": "¿Qué bitrate mínimo se recomienda para vídeo 1080p?",
              "options": [
                {
                  "id": "a",
                  "text": "20 Mbps",
                  "explanation": "Excesivo para mínimo recomendado."
                },
                {
                  "id": "b",
                  "text": "8 Mbps",
                  "explanation": "Para vídeo 080p (Full HD) se recomienda un bitrate alrededor de 8 Mbps para mantener buena calidad."
                },
                {
                  "id": "c",
                  "text": "1 Mbps",
                  "explanation": "Muy bajo, mala calidad."
                },
                {
                  "id": "d",
                  "text": "2 Mbps",
                  "explanation": "Insuficiente para 080p."
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que archivo se modifica para configurar icecast",
              "question": "¿Qué archivo se modifica para configurar Icecast?",
              "options": [
                {
                  "id": "a",
                  "text": "playlist.conf",
                  "explanation": "No es el archivo principal de Icecast."
                },
                {
                  "id": "b",
                  "text": "icecast.xml",
                  "explanation": "El archivo icecast.xml es el principal donde se configura el servidor Icecast (puertos, usuarios, streams...)."
                },
                {
                  "id": "c",
                  "text": "icecast.json",
                  "explanation": "No es formato usado por defecto."
                },
                {
                  "id": "d",
                  "text": "server.ini",
                  "explanation": "No corresponde a Icecast."
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que elemento del sistema de streaming almacena y distribuye ",
              "question": "¿Qué elemento del sistema de streaming almacena y distribuye contenido?",
              "options": [
                {
                  "id": "a",
                  "text": "Cliente",
                  "explanation": "Solo recibe el contenido."
                },
                {
                  "id": "b",
                  "text": "Servidor",
                  "explanation": "El servidor es el encargado de almacenar y distribuir el contenido a los clientes en streaming."
                },
                {
                  "id": "c",
                  "text": "Router",
                  "explanation": "Gestiona tráfico de red, no contenido."
                },
                {
                  "id": "d",
                  "text": "Origen",
                  "explanation": "Genera contenido, pero no lo distribuye."
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que componente decodifica y reproduce el streaming",
              "question": "¿Qué componente decodifica y reproduce el streaming?",
              "options": [
                {
                  "id": "a",
                  "text": "CDN",
                  "explanation": "Distribuye contenido, no lo reproduce."
                },
                {
                  "id": "b",
                  "text": "Cliente",
                  "explanation": "El cliente (navegador, app, reproductor) es el que decodifica y reproduce el contenido de streaming."
                },
                {
                  "id": "c",
                  "text": "Codificador",
                  "explanation": "Codifica el contenido antes de enviarlo."
                },
                {
                  "id": "d",
                  "text": "Servidor",
                  "explanation": "Almacena y distribuye, no reproduce."
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-segun el teorema de nyquist la frecuencia minima debe ser",
              "question": "Según el teorema de Nyquist, la frecuencia mínima debe ser...",
              "options": [
                {
                  "id": "a",
                  "text": "10 veces",
                  "explanation": "No es necesario."
                },
                {
                  "id": "b",
                  "text": "La mitad",
                  "explanation": "Insuficiente."
                },
                {
                  "id": "c",
                  "text": "El doble de la más alta",
                  "explanation": "El teorema de Nyquist dice que la frecuencia de muestreo debe ser al menos el doble de la frecuencia más alta de la señal para evitar pérdida de información."
                },
                {
                  "id": "d",
                  "text": "Igual",
                  "explanation": "También insuficiente."
                }
              ],
              "correctOptionId": "c",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que protocolo sustituye crecientemente a rtmp en 2024 2025",
              "question": "¿Qué protocolo sustituye crecientemente a RTMP en 2024–2025?",
              "options": [
                {
                  "id": "a",
                  "text": "SRT",
                  "explanation": "SRT (Secure Reliable Transport) se está usando cada vez más en streaming por su baja latencia y fiabilidad, sustituyendo progresivamente a RTMP."
                },
                {
                  "id": "b",
                  "text": "SIP",
                  "explanation": "VoIP."
                },
                {
                  "id": "c",
                  "text": "ICMP",
                  "explanation": "Diagnóstico de red (ping)."
                },
                {
                  "id": "d",
                  "text": "FTP",
                  "explanation": "Transferencia de archivos."
                }
              ],
              "correctOptionId": "a",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que mensajeria se maneja en sip",
              "question": "¿Qué mensajería se maneja en SIP?",
              "options": [
                {
                  "id": "a",
                  "text": "RTP",
                  "explanation": "Transporta audio/vídeo, no señalización SIP."
                },
                {
                  "id": "b",
                  "text": "DNS",
                  "explanation": "No es su función."
                },
                {
                  "id": "c",
                  "text": "Túneles",
                  "explanation": "No define SIP."
                },
                {
                  "id": "d",
                  "text": "Usa mensajes INVITE, ACK, BYE",
                  "explanation": "SIP (Session Initiation Protocol) utiliza mensajes como INVITE, ACK, BYE para establecer, mantener y finalizar sesiones (VoIP)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-cual de estos codecs es de video",
              "question": "¿Cuál de estos códecs es de vídeo?",
              "options": [
                {
                  "id": "a",
                  "text": "Opus",
                  "explanation": "Códec de audio."
                },
                {
                  "id": "b",
                  "text": "AAC",
                  "explanation": "Códec de audio."
                },
                {
                  "id": "c",
                  "text": "MP3",
                  "explanation": "Códec de audio."
                },
                {
                  "id": "d",
                  "text": "H.264",
                  "explanation": "H.6 es un códec de vídeo muy utilizado en streaming y reproducción multimedia."
                }
              ],
              "correctOptionId": "d",
              "source": "UT7 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut7-que puerto usa icecast por defecto",
              "question": "¿Qué puerto usa Icecast por defecto?",
              "options": [
                {
                  "id": "a",
                  "text": "21",
                  "explanation": "FTP."
                },
                {
                  "id": "b",
                  "text": "8000",
                  "explanation": "Icecast utiliza por defecto el puerto 8000 para servir streams."
                },
                {
                  "id": "c",
                  "text": "80",
                  "explanation": "HTTP."
                },
                {
                  "id": "d",
                  "text": "443",
                  "explanation": "HTTPS."
                }
              ],
              "correctOptionId": "b",
              "source": "UT7 AUTOEVALUACION.docx"
            }
          ]
        },
        {
          "id": "ut8",
          "title": "Unidad 8",
          "questions": [
            {
              "id": "sri-ut8-que protocolo proporciona estadisticas de calidad en voip",
              "question": "¿Qué protocolo proporciona estadísticas de calidad en VoIP?",
              "options": [
                {
                  "id": "a",
                  "text": "RTP",
                  "explanation": "Transporta audio/vídeo, no estadísticas."
                },
                {
                  "id": "b",
                  "text": "RTCP",
                  "explanation": "RTCP (Real-Time Control Protocol) acompaña a RTP y se encarga de enviar estadísticas de calidad (jitter, pérdida de paquetes, latencia)."
                },
                {
                  "id": "c",
                  "text": "POP3",
                  "explanation": "Protocolo de correo."
                },
                {
                  "id": "d",
                  "text": "SIP",
                  "explanation": "Señalización de llamadas."
                }
              ],
              "correctOptionId": "b",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que tipo de red requiere voip",
              "question": "¿Qué tipo de red requiere VoIP?",
              "options": [
                {
                  "id": "a",
                  "text": "Red de circuitos",
                  "explanation": "Es la telefonía tradicional."
                },
                {
                  "id": "b",
                  "text": "Red IP",
                  "explanation": "VoIP (Voz sobre IP) funciona sobre una red IP, ya que transmite la voz en forma de paquetes de datos."
                },
                {
                  "id": "c",
                  "text": "Coaxial",
                  "explanation": "Es un medio físico, no el tipo de red requerido."
                },
                {
                  "id": "d",
                  "text": "Fibra oscura",
                  "explanation": "Infraestructura, no define el tipo de red."
                }
              ],
              "correctOptionId": "b",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que diferencia clave existe entre telefonia rtc y voip",
              "question": "¿Qué diferencia clave existe entre telefonía RTC y VoIP?",
              "options": [
                {
                  "id": "a",
                  "text": "Circuitos dedicados",
                  "explanation": "Eso es RTC."
                },
                {
                  "id": "b",
                  "text": "No requiere servidores",
                  "explanation": "Sí los necesita."
                },
                {
                  "id": "c",
                  "text": "RTC usa Internet",
                  "explanation": "No, usa red telefónica clásica."
                },
                {
                  "id": "d",
                  "text": "VoIP usa conmutación de paquetes",
                  "explanation": "La VoIP transmite la voz mediante paquetes de datos, mientras que la RTC (telefonía tradicional) usa conmutación de circuitos."
                }
              ],
              "correctOptionId": "d",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que servidor pbx reemplaza elastix 5 0 segun el documento",
              "question": "¿Qué servidor PBX reemplaza Elastix 5.0 según el documento?",
              "options": [
                {
                  "id": "a",
                  "text": "Cisco CallManager",
                  "explanation": "Es otra solución, no la mencionada."
                },
                {
                  "id": "b",
                  "text": "Teams PBX",
                  "explanation": "No es el sustituto típico en este contexto."
                },
                {
                  "id": "c",
                  "text": "Huawei PBX",
                  "explanation": "No corresponde al documento."
                },
                {
                  "id": "d",
                  "text": "Asterisk/3CX",
                  "explanation": "Tras Elastix 5.0, se suelen usar soluciones como Asterisk o CX como servidores PBX modernos en VoIP."
                }
              ],
              "correctOptionId": "d",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que dispositivo proporciona alimentacion mediante poe",
              "question": "¿Qué dispositivo proporciona alimentación mediante PoE?",
              "options": [
                {
                  "id": "a",
                  "text": "Switches WiFi",
                  "explanation": "Normalmente proporcionan PoE, no lo reciben."
                },
                {
                  "id": "b",
                  "text": "Televisores IP",
                  "explanation": "No suelen usar PoE."
                },
                {
                  "id": "c",
                  "text": "Cámaras web",
                  "explanation": "Se alimentan por USB."
                },
                {
                  "id": "d",
                  "text": "Teléfonos IP",
                  "explanation": "Los teléfonos IP pueden recibir alimentación a través del cable de red mediante PoE (Power over Ethernet)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que componente de voip traduce senalizacion con redes tradic",
              "question": "¿Qué componente de VoIP traduce señalización con redes tradicionales?",
              "options": [
                {
                  "id": "a",
                  "text": "SLA",
                  "explanation": "Acuerdo de servicio."
                },
                {
                  "id": "b",
                  "text": "Media Gateway",
                  "explanation": "El Media Gateway conecta redes VoIP con redes tradicionales (RTC), traduciendo señalización y medios entre ambas."
                },
                {
                  "id": "c",
                  "text": "DNS",
                  "explanation": "Resolución de nombres."
                },
                {
                  "id": "d",
                  "text": "Proxy ARP",
                  "explanation": "Relaciona IP con MAC."
                }
              ],
              "correctOptionId": "b",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que valor de latencia se considera aceptable",
              "question": "¿Qué valor de latencia se considera aceptable?",
              "options": [
                {
                  "id": "a",
                  "text": "Entre 150 y 400 ms",
                  "explanation": "En VoIP, una latencia de hasta unos 50–00 ms puede considerarse aceptable (aunque lo ideal es <50 ms)."
                },
                {
                  "id": "b",
                  "text": "<800 ms",
                  "explanation": "Demasiado alto."
                },
                {
                  "id": "c",
                  "text": ">600 ms",
                  "explanation": "Inaceptable."
                },
                {
                  "id": "d",
                  "text": "0 ms",
                  "explanation": "Irreal."
                }
              ],
              "correctOptionId": "a",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que mensaje sip inicia una llamada",
              "question": "¿Qué mensaje SIP inicia una llamada?",
              "options": [
                {
                  "id": "a",
                  "text": "BYE",
                  "explanation": "Finaliza la llamada."
                },
                {
                  "id": "b",
                  "text": "CANCEL",
                  "explanation": "Cancela una petición en curso."
                },
                {
                  "id": "c",
                  "text": "OPTIONS",
                  "explanation": "Consulta capacidades del servidor."
                },
                {
                  "id": "d",
                  "text": "INVITE",
                  "explanation": "El mensaje INVITE en SIP se usa para iniciar una llamada o sesión."
                }
              ],
              "correctOptionId": "d",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que funcion principal tiene el registrar server en sip",
              "question": "¿Qué función principal tiene el Registrar Server en SIP?",
              "options": [
                {
                  "id": "a",
                  "text": "Almacenar vídeos",
                  "explanation": "No es su función."
                },
                {
                  "id": "b",
                  "text": "Crear contraseñas",
                  "explanation": "No gestiona eso directamente."
                },
                {
                  "id": "c",
                  "text": "Registrar ubicación de usuarios",
                  "explanation": "El Registrar Server en SIP se encarga de registrar la ubicación de los usuarios (IP/dispositivo) para poder enrutar las llamadas correctamente."
                },
                {
                  "id": "d",
                  "text": "Monitorear RTP",
                  "explanation": "RTP transporta audio, no lo monitoriza el registrar."
                }
              ],
              "correctOptionId": "c",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que protocolo se usa para establecer y finalizar sesiones vo",
              "question": "¿Qué protocolo se usa para establecer y finalizar sesiones VoIP?",
              "options": [
                {
                  "id": "a",
                  "text": "RTP",
                  "explanation": "Transporta audio/vídeo."
                },
                {
                  "id": "b",
                  "text": "HTTP",
                  "explanation": "Protocolo web."
                },
                {
                  "id": "c",
                  "text": "RTCP",
                  "explanation": "Control y estadísticas de calidad."
                },
                {
                  "id": "d",
                  "text": "SIP",
                  "explanation": "SIP (Session Initiation Protocol) se usa para iniciar, modificar y finalizar sesiones VoIP (llamadas)."
                }
              ],
              "correctOptionId": "d",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que mensaje sip confirma recepcion de 200 ok",
              "question": "¿Qué mensaje SIP confirma recepción de 200 OK?",
              "options": [
                {
                  "id": "a",
                  "text": "ACK",
                  "explanation": "El mensaje ACK en SIP se utiliza para confirmar la recepción del “00 OK”, completando así el establecimiento de la llamada."
                },
                {
                  "id": "b",
                  "text": "INVITE",
                  "explanation": "Inicia la llamada."
                },
                {
                  "id": "c",
                  "text": "CANCEL",
                  "explanation": "Cancela una petición en curso."
                },
                {
                  "id": "d",
                  "text": "REGISTER",
                  "explanation": "Registra al usuario en el servidor SIP."
                }
              ],
              "correctOptionId": "a",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que parametro debe asignarse a cada extension en 3cx",
              "question": "¿Qué parámetro debe asignarse a cada extensión en 3CX?",
              "options": [
                {
                  "id": "a",
                  "text": "Número de extensión",
                  "explanation": "En CX, cada usuario/terminal se identifica mediante un número de extensión único para gestionar llamadas internas."
                },
                {
                  "id": "b",
                  "text": "MAC",
                  "explanation": "Identifica dispositivos de red, no extensiones."
                },
                {
                  "id": "c",
                  "text": "VLAN",
                  "explanation": "Segmentación de red."
                },
                {
                  "id": "d",
                  "text": "MX",
                  "explanation": "Registro DNS de correo."
                }
              ],
              "correctOptionId": "a",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que componente en 3cx permite crear y gestionar extensiones",
              "question": "¿Qué componente en 3CX permite crear y gestionar extensiones?",
              "options": [
                {
                  "id": "a",
                  "text": "Panel administrativo web",
                  "explanation": "En CX, las extensiones se crean y gestionan desde el panel de administración web del sistema."
                },
                {
                  "id": "b",
                  "text": "Router",
                  "explanation": "Solo enruta tráfico de red."
                },
                {
                  "id": "c",
                  "text": "DNS",
                  "explanation": "No gestiona extensiones."
                },
                {
                  "id": "d",
                  "text": "Softphone",
                  "explanation": "Es el cliente, no el gestor."
                }
              ],
              "correctOptionId": "a",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que indica el mensaje sip 180 ringing",
              "question": "¿Qué indica el mensaje SIP 180 Ringing?",
              "options": [
                {
                  "id": "a",
                  "text": "Error de transmisión",
                  "explanation": "Otros códigos SIP."
                },
                {
                  "id": "b",
                  "text": "Llamada finalizada",
                  "explanation": "Es el mensaje BYE."
                },
                {
                  "id": "c",
                  "text": "Usuario no registrado",
                  "explanation": "Código de error 0 o 80."
                },
                {
                  "id": "d",
                  "text": "El teléfono destino está sonando",
                  "explanation": "El mensaje SIP 80 Ringing indica que la llamada ha llegado al destino y el teléfono está sonando."
                }
              ],
              "correctOptionId": "d",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que codec genera 64 kbps sin compresion mediante pcm",
              "question": "¿Qué códec genera 64 kbps sin compresión mediante PCM?",
              "options": [
                {
                  "id": "a",
                  "text": "Opus",
                  "explanation": "Códec moderno y eficiente con compresión."
                },
                {
                  "id": "b",
                  "text": "G.711",
                  "explanation": "G.7 utiliza PCM (Pulse Code Modulation) y genera un flujo de 6 kbps sin compresión perceptual, muy usado en telefonía tradicional VoIP."
                },
                {
                  "id": "c",
                  "text": "MP3",
                  "explanation": "Códec de audio con compresión con pérdida."
                },
                {
                  "id": "d",
                  "text": "AAC",
                  "explanation": "También con compresión, no PCM."
                }
              ],
              "correctOptionId": "b",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que mecanismo mejora la calidad en voip",
              "question": "¿Qué mecanismo mejora la calidad en VoIP?",
              "options": [
                {
                  "id": "a",
                  "text": "NAT",
                  "explanation": "NAT no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "b",
                  "text": "DHCP",
                  "explanation": "DHCP no encaja con la definición o el concepto técnico que pide la pregunta."
                },
                {
                  "id": "c",
                  "text": "QoS",
                  "explanation": "QoS es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "d",
                  "text": "FTP",
                  "explanation": "FTP no encaja con la definición o el concepto técnico que pide la pregunta."
                }
              ],
              "correctOptionId": "c",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que parametro debe protegerse en icecast sip y 3cx por igual",
              "question": "¿Qué parámetro debe protegerse en Icecast, SIP y 3CX por igual?",
              "options": [
                {
                  "id": "a",
                  "text": "Resolución de pantalla",
                  "explanation": "no tiene relación"
                },
                {
                  "id": "b",
                  "text": "Sistema de archivos",
                  "explanation": "no es el foco principal de seguridad en estos servicios"
                },
                {
                  "id": "c",
                  "text": "Contraseñas de acceso",
                  "explanation": "En Icecast, SIP y CX, lo más crítico a proteger son las credenciales (usuarios y contraseñas), ya que permiten acceso a servicios de streaming, llamadas o administración."
                },
                {
                  "id": "d",
                  "text": "Nombre del dominio",
                  "explanation": "importante, pero no es el elemento crítico de protección directa"
                }
              ],
              "correctOptionId": "c",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que softphones ofrece 3cx",
              "question": "¿Qué softphones ofrece 3CX?",
              "options": [
                {
                  "id": "a",
                  "text": "Solaris, BSD",
                  "explanation": "No son plataformas soportadas por CX"
                },
                {
                  "id": "b",
                  "text": "Windows, Mac, iOS, Android",
                  "explanation": "Windows, Mac, iOS, Android es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "c",
                  "text": "Linux únicamente",
                  "explanation": "Incorrecto, no es exclusivo"
                },
                {
                  "id": "d",
                  "text": "iOS solamente",
                  "explanation": "Muy limitado, no representa CX"
                }
              ],
              "correctOptionId": "b",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que permite la centralita 3cx",
              "question": "¿Qué permite la centralita 3CX?",
              "options": [
                {
                  "id": "a",
                  "text": "Gestión de extensiones, softphones y llamadas internas",
                  "explanation": "Gestión de extensiones, softphones y llamadas internas es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "b",
                  "text": "Solo llamadas externas",
                  "explanation": "incompleto"
                },
                {
                  "id": "c",
                  "text": "Solo mensajería",
                  "explanation": "no es su función principal"
                },
                {
                  "id": "d",
                  "text": "Reproducción de vídeo",
                  "explanation": "no es objetivo del sistema"
                }
              ],
              "correctOptionId": "a",
              "source": "UT8 AUTOEVALUACION.docx"
            },
            {
              "id": "sri-ut8-que protocolo transporta la voz en voip",
              "question": "¿Qué protocolo transporta la voz en VoIP?",
              "options": [
                {
                  "id": "a",
                  "text": "RTP",
                  "explanation": "RTP es la respuesta correcta según el contenido técnico de la unidad."
                },
                {
                  "id": "b",
                  "text": "SIP",
                  "explanation": "señalización (inicia llamadas, no transporta voz)"
                },
                {
                  "id": "c",
                  "text": "ICMP",
                  "explanation": "diagnóstico de red"
                },
                {
                  "id": "d",
                  "text": "TCP",
                  "explanation": "transporte general fiable, pero no optimizado para tiempo real."
                }
              ],
              "correctOptionId": "a",
              "source": "UT8 AUTOEVALUACION.docx"
            }
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "subject": "ASO",
      "docx": 137,
      "excel_added": 1,
      "excel_duplicates": 59,
      "total": 138
    },
    {
      "subject": "IAW",
      "docx": 117,
      "excel_added": 2,
      "excel_duplicates": 78,
      "total": 119
    },
    {
      "subject": "LENGUAJE MARCAS",
      "docx": 97,
      "excel_added": 2,
      "excel_duplicates": 38,
      "total": 99
    },
    {
      "subject": "SGBD",
      "docx": 120,
      "excel_added": 0,
      "excel_duplicates": 40,
      "total": 120
    },
    {
      "subject": "SRI",
      "docx": 166,
      "excel_added": 1,
      "excel_duplicates": 47,
      "total": 167
    }
  ]
};
