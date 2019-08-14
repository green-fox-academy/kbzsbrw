"use strict";

const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");
app.use(express.static("assets"));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/doubling", (req, res) => {
  let response = {};
  if (req.query.input !== undefined) {
    response = {
      received: req.query.input,
      result: req.query.input * 2
    };
  } else {
    response = {
      error: "Please provide input"
    };
  }
  res.send(response);
});
app.listen(PORT, () => {
  console.log(`I am listening on port ${PORT}`);
});
