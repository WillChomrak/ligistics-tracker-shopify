// Mongo
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://shopify-admin:Ud6SV0SLK3dJCD6E@logistics-tracker-db.cynnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

let dbConnection;

const conn = {
    connectToServer: async function(callback) {
        client.connect((err, db) => {
            if (err || !db) {
                return callback(err);
            }
            dbConnection = db.db('Logistics_Tracker');
            console.log("connectToServer: " + dbConnection)
            return callback();
        });
    },
    getDatabase: function() {
        console.log("getDataBase: " + dbConnection)
        return dbConnection;
    }
}

module.exports = conn;