var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// Create an array of every five numbers between 30 and 101
var fiveNumbers = _.range(30, 101, 5);
console.log(fiveNumbers);

// Turn bumpyArr into one flat array (no nested arrays)
var flatArray = _.flatten(bumpyArr);
console.log(bumpyArr);
console.log(flatArray);

// Remove all of the falsey elements in the uncompactedArr
var compactArray = _.compact(uncompactedArr);
console.log(uncompactedArr);
console.log(compactArray);

// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and [24, Infinity, -0]
var uniqueArray = _.union([ 1, 25, 100 ], [ 1, 14, 25 ], [24, Infinity, -0]);
console.log("[ 1, 25, 100 ], [ 1, 14, 25 ] and [24, Infinity, -0]");
console.log(uniqueArray);

// Find the index of the first element in numbers that is over 7 and is even

// _.findIndex(array, predicate, [context]) can also be used

var findNumber = _.find(numbers, function(num){ return num > 7 && num % 2 == 0; });
console.log(findNumber);
var indexOf = _.indexOf(numbers, findNumber);
console.log("index of: ")
console.log(numbers);
console.log(indexOf);

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }

var zipArr = _.object(arrToTransform[0],arrToTransform[1]);
console.log("This is: { age: NaN, location: undefined }");
console.log(zipArr);
