import { Injectable } from '@nestjs/common';
import { CreateUsertodoDto } from './dto/create-usertodo.dto';
import { UpdateUsertodoDto } from './dto/update-usertodo.dto';
import { UserTodoModel } from 'src/schemas/user-todo-schema';
import { Repository, Sequelize } from 'sequelize-typescript';

@Injectable()
export class UsertodoService {
  private repository: Repository<UserTodoModel>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(UserTodoModel);
  }
  createUsertodoList(createUsertodoDto: CreateUsertodoDto) {
    return this.repository.create(createUsertodoDto);
  }

  findAllUsertodoList() {
    return this.repository.findAll();
  }

  findOneUsertodoList(id: number) {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  updateUsertodoList(id: number, updateUsertodoDto: UpdateUsertodoDto) {
    return this.repository.update(updateUsertodoDto, {
      where: {
        id,
      },
    });
  }

  deleteUsertodoList(id: number) {
    return this.repository.destroy({
      where: {
        id,
      },
    });
  }
}
