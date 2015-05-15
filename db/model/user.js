var userSchema = require('../schema/user');
var mongoose = require('mongoose');

module.exports = mongoose.model('user', userSchema);



