# frozen_string_literal: true

require 'test_helper'

class JobPostingTest < ActiveSupport::TestCase
  def setup
    @company = Company.create(
      name: 'ABC Company',
      address: 'Main st',
      city: 'Toronto',
      state: 'ON',
      country_code: 'CA',
      contact_number: '416-000-0000',
      email: 'abc@example.com'
    )
    @job_posting = JobPosting.new(
      company_id: @company.id,
      category_id: 1,
      role: 'Fullstack',
      role_description: 'Lorem, ipsum dolor sit amet',
    )
  end

  test 'job posting should be valid' do
    assert @job_posting.valid?
  end

  test 'role should be present' do
    @job_posting.role = ' '
    assert_not @job_posting.valid?
  end

  test 'role description should be present' do
    @job_posting.role_description = ' '
    assert_not @job_posting.valid?
  end
end
