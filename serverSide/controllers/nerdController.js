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
    payload = {
        iss: req.hostname,
        sub: entry._id
    };
    token = jwt.encode(payload, "shh..");
    entry.save(
        function (err) {
            if (err) {
                console.log('error creating the document');
                throw err;
            }
            console.log('Entry created');
            res.status(200).send({
                user: entry.toJSON(),
                token: token
            });
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
exports.getNote = function (req, res) {
    //var query = nerdModel.find();
    console.log('here');
    //return query
};