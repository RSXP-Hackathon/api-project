var express = require('express');
var router  = express.Router();

// Require controller modules.
var lesson_controller = require("../controllers/lessonController");

// Lesson routes.
router.get('/', lesson_controller.list);
router.post('/', lesson_controller.create);
router.get('/:id', lesson_controller.find);
router.put('/:id', lesson_controller.update);
router.delete('/:id', lesson_controller.delete);

module.exports = router;