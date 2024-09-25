import express from 'express';
import ProjectController from '../controllers/ProjectController.js';

const router = express.Router();

router.get('/', ProjectController.getAll);

router.get('/:id', ProjectController.getById);

router.post('/', ProjectController.add);

router.put('/:id', ProjectController.update);

router.delete('/:id', ProjectController.delete);
export default router;
