// sw.js - basic service worker to cache static assets
const CACHE_NAME = 'mini-shop-cache-v1';
const OFFLINE_ASSETS = [
  '/',
  '/index.html',
  '/cart.html',
  '/style.css',
  '/app.js',
  '/assets/images/smartphone.jpg',
  '/assets/images/laptop.jpg',
  '/assets/images/tshirt.jpg'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (evt) => {
  // network-first for API calls can be used, but for static files prefer cache-first
  evt.respondWith(
    caches.match(evt.request).then(cached => {
      if(cached) return cached;
      return fetch(evt.request).then(resp => {
        // optional: put newly fetched resources into cache
        return resp;
      }).catch(() => {
        // fallback if offline and not in cache
        if (evt.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
