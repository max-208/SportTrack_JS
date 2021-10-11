var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;

/* GET users listing. */


router.get('/', function(req, res, next) {
  user_dao.findAll()
  .then((rows,err) => {
    if(err != null){
      console.log("ERROR= " +err);
    }else {
      res.render('users', {data:rows});
    }
  })
});
  
  router.get("/insert", function(req, res, next) {
    user_dao.insert(user)
    .then((rows,err) => {
      if(err != null){
        console.log("ERROR= " +err);
      }else {
        res.render('users', {data:rows});
      }
    })
  });
module.exports = router;
  