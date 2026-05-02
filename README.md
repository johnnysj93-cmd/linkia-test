# Linkia Tests

Aplicacion web estatica para practicar autoevaluaciones de ASIR.

## Uso local

```bash
python3 -m http.server 8000
```

Abre:

```text
http://127.0.0.1:8000/
```

## Publicar con GitHub Pages

1. Sube este repositorio a GitHub.
2. Entra en `Settings > Pages`.
3. Selecciona `Deploy from a branch`.
4. Usa la rama `main` y la carpeta `/root`.

La URL tendra este formato:

```text
https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/
```

El seguimiento de intentos se guarda en el navegador de cada persona mediante `localStorage`.
