var express = require('express');
var router = express.Router();
var data_dao = require('sport-track-db').data_dao;
var activity_dao = require('sport-track-db').activity_dao;

/* GET users listing. */

router.get('/', function(req, res, next) {
    let email = req.session.email;
    activity_dao.findByUser(email)
    .then(async (rows,err)=>{
        if(err == null){
            for (const key of rows) {
                await data_dao.findforActivity(key.IdActivity)
                .then((rows2,err2)=>{
                    if(err2 == null){
                        key["Distance"] = Math.round( calculDistanceTrajet(rows2) );
                    }
                })
            }
        }
        console.log(rows);
        res.render("activities",{activites : rows})
    });
});

function calculDistance2PointsGPS(lat1, long1, lat2, long2){
    let R = 6378137;
    let newlat1 = Math.PI * (lat1) / 180;
    let newlat2 = Math.PI * (lat2) / 180;
    let newlong1 = Math.PI * (long1) / 180;
    let newlong2 = Math.PI * (long2) / 180;
    return R*Math.acos(Math.sin(newlat2)*Math.sin(newlat1)+Math.cos(newlat2)*Math.cos(newlat1)*Math.cos(newlong2-newlong1));
}

function calculDistanceTrajet( parcours ){
    var distance  = 0;
    var i = 0;
    while( i < parcours.length) {
        if(i != 0){
            distance = distance + calculDistance2PointsGPS(parcours[i]['Latitude'],parcours[i]['Longitude'],parcours[i-1]['Latitude'],parcours[i-1]['Longitude']);
        }
        i = i+1;
    }
    return distance;
}
module.exports = router;
