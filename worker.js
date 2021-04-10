const filesToCache = [
	"Tetris.htm",
	"Tetris.json",
	"Tetris.png",
	"TetrisFavIcon_16x16.png",
	"TetrisFavIcon_192x192.png",
	"TetrisFavIcon_512x512.png",
	"TetrisGame.htm",
	"TetrisGame.js",
	"TetrisShare.png"
];

const staticCacheName = "tetris-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});