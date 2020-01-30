class CoopsController < ApplicationController

  get "/coops/:id" do #show
    @coop = Coop.find(params[:id])
    erb :"coops/show"
  end


end