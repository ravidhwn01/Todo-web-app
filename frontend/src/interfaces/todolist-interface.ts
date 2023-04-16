export interface Itodolist {
  id: number;
  userId: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITodoListWithTask {
  id: number;
  userId: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  tasks: Task[];
}

export interface Task {
  id: number;
  todoListId: number;
  taskName: string;
  taskDescription: string;
  createdAt: Date;
  updatedAt: Date;
}
