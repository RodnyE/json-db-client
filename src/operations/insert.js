
const { RequestOperation } = require("./operation");
const { join: joinPaths } = require("path");

/**
 * Insert new document into collection
 */
class InsertOneOperation extends RequestOperation {
    
    /**
     * @param {DatabaseClient} client
     * @param {Object} config - configure operation
     * @param {Collection} config.collection - target collection
     */
    constructor (client, config) {
        let coll = config.collection;
        
        super(client, {
            method: "POST",
            path: joinPaths(
                "/databases", coll.databaseName, 
                "/collections", coll.collectionName,
                "/insert-one"
            ),
        });
    }
    
    /** 
     * @method execute
     * 
     * @param {Object} doc - document to insert
     */
    // ...
}

module.exports = {
    InsertOneOperation,
}