import { Column, Model, Table } from 'sequelize-typescript';
import { IUser } from 'src/interfaces/user-interface';

@Table
export class UserModel extends Model<IUser> {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;
}
