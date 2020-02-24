class CreateDucks < ActiveRecord::Migration[6.0]
  def change
    create_table :ducks do |t|
      t.string :name
      t.belongs_to :category, null: false, foreign_key: true
      t.string :image_url
      t.integer :rating

      t.timestamps
    end
  end
end
