Feature: Mercury Travels website testing

  Scenario: Open the Mercury Travels homepage
    Given I open the Mercury Travels website
    Then the Mercury Travels homepage should be visible
    And the Mercury Travels logo should be displayed
    And the Mercury Travels logo should be clickable and redirect to the homepage

