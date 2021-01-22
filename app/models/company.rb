# frozen_string_literal: true

# Company model definition
class Company < ApplicationRecord
  has_many :job_postings

  before_create :slugify

  validates :name,
            uniqueness: { case_sensitive: false },
            length: {
              minimum: 8,
              maximum: 30
            }
  validates :name, :address, :city, :state,
            :country_code, :contact_number, presence: true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze

  validates :email,
            presence: true,
            uniqueness: { case_sensitive: false },
            length: { maximum: 105 },
            format: { with: VALID_EMAIL_REGEX }
  
  # for authentication using bcrypt
  has_secure_password 

  def slugify
    self.slug = name.parameterize
  end
end
