import { Column, Model, Table } from 'sequelize-typescript';
import { IUsertodoList } from 'src/interfaces/user-todo-interface';

@Table
export class UserTodoModel extends Model<IUsertodoList> {
  @Column
  userId: number;

  @Column
  todoListId: number;
}
