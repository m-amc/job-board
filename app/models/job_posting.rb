# frozen_string_literal: true

# job posting model
class JobPosting < ApplicationRecord
  belongs_to :company

  validates :role, presence: true
  validates :role_description, presence: true
end
