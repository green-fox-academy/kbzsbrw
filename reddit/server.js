'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const fetch = require('node-fetch');
const postURL = 'http://secure-reddit.herokuapp.com/simple/posts';

app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(express.static('views'));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});
app.listen(PORT, () => console.log(`I am listening on ${PORT}`));

app.get('/api/result', (req, res) => {
  fetch(postURL, {
    headers: {
      Accept: 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => {
      res.render('post', { posts: json.posts });
    })
    .catch(err => console.log(err));
});

app.get('/submit', (req, res) => {
  res.render('submit');
})
