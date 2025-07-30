console.log("✅ YouTube content script loaded!");
let lastUrl = location.href;

//Your end point url
const endPoint = CONFIG.ENDPOINT;

const observer = new MutationObserver(() => {
  const currentUrl = location.href;

  if (currentUrl !== lastUrl) {

    lastUrl = currentUrl;

    if (currentUrl.includes("/watch")) {

      console.log("New video detected:", currentUrl);
      const videoId = new URLSearchParams(window.location.search).get("v");
      //Detected a new video
      if (videoId) {
        const data = {
          url: currentUrl
        };
        fetch(endPoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        console.log("Sent to webhook:", data);
      }
    }
  }
});

observer.observe(document, { subtree: true, childList: true });


