# tunr $ rails generate model Genre name:text

class CreateGenres < ActiveRecord::Migration
  def change
    create_table :genres do |t|
      t.text :name

      t.timestamps null: false
    end
  end
end

# tunr $ rake db:migrate
# tunr $ annotate
