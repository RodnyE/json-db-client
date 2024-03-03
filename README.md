# JSON-db client 
A personal NodeJS client to send request and handle [json-db-server](https://github.com/rodnye/json-db-server) databases.

## Getting started
### Install
Install the github repository directly in your project:
```
npm install json-db-client@github:rodnye/json-db-client
```

### Basic usage
```javascript
const { DatabaseClient } = require("json-db-client");

// Change for your json-db-server URL
const client = new DatabaseClient("http://localhost:3000");

// Get database 
const db = client.db("shop");

// Get collections inside them
const users = db.collection("users");
const posts = db.collection("posts");
const products = db.collection("products");

// Push something
await users.insertOne({
    name: "Ana Cabrera",
    genre: "female",
    age: 57,
    online: true,
});
```