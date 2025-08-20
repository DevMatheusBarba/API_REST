"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre [3, 255] caracteres',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre [3, 255] caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },

        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número',
          },
        },
      },
    }, {
      sequelize,
      modelName: 'aluno',
      tableName: 'alunos',
      timestamps: true,
      underscored: true,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.foto, { foreignKey: 'aluno_id', as: 'fotos' });
  }
} exports.default = Aluno;
