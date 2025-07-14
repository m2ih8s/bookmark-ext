
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: chrome.runtime.getURL("page/index.html") });
});


navigator.storage.getDirectory()
  .then( (result)=>{
    result.getFileHandle("nus3File", {create: true,});
    console.log("OK");
  }).catch( (result)=>{
    console.log(result);
  })