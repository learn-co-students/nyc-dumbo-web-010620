class Studio < ApplicationRecord
  # validates :name, length: { minimum: 1 }
  # no blank names
  # validates :name, presence: true
  validates_presence_of :name, :location, :founding_year
  validates_uniqueness_of :name

  # no negative founding year
  validates :founding_year, numericality: { greater_than: 0 }
  # specific amount of characters for location

  validate :date_range

  def date_range
    if !founding_year || (founding_year < 0 || founding_year > 2020)
      errors.add(:founding_year, "That year doesn't exist.")
    end
  end

end
