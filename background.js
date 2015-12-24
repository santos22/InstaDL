// this functions handles the user clicking the button
chrome.browserAction.onClicked.addListener(function(tab) {
	// sends a message to active tab
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
		var reloadTab = tabs[0];
		chrome.tabs.sendMessage(reloadTab.id, {"message": "clicked_browser_action"});
	});
});

// after refreshing the image you want, clicking the
// browser action icon will trigger the download
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "download" ) {
			// download Instagram photo
			chrome.downloads.download({
			  url: request.url
			});
		}
	}
);