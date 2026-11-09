/* Service worker: offline gebruik. Verhoog VERSION bij elke release. */
const VERSION = 'espanol-latino-v3';
const ASSETS = ['./', 'index.html', 'css/app.css', 'js/core.js', 'js/sync.js', 'js/conjugate.js', 'js/curriculum.js', 'js/gen.js', 'js/ai.js', 'js/lesson.js', 'js/app.js',
  'content/a1.js', 'content/a2.js', 'content/extra.js', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.hostname === 'api.anthropic.com' || url.hostname === 'api.github.com') return;
  if (url.origin === location.origin) {
    // eerst netwerk (altijd de nieuwste versie), anders cache
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request, { ignoreSearch: true })));
  } else if (/fonts\.(googleapis|gstatic)\.com/.test(url.hostname)) {
    e.respondWith(caches.match(e.request).then(m => m || fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; })));
  }
});
