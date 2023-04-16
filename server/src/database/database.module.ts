import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskModel } from 'src/schemas/task-schema';
import { TodoListModel } from 'src/schemas/todolist-schema';
import { UserModel } from 'src/schemas/user-schema';
import { UserTodoModel } from 'src/schemas/user-todo-schema';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      password: 'postgres',
      username: 'postgres',
      port: 6000,
      models: [UserModel, TodoListModel, TaskModel, UserTodoModel],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}
