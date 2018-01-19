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
//Goes to automationpractice.com
driver.get('http://automationpractice.com');

//Finds the t-shirt link using a css selector. Alternatively, you could use
//webdriver.By.linkText('T-SHIRTS')
driver.findElement(webdriver.By.css('ul.sf-menu > li:nth-child(3) > a')).click();
const products = driver.findElements(webdriver.By.css('div.product-container div.right-block'));
products.then((productArray) => {
    let arrayOfPromises = [];
    let correctProductPromise;

    for(let i = 0; i < productArray.length; i++){
        arrayOfPromises[i] = productArray[i].getText().then((text) => {
            console.log('text: ' + text);
            return (text.indexOf('Faded Short Sleeve T-shirts') > -1);
        }).then((isCorrect) => {
            if(isCorrect){
                return arrayOfPromises[i];
            }
        }) 
    }
})

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