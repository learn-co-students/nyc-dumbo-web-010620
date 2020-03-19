eric = User.create(username: "Eric", password: "abc123")
otha = User.create(username: "Otha", password: "abc123")
leizl = User.create(username: "Leizl", password: "abc123")


eric.snacks.create(name: "Broccoli")
eric.snacks.create(name: "Pizza")


otha.snacks.create(name: "Pineapple Pizza")


leizl.snacks.create(name: "Chocolate")
leizl.snacks.create(name: "Bananas")
