class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.integer :dog_id
      t.string :name
      t.string :description
      t.integer :reward_rate

      t.timestamps
    end
  end
end
