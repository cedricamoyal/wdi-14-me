require 'pry'

# Create hashes = objects:

# student = {
#   name: "Roger"
# }

# Better way to write ruby:
student = {
  :name => "Roger",
  :class => "UXDi",
  "Some information" => false
}

student2 = {
  :name => "Tom",
  :class => "WDi"
}


p student[:name]
p student2[:class]
p student["Some information"]

#  doesn't work: student.name
#  doesn't work: student["name"]

# Create empty hash:
empty_hash = Hash.new

pressing_information = {
  :movies => ["Santango", "Toy Story"],
  :class => "WDi",
  :event => ["SYDjs"],
  :about_me => true
}

# p pressing_information[:movies][1] # ----> "Toy Story"

serge = {
  :occupation => "musician"
}

serge[:nationality] = "French" # to add to hash
serge[:status] = "Single"
serge[:age] = 45
serge[:songs] = ["lalal", "lilalo", "lololo"]
serge[:status] = "With Jane" # will change serge status

# the symbole :nationality acts as a key
# the string "French" acts as a value

# p serge[:status]

serge.delete(:status)

# p serge[:status]

# p serge.keys # ---- > [:occupation, :nationality, :age, :songs]
# p serge.values # ----> ["musician", "French", 45, ["lalal", "lilalo", "lololo"]]

# p serge.keys() # ---- > [:occupation, :nationality, :age, :songs]
# p serge.values() # ----> ["musician", "French", 45, ["lalal", "lilalo", "lololo"]]

# serge.each do |info|
#   # p "this just ran: #{info}"
#   p "Key: #{info[0]}" # the key is index 0 and the value is index 1
# end

# the key is the item before the comma and the value is the item after the comma:
serge.each do |key, value|
  p "Key: #{key}. Value: #{value}"
end

# or
# serge.each do |left, right|
#   p "Key: #{left}. Value: #{right}"
# end

# EXERCISES:
# A. Given the following data structure:
#
a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
p a[1]

# good for MTA, Jack:
# erik_index = a.index "Eric"
# p a [erik_index]
# .index("TS")
# use each loop.

# How would you add your name to the array?
a.push("Cedric")
p a

# Jack:
# a << "Cedric"
# to the front: a.unshift "Cedric"

# B. Given the following data structure:
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# How would you return the string "One"?
p h[1]
# How would you return the string "Two"?
p h[:two]
# How would you return the number 2?
p h["two"]
# How would you add {3 => "Three"} to the hash?
h[3] = "Three"
p h
# How would you add {:four => 4} to the hash?
h[:four] = 4
p h
# C. Given the following data structure:
is = {true => "It's true!", false => "It's false"}
# What is the return value of is[2 + 2 == 4]?
"It's true!"
# What is the return value of is["Erik" == "Jonathan"]?
"It's false"
# What is the return value of is[9 > 10]?
"It's false"
# What is the return value of is[0]?
nil
# What is the return value of is["Erik"]?
nil
# D. Given the following data structure:
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7)
p users["Erik"][:favorite_numbers]
# How would you add yourself to the users hash?
users["Cedric"] = {:twitter => "cegrick",
                   :favorite_numbers => [27,17,92]}
p users["Cedric"]
# How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]
# How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].sort[0]

# p users["Erik"][:favorite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
even_numbers = users["Anil"][:favorite_numbers].select do |num|
  num.even?
end
p even_numbers
# How would you return an array of the favorite numbers common to all users?
p users["Erik"][:favorite_numbers]
p users["Jonathan"][:favorite_numbers]
p users["Anil"][:favorite_numbers]
common_array = users["Erik"][:favorite_numbers] & users["Jonathan"][:favorite_numbers] & users["Anil"][:favorite_numbers]
p common_array

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

p users["Erik"][:favorite_numbers]
p users["Jonathan"][:favorite_numbers]
p users["Anil"][:favorite_numbers]
combo_array = users["Erik"][:favorite_numbers] | users["Jonathan"][:favorite_numbers] | users["Anil"][:favorite_numbers]
p combo_array.sort




# binding.pry
puts ""
