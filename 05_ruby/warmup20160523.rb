print "What is your number ? "
new_numbers = gets().chomp()

new_numbers_array = new_numbers.split("")

p new_numbers_array

roman_number = ""



if new_numbers_array[new_numbers_array.length - 3] === "1"
  roman_number += "C"
end
if new_numbers_array[new_numbers_array.length - 3] === "2"
  roman_number += "CC"
end
if new_numbers_array[new_numbers_array.length - 3] === "3"
  roman_number += "CCC"
end
if new_numbers_array[new_numbers_array.length - 3] === "4"
  roman_number += "CD"
end
if new_numbers_array[new_numbers_array.length - 3] === "5"
  roman_number += "D"
end
if new_numbers_array[new_numbers_array.length - 3] === "6"
  roman_number += "DC"
end
if new_numbers_array[new_numbers_array.length - 3] === "7"
  roman_number += "DCC"
end
if new_numbers_array[new_numbers_array.length - 3] === "8"
  roman_number += "DCCC"
end
if new_numbers_array[new_numbers_array.length - 3] === "9"
  roman_number += "CM"
end



################################################

if new_numbers_array[new_numbers_array.length - 2] === "1"
  roman_number += "X"
end
if new_numbers_array[new_numbers_array.length - 2] === "2"
  roman_number += "XX"
end
if new_numbers_array[new_numbers_array.length - 2] === "3"
  roman_number += "XXX"
end
if new_numbers_array[new_numbers_array.length - 2] === "4"
  roman_number += "XL"
end
if new_numbers_array[new_numbers_array.length - 2] === "5"
  roman_number += "L"
end
if new_numbers_array[new_numbers_array.length - 2] === "6"
  roman_number += "LX"
end
if new_numbers_array[new_numbers_array.length - 2] === "7"
  roman_number += "LXX"
end
if new_numbers_array[new_numbers_array.length - 2] === "8"
  roman_number += "LXXX"
end
if new_numbers_array[new_numbers_array.length - 2] === "9"
  roman_number += "XC"
end

# ############################

if new_numbers_array[new_numbers_array.length - 1] === "1"
  roman_number += "I"
end
if new_numbers_array[new_numbers_array.length - 1] === "2"
  roman_number += "II"
end
if new_numbers_array[new_numbers_array.length - 1] === "3"
  roman_number += "III"
end
if new_numbers_array[new_numbers_array.length - 1] === "4"
  roman_number += "IV"
end
if new_numbers_array[new_numbers_array.length - 1] === "5"
  roman_number += "V"
end
if new_numbers_array[new_numbers_array.length - 1] === "6"
  roman_number += "VI"
end
if new_numbers_array[new_numbers_array.length - 1] === "7"
  roman_number += "VII"
end
if new_numbers_array[new_numbers_array.length - 1] === "8"
  roman_number += "VIII"
end
if new_numbers_array[new_numbers_array.length - 1] === "9"
  roman_number += "IX"
end


p roman_number
