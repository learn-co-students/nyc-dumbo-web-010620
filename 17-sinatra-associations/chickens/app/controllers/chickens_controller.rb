class ChickensController < ApplicationController

  get '/chickens' do #index
    @chickens = Chicken.all # kitchen
    erb :"chickens/index" # present the chickens to the customer
  end

  get "/chickens/new" do
    erb :"chickens/new"
  end

  get "/chickens/:id" do #show
    @chicken = Chicken.find(params[:id])
    erb :"chickens/show"
  end

  post "/chickens" do # creates a chicken
    @chicken = Chicken.create(params)
    redirect to "/chickens/#{ @chicken.id }"
  end

  ## untested disaster code

  get "/chickens/:id/edit" do
    @chicken = Chicken.find(params[:id])
    @coops = Coop.all
    erb :"chickens/edit"
  end

  patch "/chickens/:id" do
    # p "🖕" * 10
    # p params
    @chicken = Chicken.find(params[:id])
    params.delete(:"_method")
    @chicken.update(params)
    redirect to "/chickens/#{ @chicken.id }"
  end

  delete "/chickens/:id" do
    @chicken = Chicken.find(chicken_id_somehow)
    @chicken.destroy
  end


  ## end untested disaster code

end