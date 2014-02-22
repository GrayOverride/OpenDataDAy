OpenDataDay::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'messages#index'

  get "messages" => "messages#index"
  get "messages/create_user" => "messages#create_user"
  resource :message
end
