# tunr $ rails generate migration create_mixtapes_songs

class CreateMixtapesSongs < ActiveRecord::Migration
  def change
    create_table :mixtapes_songs, :id => false do |t|
      t.integer :mixtape_id
      t.integer :song_id
    end
  end
end

# tunr $ rake db:migrate
