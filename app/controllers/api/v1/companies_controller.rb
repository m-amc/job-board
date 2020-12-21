module Api
  module V1
    class CompaniesController < ApplicationController
      before_action :find_article, only: %i[show update destroy]

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

      private

      def find_company
        @company = Company.find(params[:id])
      end

      def company_params
        params.require(:company)
              .permit(:name,
                      :address,
                      :city,
                      :state,
                      :country_code,
                      :email,
                      :contact_number,
                      :website)
      end

      # compound document: to render associated job_postings data
      def options
        @options ||= { include: %i[job_postings] }
      end
    end
  end
end