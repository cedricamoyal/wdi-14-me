require 'pry'

# Nucleotide Count
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
# Shortest intro to biochemistry EVAR:
# twigs are to birds nests as
# nucleotides are to DNA and RNA as
# amino acids are to proteins as
# sugar is to starch as
# oh crap lipids
# I'm not going to talk about lipids because they're crazy complex.
# So back to DNA.
# Write a program that will tell you how many times each nucleotide occurs in a string.

nucleotide_object = {
  "A" => 0,
  "C" => 0,
  "G" => 0,
  "T" => 0,
}

print "What is your word ? "
nucleotide_word = gets().chomp().upcase

nucleotide_word_array = nucleotide_word.split("")

p nucleotide_word_array


nucleotide_word_array.each do |current_letter|
    puts "Letter: #{current_letter}"

    nucleotide_object.each do |key,value|
      puts "One loop just ran in the each loop"
      puts "Keys: #{key} and values: #{value}"
      puts current_letter
      puts key

                if current_letter == key
                nucleotide_object[key] += 1
                puts "Cool"
                end
    end
end

puts nucleotide_object



















# binding.pry
# puts ""
