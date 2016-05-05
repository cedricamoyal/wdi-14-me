// var num = 0;
// while (num < 5) {
//   console.log(num);
//   num = num + 1;
// }
//
// var count = 10;
// while (count > 0){
//   console.log(count)
//   count -= 2;
// }
//
// console.log("lift lift");
//
// for (var num = 0; num < 5; num+=1) {
//   console.log(num);
// }
//
// for (var ii = 0; ii <= 10; ii++) {
//   console.log( ii + " multiply by 9 equals " + ii*9);
// }

// The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will
//check if the current number is even or odd, and report that to the screen
// (e.g. "2 is even").

for (var i = 0; i < 21; i++) {
  if ( i % 2 === 0 ) {
    console.log(i + " is even");
  }
  else {console.log( i + " is odd");}
}

// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the
//for loop, it will multiply the number by 9 and log the result
//(e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier
//from 1 to 10 (100 results total).

var mutipliplicationTables = function (num1,num2) {
  var results = num1 * num2;
  return results;
}

for (var x = 1; x <= 10; x++) {
  for (var y = 1; y <=10; y++){
    var message = x + " * " + y + " = " + mutipliplicationTables(x,y);
    console.log(message);
  }
}


// The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise
// for every value from 60 to 100 - so your log should show
// "For 89, you got a B. For 90, you got an A.", etc.

for (var i = 60; i < 101; i++) {
  if (i < 70) {
    console.log("For " + i + ", you got a D");
  }
  else if (i < 80) {
    console.log("For " + i + ", you got a C");
  }
  else if (i < 90) {
    console.log("For " + i + ", you got a B");
  }
  else {console.log("For " + i + ", you got a A");}
}
