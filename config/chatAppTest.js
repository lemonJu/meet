var chatApp = require('./chatApp');
console.log(chatApp.bind('from', 'to', 'content')())
/*

chatApp.bind('from', 'to', 'content')('xpc', function() {
    console.log('return sth');
});

setTimeout(function() {
    chatApp.trigger('xpc');
}, 2000)*/
