var user_dao = require('./sport-track-db').user_dao;
var db = require('./sport-track-db').db_connection;
async function essai(){
    let test = 
    {"Email" : "test@mail.com"
    ,"Name" : "test1"
    ,"Surname" : "test2"
    ,"BirthDate" : "01/01/2000"
    ,"Gender" : "Autres"
    ,"Height" : "1"
    ,"Weight" : "1"
    ,"Password" : "1234CaRRottes€"
    }
    let callback = (err,rows)=>{
        if(err){
            console.log(err);
        } else {
            console.log(rows);
        }
    }
    
    await user_dao.insert(test,callback);
    await user_dao.findAll(callback);
    await user_dao.findByKey("test@mail.com",callback);
    await user_dao.delete("test@mail.com",callback);
    await user_dao.findAll(callback);

}
essai();