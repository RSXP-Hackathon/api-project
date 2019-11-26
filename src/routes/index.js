var express = require('express');
// var app = express();
var router  = express.Router();


// Require controller modules.
var user_routes = require("./userRoutes");

// Default route.
router.get('/', function(req, res){
    res.json({"success": true, "msg": "Node RESTfull API 0.0.1"});
});

// User routes.
router.use('/user', user_routes);

// Error route.
router.get("*", function(req, res){
    res.json({"success": false, "msg": "Esta rota não foi encontrada."});
});

module.exports = router;