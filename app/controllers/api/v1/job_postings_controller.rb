module Api
  module V1
    class JobPostingsController < ApplicationController
      # Provide an empty session when forgery check fails. However, this will restore the old session after the request is processed.
      protect_from_forgery with: :null_session

      before_action :find_job_posting, only: %i[show update destroy]

      def index
        job_postings = JobPosting.all
        render json: JobPostingSerializer.new(job_postings).serializable_hash.to_json
      end

      def show
        render json: JobPostingSerializer.new(@job_posting).serializable_hash.to_json
      end

      def create
        job_posting = JobPosting.new(job_posting_params)

        if job_posting.save
          render json: JobPostingSerializer.new(job_posting).serializable_hash.to_json
        else
          render json: { error: job_posting.errors.messages }, status: 422
        end
      end

      def update
        if @job_posting.update(job_posting_params)
          render json: JobPostingSerializer.new(@job_posting).serializable_hash.to_json
        else
          render json: { error: @job_posting.errors.message }, status: 422
        end
      end

      def destroy
        if @job_posting.destroy
          head :no_content
        else
          render json: { error: @job_posting.errors.message }, status: 422
        end
      end

      private

      def find_job_posting
        @job_posting = JobPosting.find(params[:id])
      end

      def job_posting_params
        params.require(:job_posting)
              .permit(
                :company_id,
                :category_id,
                :role,
                :role_description,
                :contact_person,
                :contact_number
              )
      end
    end
  end
end