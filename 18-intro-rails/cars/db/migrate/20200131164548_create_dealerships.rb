class CreateDealerships < ActiveRecord::Migration[6.0]
  def change
    create_table :dealerships do |t|
      t.string :name
      t.integer :level_of_sleaziness
      t.belongs_to :city, null: false, foreign_key: true

      t.timestamps
    end
  end
end
