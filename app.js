var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
// var multer = require('multer');
// var session = require('express-session');
var mongoose = require('mongoose');
var routes = require("./src/routes");
var config = require("./src/config");

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "eleva.ml"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors());

app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000);
