var userModel = require('../db/model/user');

module.exports = {
    getUser: function() {
        var user = new userModel();
    }
}