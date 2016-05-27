# tunr $ rails generate migration create_genres_songs

class CreateGenresSongs < ActiveRecord::Migration
  def change
    create_table :genres_songs, :id => false do |t|
      t.integer :genre_id
      t.integer :song_id
    end
  end
end

# A join table needs to be in alphabetical order
# Only have foreign keys (genre_id and song_id)
# It never has a primary key

# tunr $ rake db:migrate
