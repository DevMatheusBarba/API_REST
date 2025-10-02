import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = Math.floor(Math.random() * 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      return cb(new multer.MulterError('Somente arquivos .jpg e .png são permitidos'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${aleatorio}${extname(file.originalname)}`);
    },
  }),
};
