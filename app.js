const express = require("express");
const app = express();
const port = 3000;
const session = require("express-session");

const disease = require("./routes/disease.js");
const symptom = require("./routes/symptom.js");
const symptomDisease = require("./routes/symptomDisease.js");
const patient = require("./routes/patient.js");
const auth = require("./routes/auth.js");
const homeController = require("./controllers/homeController.js");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "supercellAdventures",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
);

app.use("/public", express.static("public"));
app.get("/", homeController.home);
app.use("/disease", disease);
app.use("/symptom", symptom);
app.use("/symptomDisease", symptomDisease);
app.use("/patient", patient);
app.use("/auth", auth);

app.listen(port, () => {
  console.log(`love you ${port}`);
});
