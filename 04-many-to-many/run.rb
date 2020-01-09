require 'pry'
require_relative 'models/alien_species'
require_relative 'models/planet'
require_relative 'models/colony'

# AlienSpecies.new(race, biology, language, limb_count, transpo)
humans = AlienSpecies.new("human", "breathes oxygen", "so many", 4, "bikes")
heptos = AlienSpecies.new("heptapods",	"weird octo thing",	"ink & weird sounds",	7,	"spaceships")

# Planet.new(name, climate)
earth = Planet.new("earth", "all kinds")
venus = Planet.new("venus", "cold")
tatooine = Planet.new("tatooine", "desert")

# Colony.new(name, population, planet, alien)
nyc = Colony.new("nyc", 8_000_000, earth, heptos)
lunar = Colony.new("lunar", 1, earth, humans)
mos_eisly = Colony.new("mos_eisly", 1000, tatooine, humans)

binding.pry
"pls work"