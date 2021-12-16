Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :schools, only: [:index, :destroy, :create, :show]
resources :users
post "/signup", to: "users#create"
get "/me", to: "users#show"
post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"
get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
