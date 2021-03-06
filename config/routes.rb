Rails.application.routes.draw do
  
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  resources :community_requests
  get 'community_requests', to: 'community_requests#index'
  # get '/community_requests/:id', to: 'community_requests#show'
  root 'pages#index'
  
  get 'pages/index'
  get 'pages/home'
  
  match '*pages', to: 'pages#index', via: :all
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
