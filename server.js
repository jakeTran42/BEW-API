// server.js - Theater Reservation API

var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

// Example stub:
router.get('/theater/name-of-route', function(req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
});

module.exports = router;
