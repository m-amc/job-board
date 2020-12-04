# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Root path of the app
  # When the user goes to the root path, rails will look for hte pages controller and index action
  root 'pages#index'
end
