const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0-g7duc.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

var _database

module.exports = {
    connect: function(){
        MongoClient.connect( uri,  { useNewUrlParser: true }, function( err, client ) {
            _db  = client.db('uranai-database');
            return err;
        });
    },

    getDb: function() {
        return _database
    },

    url: uri
}
