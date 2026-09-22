#!/usr/bin/env python3
"""Genera la web publicable en docs/ (GitHub Pages) y un HTML único en dist/.
Uso: python3 build.py
"""
import os, re, glob, json, hashlib, base64, urllib.parse, shutil

ROOT = os.path.dirname(os.path.abspath(__file__))
DOCS = os.path.join(ROOT, 'docs')
DIST = os.path.join(ROOT, 'dist')

def read(p):
    with open(os.path.join(ROOT, p), encoding='utf-8') as f:
        return f.read()

css = read('src/styles.css')
app = read('src/app.js')
files = ['src/data/_head.js'] + sorted(os.path.relpath(p, ROOT) for p in glob.glob(os.path.join(ROOT, 'src', 'data', 'd*.js')))
data = '\n'.join(read(f) for f in files)
n = len(re.findall(r"^q\(", data, re.M))

ICON_SVG = read('icon/icon.svg')
SVG_URI = 'data:image/svg+xml,' + urllib.parse.quote(ICON_SVG)
def b64(f): return base64.b64encode(open(os.path.join(ROOT, f), 'rb').read()).decode()

TITLE = 'Credencial Taxi AMB'
DESC = ("App d'estudi per a la Credencial del Taxi de l'Àrea Metropolitana de Barcelona. "
        "Preguntes tipus test en català i castellà, repetició espaiada i simulacre d'examen.")

MANIFEST = {
    "name": "Credencial Taxi AMB 2026", "short_name": "Taxi AMB",
    "start_url": "./", "scope": "./", "id": "./", "display": "standalone",
    "background_color": "#0f1216", "theme_color": "#e8a020", "description": DESC,
    "icons": [
        {"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
        {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
        {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
    ],
}

BODY = """<div class="top" id="top"></div>
<main id="app"></main>
<div class="sheet" id="sheet"><div class="scrim"></div><div class="panel"></div></div>
<div class="toast" id="toast"></div>"""

INNER = ('<script>window.APP_ICON=' + json.dumps(SVG_URI) + ';</script>\n<style>\n' + css + '\n</style>\n' + BODY +
         '\n<script>\n' + data + '\n</script>\n<script>\n' + app + '\n</script>\n')

def page(links):
    return f"""<!DOCTYPE html>
<html lang="ca">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,maximum-scale=5">
<title>{TITLE}</title>
<meta name="description" content="{DESC}">
<meta name="theme-color" content="#e8a020" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0f1216" media="(prefers-color-scheme: dark)">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Taxi AMB">
{links}
</head>
<body>
{INNER}
</body>
</html>
"""

# ---- docs/ : web para GitHub Pages ----
os.makedirs(DOCS, exist_ok=True)
index = page('<link rel="manifest" href="manifest.webmanifest">\n'
             '<link rel="apple-touch-icon" href="icon-180.png">\n'
             '<link rel="icon" type="image/svg+xml" href="icon.svg">\n'
             '<link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">')
open(os.path.join(DOCS, 'index.html'), 'w', encoding='utf-8').write(index)
open(os.path.join(DOCS, 'manifest.webmanifest'), 'w', encoding='utf-8').write(json.dumps(MANIFEST, ensure_ascii=False, indent=1))
for f in ['icon.svg', 'icon-180.png', 'icon-192.png', 'icon-512.png']:
    shutil.copy(os.path.join(ROOT, 'icon', f), os.path.join(DOCS, f))
open(os.path.join(DOCS, '.nojekyll'), 'w').write('')

# versión de caché = hash del contenido: cada cambio fuerza la actualización en los móviles
ver = hashlib.sha1(index.encode()).hexdigest()[:10]
SW = """/* offline cache — generado por build.py */
const C='taxi-amb-%s';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const url=new URL(e.request.url);
  // la página: red primero (para recibir versiones nuevas), caché si no hay conexión
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put('./index.html',cp));return res;})
      .catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)));
});
""" % ver
open(os.path.join(DOCS, 'sw.js'), 'w', encoding='utf-8').write(SW)

# ---- dist/ : un único HTML autocontenido (opcional) ----
os.makedirs(DIST, exist_ok=True)
standalone = page('<link rel="manifest" href="data:application/manifest+json,' +
                  urllib.parse.quote(json.dumps(dict(MANIFEST, icons=[
                      {"src": 'data:image/png;base64,' + b64('icon/icon-192.png'), "sizes": "192x192", "type": "image/png"},
                      {"src": 'data:image/png;base64,' + b64('icon/icon-512.png'), "sizes": "512x512", "type": "image/png"}]),
                      ensure_ascii=False, separators=(',', ':'))) + '">\n'
                  '<link rel="apple-touch-icon" href="data:image/png;base64,' + b64('icon/icon-180.png') + '">\n'
                  '<link rel="icon" type="image/svg+xml" href="' + SVG_URI + '">')
open(os.path.join(DIST, 'credencial-taxi-amb.html'), 'w', encoding='utf-8').write(standalone)

print(f'preguntas: {n} | docs/index.html {len(index)/1024:.0f} KB | sw {ver}')
