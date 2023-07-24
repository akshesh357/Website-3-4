  var webdriver = require('selenium-webdriver'),
  // describe('modes of failure', function() {
  //  it('should fail to find a non-existent element', function() {
  //  browser.get('index.html#/form');
  chrome = require('selenium-webdriver/chrome'),
  firefox = require('selenium-webdriver/firefox');
  var _ = require('lodash');



  var browser  = new webdriver.Builder()
  .forBrowser('firefox')
  .setChromeOptions(/* ... */)
  .setFirefoxOptions(/* ... */)
  .build();

  var delimiter = ";"
  var fs = require('fs');

  var site = "icoalert"

  var counter = 0;
  var stream = fs.createWriteStream( "data/"+site + ".csv")
  stream.write("ID; Name; link  \n");



  browser.get('https://www.'+ site +'.com/');
  console.log("start");


  setTimeout(function(){
    elements = browser.findElements(webdriver.By.className("ico-wrap")).then(function(elements){

      console.log('Found',elements.length,'Number of Links are');
      _.each (elements, function(element){

        var b,c,d;
         element.findElement(webdriver.By.xpath(".//*[@class='about']")).getText().then(function(b){

          element.findElement(webdriver.By.tagName("a")).getAttribute("href").then(function(c) {
            counter = counter+1
            d = counter+delimiter+b+delimiter+c;
            console.log(d);
            stream.write (d + "\n");
          });

         });
      });

    })
  },20000);

  // /html/body/div[13]/div[2]/div/div[3]/div[3]/div[1]/div[2]/h3/span