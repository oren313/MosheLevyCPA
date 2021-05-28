self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open("static").then(function(cache) {
            return cache.addAll(["./","css/style.css"]);
        })
    );
})