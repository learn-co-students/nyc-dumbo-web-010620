class UsersController < ApplicationController
  before_action :authorized, only: [:persist]

  def create
    @user = User.create(user_params)
    if @user.valid?
      infoToSaveInBox = {user_id: @user.id}
      wristband = encode_token(infoToSaveInBox)
      render json: {user: UserSerializer.new(@user), token: wristband}
    else
      render json: {error: @user.errors.full_messages}
    end
  end



  def persist
    infoToSaveInBox = {user_id: @user.id}
    wristband = encode_token(infoToSaveInBox)
    render json: {user: UserSerializer.new(@user), token: wristband}
  end


  def login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      infoToSaveInBox = {user_id: @user.id}
      wristband = encode_token(infoToSaveInBox)
      render json: {user: UserSerializer.new(@user), token: wristband}
    else
      render json: {error: "NICE TRY, INCORRECT USERNAME OR PASSWORD"}
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end


end
