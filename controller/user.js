var thunkify = require('thunkify-wrap');

var url = require("url");


var useTime = function (fn) {
    setTimeout(function() {
        fn(null, 123)
    }, 100)
};
var mongoose = require('mongoose');
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/koa');

var uTimeThunk = thunkify(useTime);

module.exports = {
    login: function *(){
        var data = this.request.body;
        var userModel = require('../db/model/user').getModel(db);
        var userEntity = new userModel();
        var params = url.parse(this.req.url, true).query;

        params.username = data.username || params.username;
        params.password = data.password || params.password;

        var findByName = thunkify(userEntity.findByName, userEntity);

        var userdb = yield findByName(params.username);

        if(userdb.length > 0) var user = userdb[0];

        if (user && user.password == params.password){
            this.session.user = params.username;
            this.session.latitude = params.latitude;
            this.session.longitude = params.longitude;
            this.body = 'success';
        }else{
            this.body = 'fail';
        }
    },
    logup: function *() {
        var data = this.request.body;
        var userModel = require('../db/model/user').getModel(db);

        if(data.nickname && data.password) {
            var userEntity = new userModel(data);
            var saveThunk = thunkify(userEntity.save, userEntity);
            var ret = yield saveThunk();
            this.body = 'success';
        }else{
            this.body = 'fail'
        }
    }
}