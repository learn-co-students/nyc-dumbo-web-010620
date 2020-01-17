class Review < ActiveRecord::Base
  belongs_to :player
  belongs_to :game

  # def player
  #   # take my player id, find the player instance
  #   Player.find(self.player_id)
  # end
  #
  # def game
  #   Game.find(self.game_id)
  # end


end
