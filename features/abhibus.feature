#Author: prakash
Feature: AbhiBus

  Scenario Outline: Enter source and destination
    Given The user is in home page
    And The user enter all deatils "<Source>","<Destination>"
    When Click the search button
    Then Validate the outcomes

    Examples: 
      | Source      | Destination |
      | Chennai     | Bangalore   |
      | Pondicherry | Madurai     |
