
const { RequestOperation } = require("./operation");
const { join: joinPaths } = require("path");

/**
 * Delete one item in collection
 */
class DeleteOneOperation extends RequestOperation {
    
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
                "/delete-one"
            ),
        });
    }
    
    /** 
     * @method execute
     * 
     * @param {Object} query - props to find and remove
     */
    // ...
}

module.exports = {
    DeleteOneOperation,
}