var friends = require('../schemas/friends');

exports.getModel = function(db) {
    //console.log(db)
    //var userModel = db.model('user', userSchema);
    var  friendModel=db.model("friends",friends);
    return friendModel
};