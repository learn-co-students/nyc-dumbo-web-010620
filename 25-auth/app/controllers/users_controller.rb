class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    # @user = User.new
    # @user.username = params[:user][:username]
    # @user.password=(params[:user][:password])
    # @user.save

    if @user.valid?
      log_in_user(@user.id)
      redirect_to colors_path
    else
      @errors = @user.errors.full_messages
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
