var mongoose = require('mongoose');


//https://www.npmjs.com/package/thunkify-wrap

var friends = new mongoose.Schema({
    id_self:{type:String},
    id_friend:{type:String}
});

friends.methods.save = function(name, callback) {


}

friends.methods.findByName = function(name, callback) {
    return this.model('friends').find({nickname: name}, callback)
};

module.exports = friends;