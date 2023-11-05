// Define a cache name for your PWA
const cacheName = 'my-pwa-cache-v1';

// List of URLs to cache
const urlsToCache = [
    '/',
    '/index.html'
    // Add more URLs to cache here
];

// Install the service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== cacheName) {
                        return caches.delete(name);
                    }
                })
            );
        })
    );
});

// Intercept network requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Return the cached response if available; otherwise, fetch from the network
            return response || fetch(event.request);
        })
    );
});
