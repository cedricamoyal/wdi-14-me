require 'pry'
require 'sinatra'
require 'sinatra/reloader' # don't need to refresh the server

# It reads from the top, and stop when it find something. Like if and elsif .. Not like CSS

# Initial:
# http://localhost:4567/

# ctr C will refresh the server in the terminal.
# then again (in terminal): 06 Sinatra $ ruby intro.rb

# '/' is the path.
# http://localhost:4567/
get '/' do
  # "Hello World"
  erb :home
end

# '/hello' is the path.
# http://localhost:4567/hello
get '/hello' do
  # "Hi there"
  erb :home
end

# # '/hello/frank' is the path.
# # http://localhost:4567/hello/frank
# get '/hello/frank' do
#   "Hello Frank"
# end
#
# # '/hello/heath' is the path.
# # http://localhost:4567/hello/heath
# get '/hello/heath' do
#   "Hello Heath"
# end
#
# # '/hello/temple' is the path.
# # http://localhost:4567/hello/temple
# get '/hello/temple' do
#   "Hello Temple"
# end

# Dynamic Routing:

get '/hello/:name' do
  puts "Matched /hello/:name"
  # Puts , print, p will all end up ...
  puts "Stored #{params[:name]}"
  # Ruby creates a params hash that contains any detils that we care about:
  name_from_url = params[:name]
  # Because this is the last thing, it will be sent to the browser
  "Hello #{name_from_url.capitalize}"
end

get '/:color' do
  puts params
  # Because this is the last thing, it will be sent to the browser
  # "The color chosen was: #{params[:color]}"

  erb( :show_color )

end

# http://localhost:4567/users/cedric
# This should be the profile of cedric
get '/users/:username' do
  # Because this is the last thing, it will be sent to the browser
  # "This should be the profile of #{params[:username]}"

  erb( :user_profile )
end

# http://localhost:4567/users/cedric/delete
# This should delete cedric
get '/users/:username/delete' do
  # Because this is the last thing, it will be sent to the browser
  "This should delete #{params[:username]}"
end






# binding.pry
puts ""
