# tunr $ rails generate model Mixtape title:text user_id:integer is_fire:boolean

class CreateMixtapes < ActiveRecord::Migration
  def change
    create_table :mixtapes do |t|
      t.text :title
      t.integer :user_id
      t.boolean :is_fire

      t.timestamps null: false
    end
  end
end

# tunr $ rake db:migrate
# tunr $ annotate
