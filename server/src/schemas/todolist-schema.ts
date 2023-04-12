import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ITodoList } from 'src/interfaces/todo-list-interface';
import { UserModel } from './user-schema';

@Table
export class TodoListModel extends Model<ITodoList> {
  @ForeignKey(() => UserModel)
  @Column
  userId: number;

  @Column
  title: string;
}
