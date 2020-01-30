class CreateCoops < ActiveRecord::Migration
  def change
    create_table :coops do |t|
      t.string :name
      t.string :location
      t.integer :capacity
    end
  end
end
