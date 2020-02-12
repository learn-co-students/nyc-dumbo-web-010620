class ColorsController < ApplicationController

  def index
    cookies["votes_remaining"] ||= 5
    @votes_remaining = cookies["votes_remaining"]
    if request.path != colors_path
      redirect_to colors_path
    end
    @colors = Color.includes(:votes).all
  end

end