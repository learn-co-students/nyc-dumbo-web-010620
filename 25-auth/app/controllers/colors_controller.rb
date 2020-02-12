class ColorsController < ApplicationController

  # before_action :do_the_thing

  def index
    if request.path != colors_path
      redirect_to colors_path
    end
    @colors = Color.includes(:votes).all
  end

end