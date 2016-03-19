var express = require('express');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');

var port = process.env.PORT | 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/views/index.html')); // load our public/index.html file
});
app.listen(port, function (err) {
    console.log('started server');
});