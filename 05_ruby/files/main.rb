require 'pry'

file = File.open("peoples.txt", "r") # read mode: starts at the beginnning

# to print one a the time:
    # # p file.readline
    # # p file.readline
    # # p file.readline
    # # p file.readline

# print everything:
all_lines = file.readlines
p all_lines

# # all_lines.each do |line|
# #   p "The current line is: #{line}"
# # end
file.close

#######################

file = File.open("peoples.txt", "a+") # append mode: starts at the bottom

# add "Person 1" and "Person 2" and "Person 3" to peoples.txt
# it will add it each time we click it
    file.puts "Xavier"
    file.puts "Matthieu"
    file.puts "Liesl"

# print everything:
file.rewind # to go to the top of the list
all_lines = file.readlines
puts ""
puts ""
p all_lines

file.close

# binding.pry
puts ""
