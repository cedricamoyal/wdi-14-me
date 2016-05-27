

var sieve = function (n) {

  var nums = [];

  for (var i = 2; i <= n; i++){
    nums.push(i);
  }

    var primes = [];

    while (nums.length > 0){
      var nextPrime = nums.shift();
      primes.push(nextPrime);

      nums = nums.filter(function(num) {
        return num % nextPrime != 0;
      })

    }
    return primes;
  }

// ////////////////////////////////

var sieve2 = function (n) {

  var nums = [];

  for (var i = 2; i <= n; i++){
    nums.push(i);
  }

  for (var i = 0; i <= nums.length; i++){
        for (var j = i + 1; j < nums.length; j++){
            if (nums[j] % nums[i] == 0){
              nums.splice(j, 1);
            }
        }
  }
  return nums;
};

/////////////////////////////////////////
 
// FASTER

var sieve3 = function (n) {

  var nums = [];

  for (var i = 0; i <= n; i++){
    nums.push(i);
  }

  for (var i = 2; i <= nums.length; i++){
        for (var j = 2; j < nums.length; j++){

                if (i*j <= n){
                  nums[i*j] = -1
                } else { break; }

            }
        }
        primes = [];
        for ( var i = 2; i <= n; i++){
          if (nums[i] != -1){
            primes.push(nums[i])
          }
        }
  return primes;
};
