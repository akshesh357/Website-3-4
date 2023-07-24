//angular.module('petApp', []);

angular.module('clientApp', ['lbServices'])
//angular.module('clientApp',['ngResource'])

  .config(function(LoopBackResourceProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

  })

  .controller('AppCtrl', function($scope, $log,  $location, Client_details, Project_details) {

$scope.login = function(){
  $location.path('/ArkilioProjectsPage');
}
    
    $scope.addClient = function () {
console.log('add Client'+$scope.CName+$scope.CCName+$scope.Address+$scope.City+
$scope.Province+$scope.Code+$scope.Email+$scope.Number);
    // $scope.provider_type.push($scope.addMe);
Client_details.create({client_name:$scope.CName,company_name:$scope.CCName,
address:$scope.Address,city:$scope.City,province:$scope.Province,postal_code:$scope.Code,
email:$scope.Email,phone_number:$scope.Number});
 }
 Client_details.find({where:{"id":"3"} }).$promise.then(function(clients) {
  console.log("clients...");
    
  console.log(clients);
    $scope.clients = clients;
    $scope.dosome = function() {
        alert("hi");
        console.log('dosome');
      }
  });
$scope.print = function(){
  console.log("Good morning");
}
 $scope.addProject = function () {
 
  console.log('add Project'+$scope.PName+$scope.PDesc+$scope.CAmount+$scope.DDate+$scope.IFrequency+$scope.c_id);
      // $scope.provider_type.push($scope.addMe);
      
  Project_details.create({project_name:$scope.PName,project_description:$scope.PDesc,
  project_cost:$scope.CAmount,project_deadline:$scope.DDate,invoice_Frequency:$scope.IFrequency,client_id:$scope.c_id});
   }
    
    Project_details.find({where:{"id":"3"} }).$promise.then(function(projects) {
      console.log("projects...");
        console.log("hiii");
      console.log(projects);
        $scope.projects = projects;
        
      });


  });
