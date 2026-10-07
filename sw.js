const CACHE='mudi-visual-v5';
const ASSETS=['./','./index.html','./manifest.webmanifest',
'./assets/plantas.png','./assets/quimica.png','./assets/segundo-cerebro.png',
'./assets/anfiteatro.png','./assets/eixo-intestino-cerebro.png','./assets/digital.png',
'./assets/capa-mudi.png','./assets/anatomia.png','./assets/aula1.jpg','./assets/aula2.jpg','./assets/aula3.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
