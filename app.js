const express = require("express");
const disease = require("./routes/disease.js");
const symptom = require("./routes/symptom.js");
const symptomDisease = require("./routes/symptomDisease.js");
const patient = require("./routes/patient.js");
const homeController = require("./controllers/homeController.js");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", homeController.home);

app.use("/disease", disease);
app.use("/symptom", symptom);
app.use("/symptomDisease", symptomDisease);
app.use("/patient", patient);

app.listen(port, () => {
  console.log(`love you ${port}`);
});
