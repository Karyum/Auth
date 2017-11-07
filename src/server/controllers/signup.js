const jwt = require('jsonwebtoken');
const Users = require('../../../schema.js');
require('dotenv').config();

module.exports = ({ body }, res) => {
  jwt.sign(body.password, process.env.SECRET, (err, result) => {
    if (err) res.send(err);
    const user = new Users({
      username: body.name,
      email: body.email,
      password: result
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
  });
};
