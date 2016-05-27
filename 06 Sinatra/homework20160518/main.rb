# Require all the gem:
require 'pry' # for debugging
require 'sinatra' # to use as web app
require 'sinatra/reloader' # don't need to refresh the server
require 'httparty'

# Make literal routes:

# http://localhost:4567/
get '/' do
  # "This is our home page"
  erb :home
end

# Literal route in order to action the form:
get '/search' do
  # We expect to receive parameter from input:
  # http://localhost:4567/calculate?first_number=10&second_number=23

  @movie_name = params[:movie_name]
  @URL = "http://omdbapi.com?s=" + @movie_name
  @result = HTTParty.get @URL

  

  @poster_of_first_result = @result["Search"][0]["Poster"]


  # Here is your @response:
  # {"Search"=>[{"Title"=>"Satantango", "Year"=>"1994", "imdbID"=>"tt0111341", "Type"=>"movie", "Poster"=>"http://ia.media-imdb.com/images/M/MV5BMTIyMTY0OTMwMV5BMl5BanBnXkFtZTcwOTY2NDU4MQ@@._V1._CR18,0,335,451_SY132_CR4,0,89,132_AL_.jpg_V1_SX300.jpg"}], "totalResults"=>"1", "Response"=>"True"}

  erb :result

end












# binding.pry
puts ""
