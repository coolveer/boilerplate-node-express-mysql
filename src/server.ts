import * as config from './config';
import connection from './connection';

(async () => {
  await config.initiate();
})();

import App from './app';
import UserController from './controllers/user.controller';

const app = new App([new UserController()]);

connection
  .sync()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err: Error) => {
    console.log('Error', err);
  });

app.listen();
