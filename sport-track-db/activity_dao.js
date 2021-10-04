const db = require('./sqlite_connection');
var ActivityDAO = function(){

    this.findAll = function(callback){
        const query = "select * from activity ";
        db.all(query,[],callback);
    };

    this.findforUser = function(key,callback){
        const query = "select * from activity, user where TheUser = Email ";
        db.all(query,key,callback);
    };
    
    this.insert = function(values, callback){
        const querry = "insert into activity ( IdActivity, Date, Description, TheUser, MaxCardio, MinCardio, AverageCardio, BegginingTime, Duration ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.all(querry,[values["IdActivity"], values["Date"], values["Description"], values["TheUser"], values["MaxCardio"], values["MinCardio"], values["AverageCardio"], values["BegginingTime"],values["Duration"]],callback);
    };
    this.update = function(key, values, callback){
        const querry = "update activity set IdActivity = ?, Date = ?, Description = ?, TheUser = ?, MaxCardio = ?, MinCardio = ?, AverageCardio = ?, BegginingTime = ?,  Duration = ?";
        db.all(querry,[values["IdActivity"], values["Date"], values["Description"], values["TheUser"], values["MaxCardio"], values["MinCardio"], values["AverageCardio"], values["BegginingTime"], values["Duration"]],callback);
    };
    this.delete = function(key, callback){
        const query = "delete from activity where IdActivity = ? ";
        db.all(query,key,callback);
    };
    this.findByKey = function(key, callback){
        const query = "select * from activity where IdActivity = ? ";
        db.all(query,key,callback); 
        
    };
};
const Activitydao = new ActivityDAO();
module.exports = Activitydao;
