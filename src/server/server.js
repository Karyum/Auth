const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./controllers/index');

const app = express();

app.use(express.static(path.resolve(__dirname, '../..', 'public')));
app.use(bodyParser.json());

mongoose.Promise = require('bluebird');

app.use(router);

module.exports = app;
