
const { Db } = require("./db");
const { CreateDatabaseOperation } = require("./operations/create_database");

/**
 * Class represent a new Database connection
 */
class DatabaseClient {
    constructor (url) {
        this.url = url;
    }
    
    /**
     * Create a new Db instance sharing the current url
     *
     * @param {string} name 
     */
    db (name) {
        let db = new Db(this, name);
        return db;
    }
    
    /**
     * Create a database on server
     */
    async createDatabase (name) {
        let operation = new CreateDatabaseOperation(this);
        
        return await operation.execute({ name });
    }
}

module.exports = {
    DatabaseClient,
}