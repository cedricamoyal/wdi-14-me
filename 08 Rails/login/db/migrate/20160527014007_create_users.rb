# login $ rails generate model User name:text email:text password_digest:text

class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :name
      t.text :email
      t.text :password_digest

      t.timestamps null: false
    end
  end
end

# login $ rake db:create
# login $ rake db:migrate
# login $ rails generate controller Users index new show edit
