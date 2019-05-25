import { by, element } from "protractor"

const CreditPage = function () {
	this.url = "https://app.fincompare.de/wizard/products/credit"
}

module.exports = new CreditPage()