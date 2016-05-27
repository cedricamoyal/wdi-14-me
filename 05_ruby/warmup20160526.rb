# Anagram Detector
# Write a program that, given a word and a list of possible anagrams, selects the correct one(s).
#
# In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

require 'pry'

print "What is your word ? "
word = gets().chomp()
print "What is your array ? "
arrayOfWords = gets().chomp().split(',')




def anagramDetector word, arrayOfWords
  # binding.pry

  wordSorted = word.split("").sort!.join

  arrayOfWords2 = arrayOfWords
  array = []

  arrayOfWords2.each do |itemInArray|
    itemInArray2 = itemInArray.split("").sort!.join

    if itemInArray2 == wordSorted
      array << itemInArray
    end
  end
  array
end

p anagramDetector(word, arrayOfWords)
