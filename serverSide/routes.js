//var path = require('path');
var express = require('express');
var router = express.Router();
var path = require('path');
var nerdController = require('./controllers/nerdController');

router.post('/', function (req, res) {
    console.log('inside routes.js');
    console.log('request obj inside route.js' + JSON.stringify(req.body));
    return nerdController.create(req, res);
});

router.get('/somethingelse', function (req, res) {
    return nerdController.getNote(req, res);
});
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html')); // load our public/index.html file
});
module.exports = router;