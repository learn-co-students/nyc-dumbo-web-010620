require_relative "../config/environment"

class Clown
  attr_accessor :name, :age, :fears, :skill

  def initialize(arg_hash)
    arg_hash.each do |key, value|
      self.send("#{key}=", value)
    end
  end

end

krusty = Clown.new(age: 2, name: "Krusty", fears: "Children", skill: "Juggling Chainsaws")
pennywise = Clown.new(name: "Pennywise", age: 300, fears: "Ridicule", skill: "Luring kids into sewers")

binding.pry
"yay"