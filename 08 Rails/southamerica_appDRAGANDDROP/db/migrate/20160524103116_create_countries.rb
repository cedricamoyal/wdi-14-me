class CreateCountries < ActiveRecord::Migration
  def change
    create_table :countries do |t|
      t.text :name
      t.text :surface
      t.text :population
      t.text :language
      t.text :flag

      t.timestamps # created_at, updated_at
    end
  end
end
