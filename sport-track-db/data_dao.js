const db = require('./sqlite_connection');
var DataDAO = function(){

    this.findAll = function(){
        return new Promise(async function(resolve,reject){
            const query = "select * from data ";
            db.all(query,[],(err,rows)=>{
                if(err)reject(err)
                resolve(rows)
            });
        });
    };
    
    this.findforActivity = function(key){
        return new Promise(async function(resolve,reject){
        const query = "select * from data, user where TheActivity = ?  ";
        db.all(query,key,(err,rows)=>{
            if(err)reject(err)
            resolve(rows)
            });
        });
    };

    this.insert = function(values){
        return new Promise(async function(resolve,reject){
        const querry = "insert into data ( IdData, Time, Cardio, Latitude, Longitude, Altitude, PreviousData, TheActivity ) values (?, ?, ?, ?, ?, ?, ?, ?)";
        db.run(querry,[values["IdData"], values["Time"], values["Cardio"], values["Latitude"], values["Longitude"], values["Altitude"], values["PreviousData"], values["TheActivity"]],(err,rows)=>{
            if(err)reject(err)
            resolve(rows)
            });
        });
        
    };
    this.update = function(key, values){
        return new Promise(async function(resolve,reject){
        const querry = "update data set IdData = ?, Time = ?, Cardio = ?, Latitude = ?, Longitude = ?, Altitude = ?, PreviousData = ?, TheActivity = ? where IdData = ?";
        db.run(querry,[values["IdData"], values["Time"], values["Cardio"], values["Latitude"], values["Longitude"], values["Altitude"], values["PreviousData"], values["TheActivity"],key],(err,rows)=>{
            if(err)reject(err)
            resolve(rows)
            });
        });
    };
    this.delete = function(key){
        return new Promise(async function(resolve,reject){
        const query = "delete from data where IdData = ? ";
        db.run(query,key,(err,rows)=>{
            if(err)reject(err)
            resolve(rows)
            });
        });
    };
    this.findByKey = function(key){
        return new Promise(async function(resolve,reject){
        const query = "select * from data where IdData = ? ";
        db.all(query,key,(err,rows)=>{
            if(err)reject(err)
            resolve(rows)
            });
        });
        
    };
};
const dataDAO = new DataDAO();
module.exports = dataDAO;

