var express = require("express");
var bodyParser = require('body-parser');
// var multer = require('multer');
// var session = require('express-session');
var mongoose = require('mongoose');
var routes = require("./src/routes");
var config = require("./src/config");

var app = express();

app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000);
