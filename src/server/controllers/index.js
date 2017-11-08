const router = require('express').Router();
const path = require('path');

const signup = require('./signup.js');
const login = require('./login.js');
const verify = require('./verify.js');

router.post('/signup', signup);
router.post('/login', login);
router.post('/verify', verify);

router.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, '../../..', 'index.html')));

module.exports = router;
