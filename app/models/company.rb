# frozen_string_literal: true

# Company model definition
class Company < ApplicationRecord
  has_many :job_postings

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
end
