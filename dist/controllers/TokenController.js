"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) return res.status(401).json({ errors: ['Credenciais inválidas'] });

    const user = await _user2.default.findOne({ where: { email } });

    if (!user || !password) return res.status(401).json({ errors: ['Usuário não encontrado'] });

    if (!(await user.passwordIsValid(password))) return res.status(401).json({ errors: ['Senha invalida'] });

    const { id } = user;
    const token = _jsonwebtoken2.default.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    );

    return res.json({
      token,
      user: { id, email, nome: user.nome },
    });
  }
}

exports. default = new TokenController();
