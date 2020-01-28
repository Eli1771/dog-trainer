class DogsController < ApplicationController
  def index
    dogs = Dog.all
    render json: dogs
  end

  def show
    dog = Dog.find_by(id: params[:id])
    render json: dog
  end

  def create
    dog = Dog.create(dog_params)
    render json: dog
  end

  def destroy
    dog = Dog.find_by(id: params[:id])
    dog.destroy
    render json: dog
  end

  private

  def dog_params
    params.require(:dog).permit(:name, :breed, :dob)
  end
end
