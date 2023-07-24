'use strict';

var express= require('express');
var app = module.exports = express();
var path = require('path');
app.set('port', 4000);


app.use (express.static("src/app"))
app.use (express.static("src/assets/img"))
app.use(express.static("./"))
// app.use (express.static("client/js/controllers/"))
// app.use (express.static("client/js/services/"))
// app.get('ArkilioProjectsPage',(req,res) =>{
//   console.log('hii');
//   res.send('hello');
// })
//configure view handler
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
