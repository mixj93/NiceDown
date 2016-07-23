var url = window.location.href;

function transformMarkdown() {
  var markdownText = $("body pre").text();
  var parser = new HyperDown,
      html = parser.makeHtml(markdownText);
  $("body pre").remove();
  $("body").html("<div class='nd-markdown-content'></div>");
  $(".nd-markdown-content").html(function(){
    return html;
  });
}

if(url.split(".")[url.split(".").length - 1] === "md"){
  transformMarkdown();
}