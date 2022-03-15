const express = require("express");
const poly = require("./routes/poly.js");
const disease = require('./routes/disease.js')
const symptom = require('./routes/symptom.js')
const symptomDisease = require('./routes/symptomDisease.js')

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/poly", poly);
app.use('/disease', disease)
app.use('/symptom', symptom)
app.use('/symptomDisease', symptomDisease)

app.listen(port, () => {
  console.log(`love you ${port}`);
});
