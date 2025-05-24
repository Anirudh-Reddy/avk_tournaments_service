const Photo = require('../models/photo.model');

exports.uploadPhoto = async (req, res) => {
  const { image, caption } = req.body;
  if (!image) return res.status(400).json({ error: 'Image is required' });

  try {
    const newPhoto = await Photo.create({ image, caption });
    res.status(201).json(newPhoto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ uploadedAt: -1 });
    res.status(200).json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
    