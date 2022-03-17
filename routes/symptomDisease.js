const symptomDiseaseController = require('../controllers/symptomDiseaseController.js')

const router = require("express").Router();

router.use((req, res, next) => {
    if (req.session.role === 'dokter') {
        next()
    }else{
        res.redirect('/')
    }
})

router.get('/', symptomDiseaseController.home)
router.get('/add', symptomDiseaseController.getAddForm)
router.post('/add', symptomDiseaseController.addForm)
router.get('/delete/:id', symptomDiseaseController.destroy)

module.exports = router;