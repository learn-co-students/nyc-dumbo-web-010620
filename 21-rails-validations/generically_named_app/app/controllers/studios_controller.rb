class StudiosController < ApplicationController
  def index
    @studios = Studio.all
    # render :index
  end

  def show
    @studio = Studio.find(params[:id])
    # render :show
  end

  def new
    @studio = Studio.new
  end

  def create
    @studio = Studio.create(studio_params(:name, :location, :founding_year))

    if @studio.valid?
      redirect_to studio_path(@studio)
    else
      flash[:errors] = @studio.errors.full_messages
      # render :new
      redirect_to new_studio_path
    end
  end

  private

  def studio_params(*args)
    params.require(:studio).permit(*args)
  end

  # def studio_params
  #   params.require(:studio).permit(:name, :location, :founding_year)
  # end
end
