"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _aluno = require('../models/aluno'); var _aluno2 = _interopRequireDefault(_aluno);
var _foto = require('../models/foto'); var _foto2 = _interopRequireDefault(_foto);

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await _aluno2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC']],
        include: {
          model: _foto2.default,
          as: 'fotos',
          attributes: ['id', 'filename', 'url'],
          order: [['id', 'DESC']],
          limit: 1,
        },
      });
      return res
        .json(alunos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'ID não informado' });
      const aluno = await _aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC']],
        include: {
          model: _foto2.default,
          as: 'fotos',
          order: [['id', 'DESC']],
          attributes: ['id', 'filename'],
        },
      });
      if (!aluno) return res.status(400).json({ error: 'Aluno não encontrado' });

      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  async create(req, res) {
    try {
      const aluno = await _aluno2.default.create(req.body);
      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: 'ID não informado' });
      const aluno = await _aluno2.default.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: 'Aluno não encontrado' });

      await aluno.update(req.body);
      const {
        nome, sobrenome, email, idade, peso, altura,
      } = aluno;
      return res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: 'ID não informado' });
      const aluno = await _aluno2.default.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: 'Aluno não encontrado' });

      await aluno.destroy();

      return res.json('Aluno deletado com sucesso');
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }
}

exports. default = new AlunoController();
