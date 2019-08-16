"use strict";

const express = require("express");
const PORT = 5000;
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password1234",
  database: "bookstore"
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

app.get("/books/", (req, res) => {
  connection.query(
    "select book_name, aut_name, cate_descrip, pub_name, book_price from book_mast inner join author on book_mast.aut_id=author.aut_id inner join category on book_mast.cate_id=category.cate_id inner join publisher on book_mast.pub_id=publisher.pub_id;",
    (err, rows) => {
      if (err) {
        console.log(err.message);
      }
      res.send(rows);
    }
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
