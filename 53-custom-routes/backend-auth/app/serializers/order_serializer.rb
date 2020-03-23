class OrderSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :niceTimestampForGrandma
  has_many :burger_orders

end
