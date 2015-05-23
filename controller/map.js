var Coords = require('../config/coords');
var url = require("url");


module.exports = {
    getUserByCoords: function *(){
        var params = url.parse(this.req.url, true).query;
        this.body = Coords.getCoords(params.lng1,params.lat1, params.lng2, params.lat2)
    },
    uploadCoords: function *() {
        var params = url.parse(this.req.url, true).query;
        if(params.lng && params.lat && this.session.user) {
            Coords.addCoords(params.lng, params.lat, this.session.user)
            this.body = 'success'
        }else{
            this.body = 'fail'
        }
    }
}