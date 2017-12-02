const router = require('express').Router();
const path = require('path');

const signup = require('./signup.js');
const login = require('./login.js');
const verify = require('./verify.js');
const logout = require('./logout.js');

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify', verify);
router.get('/logout', logout);

router.get('/*', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../../..', 'index.html'))
);

module.exports = router;
