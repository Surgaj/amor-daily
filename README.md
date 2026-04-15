# Amor Daily

Aplicación web estática con una experiencia romántica inspirada en anime.

## Demo
- https://surgaj.github.io/amor-daily/

## Cómo ejecutar en local
Como es una app estática, puedes abrir `index.html` directamente en el navegador.

Opcionalmente, puedes usar un servidor local:

```bash
python -m http.server 8080
```

Luego abre `http://localhost:8080`.

## Estructura del proyecto
- `index.html`: interfaz, estilos embebidos y lógica principal de la app.
- `index.css`: hoja de estilos adicional (actualmente sin contenido).
- `index.js`: script adicional (actualmente sin contenido).
- `tests/index.test.mjs`: pruebas básicas de regresión del HTML/JS embebido.

## Funcionalidades principales
- Navegación por pestañas (mensajes, poemas, frases, elogios y memorias).
- Modo oscuro con persistencia en `localStorage`.
- Inserción de mensajes con contador de caracteres.
- Modal de frases de anime para autocompletar mensajes.

## Pruebas
Ejecuta:

```bash
node --test
```
