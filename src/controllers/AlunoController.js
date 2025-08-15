import Aluno from '../models/aluno';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({ attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'] });
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
      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(400).json({ error: 'Aluno não encontrado' });

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

  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: 'ID não informado' });
      const aluno = await Aluno.findByPk(id);
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
      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: 'Aluno não encontrado' });

      await aluno.destroy();

      return res.json('Aluno deletado com sucesso');
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }
}

export default new AlunoController();
