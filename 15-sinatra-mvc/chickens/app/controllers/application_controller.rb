require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :potato
  end

  get '/chickens' do
    @chickens = Chicken.all # kitchen
    erb :chickens # present the chickens to the customer
  end

end
