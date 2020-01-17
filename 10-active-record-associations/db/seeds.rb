Player.destroy_all
Game.destroy_all
Review.destroy_all

p1 = Player.create(name: "Ian", age: 33, console: "PC")
p2 = Player.create(name: "Julianna", age: 28, console: "PS4")
p3 = Player.create(name: "Lei", age: 28, console: "PC")

g1 = Game.create(title: "Tetris", genre: "Puzzle", price: 15, publisher: "?")
g2 = Game.create(title: "Iron Flat", genre: "Horror", price: 17000, publisher: "DOE")

Review.create(player_id: p1.id, game_id: g1.id, rating: 10, comment: "Kinda meh.")
Review.create(player_id: p1.id, game_id: g2.id, rating: 10, comment: "They made me say that.")

Review.create(player_id: p2.id, game_id: g1.id, rating: 10, comment: "It's lit.")
Review.create(player_id: p2.id, game_id: g2.id, rating: 10, comment: "It's lit lit.")

Review.create(player_id: p3.id, game_id: g1.id, rating: 3, comment: "This game is hard.")
Review.create(player_id: p3.id, game_id: g2.id, rating: 1, comment: "This game changed my life.")

puts "Done."
