import express from 'express';
import ProjectsController from '../controllers/ProjectsController.js';

const router = express.Router();

router.get('/', ProjectsController.getAll);

router.get('/:id', ProjectsController.getById);

router.put('/:id', ProjectsController.update);

export default router;
