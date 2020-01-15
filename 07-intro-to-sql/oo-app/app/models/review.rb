class Review
  attr_accessor :rating, :comment, :game, :player

  @@all = []

  def initialize(rating, comment, game, player)
    @rating = rating
    @comment = comment
    @game = game
    @player = player
    @@all << self
  end

  def self.all
    @@all
  end

end