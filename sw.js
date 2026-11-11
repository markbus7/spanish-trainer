/* Service worker: offline gebruik. Het versienummer staat in js/version.js. */
importScripts('js/version.js');
const VERSION = 'espanol-latino-' + self.SPT_VERSION.number;
// Opnames veranderen nooit (de bestandsnaam is een hash van de tekst), dus ze krijgen een eigen cache die een update overleeft.
const AUDIO_CACHE = 'espanol-latino-audio';
const ASSETS = ['./', 'index.html', 'css/app.css', 'js/version.js', 'js/core.js', 'js/sync.js', 'js/conjugate.js', 'js/curriculum.js', 'js/gen.js', 'js/games.js', 'js/words.js', 'js/ai.js', 'js/lesson.js', 'js/app.js',
  'content/a1.js', 'content/a2.js', 'content/a1-plus.js', 'content/a2-plus.js', 'content/b1.js', 'content/extra.js', 'content/oefeningen-plus.js', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== AUDIO_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.hostname === 'api.anthropic.com' || url.hostname === 'api.github.com') return;
  if (url.origin === location.origin && /\/audio\/[^/]+\.mp3$/.test(url.pathname)) {
    // opname: eerst uit de cache (ook offline), anders het hele bestand ophalen en bewaren
    e.respondWith(audio(url.origin + url.pathname, e.request.headers.get('range')));
  } else if (url.origin === location.origin) {
    // eerst netwerk (altijd de nieuwste versie), anders cache. 'no-cache' slaat ook de
    // HTTP-cache van de browser over, zodat herladen meteen de nieuwste versie geeft.
    e.respondWith(fetch(e.request.url, { cache: 'no-cache', credentials: 'same-origin' }).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request, { ignoreSearch: true })));
  } else if (/fonts\.(googleapis|gstatic)\.com/.test(url.hostname)) {
    e.respondWith(caches.match(e.request).then(m => m || fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; })));
  }
});

// Safari speelt audio uit een service worker alleen af als een 'Range'-verzoek een 206-antwoord krijgt.
async function audio(key, range) {
  const c = await caches.open(AUDIO_CACHE);
  let r = await c.match(key);
  if (!r) {
    r = await fetch(key);
    if (!r.ok || r.status !== 200) return r;
    await c.put(key, r.clone());
  }
  if (!range) return r;
  const buf = await r.arrayBuffer(), m = /bytes=(\d*)-(\d*)/.exec(range) || [], size = buf.byteLength;
  let start = m[1] ? +m[1] : 0, end = m[2] ? Math.min(+m[2], size - 1) : size - 1;
  if (!m[1] && m[2]) { start = Math.max(0, size - +m[2]); end = size - 1; }
  return new Response(buf.slice(start, end + 1), { status: 206, headers: {
    'Content-Type': 'audio/mpeg', 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': String(end - start + 1), 'Accept-Ranges': 'bytes' } });
}
