# my_name = "Gilberto"
# food = "Greek Lasagna"

# my_name = gets()
# food = gets

# puts "What is your name?"
# my_name = gets().chomp()
# puts "What is your favorite food?"
# food = gets.chomp
#
# message = "Hello, I'm #{my_name} and i like #{food}"

# Puts will print to the screen and create a new line
# puts(message)
# puts message

# Print will print to the screen on the same line
# print(message)
# print message

# Programmer print, shows us the data type
# p(message)
# p message

# some_information = gets()
# puts some_information
#
# if 42 > 13
#   puts "42 is a bigger number"
# end
#
# my_name = "Bill"
# if my_name == "Roger"
#   puts "Is it really?"
# elsif my_name == "Bill"
#   puts "You're probably a genius"
# else
#   puts "Well then ..."
# end
#
# # in 1 line:
# puts "Hello Cedric" if my_name == "Cedric"
#
# # unless can be used as well:
#
# num = 2
# if num <= 1
#   puts "Less than or equal to 1"
# end
#
# unless num > 1
#   puts "Less than or equal to 1"
# end
#
# ready_to_print = false
# if !ready_to_print
#   puts "Wait a while"
# end
# # try to avoid !=
# unless ready_to_print
#   puts "Wait a while"
# end
#
# errors = false
# if !errors
#   puts "All good"
# end
# # try to avoid !=
# unless errors
#   puts "All good"
# end
#
# # 1 line
# puts "All good" unless errors

# hour = 15
# case
#     when hour < 12
#       puts "Good Morning"
#     when hour > 12 && hour <18
#       puts "Good Afternoon"
#     else
#       puts "Good Evening"
# end
#
# # or different way:
#
# country_code = "Fr"
# case country_code
#   when "Au"
#     puts "Australia"
#   when "Fr"
#     puts "France"
#   when "Nz"
#     puts "New-Zeland"
#   else
#     puts "Another country"
# end
#
# # or different way:
#
# country_code = "Fr"
# case country_code
#     when "Au" then puts "Australia"
#     when "Fr" then puts "France"
#     when "Nz" then puts "New-Zeland"
#     else puts "Another country"
# end
#
# 1. Drinking age?
#
# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.

# puts "How old are you?"
# user_age = gets()
#
# puts "You cannot drink !" if user_age.to_i < 18
# puts "What do you drink?" if user_age.to_i >= 18

#  Jack code:
# print "How old are you? "
# user_age = gets().to_f
# if user_age < 18
#   puts " No drinking for #{user_age} years old kids"
# else
#   puts "It is ok"
# end




# 2. Air Conditioning
#
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

#
# puts "What is the current temperature?"
# current_temperature = gets()
# puts "Is the A/C is functional?"
# on_or_off = gets().chomp()
# puts "What temperature would you like?"
# needed_temperature = gets()
#
# puts "Turn on the A/C Please" if on_or_off == "Yes" && needed_temperature.to_i  < current_temperature.to_i
# puts "Fix the A/C now! It's hot!" if on_or_off == "No" && needed_temperature.to_i  < current_temperature.to_i
# puts "Fix the A/C whenever you have the chance... It's cool..." if on_or_off == "No" && needed_temperature.to_i  > current_temperature.to_i

# Jack code (can also be done with when):

# print "What is the current temperature ?"
# current_temperature = gets().to_f
#
# print "is the A/C working? (y/n)"
# air_con = gets().chomp().downcase
#   if air_con == "y"
#     air_con = true
#   else air_con == "n"
#     air_con = false
# end
#
# print "What is the desired temperature ?"
# desired_temperature = gets().to_f
#
# if air_con && current_temperature > desired_temperature
#   puts "Turn on the A/C please"
# else
#     if !air_con && current_temperature > desired_temperature
#     puts "Fix the A/C"
#     else
#     puts "Fix the A/C when you can"
#    end
# end


# 3. Sydney Suburbs
#
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

# puts "What suburbs ?"
# what_suburbs = gets().chomp()
#
# puts "We are neighbours" if what_suburbs == "Potts Point"
# puts "Whyyyy" if what_suburbs == "CBD"

# Jack code:

print "Where do you live? "
user_suburbs = gets().chomp()
#     if user_suburbs == "Potts Point" || user_suburbs == "Vaucluse"
#       puts "La de la"
#     elsif user_suburbs == "Manly" || user_suburbs == "Palm Beach"
#       puts "Why?"
#     else puts "I am sure that ..."
# end

case user_suburbs
when "Potts Point", "Vaucluse"
  puts "La de la"
when "Manly"
  puts "Why?"
else puts "I am sure ..."
end
