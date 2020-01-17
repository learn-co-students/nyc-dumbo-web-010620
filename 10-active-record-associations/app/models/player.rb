class Player < ActiveRecord::Base
  has_many :reviews
  has_many :games, through: :reviews
  # has_many :re_views #bad example

  # def reviews
  #   Review.all.select do |review|
  #     review.player_id == self.id
  #   end
  # end

  # def re_views
  #   ReView.all.select do |re_view|
  #     re_view.player_id == self.id
  #   end
  # end

  # def games
  #   self.reviews.map do |review|
  #     # Game.find(review.game_id)
  #     review.game
  #   end
  # end
end
