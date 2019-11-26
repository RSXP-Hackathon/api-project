var express = require('express');
var router  = express.Router();

// Require controller modules.
var user_controller = require("../controllers/userController");

// User routes.
router.get('/', user_controller.list);
router.post('/', user_controller.create);
router.get('/:id', user_controller.find);
router.put('/:id', user_controller.update);
router.delete('/:id', user_controller.delete);

module.exports = router;