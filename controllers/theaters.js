const express  =  require("express");
const router = express.Router();
const db = require('../server.js')

// Getting theaters
router.get('/', (req, res)=> {
    Theater.find({}, function(err, docs) {

    })
})
