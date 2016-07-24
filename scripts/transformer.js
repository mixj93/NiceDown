var url = window.location.href;

function transformMarkdown() {
  var markdownText = $("body pre").text();
  var parser = new HyperDown,
      html = parser.makeHtml(markdownText);
  $("body pre").hide();
  $("body").append($("<div class='nd-markdown-content'></div>"));
  $(".nd-markdown-content").html(function(){
    return html;
  });
}

if(url.split(".")[url.split(".").length - 1] === "md"){
  chrome.runtime.sendMessage( 
    {
      "type": "CHECK_MARKDOWN",
      "markdownPage": true
    }
  );

  transformMarkdown();
} else {
  chrome.runtime.sendMessage(
    {
      "type": "CHECK_MARKDOWN",
      "markdownPage": false
    }
  );
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  console.log("Message came.", message);
  // 判断message类型
  switch(message.type) {
    case "DISABLE_NICEDOWN":
      if (message.disableNiceDown === true) {
        $("body .nd-markdown-content").hide();
        $("body pre").show();
      } else {
        $("body pre").hide();
        $("body .nd-markdown-content").show();
      }
  }
});