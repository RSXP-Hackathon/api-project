var express = require('express');
var router  = express.Router();

// Require controller modules.
var company_controller = require("../controllers/companyController");

// Company routes.
router.get('/', company_controller.list);
router.post('/', company_controller.create);
router.get('/:id', company_controller.find);
router.put('/:id', company_controller.update);
router.delete('/:id', company_controller.delete);

module.exports = router;