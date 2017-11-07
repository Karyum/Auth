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
      if (error) res.send(error);
      else res.send('success');
    });
  });
};
