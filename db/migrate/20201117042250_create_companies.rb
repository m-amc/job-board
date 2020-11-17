class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :country_code
      t.string :email
      t.string :contact_number
      t.string :website
      t.timestamps
    end
  end
end
