class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.belongs_to :city, null: false, foreign_key: true
      t.belongs_to :dealership, null: false, foreign_key: true

      t.timestamps
    end
  end
end
