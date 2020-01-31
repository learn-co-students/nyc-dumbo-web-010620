require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/cars" do
    @cars = Car.all
    erb :index
  end

  get "/cars/:id" do
    @car = Car.find(params[:id])
    erb :show
  end

  get "/cars/:id/edit" do
    @car = Car.find(params[:id])
    erb :edit
  end

  patch "/cars/:id" do
    @car = Car.find(params[:id])
    params.delete(:"_method")
    @car.update(params)
    redirect to "/cars/#{ @car.id }"
  end

end
