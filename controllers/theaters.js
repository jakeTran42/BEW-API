const express  =  require("express");
const router = express.Router();
// const router = express();
const db = require('../server.js')


module.exports = function(router) {
    // Getting theaters
    router.get('/', (req, res)=> {
        Theater.find({}, function(err, docs) {

        })
    })

    // Get a theater
    router.get('/theaters/:theaterId', function(req, res) {
        db.collection('theaters').findById(req.params.id, (err, docs) => {
            if (err){
                res.send(err)
            } else {
                console.log("got something")
            }
        })
    });
    
    // Create a new theater
    router.post('/theaters/new', function(req, res) {
    res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });

    // Get a session for a theater
    router.get('/theaters/:theaterId/sessions/:sessionId', function(req, res) {
    res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });

}
