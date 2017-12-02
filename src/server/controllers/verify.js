const users = require('../../../schema.js');
const jwt = require('jsonwebtoken');

module.exports = async ({ cookies }, res) => {
  try {
    const username = await jwt.verify(cookies.username, process.env.JWT_SECRET);
    const userQuery = await users.find({ username });

    if (userQuery[0]) {
      res.send(userQuery[0]);
    } else res.send({ error: 'does not exist' });
  } catch (err) {
    res.send({ error: 'Invalid token' });
  }
};
