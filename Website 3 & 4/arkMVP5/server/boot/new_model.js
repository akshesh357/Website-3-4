'use strict';

var async = require('async');

module.exports = function(app) {
  //data sources
  var mysqlDs = app.dataSources.mysqlDs;
  //var utility = require('../utilities.js');
  //console.log(utility.todayDate());
  //startupCreate();

function startupCreate() {
  createClients (function(err, clients){
    console.log('clients is created'+clients);
    console.log(clients.length)
    createProjects(clients, function(err, projects){

      console.log('projects is created'+projects);
      console.log(projects.length)
      createMilestones(projects, function(err, milestones){
        console.log('milestones is created'+milestones);
        console.log(milestones.length)
      });
    });
  });
}

  // //create all models
  // async.parallel({
  //   clients: async.apply(createClients),
  // }, function(err, results) {
  //   if (err) throw err;
  //   console.log(results);
  //   async.parallel({
  //     projects:async.apply(createProjects( results.clients, function(err) {console.log('> models created sucessfully');})),
  //   },function(err,results){
  //     if (err) throw err;
  //     createMilestones( results.projects, function(err) {
  //       console.log('> milestone created sucessfully');
  //     });
  //   });
  // });
  function createClients(cb) {
    mysqlDs.automigrate('Client', function(err) {
      if (err) {
        console.log("error"+err);
        return cb(err)};
      var Client = app.models.Client;
      Client.create([{
        client_name: 'kfa',
        address:'197 SPADINA',
        city:'TORONTO',
        province:'ON',
        country:'toronto',
        postal_code:'M1P3D4',
        email:'kfa@arkilio.com',
        work_number:'95478621',
        mobile_number:'987542',
        approver_name:'stablehack',
        approver_email:'stable@gmail.com',
        username:'kfa@arkilio.com',
        password:'arkilio1'
      }, {
        client_name: 'vdeja',
        address:'45 DUNDAS',
        city:'TORONTO',
        province:'ON',
        postal_code:'M1P3D5',
        email:'ladi@arkilio.com',
        work_number:'95478257',
        mobile_number:'98754457',
        approver_name:'shabs',
        approver_email:'def@gmail.com',
        username:'ladi@arkilio.com',
        password:'arkilio1'
      }, ], cb);
    });
  }
  //create reviews
  function createProjects(clients, cb) {
    mysqlDs.automigrate('Project', function(err) {
      if (err) {
        console.log("error"+err);
        return cb(err)};

      var Project = app.models.Project;

      Project.create([{
        project_name: 'Dundas Condo',
        project_description:'Condo Tower',
        project_cost:'4500',
        project_deadline:'2017-11-12',
        invoice_frequency:'monthly',
       // Client:clients[0],
        client_id:clients[0].id,
        project_address:' 20 Dundas Street',
        city:'Toronto',
        province:'Ontario',
        country:'Canada',
        postal_code:'M3J2T3',
        reminder_1:'ladi@gmail.com',
        reminder_2:'kfa@gmail.com',
        reminder_3:'ladislav1@arkilio.com',
        proposal_file:'http://www.axmag.com/download/pdfurl-guide.pdf',
        contract_file:''
      }, {
        project_name: 'Yonge Condo',
        project_description:'Condo Apartments',
        project_cost:'6500',
        project_deadline:'2017-11-28',
        invoice_frequency:'milestone',
       // Client:clients[1],
        client_id:clients[1].id,
        project_address:'20 Yonge Street',
        city:'Toronto',
        province:'Ontario',
        country:'Canada',
        postal_code:'M3J2T6',
        reminder_1:'ladi@gmail.com',
        reminder_2:'kfa@gmail.com',
        reminder_3:'ladislav1@arkilio.com',
        proposal_file:'http://www.axmag.com/download/pdfurl-guide.pdf',
        contract_file:'http://kmmc.in/wp-content/uploads/2014/01/lesson2.pdf'
      }], cb);
    });
  }

  function createMilestones(projects, cb) {
    mysqlDs.automigrate('Milestone', function(err) {
      if (err) {
        console.log("error"+err);
        return cb(err)};

      var Milestone = app.models.Milestone;

      Milestone.create([{
        typeof_milestone: 'Design',
        percentage:'15',
        priceof_milestone:'18',
        reminder:'2017-11-17',
        deadline:'2017-11-14',
        completed:'1',
        //Project:projects[0],
        project_id:projects[0].id,
        paid:'1'
      }, {
        typeof_milestone: 'Development',
        percentage:'15',
        priceof_milestone:'20',
        reminder:'2017-11-25',
        deadline:'2017-11-28',
        completed:'0',
        //Project:projects[1],
        project_id:projects[1].id,
        paid:'0'
      }], cb);
    });
  }
};
