
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

# Train lines:
train_lines_hash =  {
  "Line N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "Line L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "Line 6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

# Questions to users:
print "What will be the first line? "
starting_line = gets().chomp()

print "Where are you starting from? "
starting_point = gets().chomp()

print "What will be the second line? "
second_line = gets().chomp()

print "Where are you going? "
final_point = gets().chomp()

# Main train stops index in the different train lines:
starting_point_index = train_lines_hash[starting_line].index starting_point
union_square_first_line_index = train_lines_hash[starting_line].index "Union Square"

final_point_index = train_lines_hash[second_line].index final_point
union_square_second_line_index = train_lines_hash[second_line].index "Union Square"

# Testing work in progress:
    # p train_lines_hash[starting_line]
    # p starting_point
    # p starting_line
    # p starting_point_index
    # p union_square_first_line_index
    # p final_point_index
    # p union_square_second_line_index

# First if:

if starting_point_index < union_square_first_line_index
    trip_on_first_line = train_lines_hash[starting_line][starting_point_index..union_square_first_line_index]

    if final_point_index > union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][union_square_second_line_index..final_point_index]

    elsif final_point_index < union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][final_point_index..union_square_second_line_index]
        trip_on_second_line.reverse!
    else trip_on_second_line = ["Nothing, you are lucky!"]
    end

#  Else if:

elsif starting_point_index > union_square_first_line_index
    trip_on_first_line = train_lines_hash[starting_line][union_square_first_line_index..starting_point_index]
    trip_on_first_line.reverse!

    if final_point_index > union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][union_square_second_line_index..final_point_index]

    elsif final_point_index < union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][final_point_index..union_square_second_line_index]
        trip_on_second_line.reverse!
    else trip_on_second_line = ["Nothing, you are lucky!"]
    end

# Else:

else

    if final_point_index > union_square_second_line_index
        trip_on_first_line = ["Go straight to the second line !!"]
        trip_on_second_line = train_lines_hash[second_line][union_square_second_line_index..final_point_index]

    elsif final_point_index < union_square_second_line_index
        trip_on_first_line = ["Go straight to the second line !!"]
        trip_on_second_line = train_lines_hash[second_line][final_point_index..union_square_second_line_index]
        trip_on_second_line.reverse!

    else trip_on_first_line = ["Guess what??"]
         trip_on_second_line = ["You don't need to take the train, you are already in Union Square my friend!!"]
    end


end

# Message to users:

if starting_point == "Union Square" && final_point == "Union Square"
  puts trip_on_first_line
  puts trip_on_second_line

elsif starting_point == "Union Square"
  puts "Go straight to the #{second_line} !!"
  puts "You won't have to change train, only #{trip_on_second_line.length} stops on #{second_line}: #{trip_on_second_line}."
  puts "Total number of stops: #{trip_on_second_line.length}."

elsif final_point == "Union Square"
  puts "You are lucky"
  puts "You won't have to change train, only #{trip_on_first_line.length} stops on #{starting_line}: #{trip_on_first_line}."
  puts "Total number of stops: #{trip_on_first_line.length}."

else
  puts "You will start on #{starting_line} with the following #{trip_on_first_line.length} stops: #{trip_on_first_line}."
  puts "You will follow on #{second_line} with the following #{trip_on_second_line.length} stops: #{trip_on_second_line}."
  puts "It is a long trip, good luck."
  puts "Total number of stops: #{trip_on_second_line.length + trip_on_first_line.length}."
end
