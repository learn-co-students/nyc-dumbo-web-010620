require 'test_helper'

class StudiosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get studios_index_url
    assert_response :success
  end

end
