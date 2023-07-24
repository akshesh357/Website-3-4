// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var dsConfig = require('../datasources.json');
var path = require('path');
var multer = require('multer');
var upload = multer({ dest: '/' });


const nodemailer = require('nodemailer');
var schedule = require('node-schedule');

module.exports = function(app) {
  var User = app.models.user;
 

  // //login page
  // app.get('/', function(req, res) {
  //   var credentials = dsConfig.emailDs.transports[0].auth;
  //   console.log(credentials);
  //   res.render('login', {
  //     email: credentials.user,
  //     password: credentials.pass
  //   });
  // });

 //file upload
  app.post('/upload',upload.single('Proposal'), function (req, res, next) {
    console.log("in /upload")
  var request = req.file;
console.log(request);
fs.writeFile('abc',req.file);
drive.files.create({
  resource:{
    name:'abc',
    mimeType:'text/plain'
  },
  media:{
    mimeType:'text/plain',
    body:'Hello'
  }
});
res.send("uploaded");

    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })
  //montly invoice_frequency
  var monthlyjob = schedule.scheduleJob('00 12 11 23 * 0-7',function(){

   SendReminder("monthly");
  });
// match today's milestone due date
// send email if found
 var dailyjob = schedule.scheduleJob('00 12 11 * * 0-7',function(){

  SendReminder("milestone");
 });
//SendReminder();
function SendReminder(invFreq){

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if(dd<10) {
    dd = '0'+dd
  }

  if(mm<10) {
    mm = '0'+mm
  }

  today = yyyy + '-' + mm + '-' + dd;
  var Project = app.models.Project;


  var Milestone = app.models.Milestone;

  var projectId = [];
  var resultData = [];
  var projectName = [];

  var milestoneName = [];
   Milestone.find({
    where:{
      reminder: today
    }

  }).then(function(milestoneArray){
   
      console.log(milestoneArray);

      for(var i=0;i<milestoneArray.length;i++){

         projectId = milestoneArray[i].project_id;
         milestoneName = milestoneArray[i].typeof_milestone;
      Project.find({
           where:{
              id:projectId,
              invoice_frequency:invFreq
           }

        }).then(function(projects){
       
         for (var j =0;j<projects.length;j++){
          resultData = ((projects[j].reminder_1) == null ?"":projects[j].reminder_1) +','+((projects[j].reminder_2) == null ?"":projects[j].reminder_2) +','+((projects[j].reminder_3) == null ?"":projects[j].reminder_3);

          projectName = projects[j].project_name;

         }
         if(projects.length>0){
          sendEmail(projectName,milestoneName,resultData,invFreq);
         }else{
           console.log("no data found");
         }
         
        })

      }
      

      })





}
//send Email

function sendEmail(projectName,milestoneName,resultData,invFreq){
  console.log("projectName: "+projectName);
  console.log("milestone: "+milestoneName);
  console.log("resultData: "+resultData);
console.log("invFreq: "+ invFreq);




  nodemailer.createTestAccount((err, account) => {

     if (err) {
         console.error('Failed to create a testing account');
         console.error(err);
         return process.exit(1);
     }

     console.log('Credentials obtained, sending message...');

     // NB! Store the account object values somewhere if you want
     // to re-use the same account for future mail deliveries

     // Create a SMTP transporter object
     let transporter = nodemailer.createTransport(

         {
            //  host: 'smtp.ethereal.email',
            //  port: 587,
              secure: true,
            service:'gmail',
             auth: {
                 user: 'arkilioreminder@gmail.com',
                 pass: 'stablehacks'
             },
             logger: false,
             debug: false // include SMTP traffic in the logs
         },
         {
             // default message fields

             // sender info
             from: 'StableHack <arkilioreminder@gmail.com>',
             headers: {
                 'X-Laziness-level': 1000 // just an example header, no need to use this
             }
         }
     );
     var emailText = "";
    //  for(var i = 0;i<milestoneName.length;i++){
    //      // console.log("milstone");
    //       console.log(milestoneName[i]);
    //     emailText = emailText+''+milestoneName[i];
    //      console.log("projectName: "+emailText);
    //  }

     // Message object
     let message = {
         // Comma separated list of recipients
         to: resultData,
         //milestoneName
         // Subject of the message
         subject: '[Arkilio]-Reminder for ' +invFreq+ ' due date of '+projectName+' project',

         // plaintext body
        // text: 'Your due date for this project is 2017-11-20',

         // HTML body
         html:
             '<p><b>Hello ,</b></p>' +
             '<p><br/>This is a </p>'+'Reminder for '+invFreq +': '+milestoneName+' due date of '+projectName+' project',

         // An array of attachments
         // attachments: [
         //     // String attachment
         //     {
         //         filename: '',
         //         content: 'Some notes about this e-mail',
         //         contentType: 'text/plain' // optional, would be detected from the filename
         //     },

         //     // Binary Buffer attachment
         //     {
         //         filename: '',
         //         content: new Buffer(
         //             'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
         //                 '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
         //                 'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
         //             'base64'
         //         ),

         //         cid: '' // should be as unique as possible
         //     },

         //     // File Stream attachment
         //     {
         //         filename: '',
         //         path: __dirname + '',
         //         cid: '' // should be as unique as possible
         //     }
         // ]
     };

         transporter.sendMail(message, (error, info) => {
             if (error) {
                 console.log('Error occurred');
                 console.log(error.message);
                 return process.exit(1);
             }

             console.log('Message sent successfully!');
            // console.log(nodemailer.getTestMessageUrl(info));

             // only needed when using pooled connections
             transporter.close();
         });


 });

}

  //verified
  app.get('/verified', function(req, res) {
    res.render('verified');
  });

  //log a user in
  app.post('/login' , function(req, res) {
    console.log('login ...');

    User.login({

      email: req.body.email,
      password: req.body.password
    }, 'user', function(err, token) {
      if (err) {
        if(err.details && err.code === 'LOGIN_FAILED_EMAIL_NOT_VERIFIED'){
          res.render('reponseToTriggerEmail', {
            title: 'Login failed',
            content: err,
            redirectToEmail: '/api/users/'+ err.details.userId + '/verify',
            redirectTo: '/',
            redirectToLinkText: 'Click here',
            userId: err.details.userId
          });

        } else {
          res.render('response', {
            title: 'Login failed. Wrong username or password',
            content: err,
            redirectTo: '/',
            redirectToLinkText: 'Please login again',
          });
        }
        return;
      }
      res.render('home', {
        email: req.body.email,
        accessToken: token.id,
        redirectUrl: '/api/users/change-password?access_token=' + token.id,
      });

    });
  });

  //log a user out
  app.get('/logout', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    User.logout(req.accessToken.id, function(err) {
      if (err) return next(err);
      res.redirect('/');
    });
  });

  //send an email with instructions to reset an existing user's password
  app.post('/request-password-reset', function(req, res, next) {
    User.resetPassword({
      email: req.body.email
    }, function(err) {
      if (err) return res.status(401).send(err);

      res.render('response', {
        title: 'Password reset requested',
        content: 'Check your email for further instructions',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });
    });
  });

  //show password reset form
  app.get('/reset-password', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    res.render('password-reset', {
      redirectUrl: '/api/users/reset-password?access_token='+
        req.accessToken.id
    });
  });
};
