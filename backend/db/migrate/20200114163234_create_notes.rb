class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.integer :dogId
      t.string :content

      t.timestamps
    end
  end
end
