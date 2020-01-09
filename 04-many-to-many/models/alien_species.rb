class AlienSpecies
  attr_reader :race, :biology, :language, :limb_count, :transpo

  @@all = []

  def initialize(race, biology, language, limb_count, transpo)
    @race = race
    @biology = biology
    @language = language
    @limb_count = limb_count
    @transpo = transpo

    @@all << self
  end

  def colonies
    # 1. For the alien species, 
    # look at the colonies 
    my_colonies = Colony.all.select do |colony_instance|
      # and figure out which ones belong to me
      colony_instance.alien == self
    end

    my_colonies
  end

  def planets
    # 2. Once we have the colonies, 
    # figure out which planet that colony is on
    # and return the planets
    self.colonies.map do |colony|
      colony.planet
    end
  end

  def total_population
    pop_sizes = self.colonies.map do |colony|
      colony.total_population
    end
    pop_sizes.sum
  end

  def self.all
    @@all
  end

end