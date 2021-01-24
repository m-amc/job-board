module CurrentUserConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_current_user
  end

  # Method to set_current_user if the session exist
  def set_current_user
    # Memoize the current_user object so we don't need to query the database everytime!
    @current_user ||= Company.find(session[:company_id]) if session[:company_id]
  end
end