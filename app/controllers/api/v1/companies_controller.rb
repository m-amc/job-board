module Api
  module V1
    class CompaniesController < ApplicationController
      # Provide an empty session when forgery check fails. However, this will restore the old session after the request is processed.
      protect_from_forgery with: :null_session

      before_action :find_company, only: %i[show update destroy]

      def index
        companies = Company.all
        render json: CompanySerializer.new(companies, options).serializable_hash.to_json
      end

      def show
        render json: CompanySerializer.new(@company, options).serializable_hash.to_json
      end

      def create
        company = Company.new(company_params)

        if company.save
          render json: CompanySerializer.new(company).serializable_hash.to_json
        else
          render json: { error: company.errors.messages }, status: 422
        end
      end

      def update
        if @company.update(company_params)
          render json: CompanySerializer.new(@company, options).serializable_hash.to_json
        else
          render json: { error: @company.errors.messages }, status: 422
        end
      end

      def destroy
        if @company.destroy
          head :no_content
        else
          render json: { error: @company.errors.messages }, status: 422
        end
      end

      # Use private so these methods will only be available in this class
      private

      def find_company
        @company = Company.find_by(slug: params[:slug])
      end

      # strong parameters - permit attributes
      def company_params
        params.require(:company)
              .permit(:name,
                      :address,
                      :city,
                      :state,
                      :country_code,
                      :email,
                      :contact_number,
                      :website,
                      :slug,
                      :about)
      end

      # compound document: to render associated job_postings data
      def options
        @options ||= { include: %i[job_postings] }
      end
    end
  end
end