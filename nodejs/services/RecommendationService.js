
import Product from '../models/ProductModel.js';
import getRecommendations from '../ai/Recommendation.js';
import BaseService from './BaseService.js';

class RecommendationService extends BaseService{
    async getRecommendations(cart) {
        const allProducts = await Product.find(); // שולף את כל המוצרים מהמאגר
        return getRecommendations(cart, allProducts); // מפעיל את אלגוריתם ההמלצות
    }
}

export default new RecommendationService();