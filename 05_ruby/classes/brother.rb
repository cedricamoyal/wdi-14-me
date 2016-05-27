# WORKS:

require 'pry'

# Class name in Ruby are always UpperCamelCase:

class MarxBrother
  attr_accessor :first_name, :last_name, :vice, :best_performance

# the initialize method will take action automaticly when we create a new instance like:
# groucho = MarxBrother.new "Groucho"
  def initialize( first_name, last_name = "Marx", vice = "Being terrific", best_performance = "Duck soup")
    @first_name = first_name
    @last_name = last_name
    @vice = vice
    @best_performance = best_performance
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  def identify
    "I am #{@first_name} #{@last_name}, I was cool at #{@best_performance}."
  end

  def act
    "Amazing"
  end
end

####################################

# attr_reader: Just Getter
# attr_writer: Just Setters
# attr_accessor: BOTH


# # (Setter) setting first_name:
#   def first_name=(name)
#     @first_name = name
#   end
#
# # (Getter) getting first_name:
#   def first_name
#     @first_name
#   end
#
# # (Setter) setting last_name:
#   def last_name=(name)
#     @last_name = name
#   end
#
# # (Getter) getting last_name:
#   def last_name
#     @last_name
#   end
#
# # (Setter) setting best_performance:
#   def best_performance=(movie)
#     @best_performance = movie
#   end
#
# # (Getter) getting best_performance:
#   def best_performance
#     @best_performance
#   end
#
# # (Setter) setting best_performance:
#   def vice=(vice)
#     @vice = vice
#   end
#
# # (getter) getting vice:
#   def vice
#     @vice
#   end

########################################

# Create a new instance in the class MaxBrother:
m = MarxBrother.new "Groucho"
#
# m.first_name=("Groucho")
# m.last_name=("Marx")
# m.best_performance=("The 3 Stooges")
# m.vice=("Cigar")

# Create a new instance in the class MaxBrother:

z = MarxBrother.new "Zeppo", "Marx", "Guitar", "Duck soup"

# z = MarxBrother.new
#
# z.first_name=("Zeppo")
# z.last_name=("Marx")
# z.best_performance=("Duck soup")
# z.vice=("Guitar")

g = MarxBrother.new "Gummo"

p m
p m.identify

p z
p z.identify

class Dog
  attr_accessor :breed, :name, :fur_color

  def initialize( breed, name, fur_color)
    @breed = breed
    @name = name
    @fur_color = fur_color
  end
end



# binding.pry
puts ""
