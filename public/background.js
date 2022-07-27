chrome.tabs.query({
  "active": true,//fetch active tabs
  "currentWindow": true,//fetch tabs in current window
  "status": "complete",//fetch completely loaded windows
  "windowType": "normal"//fetch normal windows
}, function (tabs) {
  for (tab in tabs) {
    console.log(tabs[tab].favIconUrl);// Use this URL as needed
  }
});