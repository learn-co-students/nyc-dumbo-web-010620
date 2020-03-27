class CreateWizardUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :wizard_users do |t|
      t.references :wizard, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
