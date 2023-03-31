import { Sequelize } from 'sequelize-typescript';
import models from './models';

const connection = new Sequelize({
  dialect: 'mysql',
  host: process.env.HOST_NAME || '127.0.0.1',
  username: process.env.USER_NAME || 'malay',
  password: process.env.PASSWORD || 'admin@123',
  database: process.env.DBNAME || 'typec_sql',
  models: models,
  pool: {
    max: 20,
    min: 0,
    acquire: 60000,
    idle: 10000
  }
});

export default connection;
