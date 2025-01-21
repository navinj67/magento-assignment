Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

@login
  Scenario: Login should be successful with valid credentials
    Given User enters the username "navinj67@gmail.com"
    And User enters the password "Admin@1234$"
    When User clicks on the login button
    Then Login should be successful

  
