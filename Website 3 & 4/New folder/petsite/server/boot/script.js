var loopback = require('loopback');
var ds = loopback.createDataSource('mysql', {
  "host": "localhost",
  "port": 3306,
  "database": "test",
  "username": "",
  "password": ""
});

var fs= require('fs');
var stream = fs.createWriteStream("model-name.json")
// Discover and build models from INVENTORY table
//ds.discoverSchema(table, cb);

/*ds.discoverAndBuildModels('petsite', {visited: {}, associations: true},
function (err, models) {
  // Now we have a list of models keyed by the model name
  // Find the first record from the inventory
  models.petsite.findOne({}, function (err, inv) {
    if(err) {
      console.error(err);
      return;
    }
    console.log("\npetsite: ", inv);
    stream.write(inv + "\n");*/
    // Navigate to the product model
    // Assumes inventory table has a foreign key relationship to product table
    // inv.name(function (err, prod) {
    //   console.log("\nProduct: ", prod);
    //   console.log("\n ------------- ");
    //});
//  });
//});

function callback(err,models){
  console.log("\nModels: ", models);
}

table= "petsite";
ds.discoverSchema(table, callback);
// List database tables and/or views
/*ds.discoverModelDefinitions({views: true, limit: 20}, callback);

console.log("models found");
// List database columns for a given table/view
//ds.discoverModelProperties('PRODUCT', cb);
 //ds.discoverModelProperties(table, callback);
//
// // List primary keys for a given table
//ds.discoverPrimaryKeys(table,  callback);
//
// // List foreign keys for a given table
//ds.discoverForeignKeys(table,  callback);

// List foreign keys that reference the primary key of the given table
// ds.discoverExportedForeignKeys('PRODUCT',  cb);

// Create a model definition by discovering the given table
ds.discoverSchema(table, callback);*/
