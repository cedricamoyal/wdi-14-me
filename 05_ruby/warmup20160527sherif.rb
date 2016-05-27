# Atbash Cipher
# The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.
#
# An Atbash cipher for the Latin alphabet would be as follows:
#
# Plain:  abcdefghijklmnopqrstuvwxyz
# Cipher: zyxwvutsrqponmlkjihgfedcba
# It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
#
# Examples
#
# Encoding "test" gives "gvhg"
# Decoding "gvhg" gives "test"


# option 2:
def encode_decode_elegant message
    result = ""
    a_ascii = 'a'.ord
    message.each_char do |c|
      # formula from wikipedia
      # c.ord - a_ascii converts the chars from ascii to start from 0 instead of 97
      # avoids using index, and notice that we don't use @plain or @cipher at all!
      cipher_char_ascii = -(c.ord - a_ascii + 1) % 26
      cipher_char = (cipher_char_ascii + a_ascii).chr
      result << cipher_char
    end
    result
end


# option 1:
# class Atbash
#
#   def initialize
#     @plain = "abcdefghijklmnopqrstuvwxyz"
#     @cipher = "zyxwvutsrqponmlkjihgfedcba"
#   end
#
#   def encode_decode message
#     result = ""
#     message.each_char do |c|
#       index = @plain.index c
#       cipher_char = @cipher[index]
#       result << cipher_char
#     end
#     result
#   end
# end
#
# a = Atbash.new
# e = a.encode_decode "test"
# puts a.encode_decode e
