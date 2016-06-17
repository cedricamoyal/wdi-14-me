// windows height: $(window).height()
// document height: $(document).height()
// where we are: $(window).scrollTop()

// 1. ` $(window).height() ` - how high is the browser window?
// 2. ` $(window).scrollTop() ` - how far away from the top of the document is the top of the screen?
// 3. ` $(document).height() ` - how high is the entire document?
//
// hint: The bottom of the screen can be found by using ` $(window).height() + $(window).scrollTop()

// ` data.photos.pages ` will get you the total number of pages
// [4:22]
// To change the page you are requesting, change the data object (add ` page: 2 `)

// Homework:
//1)button to next page, stops when no more photos
//2)infinite scrollTop
//3)

console.log("Hello Cedric");
console.log(jQuery);

var pageNumber = 1;
var totalNumberOfPages;

var generateURL = function ( photo ) {
  var farmID = photo.farm;
  var server = photo.server;
  var id = photo.id;
  var secret = photo.secret;

  // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
  var url = "https://farm";
  url += farmID;
  url += ".staticflickr.com/";
  url += server;
  url += "/";
  url += id;
  url += "_";
  url += secret;
  url += "_q.jpg";

  return url;
};


var displayPhoto = function (url) {
  var $img = $("<img>");
  $img.attr("src", url);
  $( "#content" ).append( $img );
};


var handleFlickrResponse = function ( data ) {
  console.log( data );
  var photos = data.photos.photo;
  totalNumberOfPages = data.photos.pages;

  for ( var i = 0; i <photos.length; i++ ) {
    var currentPhoto = photos[i];
    var url = generateURL(currentPhoto);
    // console.log( currentPhoto.title);
    displayPhoto( url );
  }


};





var searchFlickr = function (searchTerm) {
  var baseFlickrURL = "https://api.flickr.com/services/rest/?nojsoncallback=1";

  $.ajax({
    url: baseFlickrURL,
    type: "GET",
    dataType: "JSON",
    data: {
      method: "flickr.photos.search",
      api_key: "2ebcc646d929b76ef404d044686d5124",
      text: searchTerm,
      format: "json",
      page: pageNumber
    }
  }).done( handleFlickrResponse )



};


// var infiniteFunction = function () {
//   pageNumber += 1;
//   var searchTerm = $("form input").val();
//   searchFlickr( searchTerm);
//   if ( pageNumber > totalNumberOfPages) {
//     window.clearInterval(imageTimer);
//    }
// };




$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    $( "#content" ).empty();
    pageNumber = 1;

    var searchTerm = $("form input").val();
    searchFlickr( searchTerm);

    // imageTimer = window.setInterval(infiniteFunction, 3000);

  });




  $("#nextPage").on("click", function () {
    console.log("the button was clicked amigo !!");
    $( "#content" ).empty();
    pageNumber += 1;

    var searchTerm = $("form input").val();
    searchFlickr( searchTerm);

  });

});
