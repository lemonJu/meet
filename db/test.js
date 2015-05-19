var mongoose = require('mongoose');
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/test');

db.on('error', function(error) {
    console.log(error);
});

var userSchema = new mongoose.Schema({
    photo: {type: String},
    nickname: {type: String},
    gender: {type: String},
    password: {type: String},
    age: {type: Number},
    birthday: {type: Date},
    pdescription: {type: String}
});

userSchema.methods.findByName = function (name, callback) {
    return this.model('user').find({nickname: name}, callback)
};

var userModel = db.model('user', userSchema);


var userEntity = new userModel({
    nickname: 'xpc12'
});

userEntity.age = 12;

userEntity.findByName('xpc', function(err, doc) {
    console.log(doc)
});

userEntity.save(function(err) {
    if(err) {
        console.log(err)
    }else{
        console.log('save ok')
    }

    //db.close();
});


console.log('ok');