class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :orders
  # has_many / belongs_to has the serializer call upon the other serializer

end
