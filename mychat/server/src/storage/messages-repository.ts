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
    const existingUser: User = await this.find(user.name);
    if (existingUser !== undefined) {
      throw new Error("An user with this name already exists");
    } else {
      this.users.push(user);
    }

    await Promise.resolve();
  }
}

export const messagesRepositoryInstance: MessagesRepository = new MessagesRepository();
