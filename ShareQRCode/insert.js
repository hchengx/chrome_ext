(() => {
  div = document.getElementById('share_url-area_div');
  if(div == null){
    div = document.createElement("div");
    div.id = "share_url-area_div";
    document.body.appendChild(div)
    qrcode = new QRCode(div, {
      text: "www.baidu.com",
      width: "400",
      height: "360",
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
    div.addEventListener("click", () => {
      div.hidden = true;
    })
    div.style.width = "400px";
    div.style.height = "360px";
    div.style.position = "fixed";
    div.style.top = "80px";
    div.style.right = "60px";
    div.style.zIndex = 999;
    console.log("createElement: share_url-area_div");
  }
  console.log("receive");
  chrome.storage.sync.get("share_url", (data) => {
    div.hidden = false;
    qrcode.clear();
    qrcode.makeCode(data.share_url)
  });
})();
