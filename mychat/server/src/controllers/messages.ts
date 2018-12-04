import { User } from '../models/user';
import * as express from 'express';
import { UsersRepository, usersRepositoryInstance } from '../storage/users-repository';
import { ApiResponse } from '../models/api-response';
import { Message } from '../models/message';
import { MessagesRepository, messagesRepositoryInstance } from '../storage/messages-repository';
import { MessageRequest } from '../models/message-request';

class MessagesController {

  constructor(private usersRepository: UsersRepository, private messagesRepository: MessagesRepository) {
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
    const messageRequest: MessageRequest = req.body;

    if (messageRequest !== null && messageRequest !== undefined && typeof messageRequest === 'object' &&
      typeof messageRequest.text === 'string' && messageRequest.text !== '' &&
      typeof messageRequest.userName === 'string' && messageRequest.userName !== '' &&
      typeof messageRequest.userSecret === 'string' && messageRequest.userSecret !== '') {
      // Valid request
      try {
        const authenticated: boolean = await this.usersRepository.exists(messageRequest.userName, messageRequest.userSecret);
        if (authenticated) {
          // Valid user/secret combination
          const user: User = await this.usersRepository.find(messageRequest.userName);
          const messageToCreate: Message = new Message();
          messageToCreate.date = new Date();
          messageToCreate.text = messageRequest.text;
          messageToCreate.userName = messageRequest.userName;
          messageToCreate.profileImageUrl = user.profileImageUrl;
          await this.messagesRepository.create(messageToCreate);
          const apiResponse: ApiResponse<boolean> = new ApiResponse<boolean>();
          apiResponse.data = true;
          apiResponse.error = null;
          res.status(201).json(apiResponse);
        } else {
          // Wrong user/secret combination
          const apiResponse: ApiResponse<boolean> = new ApiResponse<boolean>();
          apiResponse.data = false;
          apiResponse.error = "Cannot create new message: Wrong user/secret combination supplied";
          res.status(500).json(apiResponse);
        }
      } catch (err) {
        // Failed to create message
        const apiResponse: ApiResponse<boolean> = new ApiResponse<boolean>();
        apiResponse.data = false;
        apiResponse.error = err.message;
        res.status(500).json(apiResponse);
      }
    } else {
      // Invalid message supplied
      const apiResponse: ApiResponse<boolean> = new ApiResponse<boolean>();
      apiResponse.data = false;
      apiResponse.error = "Cannot create new message: Invalid message supplied";
      res.status(500).json(apiResponse);
    }
  }
}

export default new MessagesController(usersRepositoryInstance, messagesRepositoryInstance);
