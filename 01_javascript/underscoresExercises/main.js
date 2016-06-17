console.log("Hello amigo");

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];


// Iterate through numbers and log each number to the console
_.each(numbers, function(num){ console.log("Number : " + num); });
// Iterate through numbers and multiply each one of them by 5
var newNumberX5 = _.map(numbers, function(num){ return num * 5;});
 console.log("This is x5 : ");
 console.log(newNumberX5);
// Iterate through numbers and reduce it by adding them together
var sum = _.reduce(numbers, function(memo, num){ return memo + num; }, 0);
console.log("This is the reduce sum : ");
console.log(sum);
// Get an array of all of the people in people that have the username "E"
var usernameE = _.where(people, {username: "E"});
console.log("This is the username E array : ");
console.log(usernameE);
// Find the first object in people that has the id of 3
var id3 = _.findWhere(people, {id: 3});
console.log("This is the id 3 : ");
console.log(id3);
// Find the first person who has an age of less than 50
var lessThan50 = _.findWhere(people, people.age < 50);

console.log("First less than 50 : ");
console.log(lessThan50);
// Get an array of all of the people with an age of over 60

// Remove all of the people with an age less than 40
