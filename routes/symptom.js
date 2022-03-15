const router = require("express").Router();
const symptompController = require('../controllers/symptomController.js')

router.get("/", symptompController.home);
router.get("/add", symptompController.getAddForm);
router.post("/add", symptompController.addForm);
router.get("/edit/:id", symptompController.getEditForm);
router.post("/edit/:id", symptompController.editForm);
router.get("/delete/:id", symptompController.deleteDisease);

module.exports = router;
