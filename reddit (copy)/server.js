'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const fetch = require('node-fetch');

app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(express.static('views'));
app.use(express.json());

app.listen(PORT, () => console.log(`I am listening on ${PORT}`));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/proba', (req, res) => {
  const json = { posts: [
    {
      title: 'proba',
      timestamp: '1991-01-14'
    },
    {
      title: 'proba2',
      timestamp: '1992-02-28'
    }
  ]};
  res.render('post', { posts: json.posts });
});

