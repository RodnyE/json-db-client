
const { InsertOneOperation } = require("./operations/insert");
const { DeleteOneOperation } = require("./operations/delete");
const { FindOneOperation } = require("./operations/find");

/**
 * Class to represent a Json Collection 
 */
class Collection {
    constructor (db, collectionName) {
        this.db = db;
        this.client = this.db.client;
        this.databaseName = this.db.databaseName;
        this.collectionName = collectionName;
    } 
    
    /**
     * Helper to execute a RequestOperation
     * 
     * @param {RequestOperation.constructor} Operation - operation to execute
     * @param {Object} body - body data to execution 
     */
    async _exe (Operation, body) {
        let operation = new Operation(
            this.client, 
            { collection: this }
        );
        return await operation.execute(body);
    }
    
    /**
     * Insert one item
     */
    async insertOne (doc) {
        await this._exe(
            InsertOneOperation, 
            doc,
        );
    }
    
    /**
     * Find one item
     */
    async findOne (query) {
        let res = await this._exe(
            FindOneOperation, 
            query
        );
        
        return res.body.data; 
    } 
    
    /**
     * Delete one item
     */
    async deleteOne (query) {
        let res = await this._exe(
            DeleteOneOperation, 
            query,
        );
        return res.body.data; 
    }  
}

module.exports = {
    Collection,
}