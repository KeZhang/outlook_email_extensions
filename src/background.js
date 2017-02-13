chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // read `newIconPath` from request and read `tab.id` from sender
  if (request.count && request.count > 0) {
    chrome.browserAction.setBadgeText({text: request.count + '+'});
  } else{
    chrome.browserAction.setBadgeText({text:''});
  }
});
