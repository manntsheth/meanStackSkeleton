var db = require('../config/db');
var mongoose = require('mongoose');

mongoose.connect(db.url, function (err, data) {
    if (err) {
        console.log('not connected to database');
    } else {
        console.log('connected to database');
    }
});
var Schema = mongoose.Schema;
var nerdSchema = new Schema({
    name: String,
    rollno: Number
});

exports.nerdModel = mongoose.model('Nerd', nerdSchema);