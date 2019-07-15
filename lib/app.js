const express = require('express');
const app = express();
// const getToken = require('../lib/services/getToken');
// const getExistObject = require('../lib/services/getExistObject');
const getAttr = require('../lib/services/getSpecificAttr');
app.use(express.json());

app.use('/', require('./routes/gather'));

getAttr();

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
