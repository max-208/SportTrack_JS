var db = require('./sqlite_connection');
var UserDAO = function(){
    this.insert = function(values, callback){
        let statement = db.prepare("insert into user ( Email, Name, Surname, BirthDate, Gender, Height, Weight, Password ) values (?, ?, ?, ?, ?, ?, ?, ?)")
        statement.run(values["Email"], values["Name"], values["Surname"], values["BirthDate"], values["Gender"], values["Height"], values["Weight"], values["Password"])
        statement.finalize();
    };
    this.update = function(key, values, callback){
        let statement = db.prepare("update user set Email = ?, Name = ?, Surname = ?, BirthDate = ?, Gender = ?, Height = ?, Weight = ?, Password = ? where Email = ?")
        statement.run(values["Email"], values["Name"], values["Surname"], values["BirthDate"], values["Gender"], values["Height"], values["Weight"], values["Password"], values["oldEmail"])
        statement.finalize();
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
