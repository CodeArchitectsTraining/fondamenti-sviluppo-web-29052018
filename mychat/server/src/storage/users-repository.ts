import { User } from "../models/user";

export class UserRepository {

  private users: User[];

  constructor() {
    this.users = [];
  }

  public async find(name: string): Promise<User> {
    return await Promise.resolve(this.users.find(u => u.name === name));
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

export const userRepositoryInstance: UserRepository = new UserRepository();
