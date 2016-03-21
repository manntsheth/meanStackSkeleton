var nerdModel = require('../models/Nerd');
//var bodyparser = require('body-parser');



exports.create = function (req, res) {
    console.log('called create method');
    console.log('req obj:' + JSON.stringify(req.body));
    console.log("Ned model is" + nerdModel);
    var entry = new nerdModel.nerdModel({
        name: req.body.name,
        rollno: req.body.rollno
    });

    entry.save(
        function (err) {
            if (err) {
                console.log('error creating the document');
                throw err;
            }
            console.log('Entry created');
        }
    );
    res.redirect(301, '/');

};

exports.getNote = function (req, res) {
    //var query = nerdModel.find();
    console.log('here');
    //return query
};