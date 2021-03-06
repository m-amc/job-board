# This is where we define what the cookies are going to be structured like

# note: key is the name of the session cookie

if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_job_board_app", domain: "https://job-board-rails-react.herokuapp.com"
else
  Rails.application.config.session_store :cookie_store, key: "_job_board_app"
end