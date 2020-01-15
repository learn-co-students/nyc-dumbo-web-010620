require_relative '../config/environment.rb'

p1 = Player.new("Ian", 1)
p2 = Player.new("Leizl", 2)
p3 = Player.new("Otha", 3)

g1 = Game.new("Super Mario Bros", "Platformer", 100)
g2 = Game.new("Duck Hunt", "FPS", 99)
g3 = Game.new("Tetris", "Survival Horror", 101)

r1 = Review.new(10, "11 stars", g1, p1)
r1 = Review.new(10, "12 stars", g2, p1)
r1 = Review.new(1, "meh", g1, p2)
r1 = Review.new(9, "my fave", g3, p2)
r1 = Review.new(2, "why", g2, p3)

binding.pry
0
