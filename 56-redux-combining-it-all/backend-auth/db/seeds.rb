eric = User.create(username: "Eric", password: "abc123")
otha = User.create(username: "Otha", password: "abc123")
leizl = User.create(username: "Leizl", password: "abc123")
wizzies = [
  {
    name: "Sirius Black",
    house: "Gryffindor",
    redux: "State"
  },
  {
    name: "Hedwig",
    house: "Gryffindor",
    redux: "Dispatch"
  },
  {
    name: "Prison Guard",
    house: "Slytherin",
    redux: "Reducer"
  }
]

Wizard.create(wizzies)

5.times do
  WizardUser.create(wizard: Wizard.all.sample, user: User.all.sample)
end
