var chatApp = require('../config/chatApp');

var url = require('url');

module.exports = {
    send: function *() {
        var params = url.parse(this.req.url, true).query;
        var to = params.to,
            from = this.session.user,
            content = params.content;

        // ±£´æÏûÏ¢
        chatApp.bind(from, to, content);
        this.body = 'success';

    },
    get: function *() {
        this.body = yield chatApp.get()(this.session.user);
    }
}
