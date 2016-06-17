// Accumulate
// For example, given the collection of numbers:
//
// 1, 2, 3, 4, 5
// And the operation:
//
// square a number
// Your code should be able to produce the collection of squares:
//
// 1, 4, 9, 16, 25
// Optional Extras

// var initialArray = [1, 2, 3, 4, 5];
//
//
// var newArraySquare = [];
//
// var newArrayCube = [];
//
// var newArrayRoot = [];
//
// var newArrayEven = [];

var objectResult = {
  initialArray: [],
  newArraySquare: [],
  newArrayCube: [],
  newArrayRoot: [],
  newArrayEven: []
};

objectResult.initialArray = [1, 2, 3, 4, 5];



var objectFunction = function(initialArray) {


  for (var i = 0; i < initialArray.length; i++) {
    var result1 = initialArray[i] * initialArray[i];
    newArraySquare.push(result1);
  }


  for (var i = 0; i < initialArray.length; i++) {
    var result2 = initialArray[i] * initialArray[i] * initialArray[i];
    newArrayCube.push(result2);
  }


  for (var i = 0; i < initialArray.length; i++) {
    var result3 = Math.sqrt(initialArray[i]);
    newArrayRoot.push(result3);
  }


  for (var i = 0; i < initialArray.length; i++) {
    if (initialArray[i] % 2 === 0){
        var result5 = true;
    }
    else {
      var result5 = false;
    }

    newArrayEven.push(result5);
  }


};

objectFunction(objectResult.initialArray);










//
// Square Root a Number
// Cube a number
// Even and Odd
// Or return an object containing all of those things:
//
// {
//   original: [1, 2, 3, 4, 5],
//   squares: [...],
//   squareRoots: [...],
//   cubes: [...],
//   evenAndOdd: [true, false, true]
// }
// Restrictions
//
// Keep your hands off that collect/map/fmap/whatchamacallit functionality provided by your standard library!
//
// Solve this one yourself using other basic tools instead.




// Sherif:
// var Results = {
//   originals: [],
//   squares: [],
//   squareRoots: [],
//   cubes: [],
//   evenAndOdd: []
// }
//
// var square = function(e) {
//   Results.squares.push(e*e);
// }
//
// var squareRoot = function(e) {
//   Results.squareRoots.push(Math.sqrt(e));
// }
//
// var cube = function(e) {
//   Results.cubes.push(e*e*e);
// }
//
// var evenAndOdd = function(e) {
//   Results.evenAndOdd.push(e % 2 == 0);
// }
//
//
// var callbacks = [square, squareRoot, cube, evenAndOdd];
// Results.originals = [1, 2, 3, 4, 5];
//
//
// callbacks.forEach(function(callback) {
//   Results.originals.forEach(function(num) {
//     callback(num);
//   });
// });
//
// console.log(Results);
