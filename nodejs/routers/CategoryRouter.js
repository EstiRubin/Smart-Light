import express from 'express';
import categoryController from '../controllers/CategoryController.js';

const router = express.Router();

router.get('/', categoryController.getAll);

router.get('/:id', categoryController.getById);

router.post('/', categoryController.add);

router.put('/:id', categoryController.update);

router.delete('/:id', categoryController.delete);

export default router;