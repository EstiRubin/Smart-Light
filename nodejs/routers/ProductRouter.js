import express from 'express';
import productController from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', productController.getAll);
router.get('/search/:name', productController.getBynameOrMKT);

router.get('/category/:category', productController.getProductsByCategory);  // Ensure this points to the correct method
router.get('/:id', productController.getById);
router.post('/', productController.add);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

export default router;
