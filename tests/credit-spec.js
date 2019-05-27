import { browser, ExpectedConditions } from "protractor"

const creditPage = require('../page-objects/credit-page')
const searchPage = require('../page-objects/search-page')

describe('When the Credit page is opened', function () {

    beforeEach(function () {
        browser.get(creditPage.url)
    })

    it('Verify that all fields are presented', function () {
        expect(creditPage.verifyAllElementsAreVisible()).toBe(true)
    })

    it('Verify error messages for fields with empty parameters', function () {
        creditPage.clickOnSubmitButton()

        expect(creditPage.getTextErrorMesageUnderAmountField()).toEqual("Dieses Feld darf nicht null sein.")
        expect(creditPage.getTextErrorMesageUnderPurposeMenu()).toEqual("Eine gültige Ganzzahl ist erforderlich.")
        expect(creditPage.getTextErrorMesageUnderTermMenu()).toEqual("\"\" ist keine gültige Option.")
    })

    describe('Verify the Amount field', function () {

        it('with short number (1 digit)', function () {
            creditPage.fillAmountField("1")
            creditPage.clickOnSubmitButton()

            // We don't expect an error message under the amount field,
            // because we know that there are should be 2 error messages
            // (under the purpose and the term dropdown menus)
            expect(creditPage.errorMessagesCount()).toEqual(2)
        })

        it('with short negative number (1 digit)', function () {
            creditPage.fillAmountField("-1")
            creditPage.clickOnSubmitButton()

            expect(creditPage.getTextAmountField()).toBe("1", "This test should be finished with failure,"
                + " because this field shouldn't get a negative number and should convert it to a positive number")
        })

        it('with symbols', function () {
            creditPage.fillAmountField("abc/")
            creditPage.clickOnSubmitButton()

            expect(creditPage.getTextAmountField()).toEqual("")
        })

        it('with number (8 digits)', function () {
            creditPage.fillAmountField("10000000")
            creditPage.clickOnSubmitButton()

            // We don't expect an error message under the amount field,
            // because we know that there are should be 2 error messages
            // (under the purpose and the term dropdown menus)
            expect(creditPage.errorMessagesCount()).toEqual(2)
        })

        it('with boundary number (13 digits)', function () {
            creditPage.fillAmountField("1000000000000")
            creditPage.clickOnSubmitButton()

            expect(creditPage.getTextErrorMesageUnderAmountField()).toEqual(""
                + "Stelle sicher, dass es nicht mehr als 12 Stellen vor dem Komma lang ist.")
        })

        it('with boundary number (15 digits)', function () {
            creditPage.fillAmountField("100000000000000")
            creditPage.clickOnSubmitButton()

            expect(creditPage.getTextErrorMesageUnderAmountField()).toEqual(""
                + "Stelle sicher, dass es insgesamt nicht mehr als 14 Ziffern lang ist.")
        })

        it('with boundary number (22 digits)', function () {
            creditPage.fillAmountField("1000000000000000000000")
            creditPage.clickOnSubmitButton()

            // We expect error messages under the amount field,
            // under the purpose and the term dropdown menus
            expect(creditPage.errorMessagesCount()).toBe(3, "This test should be finished with failure,"
                + " because this field souldn't remove input value and put 121 instead of it")
        })
    })

    it('Verify all fields with right parameters', function () {
        creditPage.fillAmountField("10000")
        creditPage.clickOnPurposeMenu()

        // FIXME: Change the dropdown menu implementation from the input to the select
        // then delete waitings until dropdown menus will be opened/close

        // Waits for an open the purpose dropdown menu
        browser.sleep(1000)

        creditPage.chooseRandomValuePurposeMenu()

        // Waits for a close the purpose dropdown menu
        browser.sleep(1000)

        creditPage.clickOnTermMenu()

        // Waits for an open the term dropdown menu
        browser.sleep(1000)

        creditPage.chooseRandomValueTermMenu()

        // Waits for a close the term dropdown menu
        browser.sleep(1000)

        creditPage.clickOnSubmitButton()

        // Waits for a verification
        browser.wait(ExpectedConditions.urlIs(searchPage.url), 1000).then(() => {
            expect(browser.getCurrentUrl()).toEqual(searchPage.url)
        }).catch(() => {
            fail('It taking too long to redirect')
        })
    })
})
