var db = require('../config/db');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

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
    rollno: Number,
    email: String,
    password: String
});

nerdSchema.methods.toJSON = function () {
    var user = this.toObject();
    delete user.password;
    return user;
};


nerdSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});


exports.nerdModel = mongoose.model('Nerd', nerdSchema);