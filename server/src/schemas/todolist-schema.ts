import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { UserModel } from './user-schema';

@Table
export class TodoListModel extends Model {
  @ForeignKey(() => UserModel)
  @Column
  userId: number;

  @Column
  title: string;

  @Column
  description: string;
}
