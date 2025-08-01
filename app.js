import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import home from './src/routes/home';

class APP {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', home);
  }
}

export default new APP().app;
