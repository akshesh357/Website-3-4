var webdriver = require('selenium-webdriver'),
chrome = require('selenium-webdriver/chrome'),
firefox = require('selenium-webdriver/firefox');
var _ = require('lodash');


var browser  = new webdriver.Builder()
.forBrowser('firefox')
.setChromeOptions(/* ... */)
.setFirefoxOptions(/* ... */)
.build();


//var webdriver = require('selenium-webdriver/firefox');
//var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName':'mozilla firefox'}).build();
browser.get('http://elevatetoronto.com/');
links = browser.findElements(webdriver.By.className("envira-gallery-item-inner")).then(function(links){
    console.log('Found',links.length,'coin list');
    // _.each (links,(function(element) {
    //     console.log(element)
    // }, this));
    // // links.then ( function (links) {
    // //     console.log (links)
    // // })
    // browser.quit();
    
_.each (links, function(link){
    link.getAttribute("href").then(function(response,reject){
             console.log("Respose"+response);
})
    ;
})

});
