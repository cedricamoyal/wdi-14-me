class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :email
      t.text :password_digest
      t.boolean :admin, :default => false
      t.text :image

      t.timestamps null: false
    end
  end
end

# tunr $ rake db:migrate
