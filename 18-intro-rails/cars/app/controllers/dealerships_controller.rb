class DealershipsController < ApplicationController

  def index
    @dealerships = Dealership.all
    # render "potato"
  end

  def show
    @dealership = Dealership.find(params[:id])
  end


end

