const db = require('./sqlite_connection');
var UserDAO = function(){

    this.findAll = async function(){
        return new Promise(async function(resolve,reject){
            const query = "select * from user ";
            db.all(query,[],(err,rows)=>{
                if(err)reject(err);
                resolve(rows)
            });
        });
    };
    
    this.insert = async function(values){
        return new Promise(async function(resolve,reject){
            const querry = "insert into user ( Email, Name, Surname, BirthDate, Gender, Height, Weight, Password ) values (?, ?, ?, ?, ?, ?, ?, ?)";
            db.run(querry,[values["Email"], values["Name"], values["Surname"], values["BirthDate"], values["Gender"], values["Height"], values["Weight"], values["Password"]],(err,rows)=>{
                if(err)reject(err);
                resolve(rows)
            });
        });
    };
    this.update = function(key, values, callback){
        return new Promise(async function(resolve,reject){
            const querry = "update user set Email = ?, Name = ?, Surname = ?, BirthDate = ?, Gender = ?, Height = ?, Weight = ?, Password = ? where Email = ?";
            db.all(querry,[values["Email"], values["Name"], values["Surname"], values["BirthDate"], values["Gender"], values["Height"], values["Weight"], values["Password"], key],(err,rows)=>{
                if(err)reject(err);
                resolve(rows)
            });
        });
    };
    this.delete = async function(key, callback){
        return new Promise(async function(resolve,reject){
            const query = "delete from user where Email = ? ";
            db.run(query,key,(err,rows)=>{
                if(err)reject(err);
                resolve(rows)
            });
        });
    };
    this.findByKey = function(key, callback){
        return new Promise(async function(resolve,reject){
            const query = "select * from user where Email = ? ";
            db.all(query,key,(err,rows)=>{
                if(err)reject(err);
                resolve(rows)
            });
        });
    };
};
const dao = new UserDAO();
module.exports = dao;
