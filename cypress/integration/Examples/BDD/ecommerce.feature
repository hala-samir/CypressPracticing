Feature: E2E eCommerce

    application regression
    Scenario: e2e
    Given Open eCommerce Page
    When Add items to cart
    And Validate total price
    Then Select country and validate success message
    Scenario: fill the form
    Given Open eCommerce Page
    When Fill form details
    |name |gender |
    |susi |Male   |