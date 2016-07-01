console.log($);

$(document).ready(function() {


var firstPath = document.querySelector("#svg_1");
var secondPath = document.querySelector("#svg_2");

var firstPathLength = firstPath.getTotalLength();
var secondPathLength = secondPath.getTotalLength();

console.log("firstPathLength = " + firstPathLength);
console.log("secondPathLength = " + secondPathLength);

$("#svg_1").css({
  "stroke-dasharray": firstPathLength,
  "stroke-dashoffset": firstPathLength,
})

$("#svg_2").css({
  "stroke-dasharray": secondPathLength,
  "stroke-dashoffset": secondPathLength,
})

$("path").css("opacity", "1");

$("path").addClass("complete");

});
