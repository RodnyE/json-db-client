
const { RequestOperation } = require("./operation");

/**
 * Create a database
 */
class CreateDatabaseOperation extends RequestOperation {
    
    /**
     * ...
     */
    constructor (client) {
        super(client, {
            method: "POST",
            path: "/databases"
        });
    }
    
    /**
     * @method execute 
     * 
     * @param {Object} body
     * @param {string} body.name - database name 
     */ 
    // ...
}

module.exports = {
    CreateDatabaseOperation,
}