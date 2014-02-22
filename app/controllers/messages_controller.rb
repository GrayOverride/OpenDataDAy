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

  def get_data
  	require 'open-uri'
	require 'json'

	result = JSON.parse(open("http://api.opendai.eu/api/KarlshamnPois/1.0/pois/Offentlig%20toalett").read)

	coordinates = Hash.new

	result.each_with_index do |dass, i|
		item = Hash.new
		item["long"] = dass["Locations"][0]["Main"]["Longitude"]
		item["lat"] = dass["Locations"][0]["Main"]["Latitude"]

		coordinates[i] = item
	end

	respond_to do |format|
      format.json { render :json => coordinates }
    end
  end
end