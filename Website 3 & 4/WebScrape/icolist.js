var webdriver = require('selenium-webdriver'),
// describe('modes of failure', function() {
  //  it('should fail to find a non-existent element', function() {
    //  browser.get('index.html#/form');
chrome = require('selenium-webdriver/chrome'),
firefox = require('selenium-webdriver/firefox');
var _ = require('lodash');

var fs = require('fs');

var site = "ico-list"

var stream = fs.createWriteStream( "data/"+site + ".txt");

var browser  = new webdriver.Builder()
.forBrowser('firefox')
.setChromeOptions(/* ... */)
.setFirefoxOptions(/* ... */)
.build();



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  browser.get('https://www.' + site + '.com/');

  console.log('Start ');


  setTimeout(function() {
    elements = browser.findElements(webdriver.By.className("coinRow pointer")).then(function(elements){
        console.log('Found',elements.length,'icolist list');

        _.each (elements, function(element){
            var a,b,c,d,e,f,g,e1,e2;

                try{
                    element.findElement((webdriver.By.tagName("a"))).getText().then(function(a){

                        element.findElement((webdriver.By.className("text-right"))).getText().then(function(b){

                             element.findElement((webdriver.By.className("text-right hidden-xs"))).getText().then(function(c) {

                                element.findElement((webdriver.By.className("text-right hidden-xs hidden-sm"))).getText().then(function(e) {

                                    element.findElement((webdriver.By.className("boxCountdown text-right"))).getText().then(function(f) {

                                        let  social = "";
                                        element.findElements(webdriver.By.xpath(".//*[@class='visible-lg']/a")).then(function(g) {

                                             _.each (g, function(e1){

                                                 e1.getAttribute("href").then(function(e2){

                                                    (function(e2){

                                                        social+="*"+e2;

                                                    })(e2);



                                                });
                                            });

                                        }).then(function (){

                                            d = a+"|"+b+"|"+c+"|"+e+"|"+f+"|"+social +"\n";
                                            console.log(d);
                                            stream.write (d + "\n");});

                                    });

                                });

                            },function (err) {
                                if (err.name == "NoSuchElementError")
                                console.log("Element was missing!");
                            });
                        });

                        },function (err) {
                            if (err.name === "NoSuchElementError")
                            console.log("Element was missing!");
                       });
                }
                catch ( e) {
                     console.log ( "Exception" + e.getText());
                  }
            });
        })},

    20000);

    
