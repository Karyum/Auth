const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./controllers/index');

const app = express();

app.use(express.static(path.resolve(__dirname, '../..', 'public')));
app.use(bodyParser.json());

app.use(router);

module.exports = app;
