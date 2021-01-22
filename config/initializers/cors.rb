# CORS gives us the ability to whitelist certain domains. We wil be passing secure cookies between the FE and BE so we need a tool credentials.  Because of credentials, we will need to define certain rules.

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  # Anything inside this block will be intercepted by rails

  allow do
    origins "http://localhost:3000"

    # allow all resources and allow any for headers
    resource "*", headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
  end

  allow do
    # ToDo: change the domain
    origins "https://job-board-app.heroku.com"

    # allow all resources and allow any for headers
    resource "*", headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
  end
end
