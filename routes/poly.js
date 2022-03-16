const router = require("express").Router();
const Controller = require("../controllers/polyController");
router.get("/", Controller.findAll);
router.get("/addPoly", Controller.formPoly);
router.post("/addPoly", Controller.addPoly);
router.get("/:id/updatePoly", Controller.formEdit);
router.post("/:id/updatePoly", Controller.addEdit);
router.get("/:id/delete", Controller.delete);

module.exports = router;
