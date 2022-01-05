class CreateUserServices < ActiveRecord::Migration[6.1]
  def change
    create_table :user_services do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.integer :user_id
      t.integer :service_id
      t.timestamps
    end
  end
end
