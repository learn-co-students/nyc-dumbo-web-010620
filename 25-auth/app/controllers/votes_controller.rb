class VotesController < ApplicationController

  def index
    @votes = Vote.all
  end

  def create 
    unless logged_in?
      flash[:notification] = "You need to log in!"
      return redirect_to new_login_path
    end

    if @can_vote
      @vote = Vote.create(color_id: params[:color_id], user_id: current_user_id)
    else
      flash[:notification] = "You used up all your votes already 🙅‍♀️"
    end
    redirect_to colors_path
  end

  def destroy
    @vote = Vote.find(params[:id])
    @vote.destroy
    redirect_to votes_path
  end

end

