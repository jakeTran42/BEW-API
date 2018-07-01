const express  =  require("express");
const router = express.Router();
// const router = express();
const db = require('../server.js')


module.exports = function(router) {
    // Getting theaters
    router.get('/', (req, res)=> {
        db.find('theaters').then((list) => {
            res.json({
                'stub': `[${req.originalUrl}] Endpoint works! `
            })
        }).catch((err) => {
            res.send(err)
        })
    })

    // Get a theater
    router.get('/theaters/:theaterId', function(req, res) {
        db.collection('theaters').findById(req.params.id, (err, theater) => {
            if (err){
                res.send(err)
            } else {
                res.json({
                    'stub': `[${req.originalUrl}] Endpoint works! `
                })
            }
        })
    });

    // Create a new theater
    router.post('/theaters/new', function(req, res) {
        const newTheater = JSON.parse(JSON.stringify(req.body));
        db.create('theaters', newTheater).then((res) => {
            res.json({
            'stub': `[${req.originalUrl}] Endpoint works! `,
            'req': `{${newTheater}}`
        });
    }).catch((err) => {
        res.send(err)
    })
    });

    // Get a session for a theater
    router.get('/theaters/:theaterId/sessions/:sessionId', function(req, res) {
        res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });

}
