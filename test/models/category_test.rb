# frozen_string_literal: true

require 'test_helper'

class CategoryTest < ActiveSupport::TestCase
  # This setup will run before each test
  def setup
    @category = Category.new(name: 'Technology')
  end

  test 'category should be valid' do
    assert @category.valid?
  end

  test 'name should be present' do
    @category.name = ' '
    assert_not @category.valid?
  end

  test 'name should be unique' do
    # save the object first
    @category.save

    @category_dup = Category.new(name: 'Technology')
    assert_not @category_dup.valid?
  end

  test 'name should not be too long' do
    @category.name = 'a' * 25
    assert_not @category.valid?
  end

  test 'name should be too short' do
    @category.name = 'a' * 3
    assert_not @category.valid?
  end
end
