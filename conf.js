exports.config = {
    framework: 'jasmine',
    
    seleniumAddress: 'http://localhost:4445/wd/hub',
    
    specs: ['tests/*.js'],
    
    capabilities: {
      browserName: 'chrome'
    },

    jasmineNodeOpts: {
      showColors: true
    }
  }