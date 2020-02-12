class LoginController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      log_in_user @user.id
      redirect_to colors_path
    else
      flash[:errors] = [ "We don't have a user with that username and password" ]
      redirect_to new_login_path
    end
  end

  def destroy
    log_out_user!
    redirect_to colors_path
  end

end
