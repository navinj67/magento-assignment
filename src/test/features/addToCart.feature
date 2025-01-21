Feature: User Authentication Tests

 Background:
    Given User navigates to the application
    And User clicks on the login link

@cart
Scenario: Add to cart

And User enters the username "navinj67@gmail.com"
And User enters the password "Admin@1234$"
And User clicks on the login button
And Login should be successful
And User searches for a "Proteus Fitness Jackshirt"
When User adds the dress to the cart
Then The cart badge should get updated