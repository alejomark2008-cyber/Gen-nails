# GEN NAILS — 3D Editorial Experience

Proyecto web preparado para subir directamente a GitHub Pages o Vercel.

## Dirección visual
- Experiencia visual 3D editorial, con profundidad, iluminación, objetos flotantes y movimiento parallax sutil.
- Paleta: rosa, dorado, plateado, blanco y fondos oscuros para contraste.
- Tipografía de titulares grande y moderna combinada con serif editorial.
- Diseño adaptable a celular y escritorio.
- Galerías reales, filtros, ampliación de fotografías y navegación móvil.

## Contenido visual
**Las únicas fotografías del proyecto son las 48 páginas del PDF entregado.**
No se incluyen ni se utilizan fotografías ni logo del ZIP anterior.

La carpeta `assets/` contiene las 48 imágenes extraídas directamente del PDF y renombradas con un número de página y una descripción. El archivo `assets-manifest.json` contiene la página original, la ruta y la descripción de cada archivo.

### Organización del material
- `01`: certificados y reconocimiento académico.
- `02–28`: portafolio de manicuras y trabajos.
- `29–35`: nail art, relieves y diseños tridimensionales.
- `36–42`: muestrarios de técnicas y diseños sobre tips.
- `43–48`: proyectos de fantasía y caracterización (dragones, Medusa y Avatar).

Todas las 48 imágenes aparecen incorporadas en las secciones correspondientes del sitio.

## Contactos
- WhatsApp: +57 323 424 5644 — https://wa.me/573234245644
- Instagram: @bygenesisromero5 — https://www.instagram.com/bygenesisromero5/

## Subir a GitHub
1. Descomprime el ZIP.
2. En tu repositorio, sube `index.html`, `style.css`, `script.js`, `assets-manifest.json` y `README.md` a la raíz.
3. Crea una carpeta llamada exactamente `assets`.
4. Sube dentro de `assets/` las 48 imágenes, sin cambiar sus nombres.
5. No crees una carpeta adicional alrededor de `assets`; las rutas del sitio esperan `assets/nombre-del-archivo.jpg`.

No hace falta modificar rutas manualmente.

## Archivos
- `index.html`: estructura y contenido.
- `style.css`: interfaz, responsive y efectos visuales.
- `script.js`: menú, filtros, lightbox y parallax.
- `assets/`: 48 fotografías reales del PDF.
- `assets-manifest.json`: inventario de imágenes y descripciones.

Nota: los efectos 3D se implementan con CSS y JavaScript sin depender de librerías pesadas. Las fuentes se cargan desde Google Fonts; si no hay conexión, se usan fuentes de respaldo.
