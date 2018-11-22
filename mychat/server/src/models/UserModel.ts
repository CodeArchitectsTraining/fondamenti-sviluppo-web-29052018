export interface IUserModel extends Document {
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  email: string;
}
