//Day 1
// Start setup
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
const logSymbols = require('log-symbols');

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

    it('checks the title').expects(title).equals('dogs - Google Search');
    
});

//Day 3

driver.quit().then(() => {
    console.log('Driver closed');
})

//Extra

function it(description){
    return new Expectation(description);
}

function Expectation(exp){
    this.expectation = exp;
    
    this.expects = (firstVar) => {
        debugger;
        return new Equation(this.expectation, firstVar);
    };
}

function Equation(expectation, firstVar){
    this.expectation = expectation;
    this.first = firstVar;
    
    this.equals = (secondVar) => {
        debugger;
        console.log(this.expectation + ': ', (this.first == secondVar) ? logSymbols.success : logSymbols.error);
    };

    this.doesNotEqual = (secondVar) => {
        console.log(this.expectation + ': ', (this.first != secondVar) ? logSymbols.success : logSymbols.error);
    };

    this.exists = () => a
        console.log(this.expectation + ': ', (this.first) ? logSymbols.success : logSymbols.error);
    }
}