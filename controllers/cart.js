const express  =  require("express");
const router = express.Router();
// const router = express();
const db = require('../server.js')


module.exports = function(router) {

    // Get a cart
    router.get('/carts/:cartId', function(req, res) {
        res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });
  
    // Create a new cart
    router.post('/carts/new', function(req, res) {
        res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });
  
    // Edit shopping cart for reservations (seats confirmed reserved / remove seats)
    router.post('/carts/:cartId/', function(req, res) {
        res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });
  
    // Edit the state of the cart
    router.post('/carts/:cartId', function(req, res) {
        res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });
  
};