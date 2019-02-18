#Author: prakash
@oneway
Feature: AbhiBus travelling homepage 

  Scenario Outline: The user enter one way trip details
    Given The user is in home page
    And The user enter all details for oneway trip "<Source>","<Destination>"
    When The user click the search button
    Then The user validate the outcomes

    Examples: 
      | Source      | Destination |
      | Chennai     | Bangalore   |
     

  @return
  Scenario Outline: The user enter the return trip details
    Given The user is in home page
    And The user enter all the details for return trip"<Source>","<Destination>"
    When The user click the search button
    Then The user validate the outcomes for return trip

    Examples: 
      | Source    | Destination |
      | Bangalore | Chennai     |
