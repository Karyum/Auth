const jwt = require('jsonwebtoken');
require('dotenv').config();
const users = require('../../../schema.js');

module.exports = async ({ body }, res) => {
  try {
    console.log(body);
    const userQuery = await users.find({ username: body.username });
    if (userQuery[0].username) res.send(userQuery[0]);
  } catch (err) {
    console.log(err);
    res.send({ error: 'Invalid token' });
  }
};
