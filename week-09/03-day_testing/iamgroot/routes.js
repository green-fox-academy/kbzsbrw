const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if (req.query.message) {
    let message = req.query.message;
    res.send({
      received: message,
      translated: 'I am groot'
    });
  } else {
    res.send({ error: 'no msg bro' });
  }
});

module.exports = app;
