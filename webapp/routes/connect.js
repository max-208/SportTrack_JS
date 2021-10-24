var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;


router.get('/', function(req, res, next) {
  if(req.session.email === undefined){
    res.render("connect");
  } else {
    res.redirect("/");
  }
});

router.get('/quit', function(req, res, next) {
  req.session.destroy();
  res.redirect("/");
});

router.post("/", function(req, res, next) {
  if(req.session.email === undefined){
    let email = req.body.email;
    let password = req.body.password;
    user_dao.findByKey(email,password)
    .then((rows,err) => {
      if(err != null || rows == null){
        res.render("connect", {error : "erreur lors de la connection veuillez réésayer"})
        console.log("ERROR= " +err);
      }else {
        req.session.email = req.body.email;
        res.redirect("/");
      }
    })
  } else {
    res.redirect("/");
  }
});
  

  module.exports = router;