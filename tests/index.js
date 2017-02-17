module.exports = {

	'Demo test': function(browser) {
		browser
			.url(browser.launchUrl)
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .saveScreenshot('test.png')
			.end()

	}

};
