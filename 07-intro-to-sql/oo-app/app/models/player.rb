class Player
  attr_accessor :name, :age

  @@all = []

  def initialize(name, age)
    @name = name
    @age = age
    @@all << self
  end

  # has_many reviews
  def reviews
    Review.all.select do |review_instance|
      review_instance.player == self
    end
  end

  # has_many games through reviews
  def games
    self.reviews.map do |review_instance|
      review_instance.game
    end
  end

  def self.all
    @@all
  end

end