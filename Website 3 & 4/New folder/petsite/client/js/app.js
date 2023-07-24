//angular.module('petApp', []);

angular.module('petApp', ['lbServices'])

  .config(function(LoopBackResourceProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

  })

  .controller('AppCtrl', function($scope, $log,  $location, Provider_type) {

    Provider_type.findById({where:{id:{lt:2}}}).$promise.then(function(provider_types) {
      console.log(provider_types);
      $scope.addItem = function () {
 console.log('addMe'+$scope.add+$scope.addMe);
      // $scope.provider_type.push($scope.addMe);
Provider_type.create({provider_type_id:$scope.add,provider_type_name:$scope.addMe});
   }
      $scope.provider_types = provider_types;
      $scope.dosome = function() {
          alert("hi");
          console.log('dosome');
        }
    });

//Provider_type.create({provider_type_id:4,provider_type_name:"jump"});

//  dosome();

  });
// function  dosome() {
//     alert ("hi");
//     console.log('dosome');
//   }
