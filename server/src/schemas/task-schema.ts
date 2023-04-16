import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ITask } from 'src/interfaces/task-interface';
import { TodoListModel } from './todolist-schema';

@Table
export class TaskModel extends Model<ITask> {
  @ForeignKey(() => TodoListModel)
  @Column
  todoListId: number;

  @Column
  taskName: string;

  @Column
  taskDescription: string;
}
