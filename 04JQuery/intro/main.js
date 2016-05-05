console.log("Bingo !!");

// add a $ sign when jQuery:
var $aTag = $("a");


// info can be accessed:
// $aTag.html -> "Google"
// $aTag.attr("href"); -> "www.google.com"
// $aTag.css("font-size") -> "16px"

// info can be changed:
$aTag.html("Something else");
$aTag.css("font-size", "50px");
$aTag.css("color", "hotpink");
$aTag.attr("href", "http://yahoo.com");

// New paragraphe:

//Create an element
var $p = $("<p></p>");

//add info
$p.text( "Here is some random stuff");

$p.css({
    "color": "gainsboro",
    "text-decoration": "underline",
    "text-transform": "uppercase"
  });

//send to html
$("body").append($p);

// select all the paragraphes:
var $allParagraphs = $("p");

// // for loop first solution: (NOT the best)
//   for (var i = 0; i < $allParagraphs.length; i++) {
//     var currentParagraph = $allParagraphs[i];
//     var $currentParagraph = $(currentParagraph);
//     $currentParagraph.html( "Paragraph " + (i+1));
//   }
// // for loop second solution: NOT the best)
//   for (var i = 0; i < $allParagraphs.length; i ++) {
//     var $currentParagraph = $allParagraphs.eq(i);
//     var currentHTML = $currentParagraph.html();
//     $currentParagraph.html( currentHTML += "wooooooo");
//   }

// better solution (without for loop), i is the index for the each function:
    $allParagraphs.each(function (i) {
        $(this).html("This is awesome now " + (i+1));
    });
