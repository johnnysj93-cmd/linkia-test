window.LINKIA_FLASHCARDS = {
  "sri": [
    {
      "id": "ut1",
      "title": "UT1 · DNS",
      "cards": [
        { "q": "¿Finalidad principal del sistema DNS en una red?", "a": "Traducir nombres de dominio a direcciones IP y viceversa" },
        { "q": "¿Registro DNS para resolver IPv4 a nombre (resolución inversa)?", "a": "PTR" },
        { "q": "En zona primaria/secundaria, ¿qué mejora la disponibilidad?", "a": "DNS preferido (primaria) y DNS alternativo (secundaria)" },
        { "q": "¿Qué utilidad básica tiene la herramienta nslookup?", "a": "Consultar traducciones de nombres a IP" },
        { "q": "¿Registro DNS para definir un alias?", "a": "CNAME" },
        { "q": "¿Registro DNS para servidores de correo de un dominio?", "a": "MX" },
        { "q": "¿Característica de la zona secundaria?", "a": "Solo lectura (copia de la primaria)" },
        { "q": "¿Puerto DNS para consultas rápidas?", "a": "53/UDP" },
        { "q": "Elemento local con resoluciones manuales que se consulta antes que el DNS:", "a": "Archivo hosts" },
        { "q": "Técnica de balanceo de carga básico en DNS Windows Server:", "a": "Round Robin" },
        { "q": "¿Qué representa el registro SOA (Start of Authority)?", "a": "Control de zona y servidor principal" },
        { "q": "Para alta disponibilidad DNS en clientes, ¿qué hay que configurar?", "a": "DNS preferido y DNS alternativo" },
        { "q": "¿Qué define un registro NS?", "a": "Servidores con autoridad sobre la zona" }
      ]
    },
    {
      "id": "ut2",
      "title": "UT2 · DHCP",
      "cards": [
        { "q": "¿Qué significa Lease Time en DHCP?", "a": "Tiempo de concesión de una IP al cliente" },
        { "q": "Orden correcto del proceso DHCP:", "a": "DISCOVER → OFFER → REQUEST → ACK" },
        { "q": "¿Puerto que usa el cliente DHCP para solicitar?", "a": "68" },
        { "q": "¿Puerto que usa el servidor DHCP para responder?", "a": "67" },
        { "q": "Método de asignación que usa el par (IP, MAC):", "a": "Asignación manual o estática con reserva" },
        { "q": "Si hay dos servidores DHCP respondiendo, ¿qué ocurre?", "a": "El cliente elige el que responde primero" },
        { "q": "Parámetros básicos que entrega DHCP: IP, máscara, y...", "a": "Puerta de enlace y DNS" },
        { "q": "¿Qué es una exclusión en DHCP?", "a": "Rango de IP que el servidor no puede conceder" },
        { "q": "¿Qué es una concesión (lease) en DHCP?", "a": "Asignación temporal de una IP" },
        { "q": "Mensaje DHCP para liberar una concesión:", "a": "DHCPRELEASE" },
        { "q": "Mensaje DHCP para solicitar renovación:", "a": "DHCPREQUEST" },
        { "q": "IP de autoconfiguración si falla DHCP:", "a": "169.254.0.0/16 (APIPA)" },
        { "q": "Protocolo base histórico del que deriva DHCP:", "a": "BOOTP" }
      ]
    },
    {
      "id": "ut3",
      "title": "UT3 · HTTP y Apache",
      "cards": [
        { "q": "¿Puerto HTTPS por defecto?", "a": "443/TCP" },
        { "q": "Modelo de comunicación de un servidor web:", "a": "Cliente-servidor" },
        { "q": "Mecanismo para mantener sesiones en HTTP:", "a": "Cookies o sesiones" },
        { "q": "Ubicación de Virtual Hosts en Apache (Ubuntu):", "a": "/etc/apache2/sites-available" },
        { "q": "Directiva que indica el directorio base de contenido en Apache:", "a": "DocumentRoot" },
        { "q": "Comando para aplicar cambios en Apache sin corte de servicio:", "a": "reload" },
        { "q": "Código HTTP \"Not Found\":", "a": "404" },
        { "q": "Directiva Apache para redirigir tráfico de un sitio a otro:", "a": "Redirect" },
        { "q": "Módulo para habilitar SSL en Apache:", "a": "ssl" },
        { "q": "Virtual Host que usa una sola IP para varios nombres de dominio:", "a": "Basado en nombre" },
        { "q": "Directorio por defecto de Apache en Ubuntu:", "a": "/var/www/html" },
        { "q": "Herramienta para crear usuarios de autenticación en Apache:", "a": "htpasswd" },
        { "q": "Requisito para habilitar HTTPS en IIS:", "a": "Certificado y binding en el puerto 443" }
      ]
    },
    {
      "id": "ut4",
      "title": "UT4 · FTP",
      "cards": [
        { "q": "Inconveniente principal del FTP tradicional:", "a": "Texto plano (sin cifrado)" },
        { "q": "Modo FTP problemático con NAT/Firewall:", "a": "Activo" },
        { "q": "Servidor FTP habitual en Ubuntu:", "a": "vsftpd" },
        { "q": "Directiva vsftpd para deshabilitar acceso anónimo:", "a": "anonymous_enable=NO" },
        { "q": "Directiva vsftpd para enjaular a todos los usuarios por defecto:", "a": "chroot_local_user=YES" },
        { "q": "Comando FTP para subir archivos:", "a": "put" },
        { "q": "Ventaja de FTP sobre otros protocolos de transferencia:", "a": "Reanudar transferencias interrumpidas" },
        { "q": "Archivo de lista de usuarios enjaulados en vsftpd:", "a": "/etc/vsftpd.chroot_list" },
        { "q": "Significado de local_umask=022 en vsftpd:", "a": "Permisos 755 para los archivos subidos" },
        { "q": "Directiva vsftpd para limitar el número de conexiones:", "a": "max_clients" },
        { "q": "Cliente gráfico FTP más recomendado:", "a": "FileZilla" },
        { "q": "Alternativas seguras a FTP:", "a": "SFTP o FTPS" }
      ]
    },
    {
      "id": "ut5",
      "title": "UT5 · Correo electrónico",
      "cards": [
        { "q": "Protocolo usado entre servidores de correo:", "a": "SMTP" },
        { "q": "Puerto SMTP estándar:", "a": "25" },
        { "q": "Puerto POP3 sin SSL:", "a": "110" },
        { "q": "Puertos IMAP:", "a": "143 (sin SSL) / 993 (con SSL)" },
        { "q": "Agente que transfiere mensajes entre servidores (encaminador):", "a": "MTA" },
        { "q": "Agente que entrega el mensaje al buzón local:", "a": "MDA" },
        { "q": "Agente que usa el usuario para leer el correo (programa cliente):", "a": "MUA" },
        { "q": "Diferencia principal entre POP3 e IMAP:", "a": "POP3 descarga y borra; IMAP sincroniza en servidor" },
        { "q": "Registro DNS que indica los servidores de correo de un dominio:", "a": "MX" },
        { "q": "Para qué sirven SPF y DKIM:", "a": "Reducir spam y suplantación de identidad" },
        { "q": "Ventaja principal de POP3:", "a": "Lectura offline tras la descarga" },
        { "q": "¿Cómo se llama el cliente de correo vía navegador?", "a": "Webmail" }
      ]
    },
    {
      "id": "ut6",
      "title": "UT6 · Mensajería y Chat",
      "cards": [
        { "q": "Protocolo de salas de chat clásicas:", "a": "IRC" },
        { "q": "Características de IRC:", "a": "Canales y nicknames" },
        { "q": "XMPP es un estándar:", "a": "Abierto, distribuido y extensible" },
        { "q": "Inconveniente principal de XMPP:", "a": "Tráfico alto por los mensajes de presencia" },
        { "q": "Servidor XMPP habitual en Windows:", "a": "OpenFire" },
        { "q": "Puerto de administración web de OpenFire:", "a": "9090" },
        { "q": "Cliente XMPP para OpenFire:", "a": "Spark" },
        { "q": "Servidor XMPP habitual en Linux:", "a": "ejabberd" },
        { "q": "Ruta del archivo de configuración de ejabberd:", "a": "/etc/ejabberd/ejabberd.yml" },
        { "q": "Error SSL en Pidgin, ¿cómo se resuelve?", "a": "Gestionar en la sección \"Certificados\"" },
        { "q": "Identificador único de usuario en XMPP:", "a": "JID" },
        { "q": "Función del servidor de listas Mailman:", "a": "Gestionar suscripciones y envíos de listas de correo" }
      ]
    },
    {
      "id": "ut7",
      "title": "UT7 · Streaming y VoIP",
      "cards": [
        { "q": "Aspecto crítico en streaming en directo (live):", "a": "Latencia mínima" },
        { "q": "¿Cómo se llama la técnica que permite reproducir mientras se descarga?", "a": "Descarga progresiva" },
        { "q": "¿Qué es el streaming propiamente dicho?", "a": "Descarga de fragmentos en tiempo real sin guardar el archivo" },
        { "q": "Servidor de audio en Ubuntu para streaming:", "a": "Icecast" },
        { "q": "Puerto típico de Icecast:", "a": "8000" },
        { "q": "Directiva para habilitar el servicio Icecast:", "a": "ENABLE=YES" },
        { "q": "¿Qué mide la frecuencia de muestreo?", "a": "Muestras de audio capturadas por segundo" },
        { "q": "Frecuencia de muestreo típica de un CD:", "a": "44.100 Hz" },
        { "q": "¿Qué es el Bitrate?", "a": "Bits transmitidos por segundo (calidad del audio/vídeo)" },
        { "q": "Diferencia entre CBR y VBR:", "a": "CBR = tasa fija; VBR = tasa variable/adaptativa" },
        { "q": "Tecnología para streaming con baja latencia en navegadores:", "a": "WebRTC" },
        { "q": "Protocolo de señalización en VoIP:", "a": "SIP" },
        { "q": "Problema VoIP relacionado con la variación del retardo:", "a": "Jitter" }
      ]
    },
    {
      "id": "ut8",
      "title": "UT8 · Aplicaciones web",
      "cards": [
        { "q": "Diferencia entre servidor web y servidor de aplicaciones:", "a": "Web: contenido estático; Aplicaciones: lógica y sesiones" },
        { "q": "Directorio público habitual en proyectos PHP:", "a": "/public" },
        { "q": "Comando para habilitar un sitio en Apache:", "a": "a2ensite" },
        { "q": "Comando para recargar Apache sin corte:", "a": "systemctl reload apache2" },
        { "q": "Formato de despliegue en Tomcat (Java):", "a": "Archivo WAR" },
        { "q": "Ejemplo de servidor de aplicaciones Java:", "a": "Tomcat" },
        { "q": "Método de autenticación básica HTTP:", "a": "Base64 (requiere HTTPS para ser seguro)" },
        { "q": "Sistema de autenticación corporativa:", "a": "LDAP" },
        { "q": "Permisos recomendados para archivos PHP:", "a": "644" },
        { "q": "Directiva Apache para evitar el listado de directorios:", "a": "Options -Indexes" },
        { "q": "Comando para verificar módulos PHP instalados:", "a": "php -m" },
        { "q": "¿Cómo se llama el inicio de sesión único?", "a": "SSO (Single Sign-On)" }
      ]
    }
  ]
};
