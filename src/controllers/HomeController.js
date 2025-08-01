import Aluno from '../models/aluno';

class HomeController {
  async index(req, res) {
    const newAluno = await Aluno.create({
      nome: 'Matheus',
      sobrenome: 'Silva',
      email: 'matheus.silva@gmail.com',
      idade: 25,
      peso: 81,
      altura: 175,
    });
    res.json(newAluno);
  }
}

export default new HomeController();
