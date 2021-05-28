if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(function(registration) {
        console.log("SW REGISTERED!");
        console.log(registration);
    }).catch(function(error) {
        console.log("SW Registration Failed!");
        console.log(error);
    })
}