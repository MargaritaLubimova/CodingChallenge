exports.config = {
	framework: 'jasmine',

	seleniumAddress: 'http://localhost:4445/wd/hub',

	specs: ['tests/*.js'],

	onPrepare: function() {
		browser.waitForAngularEnabled(false)
		browser.manage().window().maximize()
		browser.manage().timeouts().implicitlyWait(10000)
	},

	capabilities: {
		browserName: 'chrome'
	},

	jasmineNodeOpts: {
		showColors: true
	}
}