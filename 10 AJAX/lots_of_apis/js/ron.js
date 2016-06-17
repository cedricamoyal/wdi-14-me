console.log( jQuery );

// What is the URL we care about:
var baseRonURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes"

// .ron full div:
var $baseRonElement = $(".ron");
// only content div in ron div:
var $baseRonContent = $(".ron .content");
var ronTimer = null;

// displayRonInformation parameter (data) is the data from .ajax
// put quotes on the page:
var displayRonInformation = function (data) {
  console.log( data );
  var quote = data[0];
  // < > to create a new parargraph
  var $p = $("<p>");
  $p.text( quote );
  console.log( $p );

  $baseRonContent.prepend( $p );
};

// How to get the information:
var getRonInformation = function () {

    $.ajax({
      url: baseRonURL,
      dataType: "JSON",
      type: "GET"
    }).done( displayRonInformation );
};

// Make sure the full page is loaded:
$(document).ready(function (){
    getRonInformation();
    ronTimer =  window.setInterval(getRonInformation, 1000);

    $(".ron button").on("click", function () {
      window.clearInterval(ronTimer);
    });
});
