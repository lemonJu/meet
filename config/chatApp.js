var callback = {};
var message = {};
var thunkify = require('thunkify-wrap');
var app = module.exports = {};

app.trigger = function(user) {
    callback[user] = callback[user] || [];
    for(var i = 0; i < callback[user].length; i++) {
        if( i== callback[user].length - 1) {
            callback[user][i](null, message[user]);
        }else{
            callback[user][i](null, 'fail');
        }
    }
    message[user] = [];
    callback[user] = [];
};

function addCallBack(user, cb) {
    callback[user] = callback[user] || [];
    callback[user].push(cb);
}

app.bind = function(from, to, content) {
    message[from] = message[to] || [];
    var date = new Date();
    message[from].push({
        'time': date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        'from': from,
        'content': content
    });
    // trigger callback
    app.trigger(to)
};

app.get = function(user) {
    // push callback
    setTimeout(function(){
        app.trigger(user);
    }, 0)
    return thunkify(addCallBack)
};