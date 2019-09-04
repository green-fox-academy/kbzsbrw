const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  if (req.query.time === '0') {
    res.status(401)
    res.send({ error: 'no time, no speed' });
  } else if (req.query.distance && req.query.time) {
    res.send({
      distance: req.query.distance,
      time: req.query.time,
      speed: req.query.distance / req.query.time
    });
  } else {
    res.sendStatus(400);
  }
});

module.exports = app;
