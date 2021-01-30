class CompanySerializer
  include JSONAPI::Serializer
  attributes :name, :address, :city, :state, :country_code, :email, :contact_number, :website, :about, :slug

  attribute :status do |_, params|
    params[:status]
  end

  attribute :logged_in do |_, params|
    params[:logged_in]
  end

  has_many :job_postings
end
