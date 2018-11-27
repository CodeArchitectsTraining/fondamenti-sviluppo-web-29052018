import * as express from 'express';
import UsersRouter from './users';
import MessagesRouter from './messages';
import { IServer } from '../interfaces/server.interface';

export default class Routes {
  /**
   * @param  {IServer} server
   * @returns void
   */
  static init(server: IServer): void {
    const router: express.Router = express.Router();

    server.app.use('/', router);
    // users
    server.app.use('/users', new UsersRouter().router);
    // messages
    server.app.use('/messages', new MessagesRouter().router);
  }
}
