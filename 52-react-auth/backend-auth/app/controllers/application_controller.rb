class ApplicationController < ActionController::API

  def encode_token(payload)
    # should store secret in env variable
    JWT.encode(payload, 'willy wonkas secret recipe')
  end

end
