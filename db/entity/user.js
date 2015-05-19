var mongoose = require('mongoose');
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/koa');


var userModel = require('../model/user').getModel(db);
var userSchema = require('../schemas/user');

//console.log(userModel)
var userEntity = new userModel();

userEntity.age = 13;
userEntity.password = 123;
userEntity.nickname = 'xpc';

userEntity.save(function(err, doc){
    console.log(doc)
})

/*var test = userEntity.findByName('xpc', function(err, doc) {
    console.log(doc)
});*/
//console.log(test)
