var _ = require('koa-route');

var userController = require('../controller/user.js');
var mapsController = require('../controller/map.js');


var chatController  = require('../controller/chat.js');

// router-allocation
exports.init = function(app) {
    app.use(_.get("/login", userController.login));

    app.use(_.get("/test", userController.test));
    app.use(_.post("/login", userController.login));
    app.use(_.post("/logup", userController.logup));


    app.use(_.get("/uploadCoords", mapsController.uploadCoords));
    app.use(_.get("/getUserByCoords", mapsController.getUserByCoords));

    app.use(_.get("/chatSend", chatController.send));
    app.use(_.get("/chatGet", chatController.get));

    /*app.use(_.get("/getUser", function *() {
        mapsController.getUser.apply(this, Coords)
    }));*/
};


// login = http://222.182.110.211/login?username=&password=