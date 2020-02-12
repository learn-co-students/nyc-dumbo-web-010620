class VotesController < ApplicationController

  # skip_before_action :setup, only: [:create]

  def index
    @votes = Vote.all
  end

  def create
    unless @logged_in
      set_notification("You're not logged in 🖕")
      redirect_to new_login_path
      return
    end

    if @can_vote
      # use_one_vote
      @vote = Vote.create(color_id: params[:color_id], user_id: session[:user_id])
      # byebug
    else
      set_notification("You're out of votes 🖕")
    end
    redirect_to colors_path
  end

  def destroy
    @vote = Vote.find(params[:id])
    if @vote.user_id == @logged_in_user_id
      @vote.destroy
    end
    redirect_to votes_path
  end

end

