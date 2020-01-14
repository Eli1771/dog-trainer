class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.integer :dogId
      t.string :name
      t.string :description
      t.integer :rewardRate

      t.timestamps
    end
  end
end
