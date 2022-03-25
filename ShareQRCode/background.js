chrome.runtime.onInstalled.addListener((details) => {
  if(details.reason == "install" || details.reason == "update") {
    chrome.contextMenus.create({
      title: "get url",
      id: "some-command",
    });
  } else if(details.reason == "update") {
    console.log("update");
  }
});

chrome.contextMenus.onClicked.addListener( (info, tab) =>{
  if (info.menuItemId == "some-command"){
    console.log(tab.url);
    chrome.storage.sync.set({"share_url":tab.url});
    chrome.scripting.executeScript({
      files: ["qrcode.min.js","insert.js"],
      target:{
        tabId: tab.id
      }
    }
    );
  }
});

