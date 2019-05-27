import { browser } from "protractor"

const searchPage = require('../page-objects/search-page')
const registerPage = require('../page-objects/register-page')

const companyName = 'FinCompare GmbH'

describe('When the Search page is opened', function () {

	beforeEach(function () {
		browser.get(searchPage.url)
	})

	afterEach(function () {
		browser.manage().deleteAllCookies()
	})

	it('Verify that all fields are presented', function () {
		expect(searchPage.verifyAllElementsAreVisible()).toBe(true)
	})

	it('Verify search result for exist company', function () {
		searchPage.fillSearchField(companyName)
		searchPage.clickOnSubmitButton()

		// Waits for a search result
		browser.sleep(2000)

		expect(searchPage.getTextTitleSearchResultCard()).toEqual(companyName)
	})

	it('Verify that the Register page could be opened from found company card', function () {
		searchPage.fillSearchField(companyName)
		searchPage.clickOnSubmitButton()

		// Waits for a search result
		browser.sleep(2000)

		searchPage.clickOnSearchResultCard()

		// Waitsn for a redirect
		browser.sleep(2000)

		expect(browser.getCurrentUrl()).toEqual(registerPage.url)
	})
})