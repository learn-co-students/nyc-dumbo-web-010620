require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# seed data
co1 = CarOwner.new("Ian")
co2 = CarOwner.new("Leizl")
co3 = CarOwner.new("Otha")

m1 = Mechanic.new("Bob", "sportscars")
m2 = Mechanic.new("Larry", "sportscars")
m3 = Mechanic.new("Michelle", "trucks")

# Car.new(make, model, classification, car_owner, mechanic)
c1 = Car.new("BMW", "M3", "sportscars", co2, m2)
c2 = Car.new("Porche", "M3", "sportscars", co1, m2)
c3 = Car.new("Mercedes", "M3", "sportscars", co1, m1)
c4 = Car.new("Ford", "M3", "trucks", co2, m3)
c5 = Car.new("Dodge", "M3", "trucks", co3, m1)
c6 = Car.new("Chevy", "M3", "trucks", co3, m1)
c7 = Car.new("Mercedes", "M4", "sportscars", co1, m1)

binding.pry
