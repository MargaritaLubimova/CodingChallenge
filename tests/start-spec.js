import { browser, ExpectedConditions } from "protractor"

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

        // Waits for a redirect
        browser.wait(ExpectedConditions.urlIs(creditPage.url), 1000).then(() => {
            expect(browser.getCurrentUrl()).toEqual(creditPage.url)
        }).catch(() => {
            fail('It taking too long to redirect')
        })
    })
})
