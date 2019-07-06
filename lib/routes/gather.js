const { Router } = require('express');
const DataSchema = require('../models/existData');

module.exports = Router()

  .get('/', (req, res, next) => {
    DataSchema
      .find()
      .then(data => res.send(data))
      .catch(next);
  });

//exist service gets called down
//how do we handle old copies

//exist model
//exist GET route
//token leasing logic
