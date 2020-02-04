Rails.application.routes.draw do
  resources :locations, only: [ :create ]
  resources :cars

  # get "/dealerships", to: "dealerships#potato"
  # resources(:dealerships, { only: [:index, :show] })
  resources :dealerships, only: [ :index, :show, :new, :create, :edit, :update ]

  # get "/🚙🕺🚗/:id", to: "dealerships#show", as: "dealership"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
