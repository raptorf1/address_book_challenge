const { After, Given, Then, When } = require('cucumber')

After(async function() {
  return await this.closeHomePage()
})

Given('I visit the site', async function() {
  return await this.openHomePage()
})

Then('I should see {string}', async function(content) {
  return await this.pageHasTextContent(content) 
})

When('I click {string}', async function(string) {
  return await this.clickOnButton(string)
})

When('I click {string} to open the delete button', async function (string) {
  return await this.clickOnButton(string)
})

When('I click {string} to delete the contact', async function (string) {
  return await this.clickOnButton(string)
})

Then('I should have {int} contact in my address book', async function (contactCount) {
  return await this.checkContactStorageCount(contactCount)
})

Then('I click {string} to open the edit button', async function (string) {
  return await this.clickOnButton(string)
})

Then('I click {string} to open form again', async function (string) {
  return await this.clickOnButton(string)
})

Then('I fill in {string} with {string}', async function(field, content) {
  return await this.fillFormField(field.toLowerCase(), content)
})

Then('I should not see {string}', async function(content) {
  return await this.pageDoesNotHaveTextContent(content)
})
