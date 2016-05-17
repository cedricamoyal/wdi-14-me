require 'pry'

brothers = []
brothers = ["Groucho", "Harpo", "Chico"]

# create new array (empty):
empty_array = Array.new      # []
# create new array of 3:
three_nils = Array.new(3)    # [nil,nil,nil]
# create new array of 3 empty string:
three_empty_string = Array.new(3,"") # ["","",""]
# create new array of 3 booleans:
three_booleans = Array.new(3, true) # [true, true, true]
# create new array of 3 arrays:
tic_tac_toe_board = Array.new(3){Array.new(3)}

# Array of strings:
movie_array = %w{Santago Shrek Toys Matrix}

# movie_array[0] = movie_array.first = "Santago"
# movie_array[-1] = movie_array.last
# movie_array.[0..2] = ["Santago", "Shrek", "Toys"]

alphabet = ("A".."Z").to_a # alphabet in an array
first_letter = alphabet[0]
last_letter = alphabet[-1] #or alphabet.last

first_three_letters = alphabet[0..2]
# alphabet[-1..-3] will NOT work
# or
# first_three_letters = alphabet.take(3)
last_three_letters = alphabet.drop(3)

arr_of_numbers = [1, 2, 3, 4, 5]

arr_of_numbers.push(6) #to add 6 at the end
arr_of_numbers << 11 #to add 11 at the end
arr_of_numbers << "twelve" #add the string "twelve" at the end
arr_of_numbers << 13 << 14 #add 13 and 14 at the end

arr_of_numbers.unshift(0) #add 0 at the beginning
arr_of_numbers.unshift(-1) #add -1 at the beginning

arr_of_numbers.insert(3, "Serge") #add "Serge" to index 3
arr_of_numbers.insert(4, "didn't", "marry", "Jane") #add "didn't", "marry", "Jane" to index 4

arr_of_numbers.pop() #to remove the last item
arr_of_numbers.delete_at(3) #to delete index 3

arr_of_numbers.shift() # Removes the fisrt element

arr = [1,2,2,3,2,4,5,5,2,4,3,4,5,5,5,5]
arr.delete(2) # to delete the all the 2



# arr.uniq  # to see values only once
arr.uniq! # this is destructive to convert to uniq

# p alphabet
# alphabet.each do |letter|
#   puts "This just ran for the letter #{letter}"
# end

another_array_of_numbers = [1,2,3,4,5,6,7,8,9,10]
#
# another_array_of_numbers.each do |current_number|
#   puts current_number
# end

# Same in one line only:
another_array_of_numbers.each { |num| print num }

# To reverse the numbers:
another_array_of_numbers.reverse.each { |num| puts num }

# for number in another_array_of_numbers
#   print number
# end


a_bunch_of_words = ["Cedric", "pizza", "burger", "lunch"]

upcased = a_bunch_of_words.map do |word|
  word.upcase
end

even_numbers = another_array_of_numbers.select do |num|
  num.even?
end

an_array_of_words = ["a", "the", "gobblalalaell", "rebebevehv"]

long_words = an_array_of_words.select do |word|
  word.length > 3
end

# works with reject, keep_if, delete_if as well:
# destroy:
another_array_of_numbers.select! do |num|
  num.even?
end

# play with arrays element value (not index value):
# common to both arrays: &
#  union both arrays, combine and remove duplicates: |
# add both arrays: +
#  substract arrays, remove fron array 1 what is in 2: -

days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

# Remove Sunday from the last postion and move it to the first position. Use array methods.
days_of_the_week.unshift(days_of_the_week.pop())

# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days
new_days_of_the_week_array = [days_of_the_week[1..5], [days_of_the_week.last, days_of_the_week.first]]

# 4. Remove either the weekdays or the weekends
# Your choice...
week_days = new_days_of_the_week_array[0]
weekend_days = new_days_of_the_week_array[1]

new_days_of_the_week_array.pop()

new_days_of_the_week_array[0].sort!







binding.pry
puts ""
