//Set up mongoose connection
var mongoose = require("mongoose");
var database = "base_restful_api";
var host = "127.0.0.1:27017";

mongoose.connect("mongodb://"+host+'/'+database, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
