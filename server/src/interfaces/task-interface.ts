export interface ITask {
  id: number;
  todoListId: number;
  taskName: string;
  taskDescription: string;
  createdAt: Date;
  updatedAt: Date;
}
