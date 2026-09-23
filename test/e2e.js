// Pruebas E2E. Uso: node test/e2e.js [url]   (sin url, sirve docs/ en local en el puerto 8123)
const { chromium } = require('playwright');
const URL = process.argv[2] || 'http://localhost:8123/';
const ORIGIN = new (require('url').URL)(URL).origin;
const results = [];
const errors = [];
const ok = (name, cond, extra = '') => { results.push([name, !!cond, extra]); console.log((cond ? 'OK   ' : 'FAIL ') + name + (extra ? '  ' + extra : '')); };

/* servidor estático mínimo para docs/ */
const http = require('http'), fs = require('fs'), path = require('path');
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
let server = null;
if (!process.argv[2]) {
  const root = path.join(__dirname, '..', 'docs');
  server = http.createServer((req, res) => {
    let f = path.join(root, decodeURIComponent(req.url.split('?')[0]));
    if (f.endsWith(path.sep)) f += 'index.html';
    fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); return res.end('no'); } res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); res.end(d); });
  }).listen(8123, '127.0.0.1');
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

function watch(page, tag) {
  page.on('console', m => { if (m.type() === 'error') errors.push(`[${tag}] console: ${m.text()}`); });
  page.on('pageerror', e => errors.push(`[${tag}] pageerror: ${e.message}`));
}
const state = page => page.evaluate(() => { try { return JSON.parse(localStorage.getItem('taxiamb.v1')); } catch (e) { return null; } });
const counts = s => { let a = 0, k = 0; for (const i in (s && s.p) || {}) { a += s.p[i].ok || 0; k += s.p[i].ko || 0; } return { a, k }; };
const counter = page => page.locator('.counter').innerText();
async function answerOne(page) { await page.locator('.opt').first().click(); await page.locator('#next2').click(); }
async function open(ctx, tag) { const p = await ctx.newPage(); watch(p, tag); await p.goto(URL); await p.waitForSelector('#go-study'); return p; }

(async () => {
  const browser = await chromium.launch();

  /* ---------- visitante A ---------- */
  const ctxA = await browser.newContext({ viewport: { width: 390, height: 800 } });
  let p = await open(ctxA, 'A');

  // primera visita: aviso de instalación
  ok('primera visita: aviso de instalar visible', await p.locator('#install-tip').count() === 1);
  const tipTxt = await p.locator('#install-tip').innerText();
  ok('aviso menciona iPhone y Android', /iPhone/.test(tipTxt) && /Android/.test(tipTxt));
  await p.locator('#tip-close').click();
  ok('aviso se cierra', await p.locator('#install-tip').count() === 0);
  await p.reload(); await p.waitForSelector('#go-study');
  ok('aviso cerrado no vuelve a salir', await p.locator('#install-tip').count() === 0);

  // a) 3 respuestas, cerrar pestaña, reabrir
  await p.locator('#go-study').click();
  await p.waitForSelector('.opt');
  for (let i = 0; i < 3; i++) await answerOne(p);
  ok('a) tras 3 respuestas el contador marca 4/', (await counter(p)).startsWith('4/'), await counter(p));
  const s1 = await state(p); const c1 = counts(s1);
  ok('a) 3 respuestas guardadas en localStorage', c1.a + c1.k === 3, JSON.stringify(c1));
  const idsBefore = s1.cur && s1.cur.ids.slice(0, 4).join(',');
  await p.close();
  p = await ctxA.newPage(); watch(p, 'A'); await p.goto(URL); await p.waitForSelector('.counter');
  ok('a) al reabrir continúa en la misma pregunta (4/)', (await counter(p)).startsWith('4/'), await counter(p));
  const s2 = await state(p); const c2 = counts(s2);
  ok('a) aciertos/fallos conservados', c2.a === c1.a && c2.k === c1.k, JSON.stringify(c2));
  ok('a) misma sesión (mismos ids)', s2.cur && s2.cur.ids.slice(0, 4).join(',') === idsBefore);
  const boxesBefore = JSON.stringify(Object.values(s1.p).map(x => x.b));
  ok('a) repetición espaciada (cajas) conservada', JSON.stringify(Object.values(s2.p).map(x => x.b)) === boxesBefore);
  ok('a) racha e historial presentes', s2.streak >= 1 && Array.isArray(s2.hist));

  // f) cambio de idioma a mitad del test
  const qBefore = await p.locator('.qtext').innerText();
  await p.locator('.lang button[data-l="es"]').click();
  ok('f) idioma cambia a ES sin perder sesión', (await counter(p)).startsWith('4/') && (await state(p)).lang === 'es');
  const c3 = counts(await state(p));
  ok('f) respuestas intactas tras cambiar idioma', c3.a === c1.a && c3.k === c1.k);
  await answerOne(p);
  ok('f) se puede seguir respondiendo (5/)', (await counter(p)).startsWith('5/'));
  await p.locator('.lang button[data-l="ca"]').click();

  // pausar: Sortir -> portada con Reprendre/Descartar -> reanudar
  await p.locator('#b-back').click();
  await p.waitForSelector('#go-resume');
  ok('«Sortir» pausa: salen Reprendre y Descartar', await p.locator('#go-resume').count() === 1 && await p.locator('#go-discard').count() === 1);
  await p.reload(); await p.waitForSelector('#go-resume');
  ok('pausa persiste tras recargar (no reanuda sola)', await p.locator('#go-resume').count() === 1);
  await p.locator('#go-resume').click(); await p.waitForSelector('.counter');
  ok('Reprendre vuelve a la pregunta 5/', (await counter(p)).startsWith('5/'), await counter(p));
  await p.locator('#b-back').click(); await p.waitForSelector('#go-discard');
  await p.locator('#go-discard').click(); await p.locator('#ask-yes').click();
  await sleep(200);
  ok('Descartar (sesión de estudio) elimina la sesión', (await state(p)).cur === null && await p.locator('#go-resume').count() === 0);
  const c4 = counts(await state(p));
  ok('Descartar conserva lo respondido', c4.a + c4.k === 4, JSON.stringify(c4));

  // e) simulacro: pausar y descartar
  await p.locator('#go-mock').click(); await p.locator('#go').click(); await p.waitForSelector('.opt');
  ok('e) simulacro con cronómetro', await p.locator('#timer').count() === 1);
  await answerOne(p); await answerOne(p);
  await p.locator('#b-back').click(); await p.waitForSelector('#go-resume');
  let sm = await state(p);
  ok('e) simulacro pausado (mode=mock, 80 preguntas)', sm.cur && sm.cur.mode === 'mock' && sm.cur.ids.length === 80 && sm.cur.paused === true);
  await p.reload(); await p.waitForSelector('#go-resume');
  await p.locator('#go-resume').click(); await p.waitForSelector('.counter');
  ok('e) simulacro reanuda en la 3/80', (await counter(p)).startsWith('3/80'), await counter(p));
  await p.locator('#b-back').click(); await p.waitForSelector('#go-discard');
  await p.locator('#go-discard').click(); await p.locator('#ask-yes').click(); await sleep(200);
  sm = await state(p);
  ok('e) Descartar funciona en el simulacro', sm.cur === null && await p.locator('#go-resume').count() === 0);
  await p.reload(); await p.waitForSelector('#go-study');
  ok('e) tras recargar el simulacro sigue descartado', await p.locator('#go-resume').count() === 0 && (await state(p)).cur === null);

  // ajustes
  await p.locator('#b-set').click(); await p.waitForSelector('#s-local');
  const setTxt = await p.locator('#s-local').innerText();
  ok('Ajustes (CA): aviso almacenamiento local', /només en aquest dispositiu/.test(setTxt) && /esborres/.test(setTxt) && /Exportar/.test(setTxt));
  await p.locator('#s-close').click();
  await p.locator('.lang button[data-l="es"]').click();
  await p.locator('#b-set').click(); await p.waitForSelector('#s-local');
  const setEs = await p.locator('#s-local').innerText();
  ok('Ajustes (ES): aviso almacenamiento local', /solo en este dispositivo/.test(setEs) && /borras los datos/.test(setEs) && /Exportar/.test(setEs));
  const legalEs = await p.locator('#s-legal').innerText();
  ok('Ajustes (ES): aviso legal (no oficial + IA)', /no es un producto ni un servicio oficial/i.test(legalEs) && /Incrementa/.test(legalEs) && /IA/.test(legalEs));
  await p.locator('#s-close').click();
  await p.locator('.lang button[data-l="ca"]').click();
  await p.locator('#b-set').click(); await p.waitForSelector('#s-legal');
  const legalCa = await p.locator('#s-legal').innerText();
  ok('Ajustes (CA): aviso legal (no oficial + IA)', /no és un producte ni un servei oficial/i.test(legalCa) && /Incrementa/.test(legalCa) && /IA/.test(legalCa));
  await p.locator('#s-close').click();
  await p.locator('.lang button[data-l="es"]').click();
  await p.locator('#b-set').click(); await p.waitForSelector('#s-local');
  const [dl] = await Promise.all([p.waitForEvent('download'), p.locator('#s-exp').click()]);
  ok('exportar: descarga normal del navegador', /progres-taxi-amb-.*\.json$/.test(dl.suggestedFilename()), dl.suggestedFilename());
  const exported = JSON.parse(require('fs').readFileSync(await dl.path(), 'utf8'));
  ok('exportar: contiene el estado (state.p)', exported.state && exported.state.p && Object.keys(exported.state.p).length >= 4);
  await p.locator('#s-close').click();
  ok('persist() disponible', await p.evaluate(() => typeof (navigator.storage && navigator.storage.persist) === 'function'));
  ok('sin restos de la nube en la página', await p.evaluate(() => !document.querySelector('.syncpill') && !/Claude/.test(document.body.innerText)));

  // b) borrar localStorage y recuperar desde IndexedDB
  await p.locator('.lang button[data-l="ca"]').click();
  await p.locator('#go-study').click(); await p.waitForSelector('.opt');
  await answerOne(p);
  const sBefore = await state(p); const cB = counts(sBefore);
  await sleep(600);
  await p.close();
  const q = await ctxA.newPage(); watch(q, 'A-clear');
  await q.goto(ORIGIN + '/icon.svg');
  await q.evaluate(() => localStorage.clear());
  const cleared = await q.evaluate(() => localStorage.getItem('taxiamb.v1'));
  await q.close();
  ok('b) localStorage borrado', cleared === null);
  p = await ctxA.newPage(); watch(p, 'A'); await p.goto(URL); await p.waitForSelector('.counter, #go-study');
  await sleep(500);
  const sAfter = await state(p); const cA = counts(sAfter);
  ok('b) progreso recuperado desde IndexedDB', cA.a === cB.a && cA.k === cB.k && cA.a + cA.k >= 5, JSON.stringify({ antes: cB, despues: cA }));
  ok('b) sesión en curso recuperada', !!(sAfter && sAfter.cur) && await p.locator('.counter').count() === 1, await p.locator('.counter').count() ? await counter(p) : 'sin sesión');
  await p.waitForTimeout(400);
  // el espejo IDB no se ha pisado con un estado vacío
  await p.reload(); await sleep(400);
  const cA2 = counts(await state(p));
  ok('b) tras recargar de nuevo sigue todo', cA2.a + cA2.k === cA.a + cA.k);

  // d) sin conexión
  await p.evaluate(async () => { await navigator.serviceWorker.ready; });
  await sleep(1200);
  await p.reload(); await sleep(800);           // el SW ya controla la página
  const cached = await p.evaluate(async () => (await caches.keys()).length);
  ok('d) service worker y caché activos', cached >= 1);
  await ctxA.setOffline(true);
  await p.reload(); await p.waitForSelector('#app *');
  ok('d) sin conexión: la app carga', (await p.title()).includes('Taxi') && await p.locator('.top-in').count() === 1);
  const cOff = counts(await state(p));
  ok('d) sin conexión: el progreso está', cOff.a + cOff.k === cA.a + cA.k);
  if (await p.locator('.counter').count() === 0) { await p.locator('#go-study').click(); }
  await p.waitForSelector('.opt');
  const before = await counter(p);
  await answerOne(p);
  ok('d) sin conexión: se puede responder', (await counter(p)) !== before, before + ' → ' + await counter(p));
  await ctxA.setOffline(false);

  // ---------- visitante B: contexto distinto ----------
  const ctxB = await browser.newContext({ viewport: { width: 390, height: 800 } });
  const pb = await open(ctxB, 'B');
  const sB = await state(pb);
  ok('c) visitante B empieza limpio', counts(sB).a + counts(sB).k === 0 && !sB.cur);
  ok('c) visitante B ve el aviso de instalar', await pb.locator('#install-tip').count() === 1);
  await pb.locator('#go-study').click(); await pb.waitForSelector('.opt');
  await answerOne(pb);
  const cBB = counts(await state(pb));
  const cAA = counts(await state(p));
  ok('c) progresos separados', cBB.a + cBB.k === 1 && cAA.a + cAA.k > 1, JSON.stringify({ A: cAA, B: cBB }));

  // aviso no se muestra si está instalada
  const ctxC = await browser.newContext();
  await ctxC.addInitScript(() => { Object.defineProperty(navigator, 'standalone', { value: true }); });
  const pc = await open(ctxC, 'C');
  ok('aviso oculto si la app está instalada (standalone)', await pc.locator('#install-tip').count() === 0);

  await sleep(300);
  ok('g) ningún error en la consola', errors.length === 0, errors.join(' | '));
  await browser.close();
  const failed = results.filter(r => !r[1]);
  console.log(`\n${results.length - failed.length}/${results.length} pruebas correctas`);
  process.exit(failed.length ? 1 : 0);
})().catch(e => { console.error('ERROR', e); process.exit(2); });
