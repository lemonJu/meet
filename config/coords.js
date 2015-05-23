var lnglat = {};

module.exports = {
    addCoords: function (lng, lat, user) {
        lnglat[user] = {};
        lnglat[user]['lng'] = lng;
        lnglat[user]['lat'] = lat;
        lnglat[user]['user'] = user;
    },
    getCoords: function(lng1, lat1, lng2, lat2) {
        var coords = [];
        Object.keys(lnglat).forEach(function(user) {
            console.log(lnglat[user])
            if(lnglat[user]['lng'] >= lng1 &&lnglat[user]['lng'] <= lng2 && lnglat[user]['lat'] >= lat1 && lnglat[user]['lat'] <= lat2 ) {
                coords.push(lnglat[user])
            }
        })
        return coords
    }
}