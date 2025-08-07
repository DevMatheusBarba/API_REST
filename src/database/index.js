import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/aluno';
import User from '../models/user';

const connection = new Sequelize(databaseConfig);

const models = [Aluno, User];

models
  .forEach((model) => model.init(connection));
