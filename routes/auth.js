const router = require("express").Router();
const authController = require('../controllers/authController.js')

router.get('/register', authController.getRegister)
router.post('/register', authController.register)
router.get('/login', authController.getlogin)
router.post('/login', authController.login)

module.exports = router;