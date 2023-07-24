
angular.module('clientApp', ['lbServices'])

.config(function(LoopBackResourceProvider)
{

  // Use a custom auth header instead of the default 'Authorization'
  LoopBackResourceProvider.setAuthHeader('X-Access-Token');

  // Change the URL where to access the LoopBack REST API server
  LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

})

//login controller
.controller('AppCtrl', function($scope, $log,$location, Client, Project, Milestone,$window) {

  $scope.clientLogin = function ()
  {

    console.log("clientlogin");
    var client = Client.login ({
      "email":$scope.email,
      "password":$scope.password
    });
    console.log(client);

    client.$promise.then(function(_token){
      console.log("Token"+_token);

      $window.location.href = '/ProjectsPage.html';

      console.log('hi'+_token.id);

    },function(err){
      console.log("failed");
      $window.alert("Username or Password is incorrect !!");
    });

  };

  
   Project.find({
      filter: {
        include: [
          'client',
          'milestone'
        ]
      }
     }).$promise.then(function(_projects){
       console.log("Filter");
      console.log(_projects);
       $scope.projects = _projects;
     });



  //logout
  $scope.clientLogout = function ()
  {
    console.log("clientLogout");
    var client = Client.logout();
    client.$promise.then(function(){
      console.log("Logout success");
      $window.location.href = './index.html';
    },function(err){
      console.log("Logout failed");
    })
  }
  //backpage
  $scope.backPage = function(){
    $window.location.href = '/ProjectsPage.html';
  }
  
  //Client controller
  $scope.addClient = function ()
  {
    console.log("in addClient");
    console.log('add Client'+$scope.CompanyName+$scope.Address+$scope.City+
    $scope.Province+$scope.PostalCode+$scope.Email+$scope.WorkNumber+$scope.MobileNumber+$scope.ApproverName+$scope.ApproverEmail);
   
    Client.create({client_name:$scope.CompanyName,
      address:$scope.Address,
      city:$scope.City,
      province:$scope.Province,
      country:$scope.Country,
      postal_code:$scope.PostalCode,
      email:$scope.Email,
      work_number:$scope.WorkNumber,
      mobile_number:$scope.MobileNumber,
      approver_name:$scope.ApproverName,
      approver_email:$scope.ApproverEmail,
      username:$scope.Email,
      password:$scope.Email}).$promise.then(function(){
        $window.alert("New Company has been created successfully !!");
        location.reload();
      });
     
    }
   
    Client.find().$promise.then(function(_clients) {
      console.log("select clients...");
      console.log(_clients);

      $scope.clients=_clients;
    });
    console.log("clientname");

    // Project Controller

    $scope.change = function() {


      for(var i = 0;i<$scope.milestonedesc.length;i++){
        $scope.Amount[i]=($scope.TotalCost*$scope.Percent[i])/100;
      };
    };
    var totalPercent;
    $scope.check = function(){
      totalPercent = 0;
      for (var j = 0;j<$scope.Percent.length;j++){
        totalPercent  = totalPercent+parseInt($scope.Percent[j]);

        console.log($scope.Percent[j]);
      }
      console.log(totalPercent);

    }

    $scope.Percent=[15,20,25,30,10];
    $scope.Amount =[0,0,0,0,0];
    $scope.Reminder = [];
    $scope.Deadline = [];
    $scope.Complete = [];
    $scope.Paid = [];
    $scope.project_name = "";
  
    $scope.current_project = [];
    $scope.editProjectName = [];
    console.log($scope.projectdue);
    $scope.milestonedesc = ["Schematic Design","Design Development","Construction Documents","Bidding and Negotiation","Construction Administration"];
    //Add Project
    $scope.addProject = function () {
      $scope.check();
      if(totalPercent != 100){
        $window.alert("Total Percentage should be 100 ");
      }else if(!$scope.c_id){
        $window.alert("Please select Client for the Project");
      }
      else{
       

      console.log('add Project'+$scope.ProjectName+$scope.ProjectDesc+$scope.TotalCost+$scope.ProjectDue+$scope.Freq+$scope.c_id              +$scope.Address+$scope.City+$scope.Province
              +$scope.Country+$scope.PostalCode+$scope.Reminder1+$scope.Reminder2+$scope.Reminder3+$scope.Proposal+$scope.Contract);

      $scope.current_project = Project.create({project_name:$scope.ProjectName,
        project_description:$scope.ProjectDesc,
        project_cost:$scope.TotalCost,
        project_deadline:$scope.ProjectDue,
        invoice_frequency:$scope.Freq,
        client_id:$scope.c_id,
        project_address:$scope.Address,
        city:$scope.City,
        province:$scope.Province,
        country:$scope.Country,
        postal_code:$scope.PostalCode,
        reminder_1:$scope.Reminder1,
        reminder_2:$scope.Reminder2,
        reminder_3:$scope.Reminder3,
        proposal_file:$scope.Proposal,
        contract_file:$scope.Contract
      } ).$promise.then(function(_p){
        for(var i = 0;i<$scope.milestonedesc.length;i++){
          Milestone.create({
            typeof_milestone:$scope.milestonedesc[i],
            percentage:$scope.Percent[i],
            priceof_milestone:$scope.Amount[i],
            reminder:$scope.Reminder[i],
            deadline:$scope.Deadline[i],
            completed:$scope.Complete[i],
            project_id:_p.id,
            paid:$scope.Paid[i]
          
          })
        }
        $window.alert("New Project has been added successfully !!");
       $scope.backPage();
      })

    }

    }
    Client.find().$promise.then(function(_clients) {
      console.log("select clients...");
      console.log(_clients);

      $scope.clients=_clients;
    });

//$scope.Pedit='abc';
$scope.current_project_id  = 0;

    $scope.editProject = function(project_id)
{

      $scope.hideProjectList=true;
      $scope.showEditForm=true;
      $scope.current_project_id = project_id;

        Project.find({
        filter:{
          include:[
            'milestone'
          ],
          where:{
            id:project_id
          }
        }

      }).$promise.then(function(_prj)
      {
          console.log("Edit")
        console.log(_prj);
     
        $scope.ProjectName=_prj[0].project_name;
        $scope.ProjectDesc=_prj[0].project_description,
        $scope.TotalCost=_prj[0].project_cost,
        $scope.ProjectDue=_prj[0].project_deadline,
        $scope.Freq=_prj[0].invoice_frequency,
        $scope.Address=_prj[0].project_address,
        $scope.City=_prj[0].city,
        $scope.Province=_prj[0].province,
        $scope.Country=_prj[0].country,
        $scope.PostalCode=_prj[0].postal_code,
        $scope.Reminder1=_prj[0].reminder_1,
        $scope.Reminder2=_prj[0].reminder_2,
        $scope.Reminder3=_prj[0].reminder_3,
        $scope.Proposal=_prj[0].proposal_file,
        $scope.Contract=_prj[0].contract_file
          for(var i = 0;i<_prj[0].milestone.length;i++)
          {
              $scope.milestonedesc[i]=_prj[0].milestone[i].typeof_milestone,
              $scope.Percent[i]=_prj[0].milestone[i].percentage,
              $scope.Amount[i]=_prj[0].milestone[i].priceof_milestone,
              $scope.Reminder[i]=_prj[0].milestone[i].reminder,
              $scope.Deadline[i]=_prj[0].milestone[i].deadline,
              $scope.Complete[i]=_prj[0].milestone[i].completed,
              
              $scope.Paid[i]=_prj[0].milestone[i].paid
        }

       
    })


}


    $scope.addSave = function(){

      $scope.check();
      if(totalPercent != 100){
        $window.alert("Total Percentage should be 100 ");
      }else{
        $scope.showEditForm=false;

        
        console.log("id = "+$scope.current_project_id)
        location.reload();
        $scope.editing_project = Project.update({
          where:{
                  id:$scope.current_project_id
                }
        }
          ,{project_name:$scope.ProjectName,
          project_description:$scope.ProjectDesc,
        project_cost:$scope.TotalCost,
           project_deadline:$scope.ProjectDue,
           invoice_frequency:$scope.Freq,
          project_address:$scope.Address,
          city:$scope.City,
          province:$scope.Province,
          country:$scope.Country,
          postal_code:$scope.PostalCode,
          reminder_1:$scope.Reminder1,
          reminder_2:$scope.Reminder2,
          reminder_3:$scope.Reminder3,
          proposal_file:$scope.Proposal,
          contract_file:$scope.Contract
        }
        ).$promise.then(function(_save){
          console.log("save");
          console.log(_save);
        })

          Milestone.find({
            filter:{
              where:{
                project_id:$scope.current_project_id
              }
            }

          }).$promise.then(function(_projectSave){
                
             for (var i=0;i<_projectSave.length;i++){
              _projectSave[i].percentage = $scope.Percent[i]
              _projectSave[i].priceof_milestone = $scope.Amount[i]
              _projectSave[i].reminder = $scope.Reminder[i]
              _projectSave[i].deadline = $scope.Deadline[i]
              _projectSave[i].completed = $scope.Complete[i]
              _projectSave[i].paid = $scope.Paid[i]
              _projectSave[i].$save()
              
            }
            $window.alert("New Project has been updated successfully !!");
          })
         
        }
    }
    $scope.deleteProject = function(project_id){
      Project.destroyById({id:project_id},function(){
        console.log("Delete");
        location.reload();
      })

    }


   ;




  })
