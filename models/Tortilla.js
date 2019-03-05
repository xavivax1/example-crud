'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const tortillaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  special: {
    type: String
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'big']
  },
  creator: {
    type: ObjectId,
    ref: 'User'
  }
});

const Tortilla = mongoose.model('Tortilla', tortillaSchema);

module.exports = Tortilla;
