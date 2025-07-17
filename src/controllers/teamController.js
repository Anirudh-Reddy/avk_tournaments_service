import Team from '../models/Team.js';

// GET all teams
export const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().sort({ createdAt: -1 });
    res.json(teams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create a new team
export const createTeam = async (req, res) => {
  try {
    const { name, players, sport } = req.body;

    if (!name || !players || players.length === 0) {
      return res.status(400).json({ error: 'Team name and players are required' });
    }

    const team = await Team.create({ name, players, sport });
    res.status(201).json(team);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update team points
export const updateTeamPoints = async (req, res) => {
  try {
    const { id } = req.params;
    const { points } = req.body;

    const team = await Team.findByIdAndUpdate(id, { points }, { new: true });

    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    res.json(team);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
