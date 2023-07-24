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


var site = "icotracker"

browser.get('file:///C:\\Users\\hp\\Desktop\\co-op\\lambton\\WebScrape\\icoshort.html');
