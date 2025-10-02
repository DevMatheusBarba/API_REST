import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
<<<<<<< HEAD:app.js
import cors from 'cors';
import helmet from 'helmet';
import home from './src/routes/home';
import user from './src/routes/user';
import token from './src/routes/token';
=======
import home from './routes/home';
import user from './routes/user';
import token from './routes/token';
import aluno from './routes/aluno';
import foto from './routes/foto';
>>>>>>> 5225769aaa8cd1df51a9ae1329442744474d149f:src/app.js

const whiteList = [
  'https://api-escola.duckdns.org',
  'localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class APP {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(cors(corsOptions));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/tokens', token);
    this.app.use('/users/', user);
    this.app.use('/alunos/', aluno);
    this.app.use('/fotos/', foto);
  }
}

export default new APP().app;
