class SkillsController < ApplicationController
  def index
    skills = Skill.all
    render json: skills
  end

  def show
    skill = Skill.find(params[:id])
    render json: skill
  end

  def create
    skill = Skill.create(skill_params)
    render json: skill
  end

  def update
    skill = Skill.find_by(id: params[:id])
    skill.update(reward_rate: params[:reward_rate])
    render json: skill
  end

  def destroy
    skill = Skill.find_by(id: params[:id])
    skill.destroy
    render json: skill
  end

  private

  def skill_params
    params.require(:skill).permit(:name, :description, :reward_rate, :dog_id)
  end
end
