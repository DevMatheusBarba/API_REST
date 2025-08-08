import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequire from '../middlewares/loginRequire';

const router = new Router();

router.post('/', UserController.create);
router.get('/', loginRequire, UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;
