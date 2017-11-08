const jwt = require('jsonwebtoken');
const users = require('../../../schema.js');
require('dotenv').config();

module.exports = async ({ body }, res) => {
  try {
    const user = await users.find({ username: body.username });
    const password = await jwt.sign(body.password, process.env.SECRET);
    if (user.length === 0) {
      res.send({ error: 'Wrong username' });
    } else if (password !== user[0].password) {
      res.send({ error: 'Wrong password' });
    } else {
      res.cookie('token', password, { maxAge: 604800000 });
      res.cookie('username', user[0].username, { maxAge: 604800000 });
      res.send({});
    }
  } catch (err) {
    res.send({ error: 'Something went wrong please try again' });
  }
};
