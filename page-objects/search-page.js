import { by, element } from "protractor"

const SearchPage = function () {
	
	this.url = "https://app.fincompare.de/wizard/company/search"
}

module.exports = new SearchPage()