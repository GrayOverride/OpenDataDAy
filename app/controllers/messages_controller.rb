class MessagesController < ApplicationController
  def index

  end

  def create
  	message = Hash.new
    message["content"] = params[:content]
    message["user"] = params[:user]
    PrivatePub.publish_to "/messages/new", :message => message
    render :nothing => true
  end

  def create_user
  	response = Hash.new
  	response["user"] = SecureRandom.uuid
  	respond_to do |format|
      format.json { render :json => response }
    end
  end
end