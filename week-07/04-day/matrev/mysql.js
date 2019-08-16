"use strict";

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "password1234",
  database: "test3"
});

conn.query('select name from todos;', (err,rows) => {
console.log(rows);
conn.end();
});