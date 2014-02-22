OpenDataDay::Application.routes.draw do
  get "home/index"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'

  get "messages" => "messages#index"
  get "messages/create_user" => "messages#create_user"
  get "messages/get_data" => "messages#get_data"
  resource :message
end
