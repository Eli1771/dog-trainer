class DogsController < ApplicationController
  def index
    dogs = Dog.all
    render json: dogs
  end

  def show
    dog = Dog.find_by(id: params[:id])
    render json: dog
  end
end
