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
try{
  setTimeout(function() {
<<<<<<< HEAD
     browser.findElements(webdriver.By.className("mn-person-info__details")).then(function(elements)
     {
        console.log('Found',elements.length,'Number of Links are');
        // _.each (links,(function(element) {
        //     console.log(element)
        // }, this));
        // // links.then ( function (links) {
        // //     console.log (links)
        // // })
        // browser.quit();

        //  _.each (elements, function(element)
        //  {
            var a,b,c,d;
   //this is 1st person

             browser.findElement(webdriver.By.className("mn-person-info__name Sans-17px-black-85%-semibold-dense")).getText().then(function(b)
             {
                console.log(b);
                setTimeout(function()
                {
                  console.log("TIMEOUT begin1");  

                    browser.findElement(webdriver.By.className("mn-person-info__name Sans-17px-black-85%-semibold-dense")).click();
                    //.then(function()
                  //{
                      console.log("statrted1");

                      browser.findElement(webdriver.By.xpath(".//*[@id='ember1956']/button")).click();

                      setTimeout(function()
                      {
                          var last;
                          console.log("TIMEOUT BEGIN2");
                          browser.findElement(webdriver.By.className("pv-contact-info__contact-item pv-contact-info__contact-link Sans-15px-black-55%")).getText().then(function(last)
                          {
                              console.log("found"+last);
                          },function (err) {
                                  if (err.name === "NoSuchElementError")
                                  console.log("Element was missing1");
                               });

                          console.log("TIMEOUT COMPLETE2");
                      }, 10000);

                  //},function (err) {
                          //  if (err.name === "NoSuchElementError")
                          //  console.log("Element was missing2");
                    //});

                    console.log("TIMEOUT complete1");
                }, 15000);

                },function (err) {
                      if (err.name === "NoSuchElementError")
                          console.log("Element was missing3");
                       });

    // });

      },function (err) {
       if (err.name === "NoSuchElementError")
           console.log("Element was missing4");
=======
    browser.findElements(webdriver.By.className("mn-person-info__details")).then(function(elements)
    {
      console.log('Found',elements.length,'Number of Links are');
      // _.each (links,(function(element) {
      //     console.log(element)
      // }, this));
      // // links.then ( function (links) {
      // //     console.log (links)
      // // })
      // browser.quit();

      _.each (elements, function(element)
      {
        var a,b,c,d;
        //this is 1st person

        element.findElement(webdriver.By.className("mn-person-info__name Sans-17px-black-85%-semibold-dense")).getText().then(function(b)
        {
          console.log(b);

          //setTimeout(function()
          //{
          //console.log("TIMEOUT begin1");

          browser.findElement(webdriver.By.className("mn-person-info__name Sans-17px-black-85%-semibold-dense")).click()
          .then(function()
          {
            console.log("statrted1");
          },function (err) {
            if (err.name === "NoSuchElementError")
            console.log("Element was missing2");
          });
          setTimeout(function()
          {
            var last;
            console.log("TIMEOUT BEGIN2");
            browser.findElement(webdriver.By.className("pv-top-card-section__information mt3 ember-view")).getText().then(function(last)
            {
              console.log("found"+last);
            },function (err) {
              if (err.name === "NoSuchElementError")
              console.log("Element was missing1");
            });

            console.log("TIMEOUT COMPLETE2");
          }, 30000);



          //console.log("TIMEOUT complete1");
          //  }, 10000);

        },function (err) {
          if (err.name === "NoSuchElementError")
          console.log("Element was missing3");
>>>>>>> d80f119461628218f128e25ea2d652ad7be57ca7
        });

      });

    },function (err) {
      if (err.name === "NoSuchElementError")
      console.log("Element was missing4");
    });

  },60000);

}
catch(e){
  console.log("Exception"+ e.message());
}
/* _.each (elements, function(element){
element.findElement((webdriver.By.className("mn-person-info__name Sans-17px-black-85%-semibold-dense")).then(function (response,reject){
console.log("Response"+response);
element.findElement((webdriver.By.className("mn-person-info__occupation Sans-15px-black-55%")).then(function (response,reject){
console.log("Respose"+response);
}));
}));*/

// })},40000);

//this code we need
/*element.findElement(webdriver.By.className("mn-person-info__name Sans-17px-black-85%-semibold-dense")).getText().then(function(a){

element.findElement(webdriver.By.className("mn-person-info__occupation Sans-15px-black-55%")).getText().then(function(b){

//console.log("- "+response);
element.findElement(webdriver.By.className("time-badge time-ago")).getText().then(function(c) {
// console.log("- "+response+"\n");
var d = console.log("| "+a+"|"+b+"|"+c+"|");
return d;
});
});
});*/
//
//        Select sel1=new Select(driver.findElement(By.xpath(".//*[@id='month']")));
//
//        sel1.selectByVisibleText("Sep");
//
//        Select sel2=new Select(driver.findElement(By.xpath(".//*[@id='day']")));
//
//        sel2.selectByValue("6");
//
//        Select sel3=new Select(driver.findElement(By.xpath(".//*[@id='year']")));
//
//        sel3.selectByIndex(6);
//
//        driver.findElement(By.xpath(".//*[@id='u_0_r']")).click();
