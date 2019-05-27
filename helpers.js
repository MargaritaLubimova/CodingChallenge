const Helpers = function () {

	/**
	 * @param {ElementArrayFinder} input container with elements
	 * @return {Promise<ElementFinder>} random element from container
	 */
    this.randomElement = function (input) {
        return input.count().then(length => {
            return input.get(Math.floor(Math.random() * (length - 1)))
        })
    }

    /**
	 * @param {Array} input container with elements
	 * @return random element from container
	 */
    this.randomElementFromArray = function (input) {
        return input[Math.floor(Math.random() * (input.length - 1))]
    }

    /**
	 * @param {Number} length of a random string to generate
	 * @return {String} random string with a length which is equal to input length
	 * which contains lowercased English alphabet characters
	 */
    this.randomString = function (length) {
        return new Array(length).fill(" ").map(function () {
            return "abcdefghijklmnopqurstuvwxyz".substr(Math.floor(Math.random() * 27), 1)
        }).join('')
    }

	/**
	 * Opens the Register page from a found company card on the SearchPage
	 * @param {SearchPage} searchPage instance of the search page object
	 */
    this.openRegisterPage = function (searchPage) {
        browser.get(searchPage.url)

        searchPage.fillSearchField("FinCompare GmbH")
        searchPage.clickOnSubmitButton()

        // Waits for a search result
        browser.sleep(2000)

        searchPage.clickOnSearchResultCard()

        // Waits for a redirect
        browser.sleep(1000)
    }
}

module.exports = new Helpers()
