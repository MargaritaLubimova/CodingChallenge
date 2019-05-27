import { browser } from "protractor"

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
        browser.sleep(1000)

        expect(browser.getCurrentUrl()).toEqual(creditPage.url)

        creditPage.fillAmountField("10000")
        creditPage.clickOnPurposeMenu()

        // FIXME: Change the dropdown menu implementation from the input to the select
        // then delete waitings until dropdown menus will be opened/close

        // Waits for an open of the porpose dropdown menu
        browser.sleep(1000)

        creditPage.chooseRandomValuePorposeMenu()

        // Waits for a close of the porpose dropdown menu
        browser.sleep(1000)

        creditPage.clickOnTermMenu()

        // Waits for an open of the porpose dropdown menu
        browser.sleep(1000)

        creditPage.chooseRandomValueTermMenu()

        // Wait for a close of the term dropdown menu
        browser.sleep(1000)

        creditPage.clickOnSubmitButton()

        // Waits for a verification
        browser.sleep(1000)

        expect(browser.getCurrentUrl()).toEqual(searchPage.url)

        searchPage.fillSearchField(companyName)
        searchPage.clickOnSubmitButton()

        // Waits for a search result
        browser.sleep(2000)

        searchPage.clickOnSearchResultCard()

        // Waits for a redirect
        browser.sleep(1000)

        expect(browser.getCurrentUrl()).toEqual(registerPage.url)

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
