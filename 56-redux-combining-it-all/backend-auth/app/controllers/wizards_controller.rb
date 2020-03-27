class WizardsController < ApplicationController

  def index
    @wizards = Wizard.all
    render json: @wizards
  end

  def create
    @wizard = Wizard.create(params.permit(:name, :house, :redux))
    render json: @wizard
  end

end
