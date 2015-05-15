var mongoose = require('mongoose');
var url = "localhost";
var dbName = 'test';

var app =
    exports.connect = function(callback) {
		var db = mongoose.createConnection(url, dbName); //创建一个数据库连接
        db.on('error', console.error.bind(console, '连接错误:'));
        return db;
    }
