// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Store the following into variables: number of children, partner's name, geographic
//location, job title. Output your fortune to the screen like so: "You will be a X in Y,
//and married to Z with N kids."

var numberOfChildren = 2;
var partnersName = "Christelle";
var geoLocation = "Sydney";
var jobTitle = "Web Developper";

console.log("You will be a " + jobTitle + " in " + geoLocation +  " , and married to " + partnersName + " with " + numberOfChildren + " kids.")

var currentYear = 2016;
var birthYear = 1995;
console.log("They are either " + (currentYear - birthYear - 1) + " or " + (currentYear - birthYear))

var currentAge = 25;
var maxAge = 110;
var amountPerDay = 3;
console.log("You will need " + (maxAge - currentAge)*amountPerDay*365 + " to last you until the ripe old age of " + maxAge)

var radiusTest = 4;
var circCercle = 2*3.14*radiusTest;
var areaCercle = 3.14*radiusTest*radiusTest;
console.log("The circ is " + circCercle)
console.log("The area is " + areaCercle)

var celsiusTemp = 21;
var farTemp = (celsiusTemp * 9/5) + 32;

console.log(celsiusTemp + " celsius is equivalent to " + farTemp + "far")
console.log(farTemp + " far is equivalent to " + celsiusTemp + " celsius")
