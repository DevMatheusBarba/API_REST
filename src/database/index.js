import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/aluno';
import User from '../models/user';
import Foto from '../models/foto';

const connection = new Sequelize(databaseConfig);

const models = [Aluno, User, Foto];

models
  .forEach((model) => model.init(connection));

models
  .forEach((model) => model.associate && model.associate(connection.models));
