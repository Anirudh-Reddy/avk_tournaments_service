import express from 'express';
const router = express.Router();
import { getPhotos, uploadPhoto } from '../controllers/photoController.js'

router.post('/', uploadPhoto);
router.get('/', getPhotos);

export default router;
