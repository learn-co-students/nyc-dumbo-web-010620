class AddCoopIdToChicken < ActiveRecord::Migration
  def change
    add_column :chickens, :coop_id, :integer
  end
end
