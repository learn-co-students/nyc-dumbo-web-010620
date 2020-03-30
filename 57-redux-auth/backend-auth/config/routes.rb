Rails.application.routes.draw do
  resources :users, only: [:create]
  resources :snacks, only: [:index]

  post "/login", to: "users#login"
  # verb "url", to: "controllerName#instanceMethodName"


  get "/persist", to: 'users#persist'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
