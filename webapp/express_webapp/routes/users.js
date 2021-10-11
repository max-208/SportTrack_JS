var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/', function(req, res, next) {
  user_dao.findAll(function(err, rows) {
    if(err != null){
      console.log("ERROR= " +err);
    }else {
      res.render('users', {data:rows});
    }

});
    let user = 
    {"Email" : "BD@mail.com"
    ,"Name" : "Birth"
    ,"Surname" : "Date"
    ,"BirthDate" : "01/12/2000"
    ,"Gender" : "Homme"
    ,"Height" : "140"
    ,"Weight" : "58"
    ,"Password" : "1234CaRRottes€"
    }
    user_dao.insert(user,function(err, rows) {
        if(err != null){
          console.log("ERROR= " +err);
        }else {
          res.render('users', {data:rows});
        }
    });


  
});
module.exports = router;


module.exports = router;
