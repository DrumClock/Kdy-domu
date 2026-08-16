// Jednoduchý offline cache pro appku "Kdy můžu domů?"
const CACHE = 'kdy-domu-v3';
const ASSETS = [
  'index.html',
  'sdilet.html',
  'qr.png',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable.png'
];

// při instalaci ulož soubory do cache
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

// smaž staré verze cache
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// nejdřív zkus síť, při výpadku vezmi z cache (aby appka fungovala offline)
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
