/* CNC Machinist PWA · offline shell + local CAD engine. */
const CACHE = 'cnc-machinist-3da84d6233a4';
const ASSETS = [
 './', './index.html', './manifest.webmanifest',
 './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png',
 './cad/occt-import-js.js', './cad/occt-import-js.wasm'
];
self.addEventListener('install', event => {
 event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
 self.skipWaiting();
});
self.addEventListener('activate', event => {
 event.waitUntil((async () => {
  for (const name of await caches.keys()) {
   if (name.startsWith('cnc-machinist-') && name !== CACHE) await caches.delete(name);
  }
  await self.clients.claim();
 })());
});
self.addEventListener('fetch', event => {
 const req = event.request;
 if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
 event.respondWith((async () => {
   const cached = await caches.match(req);
   if (cached) return cached;
   try {
     const res = await fetch(req);
     if (res.ok && res.type === 'basic') {
       const cache = await caches.open(CACHE);
       await cache.put(req, res.clone());
     }
     return res;
   } catch (error) {
     if (req.mode === 'navigate') {
       const shell = await caches.match('./index.html');
       if (shell) return shell;
     }
     throw error;
   }
 })());
});
