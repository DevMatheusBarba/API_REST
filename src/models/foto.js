import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Nome original é obrigatório',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Nome do arquivo é obrigatório',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      modelName: 'foto',
      tableName: 'fotos',
      timestamps: true,
      underscored: true,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.aluno, { foreignKey: 'aluno_id' });
  }
}
