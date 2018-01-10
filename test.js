//Day 1
// Start setup
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
	.build();
//End Setup

driver.get('http://google.com');

//Day 2
driver.findElement(webdriver.By.id('lst-ib')).sendKeys('cats', webdriver.Key.ENTER);
driver.getTitle().then(function(title){
    if(title === 'Cats - Google Search'){
        console.log('Success');
    }else{
        console.log('Failure');
    }
});

//Day 3
driver.quit();
console.log('Done');
