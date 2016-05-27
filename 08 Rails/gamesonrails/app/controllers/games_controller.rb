class GamesController < ApplicationController

  def index
  end

  def magic
  end

  def secret
  end

  def rps
  end

  def magic8question
    @question = params[:magic8question]
    @random_number = Random.rand 1..3

    if @random_number == 1
      @result = "Yeeeeees!!"
    elsif @random_number == 2
      @result = "I am not sure..."
    else
      @result = "No NO No!!"
    end
  end

  def secretnumber
    @usernumber = params[:secretnumber].to_i
    @random_number = Random.rand 0..10

    if @usernumber == @random_number
      @result = "You won!!"
    else
      @result = "You lost!!"
    end
  end

  def rpsplay
    @userchoice = params[:rpsplay]
    @random_number = Random.rand 1..3
    @computerchoice = ""

    if @random_number == 1
      @computerchoice = "rock"
    elsif @random_number == 2
      @computerchoice = "paper"
    else
      @computerchoice = "scissors"
    end

    if @userchoice == @computerchoice
      @result = "You won!!"
    else
      @result = "You lost!!"
    end

  end

end
