Rails.application.routes.draw do


  resources :users, :trips, :locations, :countries, :visits

  get "/login" => 'session#new', :as => 'login'
  post "/login" => 'session#create'
  delete "/logout" => 'session#destroy', :as => 'logout'

end
