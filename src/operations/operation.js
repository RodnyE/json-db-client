
const { 
    DatabaseNetworkError, 
    DatabaseRequestError,
    DatabaseAPIError,
} = require("../error");
const http = require("http");

/**
 * Operation manager to use database API
 */
class RequestOperation {
    
    /**
     * @param {DatabaseClient} client 
     * @param {string} [options.method] - http method
     * @param {string} [options.path] - path in server url
     */
    constructor (client, options = {}) {
        this.requestMethod = options.method || "GET";
        this.requestUrl = client.url + (options.path || "/");
    }
    
    
    /**
     * Send request 
     * 
     * @param {Object} [requestBody] 
     * @return {Promise}
     */
    execute (requestBody) {
        return new Promise((resolve, reject) => {
            const options = {
                //url: this.requestUrl,
                method: this.requestMethod, 
            };
            
            if (requestBody) options.headers = {
                "Content-Type": "application/json"
            };
        
            const req = http.request(this.requestUrl, options, (res) => {
                res.setEncoding('utf8');
            
                res.body = '';
                res.on('data', (chunk) => {
                    res.body += chunk;
                });
      
                res.on('end', () => {
                    let contentType = res.headers["content-type"];
                    if (contentType.indexOf("application/json") !== -1) {
                        res.body = JSON.parse(res.body);
                    }
                    
                    // check HTTP status
                    if (res.statusCode !== 200) {
                        return reject(new DatabaseNetworkError("Problem with request, status code " + res.statusCode));
                    }
                    
                    // check API request
                    if (!res.body.status) {
                        res.apiError = new DatabaseAPIError(res.body.data.message);
                        console.error(res.apiError);
                    }
                    else res.apiError = null;
                
                    resolve(res); 
                });
            });
    
            req.on('error', (error) => {
                throw new DatabaseRequestError(error);
            });
     
            if (requestBody) {
                req.write(JSON.stringify(requestBody));
            }
            
            req.end();
        });
    }
}

module.exports = {
    RequestOperation,
}