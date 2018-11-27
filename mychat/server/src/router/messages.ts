import MessagesController from '../controllers/messages';
import { Router } from 'express';
/**
 * @class MessagesRouter
 */
export default class MessagesRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get('/', MessagesController.getMessages);
    this.router.post('/', MessagesController.createMessage);
  }
}
