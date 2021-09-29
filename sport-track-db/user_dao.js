var db = require('./sqlite_connection');
var UserDAO = function(){
    this.insert = function(values, callback){
        
    };
    this.update = function(key, values, callback){
        
    };
    this.delete = function(key, callback){
        
        var query = "delete from user where Email = ? ";
        var stmt = db.prepare(query);
        stmt.run(key);
        //try{
            stmt.finalize();   
        //} catch(e){
        //    console.log( "User_dao delete : exception recue : "+e.getMessage() );
        //}
    };

    this.findAll = function(callback){

    };
    this.findByKey = function(key, callback){
        
    };
};
var dao = new UserDAO();
module.exports = dao;
