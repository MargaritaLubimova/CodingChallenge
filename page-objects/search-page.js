import { by, element } from "protractor"

const SearchPage = function () {

	// #region URLs

	this.url = "https://app.fincompare.de/wizard/company/search"

	// #endregion

	// #region Locators

	this.title = element(by.className("funnel__step__title"))
	this.titleSearchResultCard = element(by.xpath("//*[@class='container full-width funnel__step__company']/div/div/h3"))
	this.searchField = element(by.id("companyName"))
	this.searchButton = element(by.xpath("//*[@type='submit']"))
	this.searchResultCard = element(by.xpath("//*[@class='container full-width funnel__step__company']/div"))

	// #endregion

	// #region Visibility

	/**
    * @return {Promise<Boolean>} value of combined visibility of all necessary elements
    */
	this.verifyAllElementsAreVisible = function () {
		return (this.title.isDisplayed() && this.searchField.isDisplayed() && this.searchButton.isDisplayed())
	}

	// #endregion

	// #region Inputs

    /**
	 * Fills out the search field
     * @param {String} input which should be filled out into the search field
	 */
	this.fillSearchField = function (input) {
		this.searchField.sendKeys(input)
	}

	// #endregion

	// #region Clicks

	/**
	 * Clicks on the submit button
	 */
	this.clickOnSubmitButton = function () {
		this.searchButton.click()
	}

    /**
	 * Clicks on a search result card
	 */
	this.clickOnSearchResultCard = function () {
		this.searchResultCard.click()
	}

	// #endregion

	// #region Get texts

	/**
	 * @return {Promise<String>} value of text of a title from a search result card
	 */
	this.getTextTitleSearchResultCard = function () {
		return this.titleSearchResultCard.getText()
	}

	// #endregion   
}

module.exports = new SearchPage()