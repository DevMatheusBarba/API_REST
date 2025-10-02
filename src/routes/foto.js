import { Router } from 'express';

import fotoController from '../controllers/FotoController';
import loginRequire from '../middlewares/loginRequire';

const router = new Router();

router.post('/', loginRequire, fotoController.create);

export default router;
