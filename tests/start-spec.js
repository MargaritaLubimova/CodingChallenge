import "jasmine"
import { browser, by, element } from "protractor"

const startPage = require('../page-objects/start-page')
const creditPage = require('../page-objects/credit-page')

describe('Start page', function () {

	beforeEach(function () {
		browser.waitForAngularEnabled(false)
		browser.manage().window().maximize()
		browser.get(startPage.url)
	})

	it('Verify that all fields are presented on the Start page', function () {
		expect(startPage.verifyAllElementsAreVisible()).toBe(true)
	})

	it('Verify open Credit page', function () {
		startPage.clickOnCreditBlock()
		expect(browser.getCurrentUrl()).toEqual(creditPage.url)
	})

})
