var express = require('express');
var app = express();
var port = process.env.PORT | 5000;
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyparser = require('body-parser');
//var session = require('express-session');
//var mongoose = require('mongoose');
var path = require('path');

var router = require('./serverSide/routes');




//app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyparser.json()); // get information from html forms
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

// required for passport
/*app.use(session({
    secret: 'mypassportAuth'
})); // session secret*/
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


app.use('/', router);
/*app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/views/index.html')); // load our public/index.html file
});*/
app.listen(port, function (err) {
    console.log('started server');
});