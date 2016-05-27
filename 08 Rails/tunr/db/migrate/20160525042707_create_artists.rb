# tunr $ rails generate model Artist name:text image:text

class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.text :name
      t.text :image

      t.timestamps null: false
    end
  end
end

# tunr $ rake db:migrate
# tunr $ annotate
