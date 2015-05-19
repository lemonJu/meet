var mongoose = require('mongoose');


//https://www.npmjs.com/package/thunkify-wrap

var userSchema = new mongoose.Schema({
    photo: {type: String},
    nickname: {type: String},
    gender: {type: String},
    password: {type: String},
    age: {type: Number},
    birthday: {type: Date},
    pdescription: {type: String}
});

userSchema.methods.findByName = function(name, callback) {
    return this.model('user').find({nickname: name}, callback)
};


module.exports = userSchema;