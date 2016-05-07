// $(document).ready(function (){

$("h1").on("click", function (){console.log("you clicked on h1")});


var $newHeading = $("<h3></h3>");
$newHeading.text("Hello World").css("font-size", "50px").appendTo("body");
// $("body").append($newHeading);

// Change for ever:

var animateBox = function () {
  $(".animate").animate({
    width: "500px",
    top: "50px"
  }, 1000).animate({
    width: "200px",
    top: "0px"
  }, 1000, animateBox);
};

// var animateBox = function () {
//   $(".animate").animate({
//     width: "500px",
//     top: "50px"
//   },1000, function (){
//     console.log("Animation complete")
//   });
// };




// hit for tic tac to:
// .cell for each of the 9 cells

$(".pixel").on("mouseover", function () {
 // $(document).on("mouseover", ".pixel", function () {
 //   console.log(this);}

  var $currentPixel = $( this );
  $currentPixel.css("background", "hotpink");
  $currentPixel.text("x");
});



//what you type in the input appears in the browser:
$(window).on("keypress", function (e) {
  // var currentLetter = e.key;
  var currentLetter = String.fromCharCode( e.keyCode );
  //find and store the h2 with the class of typing
  var $h2 = $("h2.typing");
  //store its current HTML
  var currentHTML = $h2.html();
  var newHTML = currentHTML + currentLetter;
  // I then want to add whatever the current letter is:
  // $h2.text(newHTML);
});



// //what you type in the input appears in the console:
// $("input.type").on("keypress", function (e) {
//   // var currentLetter = e.key;
//   var currentLetter = String.fromCharCode( e.keyCode );
//   console.log( currentLetter );
// });




//Draw dots following the mouse:

  $(window).on("mousemove", function(event){
//Create:
    var $div = $("<div></div>");

//Manipulate:
    $div.addClass("dot");

//Change the top and the left positions so that they represent where the mouse is:
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  $div.css("left", mouseX);
  $div.css("top", mouseY);


//Inject
//    $("body").append( $div );

  });



// console.log($);
//
// $("h1").on("click", function () {
//   console.log("The h1 was clicked")
// });
//
// // Keep track of where the mouse is
// $(window).on("mousemove", function(event){
//   //Create a new paragraphe
//   var $p = $("<p></p>");
//   var mouseX = event.clientX;
//   var mouseY = event.clientY;
//
//   // show the 2 infos:
//   // console.log(mouseX, mouseY);
//
//   var message = "Mouse X: " + mouseX;
//   message += ". Mouse Y: " + mouseY;
//   // console.log(message);
//
// //Create paragraphe:
//   $p.text(message);
//
// // .prepend -> put it on top of the body:
// // .append -> put it on top of the body:
//   $("body").prepend( $p );
//
// });






// api.jquery.com

//http://jsbin.com/zaliyusuxa/edit?html,js,output
//  $("#toggle").on("click", function(){
//   $(".triple-kitty1").toggle();
// });

// $("#fade").on("click", function () {
//   $(".triple-kitty2").fadeToggle();
// });

// $("#show").on("click", function () {
//   $(".triple-kitty3").show();
// });

// $(window).on("mousemove", function () {
//   console.log("the mouse moved");
// });

// $("form input").on("change", function () {
//   alert("Something !!");
// });

// $("input").on("focus", function () {
// alert("Something yes !!");
// });

// });
