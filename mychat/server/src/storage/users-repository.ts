import { User } from "../models/user";

export class UsersRepository {

  private users: User[];

  constructor() {
    this.users = [];
  }

  public async find(name: string): Promise<User> {
    return await Promise.resolve(this.users.find(u => u.name === name));
  }

  public async exists(name: string, secret: string): Promise<boolean> {
    return await Promise.resolve(this.users.some(u => u.name === name && u.secret === secret));
  }

  public async create(user: User): Promise<void> {
    const existingUser: User = await this.find(user.name);
    if (existingUser !== undefined) {
      throw new Error("An user with this name already exists");
    } else {
      this.users.push(user);
    }

    await Promise.resolve();
  }
}

export const usersRepositoryInstance: UsersRepository = new UsersRepository();
