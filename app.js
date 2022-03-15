const express = require("express");
const poly = require("./routes/poly");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/poly", poly);

app.listen(port, () => {
  console.log(`love you ${port}`);
});
