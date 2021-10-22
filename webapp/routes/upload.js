var express = require('express');
var router = express.Router();
var data_dao = require('sport-track-db').data_dao;
var activity_dao = require('sport-track-db').activity_dao;

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render("upload")
});

router.post('/', function(req, res, next) {
  
    const JSONData = JSON.parse(req.files.userfile.data.toString())
    console.log(JSONData);
    activity_dao.findMax().then(
      (max)=>{
        max = max.max + 1;
        const activity = {
          "IdActivity" : max,
          "Date" : JSONData.activity.date,
          "Description" : JSONData.activity.description,
          "TheUser" : 'test@mail.com',
          "MaxCardio" : 0,
          "MinCardio" : 0,
          "AverageCardio" : 0,
          "BegginingTime" : 0,
          "Duration" : 0
        }
        console.log(activity);
        activity_dao.insert(activity);
        data_dao.findMax().then(
          async (previousData) => {
            previousData = previousData.max+1;
            for (const dataPoint of JSONData.data) {
              await data_dao.findMax().then(
                (IdData) =>{
                  IdData = IdData.max+1
                  const data = {
                    "IdData" : IdData,
                    "Time" : dataPoint.time,
                    "Cardio" : dataPoint.cardio_frequency,
                    "Latitude" : dataPoint.latitude,
                    "Longitude" : dataPoint.longitude,
                    "Altitude" : dataPoint.altitude,
                    "PreviousData" : previousData,
                    "TheActivity" : max
                  }
                  console.log(data);
                  data_dao.insert(data);

                  previousData = IdData;
                }
              )
            }
          }
        )
      }
    );
    res.redirect('/',302);
});

module.exports = router;
  