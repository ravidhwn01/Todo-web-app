import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { TodoListModel } from 'src/schemas/todolist-schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  private repository: Repository<TodoListModel>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(TodoListModel);
  }

  createTodoList(createTodoDto: CreateTodoDto) {
    return this.repository.create(createTodoDto);
  }

  findAllTodoList() {
    return this.repository.findAll({
      order: [['createdAt', 'desc']],
    });
  }

  findOneTodoList(id: number) {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  updateTodoList(id: number, updateTodoDto: UpdateTodoDto) {
    return this.repository.update(updateTodoDto, {
      where: {
        id,
      },
    });
  }

  deleteTodoList(id: number) {
    return this.repository.destroy({
      where: {
        id,
      },
    });
  }
}
