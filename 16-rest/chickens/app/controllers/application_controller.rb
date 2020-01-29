require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    p "🌶" * 10
    p params
    erb :root
  end

  get '/chickens' do #index
    @chickens = Chicken.all # kitchen
    erb :index # present the chickens to the customer
  end

  get "/chickens/new" do
    erb :new
  end

  get "/chickens/:id" do #show
    @chicken = Chicken.find(params[:id])
    erb :show
  end

  post "/chickens" do # creates a chicken
    @chicken = Chicken.create(params)
    redirect to "/chickens/#{ @chicken.id }"
  end

  ## untested disaster code

  get "/chickens/:id/edit" do
    @chicken = Chicken.find(params[:id])
    erb :edit
  end

  patch "/chickens/:id" do
    # p "🖕" * 10
    # p params
    @chicken = Chicken.find(params[:id])
    # params.delete(:"_method")
    @chicken.update(params)
    redirect to "/chickens/#{ @chicken.id }"
  end

  delete "/chickens/:id" do
    @chicken = Chicken.find(chicken_id_somehow)
    @chicken.destroy
  end


  ## end untested disaster code

end
