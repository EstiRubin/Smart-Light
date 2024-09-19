import categoriesController from '../controllers/categoriesController';

const router = express.Router();

router.get('/', categoriesController.getAll);

router.get('/:id', categoriesController.getById);

router.post('/', categoriesController.add);

router.put('/:id', categoriesController.update);

router.delete('/:id', categoriesController.delete);

export default router;