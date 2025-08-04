import express from 'express';
import { searchMovies, getPopular } from '../controllers/movieController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/search', protect, searchMovies);
router.get('/popular', protect, getPopular);

export default router;
