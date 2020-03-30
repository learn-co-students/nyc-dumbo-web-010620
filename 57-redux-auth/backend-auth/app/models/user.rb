class User < ApplicationRecord
  has_many :user_snacks
  has_many :snacks, through: :user_snacks

  validates :username, uniqueness: true
  has_secure_password
end
