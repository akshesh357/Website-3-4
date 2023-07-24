"use strict";

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

var site = "icotracker"
var counter = 0;
var stream = fs.createWriteStream( "data/"+site + ".csv")
stream.write("ID; Name; Description; Whitepaper;FB ;Twitter; Github  \n");

browser.get('https://'+site+'.net');
console.log("start");

setTimeout(function()
{
    // SALECTING CARD-BLOCK 
  browser.findElements(webdriver.By.className("card-block")).then(function(elements){
    console.log('Found',elements.length,'coin list');
    _.each (elements, function(element){

      
       
      var gitlinks ="";
      var fblinks ="";
      var twitterlinks ="";
      var name,description,whitepaper,facebook,twitter,github,output,s="";



      let social="";

      try{
                  // NAMES
        element.findElement((webdriver.By.className("flex-first cp-col-sm col-9 col-sm-9 cp-prj"))).getText().then(function(name){

                  // DESCRIPTOIN OR TEXT
             element.findElement(webdriver.By.className("cp-col-sm col-12")).getText().then(function(description){

                //  WHITEPAPER LINKS PDF        
                element.findElement(webdriver.By.xpath(".//*[@class='cp-line']/a")).getAttribute("href").then(function(whitepaper) {
                
                 
                        //  SOCIAL LINKS                             //  *[contains(@title, 'Facebook')]/a"
                      element.findElement(webdriver.By.xpath(".//*[@class='ctrl-btn' and @title='Facebook' ]")).getAttribute("href").then(function(facebook) {

                        fblinks = facebook
                                  
                      },function (err) {
                        if (err.name === "NoSuchElementError")
                        console.log("Facebook is missing!");
                                        });

                            element.findElement(webdriver.By.xpath(".//*[@class='ctrl-btn' and @title='Twitter' ]")).getAttribute("href").then(function(twitter) {

                              twitterlinks = twitter

                            },function (err) {
                              if (err.name === "NoSuchElementError")
                               console.log("Twitter is missing!");
                                                });
                                                                  
                            //  element.findElements(webdriver.By.xpath("//*[contains(@title, 'Facebook')]")).then(function(facebook) {  

                                   element.findElement(webdriver.By.xpath(".//*[@class='ctrl-btn' and @title='Github' ]")).getAttribute("href").then(function(github) {
                                               
                                       gitlinks = github

                                     },function (err) {
                                     if (err.name === "NoSuchElementError")
                                      console.log("GitHub is missing!");
                                                      }).then (function(){
                                                        counter = counter +1
                                                      output = counter+ delimiter +name+delimiter+description+delimiter+whitepaper+delimiter+fblinks+delimiter+twitterlinks+delimiter+gitlinks+"\n";
                                                      console.log(output);
                                                      stream.write (output );});

              
              
                },function (err) {
                if (err.name === "NoSuchElementError")
                console.log("White paperlink is missing!");
                               });

          },function (err) {
            if (err.name === "NoSuchElementError")
            console.log("Description is missing!");
                           });

          },function (err) {
            if (err.name === "NoSuchElementError")
            console.log("Name is missing!");
                            });
        }
        catch ( e) {
          console.log ( "Exception" + e.getText())
                  }
      });
    })},25000);

    stream.close ();
    