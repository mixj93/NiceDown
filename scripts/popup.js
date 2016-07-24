document.addEventListener('DOMContentLoaded', function() {

  var disableNiceDown = false;

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log("Message came.", message);
    // 判断message类型
    switch(message.type) {
      case "CHECK_MARKDOWN":
        if (message.markdownPage === false) {
          $(".wrap").addClass("disable");
        }
    }
  });

  $("#disableNiceDown").click(function(e) {
    disableNiceDown = !disableNiceDown;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id, 
        {
          "type": "DISABLE_NICEDOWN",
          "disableNiceDown": disableNiceDown
        }
      );
    });
  });

  // $(document).keypress(function(e){
  //   if (e.which == 13 && $("#filterInput:focus").length > 0){
  //     $("#searchBtn").click();
  //   }
  // });

});
