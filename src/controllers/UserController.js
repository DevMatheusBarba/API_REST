import User from '../models/user';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID não informado'] });
      const user = await User.findByPk(id);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });

      user.update(req.body);

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID não informado'] });
      const user = await User.findByPk(id);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });

      await user.destroy();

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }
}

export default new UserController();
