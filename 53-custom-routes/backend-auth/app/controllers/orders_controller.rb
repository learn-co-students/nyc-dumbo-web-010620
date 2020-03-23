class OrdersController < ApplicationController
  before_action :authorized, only: [:create]

  def create
    # @new_order = @user.orders.create
    @new_order = Order.create(user: @user)

    params[:burger_ids].each do |burg_id|
      BurgerOrder.create(burger_id: burg_id, order: @new_order)
    end


    render json: @new_order
  end

end
