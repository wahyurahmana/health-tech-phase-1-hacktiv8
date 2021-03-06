const router = require("express").Router();
const authController = require('../controllers/authController.js')
const isLoggedInTrue = require('../middlewares/isLoggedInTrue.js')
const isLoggedInFalse = require('../middlewares/isLoggedInFalse.js')

router.get('/register',isLoggedInFalse, authController.getRegister)
router.post('/register',isLoggedInFalse, authController.register)
router.get('/login',isLoggedInFalse, authController.getlogin)
router.post('/login',isLoggedInFalse, authController.login)
router.get('/logout',isLoggedInTrue, authController.logout)
module.exports = router;