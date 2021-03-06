# rails generate controller Pages numbers text railsassets url home
# http://localhost:3000/rails/info/routes

Rails.application.routes.draw do

  root 'pages#home'

  get '/random' => 'pages#random', :as => 'random'
  get '/number/:number' => 'pages#single_number', :as => 'single_number'
  get '/number/:x/:y' => 'pages#two_numbers', :as => 'two_numbers'

  get '/date' => 'pages#date', :as => 'date'

  get '/numbers' => 'pages#numbers', :as => 'numbers'

  get '/text' => 'pages#text', :as => 'text'

  get '/railsassets' => 'pages#railsassets', :as => 'assets'

  get '/url' => 'pages#url', :as => 'url'

  get '/home' => 'pages#home', :as => 'home'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
