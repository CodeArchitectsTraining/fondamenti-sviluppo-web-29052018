import { User } from "../models/user";
import { Message } from "../models/message";

export class MessagesRepository {

  private messages: Message[];

  constructor() {
    this.messages = [];
  }

  public async getAll(): Promise<Message[]> {
    return await Promise.resolve(this.messages);
  }

  public async create(message: Message): Promise<void> {
    this.messages.push(message);
    await Promise.resolve();
  }
}

export const messagesRepositoryInstance: MessagesRepository = new MessagesRepository();
