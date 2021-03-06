module Api
  module V1
    class SessionsController < ApplicationController
      include CurrentUserConcern

      # This creates the session when the user logs in
      def create
        company = Company
                  .find_by(email: params[:session][:user][:email])
                  .try(:authenticate, params[:session][:user][:password])
        
        # If the company was found
        if company
          # Rails provides a session object which can be accessed using a session instance method. 
          # We can use the session object to store some info that we would like to track. 
          # This allows the company to be authenticated once and remained logged in until we destroy the session.
          session[:company_id] = company.id

          render json: SessionSerializer
            .new(company, { params: { status: :created, logged_in: true } })
            .serializable_hash.to_json
        else
          # return unauthorized status
          render json: { status: 401 }
        end
      end

      def logged_in
        if @current_user
          render json: {
            logged_in: true,
            user: @current_user
          }
        else
          render json: {
            logged_in: false
          }
        end
      end

      def logout
        reset_session
        render json: {
          status: 200,
          logged_in: false
        }
      end
    end
  end
end
