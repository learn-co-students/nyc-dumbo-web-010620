Rails.application.routes.draw do
  resources :users, only: [:create]

  post "/login", to: "users#login"
  # verb "url", to: "controllerName#instanceMethodName"
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
