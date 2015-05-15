var _ = require('koa-route');
var appRouter = {
    login: function*(){
        this.body = this.request.body;
    }
};

// router-allocation
exports.init = function(app) {
    app.use(_.get("/login", appRouter.login));
    app.use(_.post("/login", appRouter.login));
};