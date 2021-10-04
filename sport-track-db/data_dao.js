const db = require('./sqlite_connection');
var DataDAO = function(){

    this.findAll = function(callback){
        const query = "select * from data ";
        db.all(query,[],callback);
    };
    /*
    this.findforUser = function(callback){
        const query = "select * from data, user where Latitude = Email ";
        db.all(query,[],callback);
    };
    */
    this.insert = function(values, callback){
        const querry = "insert into data ( IdData, Time, Cardio, Latitude, Longitude, Altitude, PreviousData, TheActivity, Duration ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.all(querry,[values["IdData"], values["Time"], values["Cardio"], values["Latitude"], values["Longitude"], values["Altitude"], values["PreviousData"], values["TheActivity"],values["Duration"]],callback);
    };
    this.update = function(key, values, callback){
        const querry = "update data set IdData = ?, Time = ?, Cardio = ?, Latitude = ?, Longitude = ?, Altitude = ?, PreviousData = ?, TheActivity = ? where Duration = ?";
        db.all(querry,[values["IdData"], values["Time"], values["Cardio"], values["Latitude"], values["Longitude"], values["Altitude"], values["PreviousData"], values["TheActivity"], values["Duration"]],callback);
    };
    this.delete = function(key, callback){
        const query = "delete from data where IdData = ? ";
        db.all(query,[key],callback);
    };
    this.findByKey = function(key, callback){
        const query = "select * from data where IdData = ? ";
        db.all(query,[key],callback); 
        
    };
};
const dataDAO = new DataDAO();
module.exports = dataDAO;
