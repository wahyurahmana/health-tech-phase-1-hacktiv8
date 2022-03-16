const router = require("express").Router();
const Controller = require("express").Router();
router.get("/", Controller.findAll);
router.get("/addPatient", (req, res) => {
  res.send("Hello ini di pasien!");
});
router.post("/addPatient", (req, res) => {
  res.send("Hello ini di pasien!");
});
router.get("/:id/updatePatient", (req, res) => {
  res.send("Hello ini di pasien!");
});
router.post("/:id/updatePatient", (req, res) => {
  res.send("Hello ini di pasien!");
});
module.exports = router;
