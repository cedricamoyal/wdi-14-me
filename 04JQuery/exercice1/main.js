// Step by Step:
//
// Create an array of every link on the page using document.querySelectorAll(cssSelector)
// Iterate through the array. In each iteration of the loop:
// Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)

console.log("jQuery baby !!");

//we create a jQuery collection(array) by selecting all the anchor tags on the page
var $allLinks = $("a");

//We use the each method instead of the for loop
$allLinks.each(function (){
  //the current DOM node is going to be saved as the variable this
  //Let's select that with jQuery
  var currentHref = $(this).attr("href");
  var thumbailURL = youtube.generateThumbnailUrl(currentHref);

// angle brackets < > to create something, here an image:
  var $img = $("<img>");
//to give attribute to the image created above:
  $img.attr("src", thumbailURL);
//We want to put it at the end of the link
  $(this).append( $img );
});
