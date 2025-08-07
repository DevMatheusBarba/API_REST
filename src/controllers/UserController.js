import Users from '../models/user';

class HomeController {
  async index(req, res) {
    const newUsers = await Users.create({
      nome: 'Matheus',
      email: 'matheus.silva@gmail.com',
      password: '123456',
    });
    res.json(newUsers);
  }
}

export default new HomeController();
