import express from 'express';

const router = express.Router();

import { getAllTeams,
  createTeam,
  updateTeamPoints } from '../controllers/teamController.js';

// GET all teams
router.get('/', getAllTeams);

// POST new team
router.post('/', createTeam);

// PUT update team points
router.put('/:id/points', updateTeamPoints);

export default router;
