import BaseController from './BaseController.js';
import RecommendationService from '../services/RecommendationService.js';

class RecommendationController extends BaseController {
    constructor() {
        super(RecommendationService); // מעביר את ה-Service ל-BaseController
    }

    async getRecommendationsHandler(req, res, next) {
        try {
            const { cart } = req.body; 
            const recommendations = await this.service.getRecommendations(cart); // קריאה ל-Service
            return res.status(200).json(recommendations);
        } catch (e) {
            next(e); 
        }
    }
}

export default new RecommendationController();
