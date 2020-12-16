class CompanySerializer
  include JSONAPI::Serializer
  attributes :name, :address, :city, :state, :country_code, :email, :contact_number, :website

  has_many :job_postings
end
