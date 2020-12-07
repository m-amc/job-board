# frozen_string_literal: true

class Category < ApplicationRecord
  validates :name,
            presence: true,
            length: { minimum: 8, maximum: 20 },
            uniqueness: { case_sensitive: false }
end
