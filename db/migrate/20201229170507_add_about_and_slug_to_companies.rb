class AddAboutAndSlugToCompanies < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :about, :text
    add_column :companies, :slug, :string
  end
end
