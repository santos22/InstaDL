// use jQuery to retrieve the URL of the desired photo
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		// listens for 'click' message from background.js
		// in order to send URL
		if( request.message === "clicked_browser_action" ) {
			var imageUrl = $("meta[property='og:image']").attr("content");

			chrome.runtime.sendMessage({"message": "download", "url": imageUrl});
		}
	}
);