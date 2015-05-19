var userSchema = require('../schemas/user');

exports.getModel = function(db) {
    //console.log(db)
    var userModel = db.model('user', userSchema);
    return userModel
};