import { by, element } from "protractor"

const StartPage = function () {

	this.url = "https://app.fincompare.de/wizard"

	// #region Locators

	this.logo = element(by.className("header__logo__image"))
	this.title = element(by.className("funnel__products__heading"))
	this.creditBlock = element(by.css("#root > div > div.content > div > a:nth-child(1) > div"))
	this.leasingBlock = element(by.css("#root > div > div.content > div > a:nth-child(2) > div"))
	this.factoringBlock = element(by.css("#root > div > div.content > div > a:nth-child(3) > div"))
	this.purchaseBlock = element(by.css("#root > div > div.content > div > a:nth-child(4) > div"))
	this.singleFactoringBlock = element(by.css("#root > div > div.content > div > a:nth-child(5) > div"))
	this.inventoryBlock = element(by.css("#root > div > div.content > div > a:nth-child(6) > div"))
	this.saleBlock = element(by.css("#root > div > div.content > div > a:nth-child(6) > div"))

	// #endregion

	// #region Clicks

    /**
	 * Clicks on credit block
	 */
	this.clickOnCreditBlock = function () {
		this.creditBlock.click()
	}

	// #endregion

	// #region Visibility

    /**
    * @return {Boolean} value of combined visibility of all necessary elements.
    */
	this.verifyAllElementsAreVisible = function () {
		return (this.logo.isDisplayed() && this.title.isDisplayed() && this.creditBlock.isDisplayed()
			&& this.leasingBlock.isDisplayed() && this.factoringBlock.isDisplayed() && this.purchaseBlock.isDisplayed()
			&& this.singleFactoringBlock.isDisplayed() && this.inventoryBlock.isDisplayed() && this.saleBlock.isDisplayed())
	}

	// #endregion
}

module.exports = new StartPage()
