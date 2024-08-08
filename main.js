const express = require("express");
const app = express();
const port = 3000;

app.get("/a", (req, res) => {
  res.send({ msg: "hello" });
});
app.get("/b", (req, res) => {
  res.send("Hello World2");
});
app.get("/c", (req, res) => {
  res.status(201).send({ msg: "hello janu" });
});
app.get("/api/userdata", (req, res) => {
  res.status(201).send([
    { id: 1, username: "ashok", displayname: "ash" },
    { id: 2, username: "jack", displayname: "ash" },
    { id: 3, username: "oggy", displayname: "ash" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
