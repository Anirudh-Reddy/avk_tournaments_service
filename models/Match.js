const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  teamA: {
    type: String,
    required: true
  },
  teamB: {
    type: String,
    required: true
  },
  scoreA: {
    type: Number,
    default: 0
  },
  scoreB: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  sport: {
    type: String,
    default: 'Volleyball'
  },
  status: {
    type: String,
    default: 'Scheduled',
    enum: ['Scheduled', 'Ongoing', 'Completed', 'Cancelled'],
  }
});

module.exports = mongoose.model('Match', matchSchema);
