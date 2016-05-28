# project2cedric $ rails generate model Country --skip

class CreateCountries < ActiveRecord::Migration
  def change
    create_table :countries do |t|

      t.text :name
      t.integer :location_id
      t.text :capitalCity
      t.text :currency
      t.text :population
      t.text :area
      t.text :popDensity
      t.text :flag
      t.text :visa
      
      t.text :capitalLongitude
      t.text :capitalLatitude

    end
  end
end
