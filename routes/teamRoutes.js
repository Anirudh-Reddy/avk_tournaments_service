const express = require('express');
const router = express.Router();
const {
  getAllTeams,
  createTeam,
  updateTeamPoints
} = require('../controllers/teamController');

// GET all teams
router.get('/', getAllTeams);

// POST new team
router.post('/', createTeam);

// PUT update team points
router.put('/:id/points', updateTeamPoints);

module.exports = router;
