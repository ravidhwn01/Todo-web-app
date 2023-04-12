import { Column, Model, Table } from 'sequelize-typescript';
import { ITask } from 'src/interfaces/task-interface';

@Table
export class TaskModel extends Model<ITask> {
  @Column
  todoListId: number;

  @Column
  taskName: string;

  @Column
  taskDescription: string;
}
