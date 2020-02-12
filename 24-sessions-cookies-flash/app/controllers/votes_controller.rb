class VotesController < ApplicationController

  def create
    if cookies["votes_remaining"].to_i > 0
      cookies["votes_remaining"] = cookies["votes_remaining"].to_i - 1
      @vote = Vote.create(color_id: params[:color_id])
    end
    redirect_to colors_path
  end

end

