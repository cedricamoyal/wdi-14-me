require 'pry'

f = File.open "movie_db.txt", "r"

# we store an array of every line in the file:
all_lines = f.readlines
p all_lines



# add movies:
def add_movies
  puts "Time to add a movie"

  print "What is the name of it? "
  name = gets().chomp()

  print "Duration? ? "
  duration = gets().chomp()

  print "Rating? ? "
  rating = gets().chomp()

  f = File.open "movie_db.txt", "a+"
  f.puts "#{name},#{duration},#{rating}"
  f.close
end

# add_movies()

# For every movies:
def display_movie (movie)
  movie.chomp!
  movie_details = movie.split ","

  movie_name = movie_details[0]
  movie_duration = movie_details[1]
  movie_rating = movie_details[2]

  puts ""
  puts "Name: #{movie_name}"
  puts "Duration: #{movie_duration}"
  puts "Rating: #{movie_rating}"
end

# Display every movie:
all_lines.each do |line|
  display_movie(line)
end



#################
# Example for 1 movie:
    # satantango = all_lines[0].chomp
    # satantango = satantango.split ","
    # p satantango
    # s_name = satantango[0]
    # s_duration = satantango[1]
    # s_rating = satantango[2]
    #
    # p "Name: #{s_name}"
    # p "Duration: #{s_duration}"
    # p "Rating: #{s_rating}"
################################

###########
#Display one at the time:
    # display_movie(all_lines[0])
    # display_movie(all_lines[1])
    # display_movie(all_lines[2])
    # display_movie(all_lines[3])
################







f.close


#
# binding.pry
puts ""
