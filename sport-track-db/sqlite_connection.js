function initializeConnection(filename){
    let database = new sqlite3.Database(filename);
    module.exports = database;
}