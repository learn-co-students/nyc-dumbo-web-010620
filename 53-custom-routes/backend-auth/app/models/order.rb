class Order < ApplicationRecord
  belongs_to :user

  has_many :burger_orders
  has_many :burgers, through: :burger_orders

  def niceTimestampForGrandma
    self.created_at.strftime("Ordered on %b/%d/%Y")
  end

end
