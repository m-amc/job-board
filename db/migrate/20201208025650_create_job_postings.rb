class CreateJobPostings < ActiveRecord::Migration[6.0]
  def change
    create_table :job_postings do |t|
      t.integer :company_id
      t.integer :category_id
      t.string :role
      t.text :role_description
      t.string :contact_person
      t.string :contact_number
      t.timestamps
    end
  end
end
