exports.config = {
	framework: 'jasmine2',

	seleniumAddress: 'http://localhost:4445/wd/hub',

	specs: [
		'tests/start-spec.js',
		'tests/credit-spec.js',
		'tests/search-spec.js',
		'tests/register-spec.js',
		'tests/user-case-spec.js'
	],

	onPrepare: function () {
		browser.waitForAngularEnabled(false)
		browser.manage().window().maximize()
		browser.manage().timeouts().implicitlyWait(10000)

		const AllureReporter = require('jasmine-allure-reporter')
		jasmine.getEnv().addReporter(new AllureReporter())
		jasmine.getEnv().afterEach(function (done) {
			browser.takeScreenshot().then(function (png) {
				allure.createAttachment('Screenshot', function () {
					return Buffer.from(png, 'base64')
				}, 'image/png')()
				done()
			})
		});
	},

	capabilities: {
		browserName: 'chrome'
	},

	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 60000
	}
}
