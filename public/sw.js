const CACHE_NAME = 'powergestor-v2';
// const urlsToCache = [
//   '/',
//   '/index.html', // This will be handled by Vite's build output
//   '/style.css', // This will be handled by Vite's build output
//   '/manifest.json',
//   '/icons/pg-192x192.png', // Corrected from original index.html path
//   '/icons/pg-512x512.png'  // Corrected from original index.html path
// ];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => {
        // fallback opcional (pode ser um arquivo offline.html)
      })
  );
});

self.addEventListener('activate', event => {
  event(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});