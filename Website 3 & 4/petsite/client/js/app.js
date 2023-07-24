//angular.module('petApp', []);

angular.module('petApp', ['lbServices'])

.config(function(LoopBackResourceProvider) {

  // Use a custom auth header instead of the default 'Authorization'
  LoopBackResourceProvider.setAuthHeader('X-Access-Token');

  // Change the URL' where to access the LoopBack REST API server
  LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

})

.controller('AppCtrl', function($scope, $log,  $location, Provider_type) {

  console.log('start');

  console.log('finish');
  $scope.addItem = function () {
    console.log('addMe'+$scope.add+$scope.addMe);
    alert("New provider type is added by name :"+ $scope.addMe)
    // $scope.provider_type.push($scope.addMe);
    //\c \\r \u \\d
    Provider_type.create({provider_type_id:$scope.add,provider_type_name:$scope.addMe});
  }
console.log(Provider_type.findById({id: 1}));
  Provider_type.deleteById({
      id: 5
    })
    .$promise
    .then(function() {
      console.log('deleted');
    });

    // Provider_type.provider_type_id=2;
    // Provider_type.provider_type_name = 'groom';
  // Provider_type.Update({  id:2});
  //
  // \,{provider_type_name:"ffff"}).promise.then(function(){
  //   console.log('updated');
  // });
//  console.log( Provider_type.Find ());

  Provider_type.find ({where:{'id':3} }).$promise.then(function(provider_types) {

      console.log("printing results");
    console.log(provider_types[0].id);
    console.log('final'+"\n"+ provider_types);

    $scope.provider_types = provider_types;
    $scope.Item = function() {
      //alert("Selected provider type is :"+ $scope.provider_types);
      //http://localhost:3000/api/provider_types?filter[where][id]=2
      console.log('dosome');
    }

   $scope.update = function(provider_types){
  		provider_types.$save();
  	};
  });

  //Provider_type.create({provider_type_id:4,provider_type_name:"jump"});

  //  dosome();

});
// function  dosome() {
//     alert ("hi");
//     console.log('dosome');
//   }
