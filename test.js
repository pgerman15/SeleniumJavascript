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

driver.get('http://automationpractice.com/index.php');

//Day 2
driver.findElement(webdriver.By.linkText('T-SHIRTS')).click();
driver.findElement(webdriver.By.linkText('Add to cart')).click(); 
driver.findElement(webdriver.By.className('cross')).click(); 
console.log('test');
/*
driver.findElement(webdriver.By.linkText('cross)')).click();  
driver.findElement(webdriver.By.linkText('View my shopping cart'));
driver.findElement(webdriver.By.linkText('1')); 
    if(title === 'Cats - Google Search'){
        console.log('Success');
    }else{
        console.log('Failure');
    }
    it('checks the title').expects(title).equals('cats - Google Search');
    */


//Day 3

// driver.quit().then(() => {
//     console.log('Driver closed');
// })

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

    this.exists = () => {
        console.log(this.expectation + ': ', (this.first) ? logSymbols.success : logSymbols.error);
    }
}
