# http://localhost:3000/rails/info/routes to check all our routes

Rails.application.routes.draw do

  resources :works, :artists

  # get '/artists' => 'artists#index'
  #
  # get '/artists/new' => 'artists#new'
  # post '/artists' => 'artists#create'
  #
  # get '/artists/:id' => 'artists#show'
  #
  # get '/artists/:id/edit' => 'artists#edit'
  #
  # patch '/artists/:id' => 'artists#update'
  # put '/artists/:id' => 'artists#update'
  # post '/artists/:id' => 'artists#update'
  #
  # delete '/artists/:id/delete' => 'artists#destroy'

end
