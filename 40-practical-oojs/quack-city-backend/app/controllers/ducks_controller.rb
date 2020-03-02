class DucksController < ApplicationController

  def index
    ducks = Duck.all.order(rating: :desc)

    render json: ducks
  end

  def create
    category = Category.find_or_create_by(name: params[:category_name])

    duck = Duck.create(
      name: params[:name],
      category: category,
      image_url: params[:image_url],
      rating: params[:rating]
    )

    if duck.valid?
      render json: duck
    else
      render json: { errors: duck.errors.full_messages }, status: 400
    end
    
  end

  def update
    duck = Duck.find(params[:id])
    duck.update(rating: params[:rating])
    render json: duck
  end

  def destroy
    duck = Duck.find(params[:id])
    duck.destroy
    render json: { message: "RIP lil ducky" }
  end

end
