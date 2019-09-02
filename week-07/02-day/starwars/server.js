'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});
app.post('/search', (req, res) => {
  if (req.body !== null) {
    console.log((req.body));
    res.sendStatus(200);
  } else {
    console.log('object is undefined');
  }
});
app.listen(PORT, () => console.log(`I am listening on ${PORT}`));
