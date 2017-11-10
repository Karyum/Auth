const bcrypt = require('bcrypt');
const Users = require('../../../schema.js');
require('dotenv').config();

module.exports = async ({ body }, res) => {
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = new Users({
      username: body.name,
      email: body.email,
      password: hashedPassword
    });
    user.save(error => {
      if (error) {
        if (error.message.indexOf('email') > -1) {
          res.send('The email already exists in our database');
        } else if (error.message.indexOf('username') > -1) {
          res.send('The username already exists in our database');
        }
      } else res.send();
    });
  } catch (err) {
    res.send(err);
  }
};
