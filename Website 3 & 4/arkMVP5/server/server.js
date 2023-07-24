'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var app = module.exports = loopback();
// var Route = require('route');
// // var route = Route(app)
// app.use(loopback.static(path.resolve(__dirname, '../src/')));
//   app.use(loopback.static(path.resolve(__dirname, '../src/app')));
  // app.use(loopback.static(path.resolve(__dirname, '../src/app/login-page')));
//  app.use(loopback.static(path.resolve(__dirname, '../src/app/create-company-page')));
//  app.use(loopback.static(path.resolve(__dirname, '../src/app/create-project-page')));
//  app.use(loopback.static(path.resolve(__dirname, '../src/app/projects-page')));
// app.use(loopback.static(path.resolve(__dirname, '../src/assets/img/')));
app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });

};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;



  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
