// https://www.javascripting.com/

//Fun text: https://gist.github.com/ga-wolf/790ba1762c4f4acf7fd5d8ecad35e055
$("h2").funText(333, "candy");

//we create a jQuery collection(array) by selecting all the anchor tags on the page
var $allLinks = $("a");

// In your main.js that you were working in before, create a thumbnailify() function that takes a single argument.

var thumbnailify = function ($link){

    //the current DOM node is going to be saved as the variable this
    //Let's select that with jQuery
    var currentHref = $link.attr("href");
    var thumbailURL = youtube.generateThumbnailUrl(currentHref);

  // angle brackets < > to create something, here an image:
    var $img = $("<img>");
  //to give attribute to the image created above:
    $img.attr("src", thumbailURL);
  //We want to put it at the end of the link
    $link.append( $img );

    $link.on("click", function (event){

      event.preventDefault();

      var $iframe = $("<iframe></iframe>");
      $iframe.attr("width", 420);
      $iframe.attr("height", 315);
      $iframe.attr("frameborder", 0);
      $iframe.attr("allowfullscreen", true);

      var embedURL = youtube.generateEmbedUrl( currentHref );
      $iframe.attr("src", embedURL);

      $iframe.hide();
      $("#videoPlayer").html( $iframe );
      $iframe.fadeIn(3000);
    })
  };


// each loop:
$allLinks.each(function () {
  var $currentLink = $( this );
  thumbnailify ( $currentLink );
});



// Change the contents of your function so that it uses a single argument, which is a jQuery object that represents an <a>, rather than an array of elements.

// Move the each loop so that it occurs after you define thumbnailify()
// Call thumbnailify() from inside your each loop.
// Make sure your player first works like it did before.
// Now, in the thumbnailify() function, add a click listener to the link
// In the click listener callback, you will be using the "create and store, manipulate, inject" pattern to display an embedded video in the DIV you created.
// To find out what the code for an embedded Youtube video looks like, go to Youtube.com and find any embed code for a video.
// You can use youtube.generateEmbedUrl() from the youtube.js library to generate an embed URL.
// Use string concatenation, .html(), or other jQuery method of your choice to assemble and insert the embedded video element.
// Check your work! Try all your video links. Is there anything you need to change?
// As a bonus, try to make the video watcher
// fade in using jQuery.
// Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.
