const express = require('express');
const app = express();
let caliber25 = 0;
let caliber30 = 0;
let caliber50 = 0;
let shipstatus = 'empty';
let ready = false;

app.get('/rocket', (req, res) => {
  res.send({
    caliber25: caliber25,
    caliber30: caliber30,
    caliber50: caliber50,
    shipstatus: shipstatus,
    ready: ready
  });
});
app.get('/rocket/fill', (req, res) => {
  if (req.query.caliber === '.50') {
    caliber50 += req.query.caliber;
  }
  res.send({
    caliber25: caliber25,
    caliber30: caliber30,
    caliber50: caliber50,
    shipstatus: shipstatus,
    ready: ready
  });
});

module.exports = app;
