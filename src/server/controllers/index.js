const router = require('express').Router();
const path = require('path');

const signup = require('./signup.js');

router.post('/signup', signup);

router.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, '../../..', 'index.html')));

module.exports = router;
