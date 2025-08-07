import User from '../models/user';

class TokenController {
  async create(req, res) {
    console.log(req.body);
    const { email = '', password = '' } = req.body;

    if (!email || !password) return res.status(401).json({ errors: ['Credenciais inválidas'] });

    const user = await User.findOne({ where: { email } });

    if (!user || !password) return res.status(401).json({ errors: ['Usuário não encontrado'] });

    if (!(await user.passwordIsValid(password))) return res.status(401).json({ errors: ['Senha invalida'] });

    return res.json(user);
  }
}

export default new TokenController();
