const express = require("express");
const app = express();
const port = 3000;

// app.get or app.post or app.put or app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About us");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact me!");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
