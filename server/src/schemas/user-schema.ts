import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { IUser } from 'src/interfaces/user-interface';
import { TodoListModel } from './todolist-schema';

@Table
export class UserModel extends Model<IUser> {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => TodoListModel)
  todo: TodoListModel;
}
