var user_dao = require('./sport-track-db').user_dao;
var activity_dao = require('./sport-track-db').activity_dao;
var db = require('./sport-track-db').db_connection;
async function testFunc(){
    let test = 
    {"Email" : "test@mail.com"
    ,"Name" : "test1"
    ,"Surname" : "test1"
    ,"BirthDate" : "01/01/2000"
    ,"Gender" : "Autres"
    ,"Height" : "1"
    ,"Weight" : "1"
    ,"Password" : "1234CaRRottes€"
    }
    function callback(err,rows){
        if(err){
            console.log(err);
        } else {
            console.log(rows);
        }
    }
    
    await user_dao.insert(test,callback);
    await user_dao.findAll(callback);
    await user_dao.findByKey("test@mail.com",callback);
    await user_dao.update("test@mail.com",test, callback);
    await user_dao.findByKey("test@mail.com",callback);
    await user_dao.delete("test@mail.com",callback);
    await user_dao.findAll(callback);
    let testAcitivty =
    {"IdActivity" : "1"
    ,"Date" : "01/01/2000"
    ,"Description" : "test1"
    ,"TheUser" : "test@mail.com"
    ,"MaxCardio" : "100"
    ,"MinCardio" : "100"
    ,"AverageCardio" : "100"
    ,"BegginingTime" : "00:00:00"
    ,"Duration" : "00:00:00"
    }
    await activity_dao.insert(testAcitivty,callback);
    await activity_dao.findAll(callback);
    await activity_dao.findByKey("1",callback);
    await activity_dao.update("1",testAcitivty, callback);
    await activity_dao.findByKey("1",callback);
    await activity_dao.delete("1",callback);
    await activity_dao.findAll(callback);
}

testFunc();