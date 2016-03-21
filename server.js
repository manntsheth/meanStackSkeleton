var express = require('express');
//var mongoose = require('mongoose');
var path = require('path');
var bodyparser = require('body-parser');
var router = require('./serverSide/routes');

var app = express();
var port = process.env.PORT | 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.use('/', router);
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/views/index.html')); // load our public/index.html file
});
app.listen(port, function (err) {
    console.log('started server');
});