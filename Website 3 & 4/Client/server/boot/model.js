'use strict';

var async = require('async');
module.exports = function(app) {
  //data sources
 // var mongoDs = app.dataSources.mongoDs;
  //var mysqlDs = app.dataSources.mysqlDs;
  var xamppDs = app.dataSources.xamppDs;
  //create all models
  async.parallel({
    //projects: async.apply(createProjectDetails),
    clients: async.apply(createClientDetails),
  }, function(err, results) {
    if (err) throw err;
     createProjectDetails  ( results.clients, function(err) {
     console.log('> models created sucessfully');
     });
  });

  function createClientDetails(cb) {
    xamppDs.automigrate('client_details', function(err) {
      if (err) return cb(err);
      var clients = app.models.client_details;
      console.log(clients);
      clients.create([{
        client_name: 'ekta',
        company_name:'lambton',
        address:'45,hdjbcxzjdk',
        city:'toronto',
        province:'ON',
        postal_code:'M1P3D4',
        email:'abc@gmail.com',
        phone_number:'9547862130'
      },{
        client_name: 'ekta1',
        company_name:'lambton1',
        address:'45,hdjbcxzjdk',
        city:'toronto1',
        province:'ON1',
        postal_code:'M1P3D4',
        email:'abc1@gmail.com',
        phone_number:'9547862'
      }], cb);
    });
  }

  function createProjectDetails(clients,cb) {
    xamppDs.automigrate('project_details', function(err) {
      if (err) return cb(err);
      var projects = app.models.project_details;
      projects.create([{
        project_name: 'java',
        project_description:'dksncnnbjkdbc',
        project_cost:'18',
        project_deadline:'oct-18-2017',
        invoice_Frequency:'this is invoice',
        client_id:clients[0].id
      },{
       project_name: 'java2',
       project_description:'123',
       project_cost:'2',
       project_deadline:'oct-18-2017',
       invoice_Frequency:'this is invoice2',
       client_id:clients[0].id
    }], cb);
    });
  }


};
