class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
@users = User.all
@hash = Gmaps4rails.build_markers(@users) do |user, marker|
  marker.lat user.latitude
  marker.lng user.longitude
end
end
