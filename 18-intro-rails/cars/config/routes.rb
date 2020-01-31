Rails.application.routes.draw do
  resources :cars

  # get "/dealerships", to: "dealerships#potato"
  # resources(:dealerships, { only: [:index, :show] })
  resources :dealerships, only: [ :index, :show ]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
