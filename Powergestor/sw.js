const CACHE_NAME = 'powergestor-v2';
const urlsToCache = [
  '/Powergestor/',
  '/Powergestor/index.html',
  '/manifest-powergestor.json',
  '/icons/pg-192x192.png',
  '/icons/pg-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => cached);

      return cached || fetchPromise;
    })
  );
});


self.addEventListener('activate', event => {
  event.waitUntil(
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

navigator.serviceWorker.register('/sw-powergestor.js', { scope: '/powergestor/' });

