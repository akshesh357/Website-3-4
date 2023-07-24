var webdriver = require('selenium-webdriver'),
// describe('modes of failure', function() {
  //  it('should fail to find a non-existent element', function() {
    //  browser.get('index.html#/form');
chrome = require('selenium-webdriver/chrome'),
firefox = require('selenium-webdriver/firefox');
var _ = require('lodash');


// var driver = new webdriver.Builder().
// withCapabilities().
// build();

var browser  = new webdriver.Builder()
.forBrowser('firefox')
.setChromeOptions(/* ... */)
.setFirefoxOptions(/* ... */)
.build();


var fs = require('fs');

var stream = fs.createWriteStream("linkedIn.txt");
browser.get("https://www.linkedin.com/");
  console.log('start');
//        driver.manage().window().maximize();
//
      browser.findElement(webdriver.By.xpath(".//*[@id='login-email']")).sendKeys("kuldeepbal32@gmail.com");

      browser.findElement(webdriver.By.xpath(".//*[@id='login-password']")).sendKeys("zaq1@wsx");
      browser.findElement(webdriver.By.xpath(".//*[@id='login-submit']")).click();
     browser.get("https://www.linkedin.com/mynetwork/invite-connect/connections/");
     browser.findElement(webdriver.By.linkText("indu bhatti")).sendKeys(webdriver.Key.Ctrl + 't');
     //browser.findElement(webdriver.By.tagName("body")).sendKeys(webdriver.Key.COMMAND + "t");
// try{
//   setTimeout(function() {
//      browser.findElements(webdriver.By.className("mn-person-info__details")).then(function(elements)
//      {
//         console.log('Found',elements.length,'Number of Links are');
//         // _.each (links,(function(element) {
//         //     console.log(element)
//         // }, this));
//         // // links.then ( function (links) {
//         // //     console.log (links)
//         // // })
//         // browser.quit();

//         //  _.each (elements, function(element)
//         //  {
//             var a,b,c,d;
//    //this is 1st person

//              browser.findElement(webdriver.By.className("mn-person-info__name Sans-17px-black-85%-semibold-dense")).getText().then(function(b)
//              {
//                 console.log(b);
//                 setTimeout(function()
//                 {
//                   console.log("TIMEOUT begin1");  

//                     browser.findElement(webdriver.By.className("mn-person-info__name Sans-17px-black-85%-semibold-dense")).click();
//                     //.then(function()
//                   //{
//                       console.log("statrted1");

//                       browser.findElement(webdriver.By.xpath(".//*[@id='ember1956']/button")).click();

//                       setTimeout(function()
//                       {
//                           var last;
//                           console.log("TIMEOUT BEGIN2");
//                           browser.findElement(webdriver.By.className("pv-contact-info__contact-item pv-contact-info__contact-link Sans-15px-black-55%")).getText().then(function(last)
//                           {
//                               console.log("found"+last);
//                           },function (err) {
//                                   if (err.name === "NoSuchElementError")
//                                   console.log("Element was missing1");
//                                });

//                           console.log("TIMEOUT COMPLETE2");
//                       }, 10000);

//                   //},function (err) {
//                           //  if (err.name === "NoSuchElementError")
//                           //  console.log("Element was missing2");
//                     //});

//                     console.log("TIMEOUT complete1");
//                 }, 15000);

//                 },function (err) {
//                       if (err.name === "NoSuchElementError")
//                           console.log("Element was missing3");
//                        });

//     // });

//       },function (err) {
//        if (err.name === "NoSuchElementError")
//            console.log("Element was missing4");
//         });

//     },60000);

//  }
//  catch(e){
//    console.log("Exception"+ e.message());
//  }
     