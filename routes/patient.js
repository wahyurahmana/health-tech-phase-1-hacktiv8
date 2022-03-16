const route = require("express").Router();
const Controller = require("../controllers/patientController.js");
route.get("/", Controller.findAll);
route.get("/addPatient", Controller.formPatient);
route.post("/addPatient", Controller.addPatient);
route.get("/:id/editPatient", Controller.formEdit);
route.post("/:id/editPatient", Controller.editPatient);
module.exports = route;
