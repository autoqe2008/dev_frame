Feature: Automation code to enter Time sheets of Odoo.

  Scenario Outline: Verify user entered his time sheets or not for current week
    Given I navigated to home page
    And I login using "<username>" and "<password>" on login page
    Examples:
      |username            |password |
      | cchandragiri       | a       |
