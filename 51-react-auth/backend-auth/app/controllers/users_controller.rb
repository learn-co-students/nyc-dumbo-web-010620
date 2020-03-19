class UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    render json: @user
  end

  def login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      render json: @user
    else
      render json: {error: "NICE TRY, INCORRECT USERNAME OR PASSWORD"}
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end


end
