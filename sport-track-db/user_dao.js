var db = require('./sqlite_connection');
var UserDAO = function(){
    this.insert = function(values, callback){
        let statement = db.prepare("insert into user ( Email, Name, Surname, BirthDate, Gender, Height, Weight, Password ) values (?, ?, ?, ?, ?, ?, ?, ?)")
        statement.run(values["Email"], values["Name"], values["Surname"], values["BirthDate"], values["Gender"], values["Height"], values["Weight"], values["Password"])
    };
    this.update = function(key, values, callback){
        
    };
    this.delete = function(key, callback){
        
        var query = "delete from user where Email = ? ";
        var stmt = db.prepare(query);
        stmt.run(key);
        //try{
            stmt.finalize(callback);   
        //} catch(e){
        //    console.log( "User_dao delete : exception recue : "+e.getMessage() );
        //}
    };

    this.findAll = function(callback){
        var query = "select * from user ";
        var stmt = db.prepare(query);
        stmt.get();
        stmt.finalize(callback); 


    };
    this.findByKey = function(key, callback){
        var query = "select * from user where Email = ? ";
        var stmt = db.prepare(query);
        stmt.get(key);
        stmt.finalize(callback); 
        
    };
};
var dao = new UserDAO();
module.exports = dao;
