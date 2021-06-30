const express = require("express");
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.post("/home", function (req, res) {
  res.send("POST() METHOD ACTIVATED");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
