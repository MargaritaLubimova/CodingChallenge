exports.config = {
	framework: 'jasmine',

	seleniumAddress: 'http://localhost:4445/wd/hub',

	specs: [
		'tests/start-spec.js',
		'tests/credit-spec.js', 
		'tests/search-spec.js',
		'tests/register-spec.js',
		'tests/user-case-spec.js'
	],

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