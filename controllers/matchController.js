const Match = require('../models/Match');
const Team = require('../models/Team');

// GET all matches
exports.getAllMatches = async (req, res) => {
  try {
    const matches = await Match.find()
      .populate('teamA teamB')
      .sort({ date: 1 });

    res.json(matches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create new match
exports.createMatch = async (req, res) => {
  try {
    const { teamA, teamB, date, sport, scoreA, scoreB, status } = req.body;
    console.log(req.body)
    if (!teamA || !teamB || !date || !sport) {
      return res.status(400).json({ error: 'All match details are required' });
    }

    const match = await Match.create({
      teamA,
      teamB,
      date,
      sport,
      scoreA: scoreA ?? 0,
      scoreB: scoreB ?? 0,
      status: status ?? 'Scheduled'
    });

    res.status(201).json(match);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// PUT update score
exports.updateMatchScore = async (req, res) => {
  try {
    const { id } = req.params;
    const { scoreA, scoreB, status } = req.body;

    const match = await Match.findByIdAndUpdate(
      id,
      { scoreA, scoreB, status },
      { new: true }
    );

    if (!match) {
      return res.status(404).json({ error: 'Match not found' });
    }

    res.json(match);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
