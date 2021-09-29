function calculDistance2PointsGPS(lat1, long1, lat2, long2){
    R = 6378137;
    newlat1 = Math.PI * (lat1) / 180;
    newlat2 = Math.PI * (lat2) / 180;
    newlong1 = Math.PI * (long1) / 180;
    newlong2 = Math.PI * (long2) / 180;
    return R*Math.acos(Math.sin(newlat2)*Math.sin(newlat1)+Math.cos(newlat2)*Math.cos(newlat1)*Math.cos(newlong2-newlong1));
}
function calculDistanceTrajet( parcours){
    var distance  = 0;
    var i = 0;
    while( i < parcours.length) {
        if(i != 0){
            distance = distance + calculDistance2PointsGPS(parcours[i]['latitude'],parcours[i]['longitude'],parcours[i-1]['latitude'],parcours[i-1]['longitude']);
        }
        i = i+1;
    }
    console.log('distance : ' + distance);
    return distance;
}

let path = [{"latitude" : 47.644795,"longitude" : -2.776605,"altitude" : 18}, {"latitude" : 47.646870,"longitude" : -2.778911,"altitude" : 18}, {"latitude" : 47.646197,"longitude" : -2.780220,"altitude" : 18}, {"latitude" : 47.646992,"longitude" : -2.781068,"altitude" : 17}, {"latitude" : 47.647867,"longitude" : -2.781744,"altitude" : 16}, {"latitude" : 47.648510,"longitude" : -2.780145,"altitude" : 16}];
calculDistanceTrajet(path);

