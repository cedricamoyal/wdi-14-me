# tunr $ rails generate model Album  name:text image:text

class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.text :name
      t.text :image

      t.timestamps null: false
    end
  end
end

# tunr $ rake db:migrate
# tunr $ annotate
