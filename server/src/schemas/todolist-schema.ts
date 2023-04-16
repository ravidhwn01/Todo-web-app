import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ITodoList } from 'src/interfaces/todo-list-interface';
import { UserModel } from './user-schema';
import { TaskModel } from './task-schema';

@Table
export class TodoListModel extends Model<ITodoList> {
  @ForeignKey(() => UserModel)
  @Column
  userId: number;

  @Column
  title: string;

  @HasMany(() => TaskModel)
  tasks: TaskModel[];
}
