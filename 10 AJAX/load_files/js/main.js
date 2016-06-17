// curl https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js > js/jquery.js

// Wait for the document to be ready prior to use info from html:
$(document).ready(function (){

  var $content = $("#content");

  var loadLorem = function () {
    $content.load("../lorem.txt", function (){
      console.log( "The file was loaded");
    });
  };

  $("h1").on("click", loadLorem);

});
