//var path = require('path');
var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var nerdController = require('./controllers/nerdController');

router.use(passport.initialize());
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
var strategy = new LocalStrategy({
    usernameField: 'email'
}, function (email, password, done) {
    nerdController.findUser(email, password, done);
});
passport.use(strategy);
router.get('/jobs', function (req, res) {
    nerdController.getJobs(req, res);
});
router.post('/', function (req, res) {
    console.log('inside routes.js');
    console.log('request obj inside route.js' + JSON.stringify(req.body));
    return nerdController.create(req, res);
});

router.get('/somethingelse', function (req, res) {
    return nerdController.getNote(req, res);
});

router.post('/login', function (req, res) {
    return nerdController.loginPassport(req, res, passport);
});

router.post('/register', function (req, res) {
    //res.send("hi");
    nerdController.create(req, res);
});
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html')); // load our public/index.html file
});

module.exports = router;