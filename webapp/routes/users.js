var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render("users")
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  user_dao.insert(req.body)
    .then((rows,err) => {
      if(err != null){
        console.log("err");
        //console.log("ERROR= " +err);
      }else {
        res.render('users', {data:rows});
      }
    })
});

module.exports = router;
  