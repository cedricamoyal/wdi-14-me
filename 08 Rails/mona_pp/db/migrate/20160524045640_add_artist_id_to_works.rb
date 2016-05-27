# mona_pp $ rails generate migration add_artist_id_to_works

class AddArtistIdToWorks < ActiveRecord::Migration
  def change
    add_column :works, :artist_id, :integer
  end
end

# mona_pp $ rake db:migrate
