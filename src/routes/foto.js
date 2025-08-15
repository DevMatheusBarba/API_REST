import { Router } from 'express';
import multer from 'multer';

import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('foto');
const router = new Router();

router.post('/', upload, fotoController.create);

export default router;
