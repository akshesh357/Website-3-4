//angular.module('petApp', []);

angular.module('clientApp', ['lbServices'])
//angular.module('clientApp',['ngResource'])

.config(function(LoopBackResourceProvider) {

  // Use a custom auth header instead of the default 'Authorization'
  LoopBackResourceProvider.setAuthHeader('X-Access-Token');

  // Change the URL where to access the LoopBack REST API server
  LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

})
//login controller
.controller('AppCtrl', function($scope, $log,  $location, Client, Project, Milestone) {

  // $scope.login = function(){
  //   $location.path('ArkilioProjectsPage');
  // }
//});
$scope.clientLogin = function () {
 // console.log("clientlogin");
var client = Client.login ({
"email":"abc@gmail.com",
"password":"abcd123"
});

client.$promise.then(function(token){
if (token) {

 console.log(token);

     // err.render('response', { //render view named 'response.ejs'
     //   title: 'Login failed',
     //   content: err,
     //   redirectTo: '/',
     //   redirectToLinkText: 'Try again'
     // });
     // return;
}
// res.render('home', { //login user and render 'home' view
//      email: req.body.email,
//      accessToken: token.id
//    });
  console.log('hi'+token.id);
});
};
//Client controller
//.controller('ClientCtrl', function($scope, $log,  $location, Client) {
  $scope.addClient = function () {
    console.log('add Client'+$scope.CName+$scope.CCName+$scope.Address+$scope.City+
    $scope.Province+$scope.Code+$scope.Email+$scope.Number);
    // $scope.provider_type.push($scope.addMe);


     Client.create({client_name:$scope.CName,
      company_name:$scope.CCName,
      address:$scope.Address,
      city:$scope.City,
      province:$scope.Province,
      postal_code:$scope.Code,
      email:$scope.Email,
      contact:$scope.Number,
      username:$scope.Email,
      password:$scope.Email});

    Client.find({where:{"id":"1"} }).$promise.then(function(clients) {
      console.log("clients...");
      console.log(clients);
      $scope.clients=clients;
    });


//  });
 };
  //.controller('ProjectCtrl', function($scope, $log,  $location, Project, Client) {
    console.log("Good morning");
    $scope.print = function(){
      console.log("Good morning");
    }
    $scope.addProject = function () {
      console.log('add Project'+$scope.PName+$scope.PDesc+$scope.CAmount+$scope.DDate+$scope.IFrequency+$scope.c_id);
      // $scope.provider_type.push($scope.addMe);

      $scope.current_project = Project.create({project_name:$scope.PName,
        project_description:$scope.PDesc,
        project_cost:$scope.CAmount,
        project_deadline:$scope.DDate,
        invoice_frequency:$scope.IFrequency,
        client_id:$scope.c_id});
      }

      Project.find({where:{"id":"1"} }).$promise.then(function(projects) {
        console.log("projects...");
        console.log("hiii");
        console.log(projects);
        $scope.projects = projects;
      });


    //milestone controller
    //.controller('MilestoneCtrl', function($scope, $log,  $location, Milestone) {
    console.log("This is milestone");

    $scope.addMilestone = function () {

      console.log('add Milestone'+$scope.PName+$scope.PDesc+$scope.CAmount+$scope.DDate
      +$scope.IFrequency+$scope.current_project.id+$scope.paid+$scope.complete);
      // $scope.provider_type.push($scope.addMe);

      Milestone.create({
        typeof_milestone: $scope.type,
        percentage:$scope.percent,
        priceof_milestone:$scope.amount,
        reminder:$scope.reminder,
        deadline:$scope.deadline,
        completed:$scope.complete,
        project_id:$scope.current_project.id,
        paid:$scope.paid});
      }
      Milestone.find({where:{"id":"1"} }).$promise.then(function(milestones) {
        console.log("milestone...");
        console.log("hiii");
        console.log(milestones);
        $scope.milestones = milestones;
      });
        });
      // Milestone.create({typeof_milestone:$scope.type,percentage:$scope.PDesc,
      //   priceof_milestone:$scope.CAmount,reminder:$scope.DDate,deadline:$scope.IFrequency,client_id:$scope.c_id});
      // }

      // Milestone.find({where:{"id":"1"} }).$promise.then(function(milestones) {
      //   console.log("Milestone...");
      //   console.log("hiii");
      //   console.log(milestones);
      //   $scope.projects = milestones;
      //
      // });
      //});
