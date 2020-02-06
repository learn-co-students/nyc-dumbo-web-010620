Rails.application.routes.draw do
  resources :authorships, only: [ :new, :create ]
  resources :books, only: [:index, :show]
  # resources :authors
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
