# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


dogs = [
  {name: 'Lando', breed: 'Dane x', dob: '09-30-2017'},
  {name: 'Richie', breed: 'Chih x', dob: '04-01-2019'},
  {name: 'Joey', breed: 'Puggle', dob: '01-01-2011'},
  {name: 'Biscuit', breed: 'Newfoundland', dob: '12-01-2005'}
]

dogs.each do |dog|
  Dog.create(dog)
end

dog_ids = Dog.all.map {|dog| dog.id.to_i}

skills = [
  {name: 'Sit', description: 'Butt on ground, sustained', dog_id: dog_ids[0], reward_rate: 3},
  {name: 'Sit', description: 'Butt on ground', dog_id: dog_ids[1], reward_rate: 1},
  {name: 'Sit', description: 'Butt on ground, sustained', dog_id: dog_ids[2], reward_rate: 5},
  {name: 'Down', description: 'Dog lays flat', dog_id: dog_ids[0], reward_rate: 4},
  {name: 'Speak', description: 'Dog makes any, not a loud shout', dog_id: dog_ids[0], reward_rate: 2},
  {name: 'Paw', description: 'Place either paw in your hand', dog_id: dog_ids[0], reward_rate: 5},
  {name: 'Sit', description: 'But on ground, sustained', dog_id: dog_ids[1], reward_rate: 4},
  {name: 'Pretty', dog_id: dog_ids[0], reward_rate: 2},
  {name: 'Come', description: 'Recalls to owner and sits', dog_id: dog_ids[0], reward_rate: 3},
  {name: 'Sit', description: 'But on ground, sustained', dog_id: dog_ids[1], reward_rate: 4},
  {name: 'Sit', description: 'But on ground, sustained', dog_id: dog_ids[2], reward_rate: 1}
]

skills.each do |skill|
  Skill.create(skill)
end
