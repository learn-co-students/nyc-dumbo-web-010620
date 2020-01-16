require_relative "../config/environment"

class Clown
  attr_accessor :name, :age, :fears, :skill

  def initialize(name, age, fears, skill)
    binding.pry
    @name = name
    @age = age
    @fears = fears
    @skill = skill
  end

end

krusty = Clown.new("Krusty", 2, "Children", "Juggling Chainsaws")

binding.pry
"yay"