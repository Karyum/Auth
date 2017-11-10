const bcrypt = require('bcrypt');
const users = require('../../../schema.js');
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
        res.cookie('username', user[0].username, { maxAge: 604800000 });
        res.send({});
      }
    }
  } catch (err) {
    console.log(err);
    res.send({ error: 'Something went wrong please try again' });
  }
};
