class CreateAuthorships < ActiveRecord::Migration[6.0]
  def change
    create_table :authorships do |t|
      t.belongs_to :book, null: false, foreign_key: true
      t.belongs_to :author, null: false, foreign_key: true

      t.timestamps
    end
  end
end
