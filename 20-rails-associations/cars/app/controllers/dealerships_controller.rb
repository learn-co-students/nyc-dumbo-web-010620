class DealershipsController < ApplicationController

  def index
    @dealerships = Dealership.all
    # render "potato"
  end

  def show
    @dealership = Dealership.find(params[:id])  
    @location = Location.new
    @location.dealership_id = @dealership.id
    @cities = City.all
  end

  def new # get for the form
    @dealership = Dealership.new
    # @cities = City.all
  end

  def create # post to actually make it
    @dealership = Dealership.create(dealership_params)
    # byebug
    redirect_to @dealership
  end

  def edit # get for the form
    @dealership = Dealership.find(params[:id])
    # @cities = City.all
  end

  def update
    @dealership = Dealership.find(params[:id])
    @dealership.update(dealership_params)
    redirect_to @dealership
  end

  private

  def dealership_params
    # {
    #   name: params[:name],
    #   level_of_sleaziness: params[:level_of_sleaziness],
    # }
    params.require(:dealership).permit(:name, :level_of_sleaziness, :city_id)
  end


end

