# While loop:
# i = 10
# while i > 0
#   puts "I: #{i}"
#   i -= 1
# end
#
# puts "Blast off!"

# Never use for loop in Ruby
# for i in 0..5
#   puts "I: #{i}"
# end

# 5.times do
#   puts "This just ran"
# end

# store in variable i:
# 5.times do |i|
#   puts i
# end

# variable i from 5 to 1:
5.downto(1) do |i|
  puts i
end

10.upto(20) do |i|
  puts i
  end


# Never use for loop in Ruby
# for letter in "A".."Z"
#   puts "Letter: #{letter}"
# end

# Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

# print "Guess a number? "
# user_number = gets().to_f
# computer_number = Random.rand(1..10)
#
# puts "Yeeees" if user_number == computer_number
# puts "Try again" if user_number != computer_number
#
# while user_number != computer_number
#   print "Guess a number? "
#   user_number = gets().to_f
#     if user_number == computer_number
#       puts "Yeeeees"
#     else puts "Try again"
# end
# end

# Jack code:
#
# print "What is your max number?"
# user_max = gets().to_i
#
# random_number = Random.rand 0..user_max
#
# print "What is your guess?"
# user_guess = gets().to_i
#
# until random_number == user_guess
# # while random_number != user_guess
# # Try to avoid !=
#   if user_guess > random_number
#     puts "A little lower..."
#   else
#     puts "A little higher..."
#   end
#   print "What is your new guess?"
#   user_guess = gets().to_i
# end
#
# puts "Congratulations"
