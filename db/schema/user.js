var mongoose = require('mongoose');

var userSchema = mongo.Schema({
    photo: Buffer,
    nickname: String,
    gender: String,
    password: String,
    age: Number,
    birthday: Date,
    pdescription: String
});

userSchema.statics.findByName = function (name) {
    return this.find({nickname: name})
};


exports.schema = userSchema;