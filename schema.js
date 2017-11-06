const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const users = mongoose.model('Users', usersSchema);

module.exports = users;
