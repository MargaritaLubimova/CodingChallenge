import { by, element } from "protractor"

const helpers = require('../helpers')

const CreditPage = function () {

	// #region URLs

	this.url = "https://app.fincompare.de/wizard/products/credit"

	// #endregion

	// #region Titles

	this.title = element(by.className("funnel__step__title"))

	// #endregion

	// #region Messages

	this.errorMessages = element.all(by.xpath("//*[@id='name-error-text']"))

	// #endregion

	// #region Amount

	this.titleAmountField = element(by.css("#root > div > div.content > form > div:nth-child(2) > div.form-control__title"))
	this.amountQuestionButton = element(by.className("icon--question"))
	this.amountField = element(by.name("amount"))
	this.errorMessageUnderAmountField = element(by.xpath("//*[@id='root']/div/div[1]/form/div[1]/div[2]/p"))

	// #endregion

	// #region Purpose

	this.titlePurposeMenu = element(by.css("#root > div > div.content > form > div:nth-child(3) > p"))
	this.purposeMenu = element(by.id("select-purpose"))
	this.allValueForPurposeMenu = element.all(by.xpath("//*[@id='menu-purpose']/div[2]/ul/li"))
	this.errorMessageUnderPurposeMenu = element(by.xpath("//*[@id='root']/div/div[1]/form/div[2]/div/div/p"))

	// #endregion

	// #region Term

	this.titleTermMenu = element(by.css("#root > div > div.content > form > div:nth-child(4) > p"))
	this.termMenu = element(by.id("select-term"))
	this.allValueForTermMenu = element.all(by.xpath("//*[@id='menu-term']/div[2]/ul/li"))
	this.errorMessageUnderTermMenu = element(by.xpath("//*[@id='root']/div/div[1]/form/div[3]/div/div/p"))

	// #endregion

	// #region Buttons

	this.submitButton = element(by.xpath("//*[@id='root']/div/div[1]/form/div[4]/button"))

	// #endregion

	// #region Visibility

	/**
     * @return {Promise<Boolean>} value of combined visibility of all necessary elements
     */
	this.verifyAllElementsAreVisible = function () {
		return (this.title.isDisplayed() && this.titleAmountField.isDisplayed() && this.amountQuestionButton.isDisplayed()
			&& this.amountField.isDisplayed() && this.titlePurposeMenu.isDisplayed() && this.purposeMenu.isDisplayed()
			&& this.titleTermMenu.isDisplayed() && this.termMenu.isDisplayed() && this.submitButton.isDisplayed())
	}

	// #endregion

	// #region Messages

	/**
     * @return {Number} count of visible error messages
     */
	this.errorMessagesCount = function () {
		return this.errorMessages.count().then(count => {
			return count
		})
	}

	// #endregion

	// #region Clicks

	/**
	 * Clicks on the submit button
	 */
	this.clickOnSubmitButton = function () {
		this.submitButton.click()
	}

	/**
	 * Clicks on the purpose dropdown menu
	 */
	this.clickOnPurposeMenu = function () {
		this.purposeMenu.click()
	}

	/**
	 * Clicks on the term dropdown menu
	 */
	this.clickOnTermMenu = function () {
		this.termMenu.click()
	}

	// #endregion

	// #region Get texts

	/**
	 * @return {Promise<String>} value for text of an error message under the amount field
	 */
	this.getTextErrorMesageUnderAmountField = function () {
		return this.errorMessageUnderAmountField.getText()
	}

	/**
	 * @return {Promise<String>} value for text of an error message under the purpose dropdown menu
	 */
	this.getTextErrorMesageUnderPurposeMenu = function () {
		return this.errorMessageUnderPurposeMenu.getText()
	}

	/**
	 * @return {Promise<String>} value for text of an error message under the term dropdown menu
	 */
	this.getTextErrorMesageUnderTermMenu = function () {
		return this.errorMessageUnderTermMenu.getText()
	}
	/**
	 * @return {Promise<String>} value for text of the amount field
	 */
	this.getTextAmountField = function () {
		return this.amountField.getAttribute('value')
	}

	// #endregion

	// #region Choose from dropdown menus

	/**
  	 * Chooses random value from the purpose dropdown menu
  	 */
	this.chooseRandomValuePurposeMenu = function () {
		helpers.randomElement(this.allValueForPurposeMenu).then(element => { element.click() })
	}

	/**
	 * Chooses random value from the term dropdown menu
	 */
	this.chooseRandomValueTermMenu = function () {
		helpers.randomElement(this.allValueForTermMenu).then(element => { element.click() })
	}

	// #endregion

	// #region Inputs

	/**
	 * Fills out the amount field
	 * @param {String} input which should be filled out into the amount field
	 */
	this.fillAmountField = function (input) {
		this.amountField.clear()
		this.amountField.sendKeys(input)
	}

	// #endregion
}

module.exports = new CreditPage()
