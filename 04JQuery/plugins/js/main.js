// curl https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js > js/jquery.js

console.log( $ );

$.fn.makeGainsboro = function () {

  this.css({
    color: "purple"
  });
  this.each(function (i, el) {
    var text = (i+1) + " Gainsboro";
    $(el).text( text );
  })
  return this;
};

  var color = ["blue", "green", "red", "purple", "yellow", "blue", "green", "red", "purple", "yellow", "blue", "green", "red", "purple", "yellow"];
// create/add a span to each letter
(function ($) {

$.fn.makeRainbowText = function () {
  console.log("make rainbow text");

   var $newSpan = this.text().split("");

   $("h1").html("");

   console.log($newSpan);
   console.log($newSpan.length);

    for (var i = 0; i < $newSpan.length; i++){
          var $span = $("<span></span>");
          $span.text($newSpan[i]);

          $span.css({
              "color": color[i],
            });
         $("h1").append($span);
    }

  return this;
}
}(jQuery));

$(document).ready(function () {
  $("li").makeGainsboro();
  $("h1").makeRainbowText().addClass("rainbow").css({background: "pink"});
});

/////////////////////// Yumy version:

// $.fn.makeRainbowText2 = function () {
//   console.log("Make rainbow text");
//   // debugger;
//
//   // This is gonna be the homework
//   var array = this.text().split("");
// // debugger;
//   for(var i=0; i<array.length; i++) {
//     array[i] = $("<span>").text(array[i])
//
//     if ((i+1)%5===0){
//       array[i].css({color:"purple"})
//       // $("<span>").text(el).css({background:"purple"})
//     } else if ((i+1)%4===0) {
//       array[i].css({color:"blue"})
//
//     } else if ((i+1)%3===0) {
//       array[i].css({color:"green"})
//
//     } else if ((i+1)%2===0) {
//       array[i].css({color:"yellow"})
//
//     } else {
//       array[i].css({color:"red"})
//     }
//   }
//   $("h1").html(array)
// }
