var express = require('express');
var router = express.Router();
var data_dao = require('sport-track-db').data_dao;
var activity_dao = require('sport-track-db').activity_dao;

/* GET users listing. */

router.get('/', function(req, res, next) {
    var text = "";
    let email = req.session.email;
    activity_dao.findByUser(email)
    .then((rows,err)=>{
        if(err == null){
            for (const key of rows) {
                console.log(key);
                key["Distance"] = "a faire"
            }
        }
        
        console.log(text);
        res.render("activities",{activites : rows})
    });
});

module.exports = router;
