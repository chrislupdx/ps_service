const express = require('express');
const app = express();

const getSpecificAttrPlural = require('./services/getSpecificAttributesSingular');

app.use(express.json());

app.use('/', require('./routes/gather'));

getSpecificAttrPlural();

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
