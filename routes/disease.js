const router = require("express").Router();
const diseaseController = require('../controllers/diseaseController.js')

router.get("/", diseaseController.home);
router.get("/add", diseaseController.getAddForm);
router.post("/add", diseaseController.addForm);
router.get("/edit/:id", diseaseController.getEditForm);
router.post("/edit/:id", diseaseController.editForm);
router.get("/delete/:id", diseaseController.deleteDisease);

module.exports = router;
