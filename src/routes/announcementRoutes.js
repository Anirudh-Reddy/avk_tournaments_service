import express from 'express';

const router = express.Router();
import {createAnnouncement, getAllAnnouncements} from '../controllers/announcementController.js';

// GET all announcements
router.get('/', getAllAnnouncements);

// POST new announcement
router.post('/', createAnnouncement);

export default router;
