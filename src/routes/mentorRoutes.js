var express = require('express');
var router  = express.Router();

// Require controller modules.
var mentor_controller = require("../controllers/mentorController");

// Mentor routes.
router.get('/', mentor_controller.list);
router.post('/', mentor_controller.create);
router.get('/:id', mentor_controller.find);
router.put('/:id', mentor_controller.update);
router.delete('/:id', mentor_controller.delete);

module.exports = router;