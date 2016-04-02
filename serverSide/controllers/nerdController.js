var nerdModel = require('../models/Nerd');
//var bodyparser = require('body-parser');
var jwt = require('../services/jwt');

var payload;

var token;

exports.create = function (req, res) {
    var entry = new nerdModel.nerdModel({
        name: req.body.name || '',
        rollno: req.body.rollno || '',
        email: req.body.email || '',
        password: req.body.password || ''
    });

    entry.save(
        function (err) {
            if (err) {
                console.log('error creating the document');
                throw err;
            }
            console.log('Entry created');
            createSendToken(entry, res);
        }
    );
};

exports.getJobs = function (req, res) {
    var jobs = ['Cook', 'SuperHero', 'Unicorn Wisperer', 'Toast Inspector'];
    if (!req.headers.authorization) {
        return res.status(401).send({
            message: 'You are not authorized'
        });
    }
    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, "shh..");
    if (!payload.sub) {
        res.status(401).send({
            message: "Authentication failed"
        });
    }
    res.json(jobs);
};
exports.login = function (req, res) {
    var user1 = req.body;
    var searchThis = {
        email: user1.email
    };
    nerdModel.nerdModel.findOne(searchThis, function (err, user) {
        if (err) {
            throw err;
        }
        if (!user) {
            return res.status(401).send({
                message: 'Wrong email/password'
            });
        }
        user.comparePasswords(user1.password, function (err, isMatch) {
            if (err) {
                throw err;
            }
            if (!isMatch) {
                return res.status(401).send({
                    message: 'Wrong email/password'
                });
            }
            createSendToken(user, res);
        });
    });


};
exports.loginPassport = function (req, res, passport, next) {
    passport.authenticate('local', function (err, user) {
        if (err) {
            next(err);
        }
        req.login(user, function (err) {
            if (err) {
                next(err);
            }
            createSendToken(user, res);
        })
    })(req, res, next);
}

function createSendToken(entry, res) {
    payload = {
        sub: entry._id
    };
    token = jwt.encode(payload, "shh..");
    res.status(200).send({
        user: entry.toJSON(),
        token: token
    });
}
exports.createSendToken = function (entry, res) {
    return createSendToken(entry, res);
};
exports.getNote = function (req, res) {
    //var query = nerdModel.find();
    console.log('here');
    //return query
};

exports.findUser = function (email, password, done) {
    var searchThis = {
        email: email
    };
    nerdModel.nerdModel.findOne(searchThis, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {
                message: 'Wrong email/password'
            });
        }
        user.comparePasswords(password, function (err, isMatch) {
            if (err) {
                return done(err);
            }
            if (!isMatch) {
                return done(null, false, {
                    message: 'Wrong email/password'
                });
            }
            return done(null, user);
        });
    });

};

exports.registerUserStrategy = function (email, password, done) {
    var newUser = new nerdModel.nerdModel({
        email: email,
        password: password
    });
    newUser.save(function (err) {
        done(null, newUser);
    });
};