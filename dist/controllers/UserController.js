"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);

class UserController {
  async create(req, res) {
    try {
      const newUser = await _user2.default.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await _user2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await _user2.default.findByPk(id);
      const { nome, email } = user;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await _user2.default.findByPk(req.userId);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });

      await user.update(req.body);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await _user2.default.findByPk(req.userId);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });

      await user.destroy();

      return res.json(null);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }
}

exports. default = new UserController();
