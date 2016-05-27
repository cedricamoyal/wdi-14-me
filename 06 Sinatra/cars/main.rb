
# Require all the gem:
require 'pry' # for debugging
require 'sinatra' # to use as web app
require 'sinatra/reloader' # don't need to refresh the server


# Make literal routes:

# http://localhost:4567/
get '/' do
  # "This is our home page"
  erb :home
end

# http://localhost:4567/about
get '/about' do
  # "This is our about page"
  erb :about
end

# http://localhost:4567/contact
get '/contact' do
  # "This is our contact page"
  erb :contact
end

# Make dynamic routes:

get '/calc/:x/:y' do

  # Instance variables are allowed to be accessed in views:
  @first_number = params[:x].to_f
  @second_number = params[:y].to_f

  @result = @first_number + @second_number

  # Route:
  erb :result
end

# Literal route in order to show the form:
get '/calc' do
  erb :calc
end

# Literal route in order to action the form:
get '/calculate' do
  # We expect to receive parameter from input:
  # http://localhost:4567/calculate?first_number=10&second_number=23
  
  @first_number = params[:first_number].to_f
  @second_number = params[:second_number].to_f

  @result = @first_number + @second_number
  erb :result

end
