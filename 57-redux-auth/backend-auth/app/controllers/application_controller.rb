class ApplicationController < ActionController::API

  def encode_token(payload)
    # should store secret in env variable
    JWT.encode(payload, 'willy wonkas secret recipe')
  end

  def auth_header
    # Checks to see if the request contains the Authorization key under headers
    # { Authorization: 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    # will decode the token or if it fails, return nil
    if auth_header
      token = auth_header.split(' ')[1]
      # header: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, 'willy wonkas secret recipe', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def logged_in_user
    # the user who is holding that token
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!logged_in_user
  end

  def authorized
    render json: { error: 'Please log in' }, status: :unauthorized unless logged_in?
  end















  

end
