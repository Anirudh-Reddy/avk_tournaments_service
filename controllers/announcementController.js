const Announcement = require('../models/Announcement');

// GET all announcements
exports.getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.json(announcements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create announcement
exports.createAnnouncement = async (req, res) => {
  try {
    const { message, sport, createdBy } = req.body;

    if (!message || !sport) {
      return res.status(400).json({ error: 'Message and sport are required' });
    }

    const announcement = await Announcement.create({ message, sport, createdBy });
    res.status(201).json(announcement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
