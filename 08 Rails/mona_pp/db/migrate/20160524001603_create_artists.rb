# mona_pp $ rails generate migration create_artists
            # Running via Spring preloader in process 882
            #       invoke  active_record
            #       create    db/migrate/20160524001603_create_artists.rb
            
# mona_pp $ rake db:create

# mona_pp $ rake db:migrate
            # == 20160524001603 CreateArtists: migrating ====================================
            # -- create_table(:artists)
            #    -> 0.0014s
            # == 20160524001603 CreateArtists: migrated (0.0015s) ===========================



class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :period
      t.text :image

      t.timestamps # created_at, updated_at

    end
  end
end
