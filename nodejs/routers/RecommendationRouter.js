import express from 'express';
import RecommendationController from '../controllers/RecommendationController.js';

const router = express.Router();

// מסלול ההמלצות
router.post('/', RecommendationController.getRecommendationsHandler);

export default router;
