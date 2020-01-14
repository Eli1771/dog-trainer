class Dog < ApplicationRecord
  has_many :skills
  has_many :notes 
end
