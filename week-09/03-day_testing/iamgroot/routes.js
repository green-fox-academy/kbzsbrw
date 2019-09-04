const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let message = req.query.message;
  res.send({
    received: message,
    translated: 'I am groot'
  });
});

module.exports = app;
