const express = require("express");
const app = express();
const path = require("path");

const hostname = "localhost";
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

console.log(__dirname);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get("/", (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    console.error("Error rendering home page:", err);
    res.status(500).send("Error rendering the home page.");
  }
});

app.post("/uploadFile", (req, res) => {
  try {
  } catch (err) {
    console.error("Error during handling file upload");
    res.status(500).send("Error rendering finance analysis");
  }
});
