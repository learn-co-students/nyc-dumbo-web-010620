class WizardUserSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :wizard
end
