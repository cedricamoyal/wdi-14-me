# WORKS:

require 'pry'


class Human
  def speak message
    puts message
  end
  def breathe
    "Breathe in and out"
  end
  def eat food
    "Currently eating #{food}"
  end
end

anonymous = Human.new

# the class MarxBrother belong to the class Human:
class MarxBrother < Human
  attr_accessor :first_name, :last_name, :vice, :best_performance

# the initialize method will take action automaticly when we create a new instance like:
# groucho = MarxBrother.new "Groucho"
  def initialize( first_name, last_name = "Marx", vice = "Being terrific", best_performance = "Duck soup")
    @first_name = first_name
    @last_name = last_name
    @vice = vice
    @best_performance = best_performance
  end
end


groucho = MarxBrother.new "Groucho", "Sinatra"
zeppo = MarxBrother.new "Zeppo"
harpo = MarxBrother.new "Harpo"
chico = MarxBrother.new "Chico"

binding.pry

puts ""
