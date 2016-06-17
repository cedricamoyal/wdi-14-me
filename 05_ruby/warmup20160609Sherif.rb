class Handshake

  def initialize num
    @digits = num.chars.reverse
  end

  def handshake
    state = "start"
    zeros = 0
    messages = []
    @digits.each do |d|
      if d == "0"
        state = "zero"
        zeros += 1
      elsif d == "1"
        unless state == "start"
          puts "i came here #{state}"
          messages << instructions[zeros] unless zeros == 4
        end
        if zeros == 4
          messages = messages.reverse
        end
        state = "one"
        zeros = 0
      end
    end
    messages << instructions[zeros] unless zeros == 4
    if zeros == 4
      messages = messages.reverse
    end
    messages
  end

  def instructions
    ["wink", "double blink", "close your eyes", "jump"]
  end
end


h = Handshake.new "0000111001"
p h.handshake
