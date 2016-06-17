console.log(jQuery);


var searchOMDB = function ( e ){
  // do not refresh the page, stay on the same page:
    e.preventDefault();

    // Get the input value (if empty string, we don't want to do anything more):
    var searchTitle = $("#search").val();
    if (searchTitle === "") {
      return false;
    }

    console.log("Valid search title: " + searchTitle);

      // Store references to elements:
      // Make sure to prefix it with a $
    var $poster = $("#poster");
    var $title = $("#title");
    var $plot = $("#plot");

    var baseURL = "http://omdbapi.com?t=";

// Receive data from .ajax, make sure to save these data in variable
    var displayMovie = function (data) {

// save data:
      var poster = data.Poster;
      var plot = data.Plot;
      var title = data.Title;
// change view page (index.html):

      // change the content of the div .main (it changes the content, it doesn't add it):
      $poster.attr("src", poster);
      $title.text( title );
      $plot.text( plot );

      // change the background-image:
      $("body").css({
        "background-image": "url(" + poster + ")"
      });
    };

      // If the .ajax is successfull it will call the function displayMovie():
    $.ajax({
      url: baseURL + searchTitle,
      dataType: "JSON",
      type: "GET",
    }).done( displayMovie );


    console.log(baseURL + searchTitle);



};

// We wait until every element has loaded:
$(document).ready(function(){
  // Call the function searchOMDB when the form is submitted (by click on button or pressing enter)
  $("form").on( "submit", searchOMDB);
});
