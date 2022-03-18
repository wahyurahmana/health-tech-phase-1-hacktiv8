const router = require("express").Router();
const symptompController = require('../controllers/symptomController.js')

router.use((req, res, next) => {
    if (req.session.role === 'dokter') {
        next()
    }else{
        res.redirect('/')
    }
})

router.get("/", symptompController.home);
router.get("/add", symptompController.getAddForm);
router.post("/add", symptompController.addForm);
router.get("/edit/:id", symptompController.getEditForm);
router.post("/edit/:id", symptompController.editForm);
router.get("/delete/:id", symptompController.deleteDisease);
router.get("/detail/:id", symptompController.detail)
module.exports = router;
