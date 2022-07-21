Feature: Apli Tools Demo
Background: User is in Apli Tools Demo site
    Given I am in Aplitools Demo


    Scenario: Login Page Layout
        Then I expect to see login form logo
        And I expect to see login form header
        And I expect to see login form fields
        And I expect to see login form sign-in button
        And I expect to see login form remember me checkbox
        And I expect to see login form social media buttons


    Scenario: Login successful
        When I login with username test and password test
        Then I should be redirected to homepage