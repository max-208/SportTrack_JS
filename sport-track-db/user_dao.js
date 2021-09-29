var db = require('./sqlite_connection');
var UserDAO = function(){
    this.insert = function(values, callback){
        
    };
    this.update = function(key, values, callback){...};
    this.delete = function(key, callback){...};
    this.findAll = function(callback){...};
    this.findByKey = function(key, callback){...};
};
var dao = new UserDAO();
module.exports = dao;
