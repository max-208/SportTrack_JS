var db = require('./sqlite_connection');
var UserDAO = function(){
    this.insert = function(values, callback){
        let statement = db.prepare("insert into user ( Email, Name, Surname, BirthDate, Gender, Height, Weight, Password ) values (?, ?, ?, ?, ?, ?, ?, ?)")
        statement.run(values["Email"], values["Name"], values["Surname"], values["BirthDate"], values["Gender"], values["Height"], values["Weight"], values["Password"])
        statement.finalize();
    };
    this.update = function(key, values, callback){...};
    this.delete = function(key, callback){...};
    this.findAll = function(callback){...};
    this.findByKey = function(key, callback){...};
};
var dao = new UserDAO();
module.exports = dao;
