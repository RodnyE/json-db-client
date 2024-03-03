
const { RequestOperation } = require("./operation");

/**
 * Create a collection from database
 */
class CreateCollectionOperation extends RequestOperation {
    
    /**
     * @param {DatabaseClient} client
     * @param {Object} config - configure operation
     * @param {Db} config.db - database to insert collection
     */
    constructor (client, config) {
        super(client, {
            method: "POST",
            path: "/databases/" + config.db.databaseName + "/collections"
        });
    }
    
    /** 
     * @method execute
     * 
     * @param {Object} body
     * @param {string} body.name - collection name to create
     */
    // ...
}

module.exports = {
    CreateCollectionOperation,
}