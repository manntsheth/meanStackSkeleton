//var path = require('path');
var express = require('express');
var router = express.Router();
var nerdController = require('./controllers/nerdController');

router.post('/', function (req, res) {
    console.log('inside routes.js');
    console.log('request obj inside route.js' + JSON.stringify(req.body));
    return nerdController.create(req, res);
});

router.get('/somethingelse', function (req, res) {
    return nerdController.getNote(req, res);
});
module.exports = router;