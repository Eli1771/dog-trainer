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

  private

  def skill_params
    params.require(:skill).permit(:name, :description, :reward_rate)
  end 
end
