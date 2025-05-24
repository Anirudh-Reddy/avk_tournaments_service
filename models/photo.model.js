const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  image: { type: String, required: true }, // base64 string
  caption: { type: String, default: '' },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Photo', photoSchema);
