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

var Arrays = {
  reverse: function(a) {
    var b = [];
    for (var i = a.length - 1; i >= 0; i--) {
      b.push(a[i]);
    }
    return b;
  },

  reverseInPlace: function(a) {
    var n = a.length;
    for (i = 0; i < n / 2; i++) {
      var temp = a[i];
      a[i] = a[n - i - 1];
      a[n - i - 1] = temp;
    }
    return a;
  },

  flatten: function(a) {
    var b = [];
    for (i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        for (var j = 0; j < a[i].length; j++) {
          b.push(a[i][j]);
        }
      } else {
        b.push(a[i]);
      }
    }
    return b;
  }
}
var a = [1,2,3,4]
console.log(Arrays.reverse(a));
var a = [1,2,3,4,5]
console.log(Arrays.reverseInPlace(a));
// [4,3,2,1]
a = [1,2,3,[4,5,6], [7,8,9]]
console.log(Arrays.flatten(a))
// [1,2,3,4,5,6,7,8,9]
