eric = User.create(username: "Eric", password: "abc123")
otha = User.create(username: "Otha", password: "abc123")
leizl = User.create(username: "Leizl", password: "abc123")


Snack.create(name: "Broccoli")
Snack.create(name: "Pizza")


Snack.create(name: "Pineapple Pizza")


Snack.create(name: "Chocolate")
Snack.create(name: "Bananas")


5.times do
  UserSnack.create(user: User.all.sample, snack: Snack.all.sample)
end
