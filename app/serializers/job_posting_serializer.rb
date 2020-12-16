class JobPostingSerializer
  include JSONAPI::Serializer
  attributes :company_id, :category_id, :role, :role_description, :contact_person, :contact_number
end
