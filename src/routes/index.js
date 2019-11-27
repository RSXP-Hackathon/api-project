var express = require('express');
// var app = express();
var router  = express.Router();


// Require controller modules.
var user_routes = require("./userRoutes");
var company_routes = require("./companyRoutes");
var mentor_routes = require("./mentorRoutes");
var event_routes = require("./eventRoutes");
var module_routes = require("./moduleRoutes");
var lesson_routes = require("./lessonRoutes");

// Default route.
router.get('/', function(req, res){
    res.json({"success": true, "msg": "Node RESTfull API 0.0.1"});
});

// User routes.
router.use('/user', user_routes);

// Company routes.
router.use('/company', company_routes);

// Mentor routes.
router.use('/mentor', mentor_routes);

// Mentor routes.
router.use('/event', event_routes);

// Module modules.
router.use('/module', module_routes);

// Module lesson.
router.use('/lesson', lesson_routes);

// Error route.
router.get("*", function(req, res){
    res.json({"success": false, "msg": "Esta rota não foi encontrada."});
});

module.exports = router;