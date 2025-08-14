import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequire from '../middlewares/loginRequire';

const router = new Router();

// Não existe no projeto real
// router.get('/:id', UserController.show);
router.get('/', UserController.index);

router.post('/', UserController.create);
router.put('/', loginRequire, UserController.update);
router.delete('/', loginRequire, UserController.delete);

export default router;
