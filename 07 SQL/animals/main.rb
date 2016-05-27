
# get the gem:
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


# get request for the home page:
get '/' do
    erb :home
end


get '/animals' do

  db = SQLite3::Database.new "database.db"

  db.results_as_hash = true

  @all_animals = db.execute "SELECT * FROM animals;"

  erb :animals_index
end

# to put befor '/animals/:id'
get '/animals/new' do
  erb :animals_new
end

# to send new animals to the database:
post '/animals' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  animal = db.execute "INSERT INTO animals (species, image, description) VALUES ('#{params[:species]}', '#{params[:image]}', '#{params[:description]}');"

  redirect "/animals"
end

get '/animals/:id/delete' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "DELETE FROM animals WHERE id == #{params[:id]}"

  redirect "/animals"

end



get '/animals/:id/edit' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]};" )[0]

  erb :animals_edit

end

post '/animals/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "UPDATE animals SET species='#{params[:species]}', image='#{params[:image]}', description='#{params[:description]}' WHERE id == #{params[:id]};"

  redirect "/animals/#{params[:id]}"


end





get '/animals/:id' do

  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]};" )[0]

    erb :animals_show

end
