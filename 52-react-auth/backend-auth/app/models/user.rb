class User < ApplicationRecord
  has_many :snacks
  validates :username, uniqueness: true
  has_secure_password
end
