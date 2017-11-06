const jwt = require('jsonwebtoken');
const Users = require('../../../schema.js');
require('dotenv').config();

module.exports = ({ body }, res) => {
  jwt.sign(body.password, process.env.SECRET, (err, result) => {
    if (err) console.log(err);
    const user = new Users({
      username: body.name,
      email: body.email,
      password: result
    });
    user.save(error => {
      if (error) console.log(error);
      else res.redirect('/ohooo');
    });
  });
};
