var express = require('express');
var router  = express.Router();

// Require controller modules.
var module_controller = require("../controllers/moduleController");

// Module routes.
router.get('/', module_controller.list);
router.post('/', module_controller.create);
router.get('/:id', module_controller.find);
router.put('/:id', module_controller.update);
router.delete('/:id', module_controller.delete);

module.exports = router;