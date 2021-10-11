var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;


router.get("/connectUser", function(req, res, next) {
    user_dao.findByKey(key)
    .then((rows,err) => {
      if(err != null){
        console.log("ERROR= " +err);
      }else {
        res.render('connectUser', {data:rows});
      }
    })
  });
