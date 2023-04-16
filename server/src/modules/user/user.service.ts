import { Get, Injectable, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, Sequelize } from 'sequelize-typescript';
import { UserModel } from 'src/schemas/user-schema';
import { encryptPassword } from 'src/utils/bcrypt';
import { TodoListModel } from 'src/schemas/todolist-schema';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class UserService {
  private repository: Repository<UserModel>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(UserModel);
  }
  createUser(createUserDto: CreateUserDto) {
    const password = encryptPassword(createUserDto.password);

    return this.repository.create({ ...createUserDto, password });
  }

  findUserByEmail(email: string) {
    return this.repository.findOne({
      where: {
        email: email,
      },
    });
  }

  getUserWithTodo(id: number) {
    return this.repository.findOne({
      include: [TodoListModel],
      order: [['updatedAt', 'desc']],
      where: {
        id,
      },
    });
  }
  async getAllUserWithTodo() {
    const userWithTodo = await this.repository.findAll({
      include: [TodoListModel],
    });
    console.log(userWithTodo);
    return userWithTodo;
  }

  findAllUserWithName() {
    return this.repository.findAll({
      attributes: ['username', 'id'],
    });
  }

  findOneUser(id: number) {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    const updatedPassword = encryptPassword(updateUserDto.password);
    return this.repository.update(
      { ...updateUserDto, password: updatedPassword },
      {
        where: {
          id,
        },
      },
    );
  }

  deleteUser(id: number) {
    return this.repository.destroy({
      where: {
        id,
      },
    });
  }
}
