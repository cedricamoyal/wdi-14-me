// var doFirst = function (){
//   window.setTimeout( function (){
//     console.log("This should happen first");
//   }, 100);
//
// };
//
// var doFirstAndSecond = function ( cb ) {
//   window.setTimeout( function (){
//     console.log("This should happen first");
//     cb();
//   }, 100);
//
// };

// var doSecond = function (){
//   console.log("This should happen second")
// };
//
// // doFirst();
// // doSecond();
//
// doFirstAndSecond (doSecond);


console.log( "1. start of main.js");

$(document).ready(function () {
  console.log( "2. Document is ready");
});

var annoy = function () {
  alert("This is annoying");
};

$("h1").on("click", annoy);

$("p").each(function () {
  console.log("within the each() callback");
  $(this).text(Math.random());
});

console.log( "3. end of main.js");


var totals = [5, 6, 8];
// for (var i = 0; i < totals.length; i++){
//   var currentElement = totals[i];
//   console.log( currentElement + "!!!");
// };

var each = function (group, callback) {
  for (var i = 0; i < group.length; i++){
      var currentElement = group[i] * 2;
    callback( currentElement );
  }
    };

var print = function (el){
  console.log( el + "!!!");
};

each (totals, print);

each( [1,5,7], function(el){
  console.log("the el is " + el )
});
