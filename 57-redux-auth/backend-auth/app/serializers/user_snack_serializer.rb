class UserSnackSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :snack
end
