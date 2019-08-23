"use strict";

//initialize here:
const PORT = 5000;
const databaseName = "loginform";
const databasePassword ="password1234"
const express = require("express");
const app = express();
app.use(express.json());
const mysql = require("mysql");
app.use(express.static("public"));

//server with SQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: databasePassword,
  database: databaseName
});

app.use(express.static("assets"));
connection.connect(err => {
  if (err) {
    console.log("error connecting with the database");
    console.log(err.message);
    return;
  }
  console.log("database connection is established");
});

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
//sql query
app.get("/books/", (req, res) => {
  connection.query("select * from",
    (err, rows) => {
      if (err) {
        console.log(err.message);
      }
      res.send(rows);
    }
  );
});
app.post('/send', (req, res) => {
  const { result } = req.body;
  const query = `insert into users(username,password) values(?, ?);`;
  console.log(req.body);
  connection.query(query, [req.body.username, req.body.password], (err, result) => {
    if(err === null) {
      res.sendStatus(201);
    }
    else {
      console.log(err);
      res.sendStatus(500);
    }
  });
});
//listen
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));