class Duck < ApplicationRecord
  belongs_to :category

  validates :name, presence: true

  # def category_name
  #   self.category.name
  # end
end
