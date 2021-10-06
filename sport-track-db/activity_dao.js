const db = require('./sqlite_connection');
var ActivityDAO = function(){

    this.findAll = function(callback){
        return new Promise(async function(resolve,reject){
            const query = "select * from activity ";
            db.all(query,[],(err,rows)=>{
                if(err)reject(err)
                resolve(rows)
            });
        });
    

    };

    this.findforUser = function(key,callback){
        return new Promise(async function(resolve,reject){
            const query = "select * from activity, user where TheUser = Email ";
            db.all(query,[values["IdActivity"], values["Date"], values["Description"], values["TheUser"], values["MaxCardio"], values["MinCardio"], values["AverageCardio"], values["BegginingTime"],values["Duration"]],(err,rows)=>{
                if(err)reject(err)
                resolve(rows)
            });
        });
    

    };

    this.update = function(key, values, callback){
        return new Promise(async function(resolve,reject){
            const querry = "update activity set IdActivity = ?, Date = ?, Description = ?, TheUser = ?, MaxCardio = ?, MinCardio = ?, AverageCardio = ?, BegginingTime = ?,  Duration = ? where IdActivity = ?";
            db.all(query,[values["IdActivity"], values["Date"], values["Description"], values["TheUser"], values["MaxCardio"], values["MinCardio"], values["AverageCardio"], values["BegginingTime"], values["Duration"], key],(err,rows)=>{
                if(err)reject(err)
                resolve(rows)
            });
        });
    };
    this.delete = function(key, callback){
        return new Promise(async function(resolve,reject){
            const query = "delete from activity where IdActivity = ? ";
            db.all(query,key,(err,rows)=>{
                if(err)reject(err)
                resolve(rows)
            });
        });

    };
    this.findByKey = function(key, callback){
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
