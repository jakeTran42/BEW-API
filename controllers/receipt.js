const express  =  require("express");
const router = express.Router();
// const router = express()
const db = require('../server.js')

module.exports = function(router){
    // Get a receipt
    router.get('/receipts/:receiptId', function(req, res) {
        res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });
  
    // Create a new receipt
    router.post('/receipts/new', function(req, res) {
        res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });
}