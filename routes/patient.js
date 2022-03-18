const route = require("express").Router();
const Controller = require("../controllers/patientController.js");

route.use((req, res, next) => {
    if (req.session.isLoggedIn) {
        next()
    }else{
        res.redirect('/')
    }
})

route.get("/", Controller.findAll);
route.get("/addPatient", Controller.formPatient);
route.post("/addPatient", Controller.addPatient);
route.get("/:id/editPatient", Controller.formEdit);
route.post("/:id/editPatient", Controller.editPatient);
route.get("/:id/checkUp", Controller.getCheckUp);
route.post("/:id/checkUp", Controller.checkUp);
route.post("/:id/pulang", Controller.pulang);
module.exports = route;