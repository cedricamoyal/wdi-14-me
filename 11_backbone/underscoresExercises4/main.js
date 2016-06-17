

var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}

// Add 2 to each value:

var add2 = _.mapObject(objectToMap, function(val, key) {
  return val + 2;
});

console.log(objectToMap);
console.log("add2: ");
console.log(add2);

// Multiply each value in objectToMap by a random number and return an object with the changed values

var xRandom = _.mapObject(objectToMap, function(val, key) {
  return val * Math.random();
});

console.log("random: ");
console.log(xRandom);

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]

var pairObject = _.pairs(objectToMap);
console.log(pairObject);

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }

var flipObject = _.invert(objectToMap) ;
console.log(flipObject);

// Remove the "start" key from objectToMap in two different ways

var noStart = _.omit(objectToMap, 'start');
console.log(objectToMap);
console.log(noStart);

var noStart2 = _.pick(objectToMap, 'middle', 'end');
console.log(objectToMap);
console.log(noStart2);
