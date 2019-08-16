"use strict";

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password1234",
  database: "bookstore"
});
connection.connect(err => {
  if (err) {
    console.log("error connecting with the database");
    console.log(err.message);
    return;
  }
  console.log("database connection is established");
});
connection.query("select book_name from book_mast;", (err, rows) => {
  if (err) {
    console.log(err.message);
  }
  res.send(rows);
  connection.end();
});
