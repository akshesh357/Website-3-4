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

  var site = "rover"
                              
  var name,price,link,output,href;
  var counter = 0;
  var stream = fs.createWriteStream( "data/"+site + ".csv")
  stream.write("ID; Name; link  \n");



  browser.get('https://www.'+ site +'.com/ca/toronto--on--dog-boarding/');
  console.log("start");


 
    browser.findElement(webdriver.By.xpath("/html/body/div[13]/div/div/div/div/div[1]/button")).click();

    setTimeout(function(){
      
     
    elements = browser.findElements(webdriver.By.className("sitter-card js-sitter-card media bordered-bottom")).then(function(elements){
      
      console.log('Found',elements.length,'Number of Links are');
      _.each (elements, function(element){
        // console.log('For each Loop');
        
                                            // sitter-link js-profile-link
                                               //  /html/body/div[3]/div[2]/div[5]/div[2]/div[1]/div[1]/div/div[2]/div[3]/div[2]/div/div[1]/div/span/strong/a
                                                    //*[@attr="a"]'
         element.findElement(webdriver.By.className("sitter-link js-profile-link")).getText().then(function(name){
          // console.log('HREF');

          element.findElement(webdriver.By.className("sitter-link js-profile-link")).getAttribute("href").then(function(href){
          
                                                  // /html/body/div[3]/div[2]/div[5]/div[2]/div[1]/div[1]/div/div[2]/div[1]/div[2]/div/div[2]/div/a/div/div[2]/strong
          element.findElement(webdriver.By.className("price text-orange")).getText().then(function(price) {
            // console.log('PRICE');
            
            counter = counter+1
            output = counter+delimiter+name+delimiter+href+delimiter+price+"\n";
            console.log(output);
            stream.write (output + "\n");
          },function (err) {
            if(err.name === "NoSuchElementError")
            console.log("price is missing");
            });
          });
         }
        ,function (err) {
          if(err.name === "NoSuchElementError")
          console.log("name is missing" + err);
          }
        );
      });

    },function (err) {
      if(err.name === "NoSuchElementError")
      console.log("Main Block is Missing!");
      });
  },20000);

  //*[@class='cp-line']/a       /html/body/div[3]/div[2]/div[5]/div[2]/div[1]/div[1]/div/div[2]/div[1]/div[2]/div/div[1]/div/span/strong/a    price text-orange          sitter-link js-profile-link

//   /html/body/div[3]/div[2]/div[5]/div[2]/div[1]/div[1]/div/div[2]/div[1]/div[2]/div/div[2]/div/a/div/div[2]/strong