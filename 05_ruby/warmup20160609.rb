# There are 10 types of people in the world: Those who understand binary, and those who don't.
# You and your fellow cohort of those in the "know" when it comes to binary decide to come up with a secret "handshake".
#
# 1 = wink
# 10 = double blink
# 100 = close your eyes
# 1000 = jump
#
#
# 10000 = Reverse the order of the operations in the secret handshake.
# Write a program that will convert a binary number, represented as a string (i.e. "101010"), and convert it to the appropriate sequence of events for a secret handshake.
#
#
# handshake = SecretHandshake.new "11001"
# handshake.commands # => ["jump","wink"]
# The program should consider strings specifying an invalid binary as the value 0.

print "What is your number? "
your_number = gets.to_s.chomp()

arrayYourNumber = your_number.split("")

p arrayYourNumber

reverseArrayYourNumber = arrayYourNumber.reverse

p reverseArrayYourNumber

reverseArrayYourNumberJoin = reverseArrayYourNumber.join()

p reverseArrayYourNumberJoin

message = ""

reverseArrayYourNumber.each_with_index do |num, j|

if num == "1"
  message += "wink"
else
  message += "NOno"
end

end

p message

arrayMessage = message.split("w")

p arrayMessage

resultMessage = ""

arrayMessage.each_with_index do |num, j|

if num == ""
  resultMessage += ""
elsif num == "ink"
  resultMessage += " wink -"
elsif num == "inkNOno"
  resultMessage += " double blink -"
elsif num == "inkNOnoNOno"
  resultMessage += " close your eyes -"
elsif num == "inkNOnoNOnoNOno"
  resultMessage += " jump -"
elsif num == "inkNOnoNOnoNOnoNOno"
  resultMessage += " reverse -"

end

end

p resultMessage

arrayResultMessage = resultMessage.split("-")

p arrayResultMessage

arrayResultMessage2 = arrayResultMessage

arrayResultMessage.each_with_index do |num, j|

if num == " reverse "
  arrayResultMessage2.delete_at(j)

end

end

arrayResultMessage3 = arrayResultMessage2.reverse

p arrayResultMessage3
