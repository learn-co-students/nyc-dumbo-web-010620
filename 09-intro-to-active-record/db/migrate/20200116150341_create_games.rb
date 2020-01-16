class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.integer :price
      t.string :publisher
 
      t.timestamps
      # created_at, updated_at
    end
  end
end
