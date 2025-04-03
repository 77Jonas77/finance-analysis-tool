const express = require("express");
const home = require("./pages/home");

const app = express();
const hostname = "localhost";
const port = 8080;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get("/", home);
