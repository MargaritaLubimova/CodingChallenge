import { by, element } from "protractor"

const RegisterPage = function () {
	
    this.url = "https://app.fincompare.de/account/register?next=/account/requests"
}

module.exports = new RegisterPage()