
# Function:
# def hello
#   puts "Hi"
# end

# Call the function:
# hello()

# 5 times the function:
# 5.times do
#   hello()
# end

# By default the name is equal to world:
# def hello(name = "World")
#   puts "Hello #{name}"
# end
#
# hello()
# hello("Cedric")

def hello(name = "World", end_punctuation = "!")
  puts "Hello #{name}#{end_punctuation}"
end


hello("me","?")
