// sw.js
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // सिधै नेटवर्कबाट तान्ने, केही पनि सेभ नगर्ने
    event.respondWith(fetch(event.request));
});
