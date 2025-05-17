const express = require('express');
const router = express.Router();
const {
  getAllMatches,
  createMatch,
  updateMatchScore
} = require('../controllers/matchController');

// GET all matches
router.get('/', getAllMatches);

// POST new match
router.post('/', createMatch);

// PUT update match score & status
router.put('/:id/score', updateMatchScore);

module.exports = router;
