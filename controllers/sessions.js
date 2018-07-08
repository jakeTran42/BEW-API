const express  =  require("express");
const router = express.Router();
// const router = express()
const db = require('../server.js')

module.exports = function(router) {

    // Get sessions
    router.get('theater/:theaterId/sessions', function(req, res) => {
        db.find('sessions').then((sessions) => {
            res.json({'stub': `[${req.originalUrl}]`})
        }).catch((err) => {
            res.send(err)
        })
    })

    // Get session id
    router.get('theater/:theaterId/sessions/:Id', function(req, res) => {
        db.find('sessions', id).then((session) => {
            res.json({'stub': `[${req.originalUrl}]`})
        }).catch((err) => {
            res.send(err)
        }) 
    })

    // Create a new session
    router.post('/theaters/:theaterId/sessions/new', function(req, res) {
        res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });

    // Edit the reservation of a session
    router.post('/theaters/:theaterId/sessions/:sessionId/edit', function(req, res) {
        res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });



};
