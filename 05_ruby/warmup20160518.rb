require 'pry'
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Extensions
#
# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.


scrabble = {
  "1" => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  "2" => ["D", "G"],
  "3" => ["B", "C", "M", "P"],
  "4" => ["F", "H", "V", "W", "Y"],
  "5" => ["K"],
  "8" => ["J", "X"],
  "10" => ["Q", "Z"]
}

print "What is your word ? "
scrabble_word = gets().chomp().upcase

scrabble_word_array = scrabble_word.split("")

p scrabble_word_array

your_score = 0

scrabble_word_array.each do |current_letter|
    puts "Letter: #{current_letter}"

    scrabble.each do |key,value|
      puts "One loop just ran in the each loop"
      puts "Keys: #{key} and values: #{value}"
            #
            i = 0
            while i < value.length
                if current_letter == value[i]
                your_score += key.to_i
                puts "Cool"
                end
            i += 1
            end
    end
end

p your_score




# binding.pry
# puts ""
