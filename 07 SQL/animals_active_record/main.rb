
# get the gem:
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require 'active_record'


# Connect to active record:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
  );

ActiveRecord::Base.logger = Logger.new(STDERR)

class Animal < ActiveRecord::Base
  belongs_to :habitat
end

class Habitat < ActiveRecord::Base
  has_many :animals
end


# get request for the home page:
get '/' do
    erb :home
    binding.pry
end

get '/habitats' do
  @all_habitats = Habitat.all
  erb :habitats_index
end

get '/animals' do
  @all_animals = Animal.all
  erb :animals_index
end

get '/habitats/new' do
  erb :habitats_new
end

# to put befor '/animals/:id'
get '/animals/new' do
  erb :animals_new
end

post '/habitats' do

    habitat = Habitat.new
    habitat.landscape = params["landscape"]
    habitat.climat = params["climat"]

    habitat.save

  redirect "/habitats"
end

# to send new animals to the database:
post '/animals' do

    animal = Animal.new
    animal.species = params["species"]
    animal.image = params["image"]
    animal.description = params["description"]
    animal.save

  redirect "/animals"
end


get '/habitats/:id/delete' do

    habitat = Habitat.find(params[:id])
    habitat.destroy

  redirect "/habitats"

end


get '/animals/:id/delete' do

    animal = Animal.find(params[:id])
    animal.destroy

  redirect "/animals"

end


get '/habitats/:id/edit' do
    @habitat = Habitat.find(params[:id])
  erb :habitats_edit
end

get '/animals/:id/edit' do
    @animal = Animal.find(params[:id])
  erb :animals_edit
end


post '/habiats/:id' do

  habitat = Habitat.find(params[:id])

  habitat.landscape = params["landscape"]
  habitat.climat = params["climat"]

  habitat.save

  redirect "/habitats/#{params[:id]}"

end

post '/animals/:id' do

  animal = Animal.find(params[:id])

  animal.species = params["species"]
  animal.image = params["image"]
  animal.description = params["description"]
  animal.habitat_id = params["habitat_id"]
  animal.save

  redirect "/animals/#{params[:id]}"

end


get '/habitats/:id' do
  @habitat = Habitat.find(params[:id])
    erb :habitats_show
end



get '/animals/:id' do
  @animal = Animal.find(params[:id])
    erb :animals_show
end
