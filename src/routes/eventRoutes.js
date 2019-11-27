var express = require('express');
var router  = express.Router();

// Require controller modules.
var event_controller = require("../controllers/eventController");

// Event routes.
router.get('/', event_controller.list);
router.post('/', event_controller.create);
router.get('/:id', event_controller.find);
router.put('/:id', event_controller.update);
router.delete('/:id', event_controller.delete);

module.exports = router;