require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    p "🌶" * 10
    p params
    erb :potato
  end

  get '/chickens' do #index
    @chickens = Chicken.all # kitchen
    erb :chickens # present the chickens to the customer
  end

  ## untested disaster code

  get "/chickens/:id" do #show
    @chicken = Chicken.find(params[:id])
    erb :show
  end

  post "/chickens" do # creates a chicken
    @chicken = Chicken.create(name: name_somehow, weight: from_somewhere)
  end

  patch "/chickens/:id" do
    @chicken = Chicken.find(id_somehow)
    @chicken.update(name: user_input_string_name, weight: user_input_string_integer)
  end

  delete "/chickens/:id" do
    @chicken = Chicken.find(chicken_id_somehow)
    @chicken.destroy
  end


  ## end untested disaster code

end
