# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Root path of the app
  # When the user goes to the root path, rails will look for hte pages controller and index action
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      # specify the slug as the primary param
      resources :companies, param: :slug
      resources :job_postings
    end
  end

  # This will basically route requests that are not for existing paths pre-defined in our api back to the index path. This will help us handle our routing to our react components without interferring with our actual rails routes for our API
  get '*path', to: 'pages#index', via: :all
end
