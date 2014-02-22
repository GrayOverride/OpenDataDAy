class MessagesController < ApplicationController
  def index

  end

  def create
  	message = Hash.new
    message["content"] = params[:content]
    PrivatePub.publish_to "/messages/new", :message => message
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end