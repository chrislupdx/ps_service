const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  steps_distance: {
    type: Array,
    required: true
  },
  productive_min: {
    type: Array,
    required: true
  },
  commits: {
    type: Array,
    required: true
  },
  sleep: {
    type: Array,
    required: true
  },
  tracks: {
    type: Array,
    required: true
  }

});

module.exports = mongoose.model('DataSchema', dataSchema);
