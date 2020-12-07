# frozen_string_literal: true

require 'test_helper'

class CompanyTest < ActiveSupport::TestCase
  def setup
    @company = Company.new(
      name: 'ABC Company',
      address: 'Main st',
      city: 'Toronto',
      state: 'ON',
      country_code: 'CA',
      contact_number: '416-000-0000',
      email: 'abc@example.com'
    )
  end

  test 'company name should be valid' do
    assert @company.valid?
  end

  test 'name should be present' do
    @company.name = ' '
    assert_not @company.valid?
  end

  test 'address should be present' do
    @company.address = ' '
    assert_not @company.valid?
  end

  test 'city should be present' do
    @company.city = ' '
    assert_not @company.valid?
  end

  test 'state should be present' do
    @company.state = ' '
    assert_not @company.valid?
  end

  test 'country should be present' do
    @company.country_code = ' '
    assert_not @company.valid?
  end

  test 'contact number should be present' do
    @company.contact_number = ' '
    assert_not @company.valid?
  end

  test 'name should be unique' do
    # Save first
    @company.save

    # Create a duplicate name
    @company_duplicate = @company = Company.new(
      name: 'ABC COMPANY',
      address: 'Main st',
      city: 'Toronto',
      state: 'ON',
      country_code: 'CA',
      contact_number: '416-000-0000',
      email: 'abc@example.com'
    )

    assert_not @company.valid?
  end

  test 'name should not be too short (min 8 characters)' do
    @company.name = 'a' * 3
    assert_not @company.valid?
  end

  test 'name should not be too long (max 30 characters)' do
    @company.name = 'a' * 35
    assert_not @company.valid?
  end

  test 'email address format is correct' do
    @company.email = 'abc.example.com'
    assert_not @company.valid?
  end
end
