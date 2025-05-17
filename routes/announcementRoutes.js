const express = require('express');
const router = express.Router();
const {
  getAllAnnouncements,
  createAnnouncement
} = require('../controllers/announcementController');

// GET all announcements
router.get('/', getAllAnnouncements);

// POST new announcement
router.post('/', createAnnouncement);

module.exports = router;
