# mona_pp $ rails generate migration create_works

class CreateWorks < ActiveRecord::Migration
  def change
    create_table :works do |t|
      t.text :title
      t.text :year
      t.text :medium
      t.text :style
      t.text :image

    end
  end
end

# mona_pp $ rake db:migrate
