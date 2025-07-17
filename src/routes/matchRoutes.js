import express from 'express';

const router = express.Router();
import { getAllMatches, createMatch, updateMatchScore } from '../controllers/matchController.js'

// GET all matches
router.get('/', getAllMatches);

// POST new match
router.post('/', createMatch);

// PUT update match score & status
router.put('/:id/score', updateMatchScore);

export default router;
