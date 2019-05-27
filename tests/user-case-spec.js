import { browser, ExpectedConditions } from "protractor"

const startPage = require('../page-objects/start-page')
const creditPage = require('../page-objects/credit-page')
const registerPage = require('../page-objects/register-page')
const searchPage = require('../page-objects/search-page')
const companyName = "FinCompare GmbH"

describe('Registration user case', function () {

    beforeEach(function () {
        browser.get(startPage.url)
    })

    it('verify', function () {
        startPage.clickOnCreditBlock()

        // Waits for a redirect
        browser.wait(ExpectedConditions.urlIs(creditPage.url), 1000).then(() => {
            expect(browser.getCurrentUrl()).toEqual(creditPage.url)
        }).catch(() => {
            fail('It taking too long to redirect')
        })

        creditPage.fillAmountField("10000")
        creditPage.clickOnPurposeMenu()

        // FIXME: Change the dropdown menu implementation from the input to the select
        // then delete waitings until dropdown menus will be opened/closed

        // Waits for an open of the purpose dropdown menu
        browser.sleep(1000)

        creditPage.chooseRandomValuePurposeMenu()

        // Waits for a close of the purpose dropdown menu
        browser.sleep(1000)

        creditPage.clickOnTermMenu()

        // Waits for an open of the purpose dropdown menu
        browser.sleep(1000)

        creditPage.chooseRandomValueTermMenu()

        // Wait for a close of the term dropdown menu
        browser.sleep(1000)

        creditPage.clickOnSubmitButton()

        // Waits for a verification
        browser.wait(ExpectedConditions.urlIs(searchPage.url), 1000).then(() => {
            expect(browser.getCurrentUrl()).toEqual(searchPage.url)
        }).catch(() => {
            fail('It taking too long to redirect')
        })

        searchPage.fillSearchField(companyName)
        searchPage.clickOnSubmitButton()

        // Waits for a search result
        browser.sleep(2000)

        searchPage.clickOnSearchResultCard()

        // Waits for a redirect
        browser.wait(ExpectedConditions.urlIs(registerPage.url), 1000).then(() => {
            expect(browser.getCurrentUrl()).toEqual(registerPage.url)
        }).catch(() => {
            fail('It taking too long to redirect')
        })

        registerPage.clickOnRandomGenderRadioButton()
        registerPage.fillFirstNameField("FirstName")
        registerPage.fillLastNameField("LastName")
        registerPage.fillEmailField("emailName@mail.com")
        registerPage.clickOnBusinessRelationMenu()

        // Waits for an open of the business relation dropdown menu
        browser.sleep(1000)

        registerPage.chooseRandomValueBusinessRelationMenu()

        // Waits for a close of the business relation dropdown menu
        browser.sleep(1000)

        registerPage.clickOnSubmitButton()

        // Waits for a verification
        browser.sleep(1000)

        expect(registerPage.errorMessagesCount()).toEqual(1)
    })
})
