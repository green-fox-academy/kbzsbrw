const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let message = req.query.message;
    console.log(message);
    });

module.exports = app;
