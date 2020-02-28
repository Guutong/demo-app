Feature: Todos

  Task list

  Scenario: As a Guutong, I want to see todo list page
    Given I open todo list page
    Then I can see add button and todo item "Meeting"

  Scenario: As a Guutong, I want to add todo item
    Given I open todo list page
    When I click add
    And I can see todo form
    And I input title "Develop Todo Page"
    And I input detail "Develop Todo Page, adjust style follow screen in fixma"
    And I input category "develop"
    And I click ok
    Then I can see todo second item "Develop Todo Page"

  Scenario: As a Guutong, I can not click ok
    Given I open todo list page
    When I click add
    And I can see todo form
    And I input title "Develop Todo Page"
    Then I ok button should disabled
