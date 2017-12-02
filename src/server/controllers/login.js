const bcrypt = require('bcrypt');
const users = require('../../../schema.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async ({ body }, res) => {
  try {
    const user = await users.find({ username: body.username });
    if (user.length === 0) {
      res.send({ error: 'Wrong username' });
    } else {
      const comparision = await bcrypt.compare(body.password, user[0].password);
      if (!comparision) {
        res.send({ error: 'Wrong password' });
      } else {
        const token = await jwt.sign(user[0].username, process.env.JWT_SECRET);
        res.cookie('username', token, { maxAge: 604800000 });
        res.send({});
      }
    }
  } catch (err) {
    res.send({ error: 'Something went wrong please try again' });
  }
};
