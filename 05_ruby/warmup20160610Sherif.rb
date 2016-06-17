# The Fibonacci sequence is one of the coolest sequences in mathematics. The sequence is: 1,1,2,3,5,8,13,....
#
# You can calculate the nth fibonacci number from the following formula: F(n) = F(n - 1) + F(n - 2)
#
# The sequence is named after the Italian mathematician Leonardo of Pisa (Leonardo Fibonacci). The ratio between two consecutive Fibonacci numbers tends to 1.61538... which is called the golden ratio, golden number, divine ratio, etc. If you draw the numbers in rectangles of the same area you will end up drawing a golden spiral. This magic ratio and magic spiral appear surprisingly often in nature, sunflower, starfish, human body (ratios between bones), sea waves follow this spiral even the galaxies. It also appears in famous buildings and arts like the Egyptian Pyramids and the Mona Lisa and a lot more.
#
# https://en.wikipedia.org/wiki/Fibonacci_number
#
# Show your appreciation for the Fibonacci sequence and the golden ratio by writing a function that calculates the nth Fibonacci number. Can you calculate and return the whole sequence from 1 to n?

class Fibonacci

  def fib(n)
    if n <= 2
      1
    else
      fib(n - 1) + fib(n -2)
    end
  end

  def fib_iter(n)
    if n <= 2
      return 1
    end

    nums = [1, 1]

    (2..n).each do |i|
      nums[i] = nums[i - 1] + nums[i - 2]
    end

    nums
  end


end


f = Fibonacci.new
n = gets.chomp.to_i
puts f.fib(n)
