var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;

var session = require('express-session');


router.get('/', function(req, res, next) {
    res.render("connect")
  });

router.get("/connect", function(req, res, next) {
    user_dao.findByKey(key)
    .then((rows,err) => {
      if(err != null){
        console.log("ERROR= " +err);
      }else {
        res.render('connect', {data:rows});
        req.session.save(key);
      }
    })
  });
  

  module.exports = router;
  