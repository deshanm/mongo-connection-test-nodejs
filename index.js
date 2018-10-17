
var MongoClient = require('mongodb').MongoClient;
var url = process.env.URL;
console.log('----------------------process.env.URL', url)
MongoClient.connect(url, function (err, db) {
  
  if (err) {
    console.log('Ohh...      ', err)
    throw err;
  }
  console.log("yeah.------- we have connection for mongo");
  db.close();
});
