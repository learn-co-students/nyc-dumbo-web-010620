class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :name
      t.integer :year
      t.belongs_to :dealership
      t.timestamps
    end
  end
end
