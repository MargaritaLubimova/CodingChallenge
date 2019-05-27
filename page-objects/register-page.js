import { by, element } from "protractor"

const helpers = require('../helpers')

const RegisterPage = function () {

	// #region URLs

	this.url = "https://app.fincompare.de/account/register?next=/account/requests"

	// #endregion

	// #region Title

	this.title = element(by.className("account__header__title"))

	// #endregion

	// #region Login

	this.loginTitle = element(by.className("account__header__info"))
	this.loginLink = element(by.css("#root > div > div.content > div > div.account__header > p > a"))

	// #endregion

	// #region Gender

	this.genderManRadioButton = element(by.xpath("//*[@data-testid='register-form-gender-m']"))
	this.genderWomanRadioButton = element(by.xpath("//*[@data-testid='register-form-gender-f']"))

	// #endregion

	// #region Fields

	this.firstNameField = element(by.id("firstName"))
	this.errorMessageUnderFirstNameField = element(by.xpath("//*[@data-testid='firstName-error-message']"))

	this.lastNameField = element(by.id("lastName"))
	this.errorMessageUnderLastNameField = element(by.xpath("//*[@data-testid='lastName-error-message']"))

	this.emailField = element(by.id("email"))
	this.errorMessageUnderEmailField = element(by.xpath("//*[@data-testid='email-error-message']"))

	this.phoneField = element(by.id("phone"))
	this.errorMessageUnderPhoneField = element(by.xpath("//*[@data-testid='phone-error-message']"))

	// #endregion

	// #region Business relation

	this.businessRelationMenu = element(by.id("select-businessRelation"))
	this.errorMessageUnderBusinessRelationMenu = element(by.xpath("//*[@class='form-control form-control--full']/div/div/p"))
	this.allValuesOfBusinessRelationMenu = element.all(by.xpath("//*[@data-testid='register-form-select-options']/li"))

	// #endregion

	// #region News letter

	this.newsLetterCheckBoxTitle = element(by.xpath("//*[@id='root']/div/div[1]/div/div[2]/form/div/div[7]/label/span[2]"))
	this.newsLetterCheckBox = element(by.xpath("//*[@data-testid='register-form-newsletter']"))

	// #endregion

	// #region Buttons

	this.submitButton = element(by.xpath("//*[@type='submit']"))

	// #endregion

	// #region Messages

	this.errorMessages = element.all(by.id("name-error-text"))

	// #endregion

	// #region Verify

    /**
    * @return {Promise<Boolean>} value of combined visibility of all necessary elements
    */
	this.verifyAllElementsAreVisible = function () {
		return (this.title.isDisplayed() && this.loginTitle.isDisplayed() && this.loginLink.isDisplayed()
			&& this.genderManRadioButton.isDisplayed() && this.genderWomanRadioButton.isDisplayed()
			&& this.firstNameField.isDisplayed() && this.lastNameField.isDisplayed() && this.emailField.isDisplayed()
			&& this.phoneField.isDisplayed() && this.businessRelationMenu.isDisplayed()
			&& this.newsLetterCheckBoxTitle.isDisplayed() && this.newsLetterCheckBox.isDisplayed()
			&& this.submitButton.isDisplayed())
	}

	// #endregion

	// #region Messages

	this.errorMessagesCount = function () {
		return this.errorMessages.count().then(length => {
			return length
		})
	}

	// #endregion

	// #region Clicks

    /**
     * Clicks on the login link
     */
	this.clickOnLoginLink = function () {
		this.loginLink.click()
	}

    /**
     * Clicks on the submit button
     */
	this.clickOnSubmitButton = function () {
		this.submitButton.click()
	}

    /**
     * Clicks on a random gender radio button
     */
	this.clickOnRandomGenderRadioButton = function () {
		helpers.randomElementFromArray([this.genderManRadioButton, this.genderWomanRadioButton]).click()
	}

    /**
     * Clicks on the checkbox news letter
     */
	this.clickOnNewsLetterCheckBox = function () {
		this.newsLetterCheckBox.click()
	}

    /**
     * Clicks on the business relation menu
     */
	this.clickOnBusinessRelationMenu = function () {
		this.businessRelationMenu.click()
	}

	// #endregion

	// #region Get texts

	/**
	 * @return {Promise<String>} value for text of an error message under the first name field
	 */
	this.getTextErrorMesageUnderFirstNameField = function () {
		return this.errorMessageUnderFirstNameField.getText()
	}

	/**
	 * @return {Promise<String>} value for text of an error message under the last name field
	 */
	this.getTextErrorMesageUnderLastNameField = function () {
		return this.errorMessageUnderLastNameField.getText()
	}

	/**
	 * @return {Promise<String>} value for text of an error message under the email field
	 */
	this.getTextErrorMesageUnderEmailField = function () {
		return this.errorMessageUnderEmailField.getText()
	}
	/**
	 * @return {Promise<String>} value for text of an error message under the phone field
	 */
	this.getTextErrorMesageUnderPhoneField = function () {
		return this.errorMessageUnderPhoneField.getText()
	}

    /**
	 * @return {Promise<String>} value for text of an error message under the business relation menu
	 */
	this.getTextErrorMesageUnderBusinessRelationMenu = function () {
		return this.errorMessageUnderBusinessRelationMenu.getText()
	}

	// #endregion  

	// #region Chooses from menu

	/**
  	 * Chooses random value from business relation menu
  	 */
	this.chooseRandomValueBusinessRelationMenu = function () {
		helpers.randomElement(this.allValuesOfBusinessRelationMenu).then(element => { element.click() })
	}

	// #endregion

	// #region Inputs

    /**
     * Fills out the first name field
     */
	this.fillFirstNameField = function (firstName) {
		this.firstNameField.sendKeys(firstName)
	}

    /**
     * Fills out the last name field
     */
	this.fillLastNameField = function (lastName) {
		this.lastNameField.sendKeys(lastName)
	}

    /**
     * Fills out the email field
     */
	this.fillEmailField = function (email) {
		this.emailField.sendKeys(email)
	}

	// #endregion

}

module.exports = new RegisterPage()
