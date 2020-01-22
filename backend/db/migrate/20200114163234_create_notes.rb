class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.integer :dog_id
      t.string :content

      t.timestamps
    end
  end
end
