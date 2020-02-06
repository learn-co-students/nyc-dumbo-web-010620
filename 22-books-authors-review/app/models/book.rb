class Book < ApplicationRecord
  
  has_many :authorships, dependent: :destroy
  has_many :authors, through: :authorships

end
