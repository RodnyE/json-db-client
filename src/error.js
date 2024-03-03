
/**
 * @public
 * @category Error
 *
 * @remark
 * Only use to extends from others error class
 */
class DatabaseError extends Error {
    /**
     * @param {string | Error} e - error message description
     * @param {name} name - error name
     */
    constructor (e, name) {
        let message = "";
        
        // filter 'e' param 
        if (typeof(e) === "string") {
            message = e;
        }
        else if (e instanceof Error) {
            message = e.message;
        }
        
        super(message);
        this.name = name || "DatabaseError";
    } 
}

/**
 * An error generated by network problems
 */
class DatabaseNetworkError extends DatabaseError {
    constructor (e) {
        super(e, "DatabaseNetworkError");
    }
}

/**
 * An error generated by failed database server request 
 */
class DatabaseRequestError extends DatabaseError {
    constructor (e) {
        super(e, "DatabaseRequestError");
    }
}

/**
 * An error generated when the API is used incorrectly
 */
class DatabaseAPIError extends DatabaseError {
    constructor (e) {
        super(e, "DatabaseAPIError");
    }
}

//
// exports
//
module.exports = {
    DatabaseError,
    DatabaseNetworkError,
    DatabaseAPIError,
    DatabaseRequestError,
}