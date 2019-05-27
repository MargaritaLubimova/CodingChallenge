import { browser } from "protractor"

const registerPage = require('../page-objects/register-page')
const loginPage = require('../page-objects/login-page')
const searchPage = require('../page-objects/search-page')
const helpers = require('../helpers')

describe('When the Register page is opened', function () {

	beforeEach(function () {
		browser.get(registerPage.url)
	})

	it('Verify that all fields are presented', function () {
		expect(registerPage.verifyAllElementsAreVisible()).toBe(true)
	})

	it('Verify that the Login page could be opened from the Register page', function () {
		registerPage.clickOnLoginLink()

		// Waits for a redirect
		browser.sleep(1000)

		expect(browser.getCurrentUrl()).toEqual(loginPage.url)
	})

	it('Verify error messages for fields with empty parameters', function () {
		// This steps if needed for opening the Register page 
		// for testing error messages, because the Register page has a bug
		helpers.openRegisterPage(searchPage)

		// Test should start from this point
		registerPage.clickOnSubmitButton()

		expect(registerPage.getTextErrorMesageUnderFirstNameField()).toEqual("Dieses Feld ist ein Pflichtfeld")
		expect(registerPage.getTextErrorMesageUnderLastNameField()).toEqual("Dieses Feld ist ein Pflichtfeld")
		expect(registerPage.getTextErrorMesageUnderEmailField()).toEqual("Dieses Feld ist ein Pflichtfeld")
		expect(registerPage.getTextErrorMesageUnderPhoneField()).toEqual("Dieses Feld ist ein Pflichtfeld")
		expect(registerPage.getTextErrorMesageUnderBusinessRelationMenu()).toEqual("Dieses Feld ist ein Pflichtfeld")
	})

	it('Verify fields with invalid email', function () {
		// This steps if needed for opening the Register page 
		// for testing error messages, because the Register page has a bug
		helpers.openRegisterPage(searchPage)

		// Test should start from this point
		registerPage.clickOnRandomGenderRadioButton()
		registerPage.fillFirstNameField("First Name")
		registerPage.fillLastNameField("Last Name")
		registerPage.fillEmailField("email")
		registerPage.clickOnBusinessRelationMenu()
		
		// FIXME: Change the dropdown menu implementation from the input to the select
		// then delete waitings until dropdown menus will be opened/close

		// Waits for an open of the business relation dropdown menu
		browser.sleep(1000)

		registerPage.chooseRandomValueBusinessRelationMenu()

		// Waits for a close of the business relation dropdown menu
		browser.sleep(1000)

		registerPage.clickOnSubmitButton()

		expect(registerPage.getTextErrorMesageUnderEmailField()).toEqual("Gib eine gültige E-Mail Adresse an.")
	})

	it('Verify fields with invalid first and second names (more than 30 characters)', function () {
		// This steps if needed for opening the Register page 
		// for testing error messages, because the Register page has a bug
		helpers.openRegisterPage(searchPage)

		// Test should start from this point
		registerPage.clickOnRandomGenderRadioButton()
		registerPage.fillFirstNameField(helpers.randomString(31))
		registerPage.fillLastNameField(helpers.randomString(31))
		registerPage.fillEmailField("emailName@mail.com")
		registerPage.clickOnBusinessRelationMenu()

		// FIXME: Change the dropdown menu implementation from the input to the select
		// then delete waitings until dropdown menus will be opened/close

		// Waits for an open of the business relation dropdown menu
		browser.sleep(1000)

		registerPage.chooseRandomValueBusinessRelationMenu()

		// Waits for a close of the business relation dropdown menu
		browser.sleep(1000)

		registerPage.clickOnSubmitButton()

		expect(registerPage.getTextErrorMesageUnderFirstNameField()).toEqual("Bitte sicherstellen, dass der Wert aus höchstens 30 Zeichen besteht. (Er besteht aus 31 Zeichen).")
		expect(registerPage.getTextErrorMesageUnderLastNameField()).toEqual("Bitte sicherstellen, dass der Wert aus höchstens 30 Zeichen besteht. (Er besteht aus 31 Zeichen).")
	})
})
