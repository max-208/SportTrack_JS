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
    this.update = function(values){
        return new Promise(async function(resolve,reject){
            const querry = "update user set Email = ?, Name = ?, Surname = ?, BirthDate = ?, Gender = ?, Height = ?, Weight = ?, Password = ? where Email = ? AND Password = ?";
            db.all(querry,[values["Email"], values["Name"], values["Surname"], values["BirthDate"], values["Gender"], values["Height"], values["Weight"], values["Password"], values["OldEmail"],values["OldPassword"]],(err,rows)=>{
                if(err)reject(err);
                resolve(rows)
            });
        });
    };
    this.delete = async function(key){
        return new Promise(async function(resolve,reject){
            const query = "delete from user where Email = ? ";
            db.run(query,key,(err,rows)=>{
                if(err)reject(err);
                resolve(rows)
            });
        });
    };
    this.findByKey = function(email,password){
        return new Promise(async function(resolve,reject){
            const query = "select * from user where Email = ? and Password = ?";
            db.get(query,[email,password],(err,rows)=>{
                if(err)reject(err);
                resolve(rows)
            });
        });
    };
};
const dao = new UserDAO();
module.exports = dao;
