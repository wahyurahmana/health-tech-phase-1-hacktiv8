const router = require("express").Router();
const authController = require('../controllers/authController.js')

router.use((req, res, next) => {
    if (!req.session.isLoggedIn) {
        next()
    }else{
        res.redirect('/')
    }
})

router.get('/register', authController.getRegister)
router.post('/register', authController.register)
router.get('/login', authController.getlogin)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
module.exports = router;