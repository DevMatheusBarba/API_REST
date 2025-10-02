import multer from 'multer';
import multerConfig from '../config/multer';

import Foto from '../models/foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        const foto = await Foto.create({ originalname, filename, aluno_id });
        const { id, url } = foto;

        return res.json({
          id, originalname, filename, aluno_id, url,
        });
      } catch (error) {
        return res.status(400).json({ errors: ['Aluno não encontrado'] });
      }
    });
  }
}

export default new FotoController();
