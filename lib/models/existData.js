const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  local_time: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('DataSchema', dataSchema);
