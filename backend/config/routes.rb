Rails.application.routes.draw do
  resources :dogs, only: [:index, :create, :destroy]
  resources :skills, only: [:index, :create, :destroy, :update]
  resources :notes, only: [:index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
