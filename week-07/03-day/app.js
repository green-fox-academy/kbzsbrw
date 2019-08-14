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
app.get("/greeter", (req, res) => {
  let response = {};
  if (req.query.name !== undefined && req.query.title !== undefined) {
    response = {
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${
        req.query.title
      }!`
    };
  } else if (req.query.name === undefined && req.query.title !== undefined) {
    response = {
      error: "Please provide a name!"
    };
  } else if (req.query.name !== undefined && req.query.title === undefined) {
    response = {
      error: "Please provide a title!"
    };
  } else {
    response = {
      error: "Please provide a name and a title!"
    };
  }
  res.send(response);
});
app.get("/appenda/:appended", (req, res) => {
  let response = {};
  if (req.params.appended !== undefined) {
    response = {
      appended: req.params.appended + "a"
    };
    res.send(response);
  } else {
    res.status(404);
  }
});
app.post("/dountil/:action", (req, res) => {
  let response = {};
  if (req.params.action === "sum") {
    response = { result: (req.body.until * (req.body.until + 1)) / 2 };
  } else if (req.params.action === "factor") {
    let sum1 = 1;
    for (let i = 1; i <= req.body.until; i++) {
      sum1 = i * sum1;
    }
    response = { result: sum1 };
  }
  res.send(response);
});
app.post("/login", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
  res.send("ok");
});
app.listen(PORT, () => {
  console.log(`I am listening on port ${PORT}`);
});
