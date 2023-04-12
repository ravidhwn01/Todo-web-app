import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository, Sequelize } from 'sequelize-typescript';
import { TaskModel } from 'src/schemas/task-schema';

@Injectable()
export class TaskService {
  private repository: Repository<TaskModel>;

  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(TaskModel);
  }

  createTask(createTaskDto: CreateTaskDto) {
    return this.repository.create(createTaskDto);
  }

  findAllTask() {
    return this.repository.findAll({
      order: [['createAt', 'desc']],
    });
  }

  findOneTask(id: number) {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    return this.repository.update(updateTaskDto, {
      where: {
        id,
      },
    });
  }

  deleteTask(id: number) {
    return this.repository.destroy({
      where: {
        id,
      },
    });
  }
}
