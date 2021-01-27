class ApplicationController < ActionController::Base
  # Rails has a set of rules whenever we communicate with the route e.g. CSRF.
  #  It checks to make sure that the user logging in a form is a true user.
  skip_before_action :verify_authenticity_token

  # Provide an empty session when forgery check fails. However, this will restore the old session after the request is processed.
  # protect_from_forgery with: :null_session
end
