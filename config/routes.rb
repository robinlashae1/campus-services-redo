Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :schools, only: [:index, :destroy, :create, :show]
resources :users
resources :service_categories do
  resources :user_services
end
resources :services, only: [:index, :create, :show]
resources :user_services do
  resources :schools, only: [:show, :index]
  resources :users, only: [:show, :index]
end
post "/signup", to: "users#create"
get "/me", to: "users#show"
post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"
get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
