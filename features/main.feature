Feature: Create contacts
  As a user
  In order to stay in touch with my friends
  I would like to be able to create a contact for them in my address book


  Scenario: Create a new contact
    Given I visit the site
    Then I should see "My Address Book"
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456789"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save contact"
    Then I should have 1 contact in my address book
    And I should see "John Doe"
    And I should not see "You have no contacts in your address book"

  Scenario: User creates multiple contacts
    Given I visit the site
    Then I should see "My Address Book"
    And I should see "You have no contacts in your address book"
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456789"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save contact"
    And I click "Add contact"
    Then I fill in "Name" with "Jane Doe"
    And I fill in "Email" with "jane@doe.com"
    And I fill in "Phone" with "01111111111"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome girl :-)"
    And I fill in "Twitter" with "janedoe"
    And I click "Save contact"
    Then I should have 2 contact in my address book
    And I should see "John Doe"
    And I should see "Jane Doe"
    
  Scenario: User creates a new contact & deletes it
    Given I visit the site
    Then I should see "My Address Book"
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456789"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save contact"
    Then I should have 1 contact in my address book
    And I should see "John Doe"
    Then I click "Remove" to delete the contact
    And I should have 0 contacts in my address book

Scenario: User creates a new contact & edits it
    Given I visit the site
    Then I should see "My Address Book"
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456789"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save contact"
    Then I should have 1 contact in my address book
    Then I click "Edit" to edit the contact
    Then I fill in "Name" with "John Doe jr."
    And I fill in "Email" with "johndjr@doe.com"
    And I fill in "Phone" with "01234565789"
    And I fill in "Company" with "Craft Academy Sweden"
    And I fill in "Notes" with "A really - really awsome guy :-)"
    And I fill in "Twitter" with "johndoeJR"
    Then I click "Save Contact"
    And I should have 1 contact in my address book
