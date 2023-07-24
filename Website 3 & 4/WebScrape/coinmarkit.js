var webdriver = require('selenium-webdriver'),
chrome = require('selenium-webdriver/chrome'),
firefox = require('selenium-webdriver/firefox');
var _ = require('lodash');


var browser  = new webdriver.Builder()
.forBrowser('firefox')
.setChromeOptions(/* ... */)
.setFirefoxOptions(/* ... */) 
.build();

var browser2  = new webdriver.Builder()
.forBrowser('firefox')
.setChromeOptions(/* ... */)
.setFirefoxOptions(/* ... */)
.build();


function sleep(ms){
  return new promise(resolve =>setTimeout(resolve, ms))
}
var counter = 0;

var fs = require('fs');

var site = "coinmarketcap"

var stream = fs.createWriteStream( "data/"+site + ".csv")
stream.write("ID; Name; Symbol; Price; Website; FB \n");
browser.get('https://'+site+'.com/all/views/all/').then(function(A)
{console.log('start');
}
)
var delimiter = ";"

var i=0;
var name,symbol,price,volume,links;

let social2="";

setTimeout(function() {
     elements = browser.findElements(webdriver.By.tagName("tr") ).then(function(elements){
       console.log('Found',elements.length,'coin list');
      _.each (elements, function(element){

           element.findElement(webdriver.By.className("no-wrap currency-name")).getText().then(function(name){

            element.findElement(webdriver.By.className("text-left col-symbol")).getText().then(function(symbol){

              
                 element.findElement(webdriver.By.className("price")).getText().then(function(price){
                 
                     element.findElement(webdriver.By.className("volume")).getAttribute("href").then(function(volume){

                      // ".//*[@class='cp-line']/a"

                              element.findElement(webdriver.By.xpath(".//*[@class='no-wrap text-right circulating-supply']/a")).getAttribute("href").then(function(links){
                                counter = counter +1
                            d = counter+ delimiter+name+delimiter+symbol+delimiter+price+delimiter+volume+delimiter+links+"\n";     
                            console.log(d);
                            stream.write (d);
                             
                            
                    },function (err) {
                    if(err.name === "NoSuchElementError")
                    console.log("Elemnt was missing!");
                    });
                  });
            },function (err) {
              if(err.name === "NoSuchElementError")
              console.log("Elemnt was missing!");
             });
            
            },function (err) {
              if(err.name === "NoSuchElementError")
              console.log("Elemnt was missing!");
              });

         },function (err) {
            if(err.name === "NoSuchElementError")
            console.log("Elemnt was missing!");
            });
          });
      },function (err) {
        if(err.name === "NoSuchElementError")
        console.log("Elemnt was missing!");
        });
        stream.close ();
},40000);


