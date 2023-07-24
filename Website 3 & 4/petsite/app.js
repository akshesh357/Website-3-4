'use strict';

var express= require('express');
var app = module.exports = express();
app.set('port', 5000);


app.use (express.static("client/js"))

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});