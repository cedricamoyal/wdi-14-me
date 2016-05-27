# Basic Rails application setup:

      # 'rails new mona_app'
      # 'cd mona_app'
      # add gems ino the Gemg=file:
          # gem to development group: 'gem 'pry-rails''
          # 'bundle' or 'bundle install'
      # New pane - CMND + D
      # 'rails s' or 'rails server'

# Time for CRUD stuff:

# Draw out the database
    # Associations (crows feet)
    # Columns and types
    # Make sure Timestamps!

# if you want the database to start with something: .... see on git hub lol

      # Repeat as necessary
         # add 'resources :artists' - config/routes.rb
         # visit localhost:3000/rails/info/routes
         # Start with READ steps - EDD
              # Controllers
                  # def index; @artists = Artist.all; end;
                  # 'rails generate model Artist --skip' - terminal ## Creates model and migration file
                            ## mona_pp $ rails generate migration add_artist_id_to_works # only create a migration file (no model)
                  # Fill in the migration file with everything that is necessary
                  # 'rake db:migrate' - terminal
                  # Look at db/schema.rb to make sure it worked
              # Views
                  # make folders and files
                  # write the details


## 'rails new some_app_name'
## 'rake db:create'
## 'rake db:migrate'
## 'rake db:seed'
## 'rake db:rollback'

## 'rails generate migration create create_artists'
      # fill in the migration
      # 'rake db:migrate'

## 'rails generate model Artist'

## 'rails server'
## 'rails console'
## 'rails db'
