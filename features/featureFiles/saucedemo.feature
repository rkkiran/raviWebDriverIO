Feature: Successfully add items to basket and remove an item from basket

Scenario Outline: Login as a <username> user on saucedemo and add items to basket
   
    Given I am on saucedemo login page
    When I login with '<username>' and '<password>'
    When I am on '<page>' page I Sort the products by Price from drop down high to low
    And I Add the two cheapest products to the basket
    And I Open the basket
    And I Remove the cheapest product from the basket
    Then cheapest product should be removed successfully
    And I click on Checkout and I need to see '<message>' text on header
    Examples:
        | username      | password      | page     | message                    |
        | standard_user | secret_sauce  | Products | Checkout: Your Information |


  Scenario Outline: Error Message should be displayed when I login with <Sceniro>

      Given I am on saucedemo login page
      When I login with '<username>' and '<password>'
      Then I should see a flash message saying '<message>'

    Examples:
      | username      | password     | message                                                                   | Scenario                  |
      | someuser      | nopassword   | Epic sadface: Username and password do not match any user in this service | invalid user and password |
      |               |              | Epic sadface: Username is required                                        | no username and password  | 
      | standard_user |              | Epic sadface: Password is required                                        | no password               | 
