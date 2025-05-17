const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  players: [
    {
      type: String,
      required: true,
      trim: true
    }
  ],
  sport: {
    type: String,
    required: true,
    enum: ['Volleyball', 'Cricket', 'Football', 'Badminton'], // expandable
    default: 'Volleyball'
  },
  points: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);
