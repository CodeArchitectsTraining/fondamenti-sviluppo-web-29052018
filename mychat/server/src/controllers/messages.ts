import { User } from '../models/user';
import * as express from 'express';
import { UserRepository, userRepositoryInstance } from '../storage/users-repository';
import { ApiResponse } from '../models/api-response';
import { Message } from '../models/message';
import { MessagesRepository } from '../storage/messages-repository';

class MessagesController {

  constructor(private messagesRepository: MessagesRepository) {
  }

  public getMessages = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
    try {
      // Getting messages
      const messages: Message[] = await this.messagesRepository.getAll();
      const apiResponse: ApiResponse<Message[]> = new ApiResponse<Message[]>();
      apiResponse.data = messages;
      apiResponse.error = null;
      res.status(200).json(apiResponse);
    } catch (err) {
      // Failed to get messages
      const apiResponse: ApiResponse<Message[]> = new ApiResponse<Message[]>();
      apiResponse.data = null;
      apiResponse.error = err.message;
      res.status(500).json(apiResponse);
      next(err);
    }
  }

  public createMessage = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
    const userToCreate: any = req.body;

    if (userToCreate !== null && userToCreate !== undefined && typeof userToCreate === 'object' &&
      typeof userToCreate.name === 'string' && userToCreate.name !== '' &&
      typeof userToCreate.age === 'number' && userToCreate.age > 0 &&
      typeof userToCreate.secret === 'string' && userToCreate.secret !== '') {
      // Valid user supplied
      try {
        await this.messagesRepository.create(userToCreate as User);
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

export default new MessagesController(userRepositoryInstance);
