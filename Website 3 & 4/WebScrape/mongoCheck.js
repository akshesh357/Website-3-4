// var MongoClient = require('mongodb').MongoClient
// , Server = require('mongodb').Server;

// var mongoClient = new MongoClient(new Server('localhost', 27017));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/indu');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log ("Connection open");

    var kittySchema = mongoose.Schema({
        name: String
    });
    var Kitten = mongoose.model('Plane', kittySchema);
    var fluffy = new Kitten({ name: 'Silence' });
    console.log(fluffy.name);  
  // we're connected!
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    // fluffy.speak();
  });
});

console.log ("waiting")
// mongoClient.open ()
// mongoClient.open(function(err, mongoClient) {
//  var db1 = mongoClient.db("indu");

// mongoClient.close();
// });