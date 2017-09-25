chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete" && tab.url.indexOf("github.com/CtripFE/fe-weekly/issues") > -1) {
    chrome.tabs.sendMessage(tabId, {action: "INIT_BUTTON"});
  }
});
