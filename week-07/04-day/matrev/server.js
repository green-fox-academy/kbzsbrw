"use strict";

const mysql = require("mysql");
const express = require("express");

const app = express();

app.get("/todos", (req, res) => {
  conn.query("select name from todos;", (err, rows) => {
    res.send(rows);
  });
});

const conn = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "password1234",
  database: "test3"
});
