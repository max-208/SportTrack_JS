const db = require('./sqlite_connection');
var UserDAO = function(){

    this.findAll = function(callback){
        const query = "select * from user ";
        db.all(query,[],callback);
    };
    
    this.insert = function(values, callback){
        const querry = "insert into user ( Email, Name, Surname, BirthDate, Gender, Height, Weight, Password ) values (?, ?, ?, ?, ?, ?, ?, ?)";
        db.all(querry,[values["Email"], values["Name"], values["Surname"], values["BirthDate"], values["Gender"], values["Height"], values["Weight"], values["Password"]],callback);
    };
    this.update = function(key, values, callback){
        const querry = "update user set Email = ?, Name = ?, Surname = ?, BirthDate = ?, Gender = ?, Height = ?, Weight = ?, Password = ? where Email = ?";
        db.all(querry,[values["Email"], values["Name"], values["Surname"], values["BirthDate"], values["Gender"], values["Height"], values["Weight"], values["Password"], values["oldEmail"]],callback);
    };
    this.delete = function(key, callback){
        const query = "delete from user where Email = ? ";
        db.all(query,[key],callback);
    };
    this.findByKey = function(key, callback){
        const query = "select * from user where Email = ? ";
        db.all(query,[key],callback); 
        
    };
};
const dao = new UserDAO();
module.exports = dao;
