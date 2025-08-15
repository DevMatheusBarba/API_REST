import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import loginRequire from '../middlewares/loginRequire';

const router = new Router();

router.get('/', AlunoController.index);
router.get('/:id', AlunoController.show);

router.post('/', loginRequire, AlunoController.create);
router.put('/:id', loginRequire, AlunoController.update);
router.delete('/:id', loginRequire, AlunoController.delete);

export default router;
