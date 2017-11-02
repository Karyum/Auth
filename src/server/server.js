const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../..', 'public')));
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, '../..', 'index.html')));

app.listen(8080, () => console.log('ONN 8080'));
