// 최소 서비스 워커 - PWA 설치 조건(설치 가능 여부 판정)을 충족시키기 위한 용도.
// 실제 오프라인 캐싱은 하지 않습니다 (홀딩 데이터는 항상 최신 상태로 보여줘야 하므로).
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
