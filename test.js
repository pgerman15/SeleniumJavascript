/*Begin Setup*/
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
	.build();
/*End Setup*/

driver.get('http://google.com');
//Ended 1-9
driver.findElement(webdriver.By.id('lst-ib')).sendKeys('cats', webdriver.Key.ENTER);
driver.getTitle().then(function(title){
    if(title === 'Cats - Google Search'){
        console.log('Success');
    }else{
        console.log('Failure');
    }
});

driver.quit();
