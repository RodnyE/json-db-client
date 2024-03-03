
const { Collection } = require("./collection");
const { CreateCollectionOperation } = require("./operations/create_collection");

/**
 * Class represent a Json Database
 */
class Db {
    
    /**
     * @param {DatabaseClient} client - shared client
     * @param {string} databaseName 
     */
    constructor (client, databaseName) {
        this.client = client; 
        this.databaseName = databaseName; 
    }
    
    /**
     * Get a collection
     */
    collection (name) {
        let collection = new Collection(this, name);
        return collection;
    }
    
    /**
     * Create a collection
     */
    async createCollection (name) {
        let operation = new CreateCollectionOperation(this.client, {
            db: this,
        });
        
        await operation.execute({ name });
    }
}

module.exports = {
    Db,
};