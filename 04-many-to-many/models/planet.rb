class Planet
  attr_reader :name, :climate

  @@all = []

  def initialize(name, climate)
    @name = name
    @climate = climate

    @@all << self
  end

  def colonies
    # 1. For the planet, 
    # look at the colonies 
    my_colonies = Colony.all.select do |colony_instance|
      # and figure out which ones belong to me
      colony_instance.planet == self
    end

    my_colonies
  end

  def alien_species
    # 2. Once we have the colonies, 
    # figure out which alien species that colony is for
    # and return the aliens
    self.colonies.map do |colony|
      colony.alien
    end
  end

  def self.all
    @@all
  end

end