
random_name = ""

    random_number1 = (Random.rand 1..9).to_s
    random_number2 = (Random.rand 1..9).to_s
    random_number3 = (Random.rand 1..9).to_s

    # random_letter1 = (Random.rand "A".."Z").to_s
    # random_letter2 = (Random.rand "A".."Z").to_s

    random_name = random_number1 + random_number2 +random_number3
    # random_name = random_letter1 + random_letter2 + random_number1 + random_number2 +random_number3

    # p random_letter1
    # p random_letter2
    p random_number1
    p random_number2
    p random_number3
    p ""
    p random_name


    ##################
    class Robot

  attr_reader :instruction_count
  def initialize
    @name = generate_name
    @created_at = Time.now
    @instruction_count = 0
  end

  def generate_name
    "#{generate_letters}#{generate_numbers}"
  end

  def generate_letters
    letters = ('A'..'Z').to_a.sample(2).join
  end

  def generate_numbers
    numbers = (1..9).to_a.sample(3).join
  end

  def name
    @instruction_count += 1
    @name
  end

  def reset
    puts "Resetting to factory settings"
    @name = generate_name
    @instruction_count += 1
  end

  def robot_age
    Time.now - @created_at
  end
end

r = Robot.new
puts r.name
r.reset
puts r.name
puts r.instruction_count
puts r.robot_age
