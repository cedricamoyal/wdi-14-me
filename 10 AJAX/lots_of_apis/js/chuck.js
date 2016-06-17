var baseChuckURL = "https://api.chucknorris.io/jokes/random";

var $baseChuckContent = $(".chuck .content");
var chuckTimer = null;

var displayChuckInformation = function (data) {
  console.log( data );
  var quote = data.value;
  // < > to create a new parargraph
  var $p = $("<p>");
  $p.text( quote );
  console.log( $p );

  $baseChuckContent.prepend( $p );
};

var getChuckInformation = function () {
  $.ajax({
    url: baseChuckURL,
    dataType: "JSON",
    type: "GET"
  }).done( displayChuckInformation );
};




$(document).ready(function (){
    getChuckInformation();
    chuckTimer =  window.setInterval(getChuckInformation, 1000);

    $(".chuck button").on("click", function () {
      window.clearInterval(chuckTimer);
    });
});
