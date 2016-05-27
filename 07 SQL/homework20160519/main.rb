# CREATE TABLE countries (
#   id INTEGER PRIMARY KEY AUTOINCREMENT,
#   name TEXT,
#   duration TEXT,
#   visits TEXT,
#   flag TEXT,
#   photo TEXT
# );

# get the gem:
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do

  db = SQLite3::Database.new "database.db"
  # db.results_as_hash = true
  @all_countries = db.execute "SELECT * FROM countries;"

  erb :home

end

get '/countries' do
    db = SQLite3::Database.new "database.db"
    db.results_as_hash = true
    @all_countries = db.execute "SELECT * FROM countries;"
  erb :countries
end



get '/countries/new' do
  erb :countries_new
end

post '/countries' do

    db = SQLite3::Database.new "database.db"
    db.results_as_hash = true

    country = db.execute "INSERT INTO countries (name, duration, visits, flag, photo) VALUES ('#{params[:name]}', '#{params[:duration]}', '#{params[:visits]}', '#{params[:flag]}', '#{params[:photo]}');"


  redirect '/countries'

end
#########################

get '/countries/:id/delete' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "DELETE FROM countries WHERE id == #{params[:id]}"

  redirect "/countries"

end



get '/countries/:id/edit' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @country = db.execute( "SELECT * FROM countries WHERE id == #{params[:id]};" )[0]

  erb :countries_edit

end

post '/countries/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "UPDATE countries SET name='#{params[:name]}', duration='#{params[:duration]}', visits='#{params[:visits]}', flag='#{params[:flag]}', photo='#{params[:photo]}' WHERE id == #{params[:id]};"

  redirect "/countries/#{params[:id]}"


end
# #############################

get '/countries/:id' do

  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @country = db.execute( "SELECT * FROM countries WHERE id == #{params[:id]};" )[0]

    erb :countries_show

end

# [1] pry(#<Sinatra::Application>)> params
# => {"name"=>"Brasil",
#  "duration"=>"1 month",
#  "visits"=>"Waterfalls",
#  "flag"=>"Cool flag",
#  "photo"=>"Cool image"}
