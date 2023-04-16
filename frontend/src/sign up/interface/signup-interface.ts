export interface IUser extends IUserContextValue {
  password: string;
}

export interface IUserContextValue {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
