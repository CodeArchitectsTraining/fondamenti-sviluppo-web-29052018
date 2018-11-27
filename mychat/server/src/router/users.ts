import UsersController from '../controllers/users';
import { Router } from 'express';
/**
 * @class UsersRouter
 */
export default class UsersRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get('/', UsersController.getUser);
    this.router.post('/', UsersController.createUser);
  }
}
