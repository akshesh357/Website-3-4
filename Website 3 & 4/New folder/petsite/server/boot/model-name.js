'use strict';

var async = require('async');
module.exports = function(app) {
  //data sources
//  var mongoDs = app.dataSources.mongoDs;
//  var mysqlDs = app.dataSources.mysqlDs;
  var xamppDs = app.dataSources.xamppDs;
  //create all models
  async.parallel({
    providerTypes: async.apply(createproviderTypes),
    petTypes: async.apply(createpetTypes),
    //petUser: async.apply(createpetUser),
  }, function(err, results) {
    if (err) throw err;
    createpetUser(results.petTypes, function(err){
      console.log('done'+ results);
    });
    
  });
  //create provider_type
  function createproviderTypes(cb) {
    xamppDs.automigrate('provider_type', function(err) {
      if (err) return cb(err);
      var provider_type = app.models.provider_type;
      provider_type.create([{
        provider_type_id:'1',
        provider_type_name:'vet'
      }, {
        provider_type_id:'2',
        provider_type_name:'walk'
      }, {
        provider_type_id:'3',
        provider_type_name:'groom'
      }], cb);
    });
  }
  //create pet__type
  function createpetTypes(cb) {
    xamppDs.automigrate('pet_type', function(err) {
      if (err) return cb(err);
      var pet_type = app.models.pet_type;
      pet_type.create([{
        pet_type_id:'1',
        pet_type_name: 'Cat'
      }, {
        pet_type_id:'2',
        pet_type_name: 'Dog'
      }, {
        pet_type_id:'3',
        pet_type_name: 'Parrot'
      } ], cb);
    });
  }
  //create provider
  // var createpetTypes=(cb)=>{
  //   xamppDs.automigrate('pet_type', function(err) {
  //     if (err) return cb(err);
  //     var pet_type = app.models.pet_type;
  //     pet_type.create([{
  //       pet_type_id:'1',
  //       pet_type_name: 'Cat'
  //     }, {
  //       pet_type_id:'2',
  //       pet_type_name: 'Dog'
  //     }, {
  //       pet_type_id:'3',
  //       pet_type_name: 'Parrot'
  //     } ], cb);
  //   });
  // }
//create pet_user
function createpetUser(petTypes,cb) {
  xamppDs.automigrate('pet_user', function(err) {
    if (err) return cb(err);
    var pet_user = app.models.pet_user;
    pet_user.create([{
      user_id:'1',
      name:'abc',
      pet_name: 'Cat',
      pet_type_id: petTypes[0].pet_type_id,
      zipcode:'A2W4R4',
      email:'abc@gmail.com',
      contact:'6587421390',
      timestamp:Date.now()
    }, {
      user_id:'2',
      name:'def',
      pet_name: 'Dog',
      pet_type_id: petTypes[1].pet_type_id,
      zipcode:'A5G4H6',
      email:'def@gmail.com',
      contact:'6321457890',
      timestamp:Date.now()
    }, {
      user_id:'3',
      name:'ghi',
      pet_name: 'Parrot',
      pet_type_id: petTypes[2].pet_type_id,
      zipcode:'A9F6D4',
      email:'ghi@gmail.com',
      contact:'6789451230',
      timestamp:Date.now()
    } ], cb);
  });
}
};
