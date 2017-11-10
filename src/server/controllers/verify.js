require('dotenv').config();
const users = require('../../../schema.js');

module.exports = async ({ body }, res) => {
  try {
    console.log(body);
    const userQuery = await users.find({ username: body.username });
    console.log(userQuery);
    if (userQuery[0]) res.send(userQuery[0]);
    else res.send({ error: 'does not exist' })
  } catch (err) {
    console.log(err);
    res.send({ error: 'Invalid token' });
  }
};
