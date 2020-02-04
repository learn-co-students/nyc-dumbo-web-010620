# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Car.destroy_all
Dealership.destroy_all
City.destroy_all

nyc = City.create!(name: "New York City")
chi = City.create!(name: "Chicago")
la_la = City.create!(name: "La La Land")

Dealership.create!(name: "Graham's Shady Dealership", city: chi)
eric_s = Dealership.create!(name: "Eric's Reputable Establishment", city: -)
Dealership.create!(name: "Sylwia's Saab Saloon", city: nyc)

Car.create!(name: "Betsy", year: 2000, dealership: eric_s)
Car.create!(name: "Teddy", year: 1995, dealership: eric_s)
Car.create!(name: "Mitch", year: 2020, dealership: eric_s)

