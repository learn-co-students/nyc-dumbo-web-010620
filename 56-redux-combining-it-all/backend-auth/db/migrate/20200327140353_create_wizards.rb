class CreateWizards < ActiveRecord::Migration[6.0]
  def change
    create_table :wizards do |t|
      t.string :name
      t.string :house
      t.string :redux

      t.timestamps
    end
  end
end
