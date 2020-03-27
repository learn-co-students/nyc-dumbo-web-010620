class WizardUser < ApplicationRecord
  belongs_to :wizard
  belongs_to :user
end
