const express  =  require("express");
const router = express.Router();
// const router = express()
const db = require('../server.js')

module.exports = function(router) {

    // Create a new session
    router.post('/theaters/:theaterId/sessions/new', function(req, res) {
        res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });
  
    // Edit the reservation of a session
    router.post('/theaters/:theaterId/sessions/:sessionId/edit', function(req, res) {
        res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });
  
};