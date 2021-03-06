class SessionSerializer
  include JSONAPI::Serializer
  attributes :name, :email, :slug

  attribute :status do |_, params|
    params[:status]
  end

  attribute :logged_in do |_, params|
    params[:logged_in]
  end

  attribute :logged_out do |_, params|
    params[:logged_out]
  end
end
