self.addEventListener("fetch", (event) => {
    console.log(`Handling fetch event for ${event.request.url}!`);
    if(event.request.url.indexOf("chrome-extension") === -1){
        event.respondWith(fetch(event.request.url));
        return;
    }
    if(event.request.url.indexOf("chrome-extension") != -1){
        var a =             new Response(`(async function foo(){console.log(123);console.log(chrome.storage)})();`, {
          headers: {'Content-Type': 'text/javascript', 'Access-Control-Allow-Origin':"*"}
        })
        event.respondWith(
            a
         )
        return;
    }
    return;
});
