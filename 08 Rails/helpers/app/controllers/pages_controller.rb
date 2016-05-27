class PagesController < ApplicationController
  def numbers
    @price = 22424
    @large_number = 234000000000000000
    @phone_number = 2125551212
  end

  def text
    @numbers = (1..50).to_a.shuffle
    @friends = 1
    @enemies = 1212
    @fairytale = "A very very very long time ago" * 15
  end

  def railsassets
  end

  def url
    @single_number = 2
    @x = 3
    @y = 4
  end

  def home
  end

  def random
  end

  def single_number
  end

  def two_numbers
  end

  def date
    
  end



end
