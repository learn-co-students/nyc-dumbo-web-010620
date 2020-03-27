class Wizard < ApplicationRecord
  has_many :wizard_users
  has_many :users, through: :wizard_users
end
