class User < ApplicationRecord
  validates :username, uniqueness: true

  has_many :wizard_users
  has_many :wizards, through: :wizard_users

  has_secure_password
end
