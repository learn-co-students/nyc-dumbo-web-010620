class ApplicationController < ActionController::Base

  before_action :setup_notification_stuff, :setup_auth_stuff

  def setup_notification_stuff
    @errors = flash[:errors]
    @notification = flash[:notification]
  end

  def setup_auth_stuff
    @logged_in = logged_in?
    @logged_in_user = User.find(current_user_id) if logged_in?
    @can_vote = logged_in? && @logged_in_user.can_vote
  end

  private

  def log_out_user!
    session.delete(:user_id)
  end

  def log_in_user(user_id)
    session[:user_id] = user_id
  end

  def logged_in?
    !!current_user_id
  end

  def current_user_id
    session[:user_id]
  end 

end