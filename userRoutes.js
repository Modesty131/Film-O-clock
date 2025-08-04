import express from 'express';
import { getProfile, followUser } from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/profile', protect, getProfile);
router.post('/follow/:id', protect, followUser);

export default router;
