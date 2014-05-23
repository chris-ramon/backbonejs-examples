class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :text, null: false
    end
  end
end
