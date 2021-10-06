const db = require('./sqlite_connection');
var ActivityDAO = function(){

    this.insert = function(values){
        return new Promise(async function(resolve,reject){
            const query = "insert into activity (IdActivity, Date, Description, TheUser, MaxCardio, MinCardio, AverageCardio, BegginingTime,  Duration ) values (?, ?, ?, ?, ?, ?, ?, ?, ? )";
            db.run(query,[values["IdActivity"], values["Date"], values["Description"], values["TheUser"], values["MaxCardio"], values["MinCardio"], values["AverageCardio"], values["BegginingTime"], values["Duration"]],(err,rows)=>{
                if(err)reject(err)
                resolve(rows)
            });
        });
    };

    this.findAll = function(){
        return new Promise(async function(resolve,reject){
            const query = "select * from activity ";
            db.all(query,[],(err,rows)=>{
                if(err)reject(err)
                resolve(rows)
            });
        });
    };

    this.findforUser = function(key){
        return new Promise(async function(resolve,reject){
            const query = "select * from activity, user where TheUser = ? ";
            db.all(query,[key],(err,rows)=>{
                if(err)reject(err)
                resolve(rows)
            });
        });
    

    };

    this.update = function(key, values){
        return new Promise(async function(resolve,reject){
            const query = "update activity set IdActivity = ?, Date = ?, Description = ?, TheUser = ?, MaxCardio = ?, MinCardio = ?, AverageCardio = ?, BegginingTime = ?,  Duration = ? where IdActivity = ?";
            db.run(query,[values["IdActivity"], values["Date"], values["Description"], values["TheUser"], values["MaxCardio"], values["MinCardio"], values["AverageCardio"], values["BegginingTime"], values["Duration"], key],(err,rows)=>{
                if(err)reject(err)
                resolve(rows)
            });
        });
    };

    this.delete = function(key){
        return new Promise(async function(resolve,reject){
            const query = "delete from activity where IdActivity = ? ";
            db.run(query,key,(err,rows)=>{
                if(err)reject(err)
                resolve(rows)
            });
        });

    };

    this.findByKey = function(key){
        return new Promise(async function(resolve,reject){
            const query = "select * from activity where IdActivity = ? ";
            db.all(query,key,(err,rows)=>{ 
                if(err)reject(err)
                resolve(rows)
            });
        });
        
    };
};
const Activitydao = new ActivityDAO();
module.exports = Activitydao;
