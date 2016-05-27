# Anagram Detector
# Write a program that, given a word and a list of possible anagrams, selects the correct one(s).
#
# In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

def find_anagrams arr, str
  result = []
  str = str.chars.sort.join # n + n log n + n
  arr.each do |s| # m
    s2 = s.chars.sort.join # n + n log n + n
    result << s if s2 == str
  end
  result
end

# (m + 1) *  ( (log n + 2) n)

p find_anagrams ["enlists", "google", "inlets", "banana", "listen"], "listen"
