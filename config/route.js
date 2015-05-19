var _ = require('koa-route');
var userController = require('../controller/user.js');



// router-allocation
exports.init = function(app) {
    app.use(_.get("/login", userController.login));

    app.use(_.get("/test", userController.test));
    app.use(_.post("/login", userController.login));

    app.use(_.post("/logup", userController.logup));
};