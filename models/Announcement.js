const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true
  },
  sport: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    default: 'System'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Announcement', announcementSchema);
