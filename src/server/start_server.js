const mongoose = require('mongoose');
const app = require('./server.js');
require('dotenv').config();

mongoose.connect(process.env.DB_URL, {
  useMongoClient: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('connected db');
  app.listen(8080, () => console.log('on 8080'));
});
