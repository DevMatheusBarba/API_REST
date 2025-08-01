import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/aluno';

const connection = new Sequelize(databaseConfig);

const models = [Aluno];

models
  .forEach((model) => model.init(connection));
