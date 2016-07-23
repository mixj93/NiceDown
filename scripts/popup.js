// document.addEventListener('DOMContentLoaded', function() {

//   // check if its a .md page or file
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var url = tabs[0].url;

//     if (url.split(".")[url.split(".").length - 1] === "md") {
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(
//           tabs[0].id, 
//           {
//             show: true
//           }
//         );
//       });
//     }
//   });

//   // $("#searchBtn").click(function() {
//   //   console.log("Click the search button.")
//   //   var inputText = $("#filterInput").val();
//   //   var showEmpty = $("#showEmpty:checked").length === 1 ? true : false;

//   //   if (inputText.length <= 0) {
//   //     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   //       chrome.tabs.sendMessage(
//   //         tabs[0].id, 
//   //         {
//   //           type: 'empty'
//   //         }
//   //       );
//   //     });
//   //   } else {
//   //     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   //       chrome.tabs.sendMessage(
//   //         tabs[0].id, 
//   //         {
//   //           type: 'assignee',
//   //           name: inputText,
//   //           showEmpty: showEmpty
//   //         }
//   //       );
//   //     });
//   //   }
    
//   // });

//   // $("#emptyBtn").click(function() {
//   //   console.log("Click the empty button.")
//   //   $("#filterInput").val("");

    
    
//   // });

//   // $(document).keypress(function(e){
//   //   if (e.which == 13 && $("#filterInput:focus").length > 0){
//   //     $("#searchBtn").click();
//   //   }
//   // });

// });
