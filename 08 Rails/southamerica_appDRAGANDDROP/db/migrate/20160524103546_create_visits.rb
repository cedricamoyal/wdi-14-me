class CreateVisits < ActiveRecord::Migration
  def change
    create_table :visits do |t|
      t.text :name
      t.text :type
      t.text :duration
      t.text :image

      t.timestamps # created_at, updated_at
    end
  end
end
