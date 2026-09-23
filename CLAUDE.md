# Credencial Taxi AMB — app de estudio (PWA)

App web offline para estudiar el manual de la Credencial del Taxi del AMB 2026. 820 preguntas tipo test en catalán y castellano. Se publica en GitHub Pages desde la carpeta `docs/`.

## Estructura
- `src/app.js`: toda la lógica (vistas, repetición espaciada Leitner de 5 cajas, simulacro, idioma CA/ES, guardado).
- `src/styles.css`: estilos; tokens de color en `:root`, con modo oscuro.
- `src/data/_head.js`: define `q(m, s, qCA, qES, opcionesCA, opcionesES, correcta, explicacionCA, explicacionES, referencia, flag)`.
- `src/data/d*.js`: el banco de preguntas por módulo (tar, reg, pro, eix, via, amb, cat, cst).
- `src/eixample_map.js`: datos del mòdul "Mapa Eixample" (prova pilot, `viewEixMap()` en app.js) — carrers, places, barris i punts d'interès amb adreça real (fets, no redacció del manual). No confondre amb `src/data/`.
- `lab/`: prototips locals de treball, **no es puja al repositori** (està a `.gitignore`).
- `icon/`: icono de la app (SVG + PNG 180/192/512).
- `build.py`: genera `docs/` (web para GitHub Pages) y `dist/credencial-taxi-amb.html` (un único HTML).
- `docs/`: **generado, no editar a mano**. Se sube al repo porque GitHub Pages lo sirve.

## Flujo de trabajo para cualquier cambio
1. Editar en `src/` (o `icon/`).
2. `python3 build.py`. Regenera `docs/`; la versión de caché del service worker cambia sola, así que los móviles reciben la versión nueva la próxima vez que abran la app con conexión.
3. Probar en local: `python3 -m http.server -d docs 8000` y abrir http://localhost:8000.
4. `git add -A && git commit -m "..." && git push`. GitHub Pages publica en 1–2 minutos.

## Reglas importantes
- **El progreso de cada usuario vive en su navegador** (localStorage `taxiamb.v1` + copia `taxiamb.v1.bak` + IndexedDB `taxiamb`). Cada teléfono tiene su progreso separado y no hay login. No cambiar la clave ni el formato de `S` sin migración: se perdería el avance de los usuarios.
- Los índices de pregunta (`q.i`) son la posición en `window.QBANK`, y el progreso (`S.p[i]`) se guarda por ese índice. **Añadir preguntas solo al final del último archivo de datos** (o en un archivo nuevo cuyo nombre ordene detrás, p. ej. `dd_*.js`). Insertar o borrar en medio desplaza los índices y mezcla el progreso guardado.
- Todo texto visible va en los dos idiomas (`T` en app.js, o `{ca, es}`).
- No usar `window.confirm`/`alert`; usar `ask(msg, etiquetaOk, onYes, peligro)`.
- No hay copia en la nube ni login: el guardado es solo local (localStorage + espejo IndexedDB, que se vuelca al ocultar/cerrar la app). El aviso de instalación usa la clave aparte `taxiamb.v1.tip`.
- Pruebas: `cd test && npm i && npx playwright install chromium && node e2e.js` (sirve `docs/` solo). Ejecutarlas antes de publicar.
- Umbrales de error por módulo en el simulacro (pág. 3 del manual): 2/3/4/2/3/3/4/4 sobre 10.

## Puesta en marcha (una sola vez)
1. `gh auth login` (o credenciales de git configuradas).
2. `git init && git add -A && git commit -m "App estudio taxi AMB"`
3. `gh repo create taxi-amb --public --source=. --push`
4. Activar Pages: `gh api -X POST repos/{owner}/taxi-amb/pages -f "source[branch]=main" -f "source[path]=/docs"`
5. URL: `https://<usuario>.github.io/taxi-amb/`. Abrirla en el móvil → Compartir → «Añadir a pantalla de inicio».
