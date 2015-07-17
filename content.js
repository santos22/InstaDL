// this function uses jQuery to retrieve the URL of
// the desired image
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		// listens for 'click' message from background.js
		// in order to send the URL
		if( request.message === "clicked_browser_action" ) {
			imageUrl = $("meta[property='og:image']").attr("content");

			chrome.runtime.sendMessage({"message": "download", "url": imageUrl})
			// delete previous URL if user downloads more than one image
			// will possibly use in the future to improve the extension
			//delete imageUrl;
		}
	}
);