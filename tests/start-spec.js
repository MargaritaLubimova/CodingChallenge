import { browser } from "protractor"

const startPage = require('../page-objects/start-page')
const creditPage = require('../page-objects/credit-page')

describe('When the Start page is opened', function () {

    beforeEach(function () {
        browser.get(startPage.url)
    })

    it('Verify that all fields are presented on the Start page', function () {
        expect(startPage.verifyAllElementsAreVisible()).toBe(true)
    })

    it('Verify that the Credit page could be opened from the Start page', function () {
        startPage.clickOnCreditBlock()
        expect(browser.getCurrentUrl()).toEqual(creditPage.url)
    })
})
