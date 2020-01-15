class Game
  attr_accessor :title, :genre, :price

  @@all = []

  def initialize(title, genre, price)
    @title = title
    @genre = genre
    @price = price
    @@all << self
  end

  # has_many reviews
  def reviews
    Review.all.select do |review_instance|
      review_instance.game == self
    end
  end

  # has_many players through reviews
  def players
    self.reviews.map do |review_instance|
      review_instance.player
    end
  end

  def self.all
    @@all
  end

end