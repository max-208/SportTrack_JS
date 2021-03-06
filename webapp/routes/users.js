var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('users');
});

router.post('/', function(req, res, next) {
  if(req.session.email == undefined){
    user_dao.insert(req.body)
    .then((rows,err) => {
      if(err != null){
        res.render('users', {error : "erreur lors de la création de compte veuillez réésayer"});
        //console.log("err");
      }else {
        req.session.email = req.body.email;
        res.render('index');
      }
    }).catch(()=>{
      res.render('users', {error : "erreur lors de la création de compte veuillez réésayer"});
    })
  } else {
    res.redirect("/");
  }
});

router.get('/edit', function(req, res, next) {
  res.render('edit');
});

router.post('/edit', function(req, res, next) {
  if(req.session.email !== undefined){
    user_dao.update(req.body)
    .then((rows,err) => {
      if(err != null){
        res.render('users', {error : "erreur lors de la modification du compte veuillez réésayer"});
      }else {
        req.session.email = req.body.email;
        res.render('index');
      }
    }).catch(()=>{
      res.render('users', {error : "erreur lors de la modification du compte veuillez réésayer"});
    })
  } else {
    res.redirect("/");
  }
});

module.exports = router;
  