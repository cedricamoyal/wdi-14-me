// Working with Arrays
// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any library functions (i.e. .reverse or .each) to complete this task, write this stuff from scratch!
//
// Make two functions
// reverse
// flatten
// reverse( [1, 2, 3, 4] ); // Should return [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] ); // Should return [ "Hello", "World", 42 ]
// Only make flatten work to one level deep! You should be able to flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]
//
// Hint: You're going to need to be looping through the arrays to get a solution.


reversedArray = [];

var reverse = function (arrayToReverse) {
  for (var i = arrayToReverse.length - 1; i >= 0; i--) {
    reversedArray.push(arrayToReverse[i]);
  }
  return reversedArray;
};

var arrayToReverse = [1, 2, 3, 4, 5, 6, "Hello"]


console.log(arrayToReverse + " becomes: " + reverse(arrayToReverse))
console.log(arrayToReverse);
console.log(reversedArray);

var flattenedArray = [];

var flatten = function (arrayToFlatten){
  for (var i = 0; i < arrayToFlatten.length; i++) {
    if (typeof arrayToFlatten[i] !== "object"){
        flattenedArray.push(arrayToFlatten[i]);
    }
    else {
      for (var j = 0; j < arrayToFlatten[i].length; j++){
      flattenedArray.push(arrayToFlatten[i][j]);
    }
    }
  }
  return flattenedArray;
};

var arrayToFlatten = ["Hello", ["World", 42], ["and", 1, 2, "Bye Bye"] ] ;

console.log(arrayToFlatten + " becomes: " + flatten(arrayToFlatten))
console.log(arrayToFlatten);
console.log(flattenedArray);
