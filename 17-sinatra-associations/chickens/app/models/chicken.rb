class Chicken < ActiveRecord::Base

  belongs_to :coop

  # def self.just_the_cooler_chickens
  #   self.where(cool: true)
  # end

end