const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photo.controller');

router.post('/', photoController.uploadPhoto);
router.get('/', photoController.getPhotos);

module.exports = router;
