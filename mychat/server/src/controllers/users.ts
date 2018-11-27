import { User } from '../models/user';
import * as express from 'express';
import { UsersRepository, usersRepositoryInstance } from '../storage/users-repository';
import { ApiResponse } from '../models/api-response';

class UsersController {

  constructor(private usersRepository: UsersRepository) {
  }

  public getUser = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
    try {
      const user: User = await this.usersRepository.find(req.query.name);

      if (user !== null && user !== undefined) {
        // Found user
        const apiResponse: ApiResponse<User> = new ApiResponse<User>();
        apiResponse.data = user;
        apiResponse.error = null;
        res.status(200).json(apiResponse);
      } else {
        // User not found
        const apiResponse: ApiResponse<User> = new ApiResponse<User>();
        apiResponse.data = null;
        apiResponse.error = "User not found";
        res.status(404).json(apiResponse);
      }
    } catch (err) {
      // Failed to get user
      const apiResponse: ApiResponse<User> = new ApiResponse<User>();
      apiResponse.data = null;
      apiResponse.error = err.message;
      res.status(500).json(apiResponse);
      next(err);
    }
  }

  public createUser = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
    const userToCreate: User = req.body;

    if (userToCreate !== null && userToCreate !== undefined && typeof userToCreate === 'object' &&
      typeof userToCreate.name === 'string' && userToCreate.name !== '' &&
      typeof userToCreate.age === 'number' && userToCreate.age > 0 &&
      typeof userToCreate.profileImageUrl === 'string' && userToCreate.profileImageUrl !== '' &&
      typeof userToCreate.secret === 'string' && userToCreate.secret !== '') {
      // Valid user supplied
      try {
        await this.usersRepository.create(userToCreate as User);
        const apiResponse: ApiResponse<boolean> = new ApiResponse<boolean>();
        apiResponse.data = true;
        apiResponse.error = null;
        res.status(201).json(apiResponse);
      } catch (err) {
        // Failed to create user
        const apiResponse: ApiResponse<boolean> = new ApiResponse<boolean>();
        apiResponse.data = false;
        apiResponse.error = err.message;
        res.status(500).json(apiResponse);
      }
    } else {
      // Invalid user supplied
      const apiResponse: ApiResponse<boolean> = new ApiResponse<boolean>();
      apiResponse.data = false;
      apiResponse.error = "Cannot create new user: Invalid user supplied";
      res.status(500).json(apiResponse);
    }
  }
}

export default new UsersController(usersRepositoryInstance);
