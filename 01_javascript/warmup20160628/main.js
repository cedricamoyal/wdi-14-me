// Write a program that can calculate the sum of the first n elements of the following sequences:
//
// s1 = 1 - 1 + 1 - 1 + 1 - 1 + ....
// s2 = 1 + 2 + 3 + 4 + 5 + 6 + ....
//
// For example:
//
// s1(4) = 0
// s2(4) = 10
//
// Use any language of your choice.
//
// Can you guess what the sum would be if n is infinity?


var sum1 = function(Num) {
  var sum1Total = 0;
  for (var i = 0; i <= Num; i++){
    if (i % 2 === 0) {
      sum1Total += 1;
    } else {
      sum1Total -= 1;
    }

  }
  return sum1Total;
};

var sum2 = function(Num) {
  var sum2Total = 0;
  for (var i = 0; i <= Num; i++){
      sum2Total += i;

  }
  return sum2Total;
};
