Rails.application.routes.draw do
  
  resources :comment_likes
  resources :bleat_likes
  resources :comments
  resources :bleats
  resources :users
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'

  post 'users/:id/follow', to: 'users#follow', as: 'follow_user'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
